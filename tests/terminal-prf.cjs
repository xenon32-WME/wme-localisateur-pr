'use strict';
const assert=require('node:assert/strict');
const Core=require('../WME-Localisateur-de-PR-France.user.js');
const lon=(m)=>m/(Math.PI*6371008.8/180);
function ref(type,m,abscissa,opts={}){
  return {number:38,rawPointNumber:type==='PR'?'38':'38',pointType:type,abscissa,
    pointOrder:type==='PR'?38:999,coordinate:[lon(m),opts.latitude||0],
    axis:'D1',departmentCode:'01',side:'U',branchId:'01-D1-U-TEST',networkType:'D',
    id:'D1-'+type+'-'+abscissa,routeId:'ROUTNOMM-TEST'};
}
function scenario({length=376.5,type='PRF',endLatitude=0,startLatitude=0,offset=392,abscissa=38392}={}){
  const references=[ref('PR',0,38000,{latitude:startLatitude}),ref(type,length,abscissa,{latitude:endLatitude})];
  const candidates=Core.buildTargetCandidates(references,'D1',Core.parsePr('38+'+offset));
  const segments=[{id:101,fromNodeId:1,toNodeId:2,geometry:{type:'LineString',coordinates:[[0,0],[lon(length),0]]}}];
  return Core.resolveTargetCandidates({rawSegments:segments,candidates,basePr:38,offset});
}
const repaired=scenario();
assert.equal(repaired.point.length,2);
assert.equal(repaired.segmentId,101);
assert.equal(repaired.terminalPrfMarkerSnapApplied,true);
assert.equal(repaired.terminalGeometryAdjustment,true);
assert(Math.abs(repaired.terminalGeometryShortfall-15.5)<0.05);
assert(Math.abs(repaired.point[0]-lon(376.5))<1e-9);
assert.equal(repaired.estimated,false);
const near=scenario({length:377.2});
assert.equal(near.terminalPrfMarkerSnapApplied,false);
assert.equal(near.terminalGeometryAdjustment,true);
const bounded=scenario({length:367});
assert.equal(bounded.terminalPrfMarkerSnapApplied,true);
assert(Math.abs(bounded.terminalGeometryShortfall-25)<0.001);
for(const [desc,params] of [
  ['gap > 30m',{length:361}],
  ['large relative gap',{length:360}],
  ['wrong distant PRF',{endLatitude:0.0004}],
  ['wrong distant PR38',{startLatitude:0.0004}],
  ['FS not a PRF',{type:'FS'}],
  ['requested offset before terminal',{offset:390}],
  ['terminal chainage does not match',{abscissa:38400}],
]){
  assert.throws(()=>scenario(params),{message:/Aucune branche continue|insuffisant|référence/},desc);
}
const exact=scenario({length:392});
assert.equal(exact.terminalGeometryAdjustment,false);
console.log('D1 exact PRF regression OK — 376.5/377.2/367m, 7 safe rejections, exact 392m.');

