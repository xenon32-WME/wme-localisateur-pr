'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const {source,filename}=require('./harness.cjs');
const settle=async()=>{for(let i=0;i<50;i++)await Promise.resolve();};
function fixture(useRelay=false){
 const calls=[],relay=[],timers=new Map(),draws=[],status={};let id=0,extent=[5,46,5.1,46.1],zoom=16;
 const root={document:{},setTimeout:(fn,ms)=>{timers.set(++id,{fn,ms});return id;},clearTimeout:i=>timers.delete(i)};
 const hooks=`root.__TEST__={refreshPrIndexLayer,setPrIndexLayerEnabled,resetPrIndexScope,setCountry,
   start:()=>refreshPrIndexLayer(prIndexRefreshGeneration),cache:()=>prIndexCache,
   configure:(api,label,draw)=>{sdk=api;ui={prIndexStatus:label};drawPrIndexPoints=draw;prIndexLayerEnabled=true;}};`;
 vm.runInNewContext(source.replace('    initialize();',hooks),{unsafeWindow:root,module:{exports:{}},
  console:{...console,warn(){},error(){}},URL,URLSearchParams,Promise,Date,JSON,AbortController,
  GM_setValue(){},GM_getValue(){return '';},
  fetch:(url,options)=>new Promise((resolve,reject)=>{
   const call={options,aborted:false,resolve:data=>resolve({status:200,text:async()=>JSON.stringify(data)})};calls.push(call);
   options.signal.addEventListener('abort',()=>{call.aborted=true;reject(Object.assign(new Error('cancelled'),{name:'AbortError'}));},{once:true});
   if(useRelay)reject(new TypeError('Failed to fetch'));
  }),
  GM_xmlhttpRequest:options=>{const call={options,aborted:false};relay.push(call);return {abort(){call.aborted=true;options.onabort?.();}};},
 },{filename,timeout:5000});
 const api=root.__TEST__;
 api.configure({Map:{getZoomLevel:async()=>zoom,getMapExtent:async()=>extent,setLayerVisibility:async()=>{},removeAllFeaturesFromLayer:async()=>{}}},status,async(points)=>{draws.push(points);return true;});
 return {api,calls,relay,timers,draws,status,move:(lon)=>{extent=[lon,46,lon+.1,46.1];return api.start();},zoomOut:()=>{zoom=13;return api.start();}};
}
const rawPoint={department_code:'01',network_type:'D',axis:'D1',pr_number:1,point_type:'PR',
 longitude:14.05,latitude:46.05,abscissa:1000,source_id:'latest',is_truncated:false};
(async()=>{
 // A burst of pans while every response is slow keeps only the current request.
 const f=fixture(),pending=[];
 for(let i=0;i<10;i++){pending.push(f.move(5+i));await settle();}
 assert.equal(f.calls.length,10);
 assert.equal(f.calls.filter(c=>!c.aborted).length,1,'obsolete HTTP requests must be aborted, not merely ignored');
 assert.equal(f.relay.length,0,'navigation cancellation must not start the fallback');
 f.calls.at(-1).resolve([rawPoint]);await Promise.all(pending);
 assert.equal(f.draws.length,1);assert.equal(f.api.cache().points[0].axis,'D1');assert.equal(f.timers.size,0);

 // Same-view events still share a request; one new view cancels the old relay.
 const r=fixture(true);const first=r.move(5);await settle();const duplicate=r.api.start();await settle();
 assert.equal(r.relay.length,1);assert.equal(r.relay[0].aborted,false);
 const second=r.move(6);await settle();assert.equal(r.relay.length,2);assert.equal(r.relay[0].aborted,true);
 r.relay[1].options.onload({status:200,responseText:'[]'});await Promise.all([first,duplicate,second]);
 assert.equal(r.draws.length,1);assert.equal(r.timers.size,0);

 // Disabling, zooming out, or changing country/filter scope releases the network.
 for(const action of ['disable','zoom','scope','country']){
  const x=fixture();const job=x.move(5);await settle();
  if(action==='disable')await x.api.setPrIndexLayerEnabled(false);
  else if(action==='zoom')await x.zoomOut();
  else if(action==='scope')x.api.resetPrIndexScope();
  else {await x.api.setCountry('CO');await x.api.setPrIndexLayerEnabled(false);}
  await job;assert.equal(x.calls[0].aborted,true,action);assert.equal(x.draws.length,0,action);
  assert.equal(x.relay.length,0);assert.equal(x.timers.size,0);
 }
 console.log('PR navigation: one active request, no stale fallback, relay abort, disable/zoom/scope PASS');
})().catch(e=>{console.error(e);process.exitCode=1;});
