'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const filename=path.join(__dirname,'../WME-Localisateur-de-PR-France.user.js');
const source=fs.readFileSync(filename,'utf8');
function harness(request,globals={}){
 const root={document:{},setTimeout,clearTimeout};
 const context={unsafeWindow:root,module:{exports:{}},console,URL,URLSearchParams,Promise,Date,JSON,AbortController,TextDecoder,
  GM_getValue:()=>'',GM_setValue:()=>{},GM_xmlhttpRequest:request,...globals};
 const hooks='root.__TEST__={createPrLocatorPublicApi,loadLanguageSetting,normalizeLanguage,setLanguageUi:setLanguage,getLanguage:()=>currentLanguage,getGreasyForkInstallationInfo,requestPrData, searchPrPoints, searchPrLayerPoints,requestJson,prIndexRequestContext,prIndexRequestKey,resetPrIndexScope,applyPrIndexAxisFilter,Core,'
 +'setFilterRaw:v=>{prIndexAxisFilter=v},setUi:v=>{ui=v},setSdk:v=>{sdk=v},setPrLayer:v=>{prIndexLayerEnabled=v},setPrCache:v=>{prIndexCache=v},getPrCache:()=>prIndexCache,getGeneration:()=>prIndexRefreshGeneration,'
 +'getFilter:()=>prIndexAxisFilter,selectTargetSource,resolveTarget,rememberA40References,updateA40Calibration,a40LayerPoints,prIndexRenderedPointsKey,buildPrIndexFeatures,a40Message,franceSourceSummary,authorCorrectionBadge,prIndexLoadedStatusMessage,setLanguage:v=>{currentLanguage=v}};';
 const marker='    initialize();';
 if(source.split(marker).length!==2)throw Error('Initialization anchor changed');
 vm.runInNewContext(source.replace(marker,hooks),context,{filename,timeout:5000});
 return root.__TEST__;
}
function fetchRequest(options,fetchImpl=fetch){
 const controller=new AbortController();
 options.onloadstart?.();
 fetchImpl(options.url,{method:options.method,headers:Object.fromEntries(Object.entries(options.headers || {}).filter(([,v])=>v!==null)),body:options.data,
  credentials:'omit',redirect:'error',signal:controller.signal})
 .then(async r=>{
  options.onreadystatechange?.({readyState:2,status:r.status});
  const body=options.responseType==='arraybuffer'?{response:await r.arrayBuffer()}:{responseText:await r.text()};
  options.onload({status:r.status,...body,responseHeaders:[...r.headers].map(([k,v])=>k+': '+v).join('\n')});
 })
 .catch(e=>options.onerror(e));
 return {abort:()=>controller.abort()};
}
module.exports={harness,fetchRequest,filename,source};
// Official WFS envelope used by synthetic provider / navigation tests.
function ignFeature(id,properties={},coordinates=[5.3,46.05]){
 return {type:'Feature',id:'point_de_repere.'+id,geometry:{type:'Point',coordinates},properties:{
  cleabs:id,route:'D1',numero:'38',abscisse:38000,ordre:38,cote:'U',type_de_pr:'PR',
  identifiant_de_section:'01-D1-U-1',code_insee_du_departement:'01',lien_vers_route_nommee:'ROUTE-D1',gestionnaire:'Ain',...properties}};
}
function ignCollection(features=[],matched=features.length){return {type:'FeatureCollection',features,numberReturned:features.length,numberMatched:matched};}
module.exports.ignFeature=ignFeature;module.exports.ignCollection=ignCollection;
