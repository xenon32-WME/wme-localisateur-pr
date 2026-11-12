'use strict';
// Explicit live read-only RPC checks. Never called by the offline test runner.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {harness,fetchRequest}=require('./harness.cjs');
const t=harness(fetchRequest,{fetch,AbortController});
async function run(){
 const report={tested_at:new Date().toISOString(),version:'1.2.0',checks:[]};
 async function check(name,run){const started=Date.now();await run();report.checks.push({name,pass:true,ms:Date.now()-started});console.log(name+': PASS');}
 await check('A40 both sides',async()=>{
  const r=await t.requestPrData('lookup',{axis:'A40',department:'01',numbers:'120,121,122,123,124,125',network_type:'A'},'FR');
  assert.equal(r.data.filter(x=>x.side==='D').length,6);assert.equal(r.data.filter(x=>x.side==='G').length,6);
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
  const manager=managers.data[0].road_manager;
  const axes=await t.requestPrData('axes',{manager});assert(axes.data.length>0);
  const axis=axes.data[0].axis;
  const scopes=await t.requestPrData('scopes',{axis});assert(scopes.data.some(x=>x.road_manager===manager));
  const r=await t.requestPrData('bbox',{bbox:'-6,41,10,52',axis,manager,network_type:'I'},'FR');
  assert(r.data.length>0);assert(r.data.every(x=>x.axis===axis&&x.road_manager===manager&&x.network_type==='I'));
 });
 await check('CO target, guides and layer',async()=>{
  const target=await t.searchColombiaTarget('4005',t.Core.parsePr('65+500'));assert(target.lower&&target.upper);
  const guides=await t.searchColombiaGuides('4005',55000,64000);assert(guides.length>0);
  const [lon,lat]=target.lower.coordinate;
  const r=await t.requestPrData('bbox',{bbox:[lon-.1,lat-.1,lon+.1,lat+.1].join(',')},'CO');
  assert(r.data.length>0);
 });
 if(process.env.PR_REPORT_PATH)fs.writeFileSync(process.env.PR_REPORT_PATH,JSON.stringify(report,null,2)+'\n');
 console.log('Live read-only Supabase checks: '+report.checks.length+' PASS');
}
run().catch(e=>{console.error(e);process.exitCode=1});
