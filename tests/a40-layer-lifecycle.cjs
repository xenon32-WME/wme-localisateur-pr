'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const {source,ignFeature,ignCollection}=require('./harness.cjs');
const Core=require('../WME-Localisateur-de-PR-France.user.js');
const settle=async()=>{for(let i=0;i<8;i++)await new Promise(r=>setImmediate(r))};
function fixture(){
 const timers=new Map(),draws=[],calls=[];let timerId=0,resolveGeometry;
 const geometry=new Promise(resolve=>{resolveGeometry=resolve});
 const x=m=>5.616-m/(111195*Math.cos(46.13*Math.PI/180)),y=m=>46.13+m/111195;
 const official=[],segments=[];
 for(const [side,dy,id] of [['D',0,10],['G',-30,20]]){
  for(let n=119;n<=123;n++)official.push(ignFeature(side+n,{route:'A40',numero:String(n),abscisse:16152+(n-119)*1000,cote:side,
   identifiant_de_section:`NAT-A40-${side}-${side==='D'?7:9}`,lien_vers_route_nommee:'r',gestionnaire:'m'},
   [x((n-119)*1000),y(dy+([119,123].includes(n)?2:-200))]));
  segments.push({id,primaryStreetId:7,fromNodeId:id,toNodeId:id+1,
   geometry:{coordinates:[[x(0),y(dy)],[x(2000),y(dy+200)],[x(4000),y(dy)]]}});
 }
 const initial=Core.parsePrRecord({axis:'A40',department_code:'01',network_type:'A',point_type:'PR',pr_number:121,side:'D',branch_id:'NAT-A40-D-7',
  source_id:'D121',route_id:'r',road_manager:'m',abscissa:18152,longitude:x(2000),latitude:y(-200)});
 const root={document:{},setTimeout:fn=>{timers.set(++timerId,fn);return timerId},clearTimeout:id=>timers.delete(id)};
 const hooks=`root.__TEST__={drawPrIndexPoints,configure:(api,point)=>{
  sdk=api;prIndexLayerEnabled=true;prIndexRefreshGeneration=1;prIndexCache={points:[point]};
  appearanceSettings=Core.normalizeAppearanceSettings({prLabelMode:'never'});
 }, disable:()=>{prIndexLayerEnabled=false;prIndexDrawRevision++},
 setEmptyCache:()=>{prIndexCache={points:[]}},
 state:()=>({ready:!!a40CalibrationReady,work:!!a40CalibrationWork})};`;
 vm.runInNewContext(source.replace('    initialize();',hooks),{unsafeWindow:root,module:{exports:{}},console,URL,URLSearchParams,Promise,Date,JSON,AbortController,
 GM_xmlhttpRequest:o=>{calls.push(o);queueMicrotask(()=>o.onload({status:200,responseText:JSON.stringify(ignCollection(official))}));return {abort(){}}}});
 root.__TEST__.configure({Map:{getZoomLevel:async()=>17,getMapExtent:async()=>[5.55,46.12,5.63,46.15],
  removeAllFeaturesFromLayer:async()=>{},addFeaturesToLayer:async({features})=>draws.push(features),setLayerVisibility:async()=>{}},
  DataModel:{Junctions:{getAll:async()=>[]},Segments:{getAll:async()=>{await geometry;return segments}},Streets:{getAll:async()=>{await geometry;return [{id:7,name:'A40'}]}}}},initial);
 return {t:root.__TEST__,initial,draws,calls,resolveGeometry,
  flush:async()=>{const work=[...timers.values()];timers.clear();work.forEach(fn=>fn());await settle()}};
}
(async()=>{
 const f=fixture();await f.t.drawPrIndexPoints([f.initial]);
 assert.equal(f.calls.length,0,'first draw does not wait for the anchor request');
 assert.equal(f.draws.length,1);assert(f.draws[0][0].properties.calibrationPending);
 await f.flush();assert.equal(f.calls.length,1);assert.equal(f.draws.length,1,'geometry may remain pending after first paint');
 f.t.setEmptyCache();f.resolveGeometry();await settle();
 assert.equal(f.draws.length,2,'repaint corrected positions even without labels or raw points in the bbox');
 const corrected=f.draws[1].find(x=>x.properties.sourceId==='D121');
 assert(corrected.properties.calibration);assert.notDeepEqual(corrected.geometry.coordinates,f.initial.coordinate);
 await f.t.drawPrIndexPoints([]);await f.flush();assert.equal(f.calls.length,1,'no repeated IGN request during layout redraw');
 const disabled=fixture();await disabled.t.drawPrIndexPoints([disabled.initial]);await disabled.flush();
 disabled.t.disable();disabled.resolveGeometry();await settle();assert.equal(disabled.draws.length,1,'completion cannot re-enable disabled layer');
 console.log('A40 layer lifecycle: immediate first paint, deferred official request, repaint with labels disabled/empty bbox, session reuse, disable cancellation validated.');
})().catch(e=>{console.error(e);process.exitCode=1});
