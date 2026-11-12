const assert = require('node:assert/strict');
const Core = require('../WME-Localisateur-de-PR-France.user.js');
const deg = m => m / 111195;
const seg = (id, from, to, latM = 0) => Core.describeSegment({
  id, fromNodeId: id*10, toNodeId: id*10+1,
  geometry: {coordinates:[[deg(from),deg(latM)],[deg(to),deg(latM)]]}
});
const source = (num, side='D', branchId='NAT-A40-D-7') => ({
  number:num, abscissa:num*1000+152, axis:'A40',side,branchId,
  coordinate:[deg((num-122)*950),0]
});
const makeResult = (segmentId,x,num,y=10,side='D',branch='NAT-A40-D-7') => ({
  point:[deg(x),deg(y)], segmentId,sourcePoint:source(num,side,branch)
});
// Simule deux extrémités situées près d'un même segment autoroutier long,
// mais initialement ancrées par le moteur sur deux segments WME distincts.
const main = seg(298387109,0,2900,0);
const decoy = seg(291438859,2130,2450,10);
const first = makeResult(298387109,400,122);
const second = makeResult(291438859,2300,124);
assert.equal(Core.pathBetweenTargets({component:[main,decoy],start:first,end:second}),null);
const repaired = Core.recoverSingleSegmentZone({component:[main,decoy],start:first,end:second,expectedDistance:1900});
assert(repaired,'Le repli doit retrouver le segment commun');
assert.deepEqual(repaired.segmentIds,[298387109]);
assert.equal(repaired.geometryRecovery.kind,'single-segment');
assert.equal(repaired.geometryRecovery.sourceSide,'D');
assert(Math.abs(repaired.distance-1900)<2);
assert.deepEqual(Core.automaticSelectionSegmentIds([first,second],repaired),[298387109]);
assert.equal(Core.recoverSingleSegmentZone({component:[main,decoy],start:first,end:second,expectedDistance:2600}),null,
 'Rejeter la mauvaise distance de chaînage');
assert.equal(Core.recoverSingleSegmentZone({component:[main,decoy],start:first,end:{...second,sourcePoint:source(124,'G')},expectedDistance:1900}),null,
 'Ne jamais mélanger les chaussées IGN');
assert.equal(Core.recoverSingleSegmentZone({component:[main,decoy],start:first,end:{...second,sourcePoint:source(124,'D','AUTRE-BRANCHE')},expectedDistance:1900}),null,
 'Ne jamais mélanger les branches IGN');
assert.equal(Core.recoverSingleSegmentZone({component:[main,decoy],start:first,end:makeResult(291438859,2300,124,160),expectedDistance:1900}),null,
 'Le rattrapage ne doit pas accepter une projection lointaine');
assert.equal(Core.recoverSingleSegmentZone({component:[main,decoy],start:first,end:second,expectedDistance:1900,maxLateralShiftMeters:5}),null,
 'Plafond de distance configurable conservé');
// Deux chaussées WME quasi équivalentes : l'algorithme doit refuser
// un rattachement arbitraire même si la distance projetée semble correcte.
const parallel = seg(291438859,0,2900,20);
const ambiguous = Core.recoverSingleSegmentZone({component:[main,parallel],start:first,end:second,expectedDistance:1900});
assert.equal(ambiguous,null,'Une double chaussée équivalente est ambiguë');
// Route déjà continue : le parcours normal fonctionne sans fallback.
const normal = Core.pathBetweenTargets({component:[main],start:{...first,point:[deg(400),0]},end:{...second,point:[deg(2300),0],segmentId:298387109}});
assert(normal && Math.abs(normal.distance-1900)<2);
// Dans tous les cas, un second segment parallèle non contigu ne doit jamais
// être "joint" par des arêtes virtuelles.
assert.equal(Core.pathBetweenTargets({component:[main,decoy],start:first,end:second}),null);
console.log('A40/Chamoise temp4 : 10 contrôles, rattrapage mono-segment et refus des ambiguïtés validés.');

