'use strict';
const assert=require('node:assert/strict');
const {harness,ignFeature,ignCollection}=require('./harness.cjs');
const good=JSON.stringify(ignCollection([ignFeature('d8',{route:'D8',numero:'27'})]));
const args=['lookup',{axis:'D8',department:'01',network_type:'D',numbers:'27,28,29'},'FR'];
function scenario(replies){
 const calls=[];
 const api=harness(o=>{calls.push(o);const reply=replies.shift();assert(reply,'unexpected retry');
  if(reply.network)o.onerror();else if(reply.timeout)o.ontimeout();else o.onload({status:200,...reply});});
 return {api,calls};
}
(async()=>{
 // FDB pads the offset before invoking this public API (separate integration check).
 const core=harness(()=>{}).Core;
 assert.equal(core.parsePr('27+093').offset,93);
 for(const first of [
  {responseText:'<!doctype html><html><body>Service unavailable</body></html>'},
  {responseText:'{"type":"FeatureCollection","features":['}, {responseText:''},
  {status:502,responseText:'Bad gateway'},{status:503,responseText:'Unavailable'},
  {status:504,responseText:'Gateway timeout'}, {network:true}, {timeout:true}
 ]){
  const {api,calls}=scenario([first,{responseText:good}]);
  const r=await api.requestPrData(...args);assert.equal(r.data[0].pr_number,27);
  assert.equal(calls.length,2);assert.equal(calls[0].url,calls[1].url);
  assert(calls.every(o=>o.method==='GET'&&o.anonymous&&o.redirect==='error'&&!o.data));
 }
 const xml=`<?xml version="1.0"?><ows:ExceptionReport><ows:Exception exceptionCode="InvalidParameterValue" locator="CQL_FILTER"><ows:ExceptionText>Invalid &quot;route&quot; &amp; param&#232;tre</ows:ExceptionText></ows:Exception></ows:ExceptionReport>`;
 for(const status of [200,400,503]){
  const {api,calls}=scenario([{status,responseText:xml}]);
  await assert.rejects(()=>api.requestPrData(...args),e=>e.isWfsException&&e.wfsExceptionCode==='InvalidParameterValue'
   &&e.remoteLocator==='CQL_FILTER'&&e.remoteDetail==='Invalid "route" & paramètre'&&e.httpStatus===status);
  assert.equal(calls.length,1);
 }
 for(const responseText of [
  '<ServiceExceptionReport><ServiceException code="NoApplicableCode"><![CDATA[Erreur de requête]]></ServiceException></ServiceExceptionReport>',
  JSON.stringify({exceptions:[{code:'NoApplicableCode',locator:'route',text:['Erreur','de requête']}]})
 ]){
  const {api,calls}=scenario([{responseText}]);
  await assert.rejects(()=>api.requestPrData(...args),e=>e.isWfsException&&/Erreur de requête/.test(e.message));assert.equal(calls.length,1);
 }
 for(const status of [400,401,403,404,429]){
  const {api,calls}=scenario([{status,responseText:'{"message":"Refus"}'}]);
  await assert.rejects(()=>api.requestPrData(...args),e=>e.httpStatus===status&&e.remoteDetail==='Refus');assert.equal(calls.length,1);
 }
 const failure=scenario([{responseText:'<html>Erreur</html>'},{responseText:'<html>Erreur</html>'}]);
 await assert.rejects(()=>failure.api.requestPrData(...args),e=>e.isInvalidResponse&&/HTML.*HTTP 200/.test(e.message)&&/deux tentatives/.test(e.message));
 assert.equal(failure.calls.length,2);
 const bom=scenario([{responseText:'\uFEFF'+good}]);await bom.api.requestPrData(...args);assert.equal(bom.calls.length,1);
 // Valid JSON with missing/invalid features remains an error, not an empty result.
 for(const responseText of ['null','{}',JSON.stringify({...ignCollection(),numberMatched:1})]){
  const s=scenario([{responseText}]);await assert.rejects(()=>s.api.requestPrData(...args),/invalide|incomplète/);assert.equal(s.calls.length,1);
 }
 // Cancellation during backoff must not schedule another request.
 const cancel=scenario([{responseText:'broken'}]),controller=new AbortController();
 const pending=cancel.api.requestPrData(...args,{signal:controller.signal});
 await new Promise(resolve=>setTimeout(resolve,20));controller.abort();
 await assert.rejects(()=>pending,e=>e.isAbortError);assert.equal(cancel.calls.length,1);
 // A failed later page retries only that page, retaining duplicate/mixed-edition checks.
 const pages=scenario([
  {responseText:JSON.stringify(ignCollection([ignFeature('first',{route:'D8',numero:'27'})],2))},
  {responseText:'truncated'},
  {responseText:JSON.stringify(ignCollection([ignFeature('second',{route:'D8',numero:'28'})],2))}
 ]);
 const r=await pages.api.requestPrData(...args);assert.equal(r.data.length,2);
 assert.deepEqual(pages.calls.map(o=>new URL(o.url).searchParams.get('STARTINDEX')),['0','1','1']);
 console.log('IGN response diagnostics, bounded retry, cancellation and PR padding: PASS');
})().catch(e=>{console.error(e);process.exitCode=1});
