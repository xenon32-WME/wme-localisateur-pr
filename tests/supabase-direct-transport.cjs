'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const {source,filename}=require('./harness.cjs');
const endpoint='https://ygdyaciibfyqldlejyuu.supabase.co/rest/v1/rpc/list_wme_pr_intercommunal_managers';
const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve();};
const deferred=()=>{let resolve,reject;const promise=new Promise((a,b)=>{resolve=a;reject=b});return {promise,resolve,reject};};
function fixture(fetchImpl,gmImpl){
 let now=0,next=0;const timers=new Map(),direct=[],fallback=[],warnings=[];
 class Clock extends Date {static now(){return now;}}
 const root={document:{},setTimeout:(fn,delay)=>{const id=++next;timers.set(id,{fn,at:now+delay});return id;},clearTimeout:id=>timers.delete(id)};
 const context={unsafeWindow:root,module:{exports:{}},console:{...console,warn:(...args)=>warnings.push(args)},
  URL,URLSearchParams,Promise,Date:Clock,JSON,AbortController,GM_getValue:()=>'',GM_setValue:()=>{},
  fetch:fetchImpl&&((url,options)=>{direct.push({url,...options});return fetchImpl(url,options);}),
  GM_xmlhttpRequest:gmImpl&&((options)=>{fallback.push(options);return gmImpl(options);})};
 vm.runInNewContext(source.replace('    initialize();','root.__TEST__={requestPrData,requestSupabaseJson,prRequestFailureReason};'),context,{filename,timeout:5000});
 return {api:root.__TEST__,direct,fallback,warnings,timers,
  async advance(ms){now+=ms;for(const [id,timer]of [...timers])if(timer.at<=now&&timers.delete(id))timer.fn();await flush();}};
}
const success=()=>Promise.resolve({status:200,text:async()=> '[]'});
const gmSuccess=o=>{o.onload({status:200,responseText:'[]'});return {abort(){}};};
async function run(){
 // Normal response uses the direct connection and no privileged relay.
 const normal=fixture(success,()=>assert.fail('Unexpected GM request'));
 const response=await normal.api.requestPrData('managers');
 assert.equal(response.data.length,0);assert.equal(normal.direct.length,1);assert.equal(normal.timers.size,0);
 const sent=normal.direct[0];
 assert.equal(sent.url,endpoint);assert.equal(sent.method,'POST');assert.equal(sent.body,'{}');
 assert.equal(sent.credentials,'omit');assert.equal(sent.referrerPolicy,'no-referrer');assert.equal(sent.redirect,'error');
 assert.equal(sent.mode,'cors');assert.equal(sent.headers['Content-Type'],'application/json');
 assert(sent.headers.apikey.startsWith('sb_publishable_'));assert(!sent.signal.aborted);

 // A native CORS/network rejection falls back, with the exact same RPC payload.
 const blocked=fixture(()=>Promise.reject(new TypeError('Failed to fetch')),gmSuccess);
 await blocked.api.requestPrData('lookup',{axis:'D1',department:'01',numbers:'38,39'},'FR');
 assert.equal(blocked.fallback.length,1);assert(blocked.direct[0].signal.aborted);
 const gm=blocked.fallback[0];assert.equal(gm.anonymous,true);assert.equal(gm.timeout,20000);
 assert.equal(gm.url,blocked.direct[0].url);assert.equal(gm.data,blocked.direct[0].body);
 assert.deepEqual(gm.headers,blocked.direct[0].headers);assert.equal(blocked.timers.size,0);
 assert.equal(blocked.warnings[0][1].reason,'erreur réseau');

 // Headers alone are not completion: a stalled response body must also expire.
 const body=deferred();const stalled=fixture(()=>Promise.resolve({status:200,text:()=>body.promise}),gmSuccess);
 const pending=stalled.api.requestPrData('managers');await flush();
 await stalled.advance(7999);assert.equal(stalled.fallback.length,0);
 await stalled.advance(1);await pending;
 assert(stalled.direct[0].signal.aborted);assert.equal(stalled.fallback.length,1);
 assert.equal(stalled.fallback[0].timeout,12000);assert.equal(stalled.timers.size,0);
 assert.equal(stalled.warnings[0][1].reason,'délai dépassé');
 body.resolve('[{"late":true}]');await flush();assert.equal(stalled.fallback.length,1);

 // Both paths hanging cannot double the 20-second request budget.
 let aborted=0;const hanging=fixture(()=>new Promise(()=>{}),()=>({abort(){aborted++;}}));
 const failure=hanging.api.requestPrData('managers').catch(e=>e);await flush();
 await hanging.advance(8000);assert.equal(hanging.fallback[0].timeout,12000);
 await hanging.advance(11999);assert.equal(aborted,0);
 await hanging.advance(1);const timeout=await failure;
 assert.equal(timeout.isTimeout,true);assert.equal(aborted,1);assert.equal(hanging.timers.size,0);
 assert.equal(timeout.transport,'connexion directe puis Tampermonkey');
 assert.equal(timeout.directFailure,'délai dépassé');assert.equal(hanging.api.prRequestFailureReason(timeout),'délai dépassé');

 // HTTP permission/server errors and invalid JSON must not be replayed via GM.
 for(const status of [401,403,429,503]){
  const failed=fixture(()=>Promise.resolve({status,text:async()=>'{"message":"test"}'}),()=>assert.fail('HTTP fallback'));
  await assert.rejects(()=>failed.api.requestPrData('managers'),e=>e.httpStatus===status&&e.transport==='connexion directe'&&e.message.includes('test'));
  assert.equal(failed.api.prRequestFailureReason({httpStatus:status}),`HTTP ${status}`);assert.equal(failed.timers.size,0);
 }
 const invalid=fixture(()=>Promise.resolve({status:200,text:async()=>'<html>'}),()=>assert.fail('Invalid JSON fallback'));
 await assert.rejects(()=>invalid.api.requestPrData('managers'),e=>e.isInvalidResponse&&e.transport==='connexion directe');
 assert.equal(invalid.timers.size,0);

 // Missing native support uses the original anonymous transport.
 const legacy=fixture(undefined,gmSuccess);await legacy.api.requestPrData('managers');
 assert.equal(legacy.fallback.length,1);assert.equal(legacy.fallback[0].anonymous,true);assert.equal(legacy.timers.size,0);
 const noRelay=fixture(()=>Promise.reject(new TypeError('Blocked')),undefined);
 await assert.rejects(()=>noRelay.api.requestPrData('managers'),e=>e.isNetworkError&&e.transport==='connexion directe');
 assert.equal(noRelay.timers.size,0);

 // A blocked event loop can exhaust the whole budget before fallback begins.
 const overdue=fixture(()=>new Promise(()=>{}),()=>assert.fail('Budget exhausted'));
 const late=overdue.api.requestPrData('managers').catch(e=>e);await overdue.advance(21000);
 assert.equal((await late).isTimeout,true);assert.equal(overdue.fallback.length,0);assert.equal(overdue.timers.size,0);

 // A caller cannot send the public key to another origin, path or URL query.
 for(const url of [endpoint.replace('supabase.co','example.com'),endpoint+'?x=1',endpoint+'#fragment',
  endpoint.replace('https://','https://user:pass@'),endpoint.replace('/rpc/','/other/')]){
  await assert.rejects(()=>normal.api.requestSupabaseJson(url,{headers:{apikey:'test'}}),/Adresse Supabase invalide/);
 }
 assert.equal(normal.direct.length,1);
 console.log('Direct Supabase: anonymous POST, CORS fallback, body timeout, shared deadline and failures PASS');
}
run().catch(e=>{console.error(e);process.exitCode=1});
