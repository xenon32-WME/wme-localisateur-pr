const fs = require('fs');
const vm = require('vm');
const assert = require('node:assert/strict');
const path = require('path');
const file = path.join(__dirname, '..', 'WME-Localisateur-de-PR-France.user.js');
let source = fs.readFileSync(file, 'utf8');
if (!source.includes('    initialize();')) throw new Error('init anchor missing');
source = source.replace('    initialize();', `    root.__TEST__ = {
        sdkSet: (value) => { sdk = value; },
        setPrLayer: (value) => { prIndexLayerEnabled = Boolean(value); },
        current: () => ({ routeDataRevision, prIndexDrawRevision, prIndexRenderedFeatureKey }),
        getMapModelSnapshot, getMapJunctionsSnapshot, getSearchPreferredCoordinate,
        getSelectedSegmentIds, getSegmentAddress, collectRouteSnapshot,
        drawPrIndexPoints, clearPrIndexFeatures, createPrLabelSegmentSpatialIndex,
        getPrLabelSegmentSpatialIndex, createMapCommentFromResult,
        refreshSelectionSummary, setCountry,
        getNearbyStreetNames,
        setUi: (value) => { ui = value; },
        setLatestResult: (value) => { latestResult = value; },
        drawResult, clearResult, applyAutomaticResultSelection, moveMapAndWait,
        invalidate: () => { routeDataRevision += 1; mapModelSnapshotPromise = null; mapJunctionsSnapshotPromise = null; prLabelSegmentSpatialIndex = null; },
    };`);
const root = { document: {}, setTimeout, clearTimeout, requestAnimationFrame: cb => setTimeout(cb,0) };
const context = { console, window: root, unsafeWindow: root, module: { exports: {} }, setTimeout, clearTimeout, Date, Promise };
vm.runInNewContext(source, context, { filename: 'fixture.user.js' });
const T = root.__TEST__;
const metersToLon = (x) => x / 111195;
const segments = [
  { id: 1, fromNodeId: 1, toNodeId: 2, primaryStreetId: 1, alternateStreetIds: [], geometry:{ coordinates:[[metersToLon(0),0],[metersToLon(1000),0]] } },
  { id: 2, fromNodeId: 2, toNodeId: 3, primaryStreetId: 1, alternateStreetIds: [], geometry:{ coordinates:[[metersToLon(1000),0],[metersToLon(2000),0]] } },
];
const streets = [{ id:1, name:'D933' }];
const junctions = [];
const calls = new Map();
const tick=(key)=>calls.set(key,(calls.get(key)||0)+1);
const W = (name, output) => async (...args) => { tick(name); await Promise.resolve(); return typeof output === 'function' ? output(...args) : output; };
let zoomLevel=16;
let extent = [-0.05,-0.05,0.05,0.05];
let selectedIds = [1];
let lastCommentOptions = null;
let commentUpdated = 0;
const layerActions=[];
const mockSdk = {
 Events: { on: ({eventName}) => {tick('events.on.'+eventName);}, once:()=>Promise.resolve() },
 DataModel: {
   Segments: { getAll: W('segments.getAll',segments), getAddress:W('segments.getAddress',()=>({street:{name:'D933'},state:{name:'Ain'},country:{name:'France'},altStreets:[]})) },
   Streets: { getAll: W('streets.getAll',streets) },
   Junctions: { getAll: W('junctions.getAll',junctions) },
   MapComments: {
     addComment:W('comment.add',options=>{lastCommentOptions=options;return {id:'comment-123'};}),
     updateComment:W('comment.update',()=>{commentUpdated+=1;return true;})
   },
 },
 Editing: { getSelection: W('editing.getSelection', ()=>({objectType:'segment',ids:selectedIds})), setSelection:W('editing.setSelection') },
 LayerSwitcher: {
   addLayerCheckbox:W('switcher.add'),setLayerCheckboxChecked:W('switcher.checked')
 },
 Map: {
    getMapExtent:W('map.getMapExtent',()=>extent),getZoomLevel:W('map.getZoomLevel',()=>zoomLevel),getMapCenter:W('map.getMapCenter',()=>({lon:0.01,lat:0})),
    removeAllFeaturesFromLayer: W('map.remove',({layerName})=>layerActions.push(['remove',layerName])),
    addFeaturesToLayer: W('map.add',({layerName,features})=>layerActions.push(['add',layerName,features.length])),
    setLayerVisibility: W('map.visibility',({layerName,visibility})=>layerActions.push(['visible',layerName,visibility])),
    addLayer:W('map.addLayer'), setLayerOpacity:W('map.opacity'),
    getPermalink:W('map.permalink','https://example.test/editor'),
    setMapCenter:W('map.setMapCenter'),
 },
};
const pr = (num,offset) => ({axis:'D933',number:num,coordinate:[metersToLon(offset),0],departmentCode:'01',networkType:'D',pointType:'PR',id:`p${num}`,side:'U',abscissa:50000+offset});

(async()=>{
 T.sdkSet(mockSdk);
 const [model1,model2] = await Promise.all([T.getMapModelSnapshot(), T.getMapModelSnapshot()]);
 assert.strictEqual(model1, model2,'sharing snapshot Promise');
 assert.equal(calls.get('segments.getAll'),1);assert.equal(calls.get('streets.getAll'),1);
 const axis = await T.collectRouteSnapshot('D933',true);
 assert.equal(axis.segments.length,2);
 const axis2 = await T.collectRouteSnapshot('D933',true);
 assert.equal(axis2.segments.length,2);
 assert.equal(calls.get('segments.getAll'),1,'cache should not re-call segments SDK');
 const ids=await T.getSelectedSegmentIds();
 assert.equal(ids.length,1);assert.equal(ids[0],1);
 const addr=await T.getSegmentAddress(1);
 assert.equal(addr.state.name,'Ain');
 const coord=await T.getSearchPreferredCoordinate();
 assert(Math.abs(coord[0]-metersToLon(500))<0.00005,'selection should supply preferred center');
 const nearNames=await T.getNearbyStreetNames([metersToLon(300),0]);
 assert(nearNames.includes('D933'),'nearby WME street name found via async getAddress');
 T.setPrLayer(true);
 const pts=[pr(50,500),pr(51,1500)];
 await Promise.all([T.drawPrIndexPoints(pts),T.drawPrIndexPoints(pts)]);
 assert((calls.get('map.add')||0)>=1,'PR features rendered to SDK after awaiting Promise values');
 assert(layerActions.some(row=>row[0]==='add' && row[2] >= 2));
 await T.clearPrIndexFeatures();
 assert.equal(layerActions.at(-1)[0],'remove','clear PR map layer');
 // Result layer: async drawing and clear must be serialized to prevent races.
 const result={axis:'D933',parsedPr:{base:50,offset:40,formatted:'50+040'},point:[metersToLon(1040),0],sourcePoint:pts[0],startAnchor:{point:[metersToLon(1000),0]},segmentId:2,component:[],pathSegmentIds:[2]};
 const msg={className:'',textContent:''};
 const mockUi={
   autoSelect:{checked:true},status:msg,
   result:{hidden:false},resultActions:{hidden:false},mapCommentEditor:{hidden:false},
   resultTitle:{textContent:''},resultDetails:{textContent:''},permalink:{href:'#'},
   mapCommentSubject:{value:'D933 PR 50+040'},mapCommentBody:{value:'Test'},
   mapCommentExpiration:{value:'30'},mapCommentCustomDate:{value:''},
   mapCommentCreate:{disabled:false},
 };
 T.setUi(mockUi);
 await T.drawResult([result], 'D933 — PR 50+040');
 assert((calls.get('map.addLayer')||0)>=1,'result map layer setup');
 await T.clearResult();
 assert.equal(mockUi.result.hidden,true);
 assert.equal(layerActions.at(-1)[0],'remove');
 const chosen=await T.applyAutomaticResultSelection([result],null);
 assert.deepEqual(Array.from(chosen),[2], 'automatic selection waits SDK');
 T.setLatestResult({results:[result]});
 await T.createMapCommentFromResult();
 assert.equal(calls.get('comment.add'),1,'one map comment added');
 assert.equal(commentUpdated,0,'no second write for normal expiry');
 assert.equal(mockUi.mapCommentCreate.disabled,false,'button restored');
 assert.equal(lastCommentOptions.subject, 'D933 PR 50+040');
 // Non-expiring notes: keep the existing second explicit update in dev4.
 mockUi.mapCommentExpiration.value='none';
 T.setLatestResult({results:[result]});
 await T.createMapCommentFromResult();
 assert.equal(commentUpdated,1,'non-expiring comment update is awaited');
 await T.moveMapAndWait([result.point]);
 assert((calls.get('map.setMapCenter')||0)>=1,'recenter awaited');
 T.invalidate();
 await T.getMapModelSnapshot();
 assert.equal(calls.get('segments.getAll'),2, 'WME data revision refreshes snapshot');
 console.log('OK: async SDK Promise mocks — snapshots, addresses, selections, route graph, layers, notes, recenter, invalidate');
 console.log('counters:',Object.fromEntries(calls));
})().catch(error=>{console.error(error);process.exitCode=1;});

