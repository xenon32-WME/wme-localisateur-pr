'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const {source,filename}=require('./harness.cjs');
const endpoint='https://ygdyaciibfyqldlejyuu.supabase.co/rest/v1/rpc/list_wme_pr_intercommunal_managers';
const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve();};
function fixture(impl){
 let now=0,next=0;const timers=new Map(),calls=[],logs=[];
 class Clock extends Date {static now(){return now;}}
 const root={document:{},setTimeout:(fn,delay)=>{const id=++next;timers.set(id,{fn,at:now+delay});return id;},clearTimeout:id=>timers.delete(id)};
 vm.runInNewContext(source.replace('    initialize();','root.__TEST__={requestPrData,requestSupabaseJson,requestText};'),{
  unsafeWindow:root,module:{exports:{}},URL,URLSearchParams,Promise,Date:Clock,JSON,AbortController,
  console:{...console,debug:message=>logs.push(message)},GM_getValue:()=>'',GM_setValue:()=>{},
  fetch:()=>assert.fail('No page fetch: Supabase is excluded by the WME CSP'),
  GM_xmlhttpRequest:impl&&((options)=>{calls.push(options);return impl(options);}),
 },{filename,timeout:5000});
 return {api:root.__TEST__,calls,logs,timers,
  async advance(ms){now+=ms;for(const [id,timer]of [...timers])if(timer.at<=now&&timers.delete(id))timer.fn();await flush();}};
}
async function run(){
 const normal=fixture(o=>{o.onloadstart?.();o.onreadystatechange?.({readyState:2,status:200});o.onload({status:200,responseText:'[]'});});
 const response=await normal.api.requestPrData('managers');
 assert.equal(response.data.length,0);assert.equal(normal.calls.length,1);assert.equal(normal.timers.size,0);
 const sent=normal.calls[0];
 assert.equal(sent.url,endpoint);assert.equal(sent.method,'POST');assert.equal(sent.data,'{}');
 assert.equal(sent.anonymous,true);assert.equal(sent.redirect,'error');assert.equal(sent.fetch,undefined);assert.equal(sent.responseType,undefined);
 assert(!Object.keys(sent.headers).some(k=>/^(cookie|referer|origin)$/i.test(k)));
 assert.equal(sent.headers['Content-Type'],'application/json');assert(sent.headers.apikey.startsWith('sb_publishable_'));
 assert.match(normal.logs[0],/"transport":"Tampermonkey sans redirection"/);
 assert.match(normal.logs[0],/"headersMs":0/);

 // The external watchdog covers both a stalled GM dispatch and a stalled body.
 for(const headers of [false,true]){
  let aborted=0;const stalled=fixture(o=>{if(headers)o.onreadystatechange({readyState:2,status:200});return {abort(){aborted++;}};});
  const pending=stalled.api.requestPrData('managers').catch(e=>e);await flush();
  await stalled.advance(19999);assert.equal(aborted,0);
  await stalled.advance(1);const error=await pending;
  assert.equal(error.isTimeout,true);assert.equal(aborted,1);assert.equal(stalled.timers.size,0);
  assert.equal(error.transport,'Tampermonkey sans redirection');assert.equal(error.totalElapsedMs,20000);
  assert.equal(error.headersMs,headers?0:null);assert.equal(stalled.calls.length,1);
  stalled.calls[0].onload({status:200,responseText:'[]'});assert.equal(stalled.logs.length,0);
 }
 // Explicit cancellation must settle immediately, without another transport.
 let aborted=0;const cancel=fixture(()=>({abort(){aborted++;}}));const controller=new AbortController();
 const pending=cancel.api.requestSupabaseJson(endpoint,{signal:controller.signal}).catch(e=>e);
 controller.abort();assert.equal((await pending).isAbortError,true);assert.equal(aborted,1);assert.equal(cancel.timers.size,0);
 await assert.rejects(()=>cancel.api.requestSupabaseJson(endpoint,{signal:controller.signal}),e=>e.isAbortError);
 assert.equal(cancel.calls.length,1);

 for(const status of [401,403,429,503]){
  const failed=fixture(o=>o.onload({status,responseText:'{"message":"test"}'}));
  await assert.rejects(()=>failed.api.requestPrData('managers'),e=>e.httpStatus===status&&e.message.includes('test'));
  assert.equal(failed.calls.length,1);assert.equal(failed.timers.size,0);
 }
 const invalid=fixture(o=>o.onload({status:200,responseText:'<html>'}));
 await assert.rejects(()=>invalid.api.requestPrData('managers'),e=>e.isInvalidResponse);
 const network=fixture(o=>o.onerror());await assert.rejects(()=>network.api.requestPrData('managers'),e=>e.isNetworkError);
 const absent=fixture();await assert.rejects(()=>absent.api.requestPrData('managers'),/accordé l’accès/);

 for(const url of [endpoint.replace('supabase.co','example.com'),endpoint+'?x=1',endpoint+'#fragment',
  endpoint.replace('https://','https://user:pass@'),endpoint.replace('/rpc/','/other/')]){
  await assert.rejects(()=>normal.api.requestSupabaseJson(url,{headers:{apikey:'test'}}),/Adresse Supabase invalide/);
 }
 assert.equal(normal.calls.length,1);
 // Metadata remains anonymous and does not use the Supabase-specific redirect policy.
 const metadata=fixture(o=>o.onload({status:200,responseText:'metadata'}));
 assert.equal(await metadata.api.requestText('https://update.greasyfork.org/scripts/590425/test.meta.js'),'metadata');
 assert.equal(metadata.calls[0].anonymous,true);assert.equal(metadata.calls[0].redirect,undefined);
 console.log('Supabase managed transport: no redirects, anonymous, cancellation, timings, errors PASS');
}
run().catch(e=>{console.error(e);process.exitCode=1;});
