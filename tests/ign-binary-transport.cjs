'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {harness,ignCollection,ignFeature}=require('./harness.cjs');
const body=JSON.stringify(ignCollection([ignFeature('d8',{route:'D8',numero:'27'})]));
const bytes=text=>new TextEncoder().encode(text);
const args=['lookup',{axis:'D8',department:'01',network_type:'D',numbers:'27,28,29'},'FR'];
function fixture(replies){
 const calls=[],logs=[];
 const api=harness(o=>{calls.push(o);const reply=replies.shift();assert(reply,'unexpected retry');o.onload({status:200,responseHeaders:'content-type: application/json; charset=UTF-8',...reply});},
  {console:{debug:()=>{},warn:m=>logs.push(m),info:()=>{},error:()=>{}}});
 return {api,calls,logs};
}
(async()=>{
 // The binary body wins over absent, truncated or otherwise incorrect responseText.
 for(const responseText of [undefined,body.slice(0,40),'[object Object]']){
  const s=fixture([{response:bytes(body).buffer,responseText}]);
  const r=await s.api.requestPrData(...args);assert.equal(r.data[0].pr_number,27);
  assert.equal(s.calls.length,1);assert.equal(s.calls[0].responseType,'arraybuffer');assert.equal(s.calls[0].nocache,undefined);
  assert.equal(s.calls[0].anonymous,true);assert.equal(s.calls[0].redirect,'error');assert.equal(s.logs.length,0);
 }
 const padded=bytes('prefix'+body+'suffix');
 const view=fixture([{response:new Uint8Array(padded.buffer,6,bytes(body).byteLength)}]);await view.api.requestPrData(...args);
 const unicode=JSON.stringify(ignCollection([ignFeature('é',{route:'D8',numero:'27',gestionnaire:'Ain — département'})]));
 const bom=fixture([{response:bytes('\uFEFF'+unicode).buffer}]);assert.equal((await bom.api.requestPrData(...args)).data[0].road_manager,'Ain — département');
 // Gzip bytes without transport decompression must never become accepted features.
 const broken=fixture([{response:new Uint8Array([0x1f,0x8b,0xff]).buffer},{response:new Uint8Array([0x1f,0x8b,0xff]).buffer}]);
 await assert.rejects(()=>broken.api.requestPrData(...args),e=>e.isInvalidResponse&&e.responseDiagnostic.byteLength===3&&/UTF-8 invalide/.test(e.message)&&/1f 8b ff/.test(e.message));
 assert.equal(broken.calls.length,2);assert.equal(broken.calls[1].nocache,true);assert(broken.logs.every(x=>x.includes('diagnostic réponse IGN')));
 // Truncated JSON records the native parse error and bounded public excerpts.
 const partial=body.slice(0,-12),bad=fixture([{response:bytes(partial).buffer},{response:bytes(partial).buffer}]);
 await assert.rejects(()=>bad.api.requestPrData(...args),e=>e.responseDiagnostic.characters===partial.length&&e.responseDiagnostic.error!=='Corps absent'&&e.responseDiagnostic.end===partial.slice(-100));
 assert.equal(bad.calls[0].url,bad.calls[1].url);
 const missing=fixture([{response:new ArrayBuffer(0)},{response:new ArrayBuffer(0)}]);
 await assert.rejects(()=>missing.api.requestPrData(...args),e=>e.isInvalidResponse&&e.responseDiagnostic.byteLength===0);
 // Compatibility: a manager returning text despite the request is diagnosed honestly.
 const text=fixture([{response:body}]);await text.api.requestPrData(...args);assert.equal(text.calls.length,1);
 const xml='<ows:ExceptionReport><ows:Exception exceptionCode="InvalidParameterValue"><ows:ExceptionText>Requête incorrecte</ows:ExceptionText></ows:Exception></ows:ExceptionReport>';
 const wfs=fixture([{response:bytes(xml).buffer}]);await assert.rejects(()=>wfs.api.requestPrData(...args),e=>e.isWfsException&&e.wfsExceptionCode==='InvalidParameterValue');assert.equal(wfs.calls.length,1);
 const live=fs.readFileSync(path.join(__dirname,'../evidence/d8-official-response-20261119.json'),'utf8');
 const real=fixture([{response:bytes(live).buffer,responseText:live.slice(0,8192)}]);
 const result=await real.api.requestPrData(...args);for(const n of [27,28,29])assert(result.data.some(p=>p.pr_number===n));
 console.log('Binary IGN response, real D8 fixture, strict UTF-8, diagnostics and cache bypass: PASS');
})().catch(e=>{console.error(e);process.exitCode=1});
