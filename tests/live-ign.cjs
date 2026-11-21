'use strict';
// Explicit live read-only official IGN checks. Never called by the offline test runner.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {harness,fetchRequest}=require('./harness.cjs');
const apiCalls=[];
async function measuredFetch(url,options){
 assert.equal(new URL(url).origin,'https://data.geopf.fr');
 const started=Date.now(),entry={provider:'IGN WFS',operation:new URL(url).searchParams.get('REQUEST')};apiCalls.push(entry);
 try{
  const response=await fetch(url,options);entry.status=response.status;entry.headers_ms=Date.now()-started;
  return {status:response.status,headers:response.headers,arrayBuffer:async()=>{
   try{const body=await response.arrayBuffer();entry.bytes=body.byteLength;entry.total_ms=Date.now()-started;return body;}
   catch(e){entry.error=e.name;entry.total_ms=Date.now()-started;throw e;}
  },text:async()=>{
   try{const text=await response.text();entry.bytes=Buffer.byteLength(text);entry.total_ms=Date.now()-started;return text;}
   catch(e){entry.error=e.name;entry.total_ms=Date.now()-started;throw e;}
  }};
 }catch(e){entry.error=e.name;entry.total_ms=Date.now()-started;throw e;}
}
const t=harness(options=>fetchRequest(options,measuredFetch),{fetch:measuredFetch,AbortController});
async function run(){
 const report={tested_at:new Date().toISOString(),version:require('./harness.cjs').source.match(/const VERSION = "([^"]+)"/)[1],environment:'Node.js, not WME; network times include this execution environment',checks:[],api_calls:apiCalls};
 async function check(name,run){const started=Date.now();await run();report.checks.push({name,pass:true,ms:Date.now()-started});console.log(name+': PASS');}
 await check('A40 both sides',async()=>{
  const r=await t.requestPrData('lookup',{axis:'A40',department:'01',numbers:'120,121,122,123,124,125',network_type:'A'},'FR');
  assert(r.data.some(x=>x.source_updated_at));assert(/\d{4}-\d{2}-\d{2}/.test(t.franceSourceSummary(t.Core.parsePrPayload(r.data))));
  assert.equal(r.data.filter(x=>x.side==='D'&&x.point_type==='PR').length,7);assert.equal(r.data.filter(x=>x.side==='G'&&x.point_type==='PR').length,7);
 });
 await check('D1 terminal PRF38+392',async()=>{
  const r=await t.requestPrData('lookup',{axis:'D1',department:'01',numbers:'38,39',network_type:'D'},'FR');
  const points=t.Core.parsePrPayload(r.data);
  const terminal=points.find(x=>x.pointType==='PRF');assert(terminal);
  const refs=points.filter(x=>x.pointType==='PR'&&x.number===38);
  assert(refs.some(x=>terminal.abscissa-x.abscissa===392));
 });
 await check('D1083 search',async()=>{const r=await t.searchPrPoints({axis:'D1083',departmentCode:'01',lookupNumbers:[8,9],requestedNumbers:[8,9],networkType:'D'});assert(r.points.length>=2);});
 await check('Filtered bbox before pagination',async()=>{
  const r=await t.requestPrData('bbox',{bbox:'4.7,45.6,6,46.6',axis:'D1',network_type:'D',department:'01',limit:1000},'FR');
  assert.equal(r.meta.is_truncated,false);assert(r.data.length>2);assert(r.data.every(x=>x.axis==='D1'&&x.department_code==='01'));
  const small=await t.requestPrData('bbox',{bbox:'4.7,45.6,6,46.6',axis:'D1',network_type:'D',department:'01',limit:1},'FR');
  assert.equal(small.data.length,1);assert.equal(small.meta.is_truncated,true);assert.equal(small.meta.next_offset,1);
  const next=await t.requestPrData('bbox',{bbox:'4.7,45.6,6,46.6',axis:'D1',network_type:'D',department:'01',limit:1,offset:1},'FR');
  assert.notEqual(next.data[0].source_id,small.data[0].source_id);
  const empty=await t.requestPrData('bbox',{bbox:'4.7,45.6,6,46.6',axis:'D999999',network_type:'D',department:'01'},'FR');
  assert.equal(empty.data.length,0);assert.equal(empty.meta.filters_applied,true);
 });
 await check('Intercommunal managers axes scopes and bbox',async()=>{
  const managers=await t.requestPrData('managers');
  assert(managers.data.length>0);
  const manager="Métropole Nice Côte d'Azur";
  assert(managers.data.some(x=>x.road_manager===manager));
  const axes=await t.requestPrData('axes',{manager});assert(axes.data.length>0);
  const axis='M1';assert(axes.data.some(x=>x.axis===axis));
  const scopes=await t.requestPrData('scopes',{axis});assert(scopes.data.some(x=>x.road_manager===manager));
  const r=await t.requestPrData('bbox',{bbox:'-6,41,10,52',axis,manager,network_type:'I'},'FR');
  assert(r.data.length>0);assert(r.data.every(x=>x.axis===axis&&x.road_manager===manager&&x.network_type==='I'));
 });
 if(process.env.PR_REPORT_PATH)fs.writeFileSync(process.env.PR_REPORT_PATH,JSON.stringify(report,null,2)+'\n');
 console.log('Live read-only IGN checks: '+report.checks.length+' PASS');
}
run().catch(e=>{console.error(e);process.exitCode=1});
