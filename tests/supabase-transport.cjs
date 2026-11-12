'use strict';
const assert=require('node:assert/strict');
const {harness}=require('./harness.cjs');
const sent=[]; let response=[];
const t=harness(o=>{sent.push(o);o.onload({status:200,responseText:JSON.stringify(response)});});
const body=()=>JSON.parse(sent.at(-1).data);
const rpc=()=>new URL(sent.at(-1).url).pathname.split('/').at(-1);
async function run(){
 await t.requestPrData('lookup',{axis:'D 1',department:'01',numbers:'38,39,38',network_type:'D'},'FR');
 assert.equal(rpc(),'find_wme_pr_points_v08');
 assert.deepEqual(body(),{p_axis:'D1',p_department_code:'01',p_pr_numbers:[38,39],p_network_type:'D',p_manager:null});
 for(const [mode,params,name,expected] of [
  ['managers',{},'list_wme_pr_intercommunal_managers',{}],
  ['axes',{manager:"Métropole Nice Côte d'Azur"},'list_wme_pr_intercommunal_axes',{p_manager:"Métropole Nice Côte d'Azur"}],
  ['scopes',{axis:'M 1'},'find_wme_pr_intercommunal_scopes',{p_axis:'M1'}],
  ['target',{axis:'4005',chainage:65500},'find_wme_pr_colombia_target',{p_road_code:'4005',p_target_chainage:65500}],
  ['guides',{axis:'4005',start:55000,end:64000},'find_wme_pr_colombia_guides',{p_road_code:'4005',p_start_chainage:55000,p_end_chainage:64000}]
 ]){
  await t.requestPrData(mode,params,['guides','target'].includes(mode)?'CO':'FR');
  assert.equal(rpc(),name);assert.deepEqual(body(),expected);
 }
 const filter={routeType:'D',axis:'D1',departmentCode:'01',manager:null};
 t.setCountryRaw('FR');t.setFilterRaw(filter);
 const frKey=t.prIndexRequestKey([4.7,45.6,6,46.6],15);
 let result=await t.searchPrLayerPoints([4.7,45.6,6,46.6]);
 assert.equal(result.truncated,false);
 assert.equal(rpc(),'find_wme_pr_points_in_bbox_v121');
 assert.equal(body().p_axis,'D1');assert.equal(body().p_department_code,'01');
 response=[{axis:'D1',pr_number:1,longitude:5,latitude:46,source_id:'test',is_truncated:true}];
 result=await t.searchPrLayerPoints([4.7,45.6,6,46.6]);
 assert.equal(result.truncated,true);assert.equal(result.points.length,1);
 response=[];t.setCountryRaw('CO');
 assert.notEqual(t.prIndexRequestKey([4.7,45.6,6,46.6],15),frKey);
 assert.equal(t.prIndexRequestContext().filter,null);
 await t.searchPrLayerPoints([-75,3,-73,5]);
 assert.equal(rpc(),'find_wme_pr_colombia_points_in_bbox');
 assert.equal('p_axis' in body(),false);
 t.setCountryRaw('FR');
 assert.equal(t.prIndexRequestContext().filter.axis,'D1');
 t.setPrCache({old:true});const gen=t.getGeneration();t.resetPrIndexScope();
 assert.equal(t.getPrCache(),null);assert(t.getGeneration()>gen);
 for(const o of sent){
  assert.equal(o.method,'POST');assert.equal(o.anonymous,true);
  assert.equal(new URL(o.url).host,'ygdyaciibfyqldlejyuu.supabase.co');
  assert.equal(new URL(o.url).search,'');
  assert(o.headers.apikey.startsWith('sb_publishable_'));
  assert.equal(o.headers['Content-Type'],'application/json');
  assert(!/waze|segmentId|userId/i.test(o.data));
 }
 const before=sent.length;
 for(const args of [
  ['invalid',{},'FR'],['managers',{},'CO'],['lookup',{axis:'D1',numbers:'1,,2'},'FR'],
  ['lookup',{axis:'D1',numbers:'Infinity'},'FR'],['bbox',{bbox:'1,2,,4'},'FR'],
  ['bbox',{bbox:'1,-100,2,5'},'FR'],['bbox',{bbox:'1,2,3,4',limit:1001},'FR'],
  ['bbox',{bbox:'1,2,3,4',offset:1},'CO']
 ])await assert.rejects(()=>t.requestPrData(...args));
 assert.equal(sent.length,before);
 response={data:[],meta:{}};
 await assert.rejects(()=>t.requestPrData('managers'),/incomplète/);
 response=[{axis:'D1'}];
 await assert.rejects(()=>t.requestPrData('bbox',{bbox:'1,2,3,4'}),/Métadonnées/);
 response=Array.from({length:500},()=>({axis:'D1'}));
 await assert.rejects(()=>t.requestPrData('lookup',{axis:'D1',numbers:'1'}),/tronquée/);
 const errors=harness(o=>o.onload({status:503,responseText:JSON.stringify({message:'maintenance'})}));
 await assert.rejects(()=>errors.requestPrData('managers'),e=>e.httpStatus===503&&e.message.includes('maintenance'));
 console.log('Supabase transport / country / cache / privacy / errors: PASS');
}
run().catch(e=>{console.error(e);process.exitCode=1});
