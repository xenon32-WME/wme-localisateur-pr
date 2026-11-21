'use strict';
const assert = require('node:assert/strict');
const Core = require('../WME-Localisateur-de-PR-France.user.js');
const { harness, ignFeature, ignCollection } = require('./harness.cjs');
const deg = value => value / 111195;
const coord = (x,y) => [deg(x),deg(y)];
const points = [], segments = [];
for (const [side,dy,base] of [['D',0,10],['G',-30,20]]) {
  for(let number=119;number<=123;number++) points.push({
    id:side+number, axis:'A40',departmentCode:'01',networkType:'A',pointType:'PR',number,side,
    branchId:`NAT-A40-${side}-${side==='D'?7:9}`,routeId:'r',roadManager:'m',
    abscissa:16152+(number-119)*1000,
    coordinate:coord((number-119)*1000,dy+((number===119||number===123)?2:-200)),
  });
  const coordinates=[coord(0,dy),coord(1000,dy+100),coord(2000,dy+200),coord(3000,dy+80),coord(4000,dy)];
  for(let i=0;i<4;i++) segments.push({id:base+i,fromNodeId:base+i,toNodeId:base+i+1,
    geometry:{coordinates:coordinates.slice(i,i+2)}});
}
// Reverse one carriageway's stored orientation: PR order is not driving direction.
for(const segment of segments.filter(s=>s.id>=20)) {
  segment.geometry.coordinates.reverse();[segment.fromNodeId,segment.toNodeId]=[segment.toNodeId,segment.fromNodeId];
}
const rawBefore=JSON.stringify(points), geometryBefore=JSON.stringify(segments);
const calibration=Core.buildA40Calibration(points,segments);
assert(calibration);
for(const side of ['D','G']) {
  for(const number of [120,121,122]) {
    const point=points.find(p=>p.side===side&&p.number===number);
    const result=Core.resolveA40Calibration(calibration,point);
    assert(result); assert(result.estimated);
    assert.equal(result.calibration.ratio,(number-119)/4);
    assert(result.point[1]>point.coordinate[1]);
    assert(Core.haversine(result.point,point.coordinate)>200);
    assert(calibration[side].used.has(result.segmentId));
    assert(Core.projectPointToPolyline(result.point,calibration[side].path.coordinates).distance<0.01);
    assert.deepEqual(result.sourceCoordinate,point.coordinate);
  }
}
const mid=points.find(p=>p.side==='D'&&p.number===121);
assert.equal(Core.resolveA40Calibration(calibration,mid,500).calibration.ratio,0.625);
const first=points.find(p=>p.side==='D'&&p.number===119);
assert.equal(Core.resolveA40Calibration(calibration,first,500).calibration.ratio,0.125);
assert.equal(Core.resolveA40Calibration(calibration,first),null);
assert.equal(Core.resolveA40Calibration(calibration,mid,2000),null,'no extrapolation');
assert.equal(Core.resolveA40Calibration(calibration,{...mid,departmentCode:'74'}),null);
assert.equal(Core.resolveA40Calibration(calibration,{...mid,branchId:'other'}),null);
assert.equal(Core.resolveA40Calibration(calibration,{...mid,abscissa:null}),null);
assert.equal(Core.buildA40Calibration(points.filter(p=>p.id!=='D119'),segments),null,'missing anchor');
assert.equal(Core.buildA40Calibration([...points,first],segments),null,'ambiguous official anchor');
assert.equal(Core.buildA40Calibration(points,segments.filter(s=>s.id!==11)),null,'missing middle segment');
assert.equal(Core.buildA40Calibration(points,segments.filter(s=>s.id<20)),null,'do not put both sides on same path');
const gap=structuredClone(segments);gap.find(s=>s.id===11).geometry.coordinates[0]=[deg(1000),deg(110)];
assert.equal(Core.buildA40Calibration(points,gap),null,'node ID does not authorize a geometric bridge');
const ambiguous=structuredClone(segments);
for(const seg of segments.filter(s=>s.id<20)) ambiguous.push({...seg,id:seg.id+100,fromNodeId:seg.fromNodeId+100,toNodeId:seg.toNodeId+100,
 geometry:{coordinates:seg.geometry.coordinates.map(c=>[c[0],c[1]+deg(4)])}});
assert.equal(Core.buildA40Calibration(points,ambiguous),null,'equidistant carriageways');
assert.equal(JSON.stringify(points),rawBefore);assert.equal(JSON.stringify(segments),geometryBefore);
(async()=>{
  const calls=[];
  const t=harness(o=>{
    calls.push(o);
    queueMicrotask(()=>o.onload({status:200,responseText:JSON.stringify(ignCollection(points.map(p=>ignFeature(p.id,{
      route:p.axis,numero:String(p.number),abscisse:p.abscissa,cote:p.side,
      identifiant_de_section:p.branchId,lien_vers_route_nommee:p.routeId,gestionnaire:p.roadManager,
    },p.coordinate))))}));
    return {abort(){}};
  });
  const found=await t.searchPrPoints({axis:'A40',lookupNumbers:[121],requestedNumbers:[121]});
  assert.equal(found.points.length,10,'exact PR lookup also retrieves 119 and 123');
  assert(calls.every(o=>o.url.startsWith('https://data.geopf.fr/wfs/ows?')));
  const target=t.selectTargetSource(Core.parsePr('121+500'),found.points,'A40',{preferredSide:'D'});
  assert(target.a40Recalibration);
  assert.deepEqual(Array.from(new Set(target.preferred.chainagePoints.map(p=>p.number))).sort(),[119,123]);
  assert.throws(()=>t.resolveTarget(target,[]),/119.*123/,'no direct/raw fallback during a search');
  const result=t.resolveTarget(target,segments);
  assert.equal(result.calibration.ratio,0.625);
  const exact=t.selectTargetSource(Core.parsePr('121+000'),found.points,'A40',{preferredSide:'D'});
  const exactResult=t.resolveTarget(exact,segments);
  const layer=t.a40LayerPoints(found.points).find(p=>p.id==='D121');
  assert.deepEqual(layer.coordinate,exactResult.point,'search and layer use the same calculation');
  assert.notEqual(t.prIndexRenderedPointsKey([mid]),t.prIndexRenderedPointsKey([layer]),'same ID new coordinates must repaint');
  assert(t.a40LayerPoints([]).some(p=>p.id==='D121'),'raw point outside bbox remains available for corrected rendering');
  assert(t.updateA40Calibration(found.points,[]),'retain complete corridor while panning to partial views');
  t.updateA40Calibration(found.points,gap);
  assert(t.a40LayerPoints(found.points).find(p=>p.id==='D121').calibrationPending,'changed geometry invalidates old corridor');
  t.updateA40Calibration(found.points,segments);
  const features=await t.buildPrIndexFeatures(t.a40LayerPoints(found.points),17);
  const feature=features.find(f=>f.properties.sourceId==='D121'&&f.properties.kind==='pr-index');
  assert(feature.properties.calibration);assert(feature.properties.label.includes('119 → 123'));
  assert.deepEqual(Array.from(feature.properties.sourceCoordinate),mid.coordinate);
  for(const lang of ['fr','en']) {t.setLanguage(lang);assert(t.a40Message('applied').includes('119 → 123'));}
  console.log('A40 119–123: both carriageways, curved interpolation, partial/ambiguous graphs, original coordinates, IGN request, search/layer consistency validated.');
})().catch(e=>{console.error(e);process.exitCode=1});
