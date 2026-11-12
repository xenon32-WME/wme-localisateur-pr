'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const filename=path.join(__dirname,'../WME-Localisateur-de-PR-France.user.js');
const source=fs.readFileSync(filename,'utf8');
function harness(request,globals={}){
 const root={document:{},setTimeout,clearTimeout};
 const context={unsafeWindow:root,module:{exports:{}},console,URL,URLSearchParams,Promise,Date,JSON,AbortController,
  GM_getValue:()=>'',GM_setValue:()=>{},GM_xmlhttpRequest:request,...globals};
 const hooks='root.__TEST__={requestPrData, searchPrPoints, searchPrLayerPoints,searchColombiaTarget,searchColombiaGuides,requestJson,prIndexRequestContext,prIndexRequestKey,resetPrIndexScope,setCountry,applyPrIndexAxisFilter,Core,'
 +'setCountryRaw:v=>{currentCountry=v},setFilterRaw:v=>{prIndexAxisFilter=v},setUi:v=>{ui=v},setSdk:v=>{sdk=v},setPrLayer:v=>{prIndexLayerEnabled=v},setPrCache:v=>{prIndexCache=v},getPrCache:()=>prIndexCache,getGeneration:()=>prIndexRefreshGeneration,'
 +'getCountry:()=>currentCountry,getFilter:()=>prIndexAxisFilter};';
 const marker='    initialize();';
 if(source.split(marker).length!==2)throw Error('Initialization anchor changed');
 vm.runInNewContext(source.replace(marker,hooks),context,{filename,timeout:5000});
 return root.__TEST__;
}
function fetchRequest(options,fetchImpl=fetch){
 const controller=new AbortController();
 fetchImpl(options.url,{method:options.method,headers:options.headers,body:options.data,
  credentials:'omit',redirect:'error',signal:controller.signal})
 .then(async r=>options.onload({status:r.status,responseText:await r.text(),responseHeaders:[...r.headers].map(([k,v])=>k+': '+v).join('\n')}))
 .catch(e=>options.onerror(e));
 return {abort:()=>controller.abort()};
}
module.exports={harness,fetchRequest,filename,source};
