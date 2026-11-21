'use strict';
const assert=require('node:assert/strict');
const {harness,ignFeature:point,ignCollection:collection,source}=require('./harness.cjs');
const calls=[];let replies=[];
const t=harness(o=>{calls.push(o);const result=replies.shift();assert(result,'Missing fixture');o.onload({status:200,responseText:JSON.stringify(result)});});
const query=()=>new URL(calls.at(-1).url).searchParams;
(async()=>{
 // Full route input retains leading-zero PRs, both boundaries, and the exact IGN coordinates.
 replies=[collection([point('p38',{numero:'038'}),point('end',{numero:'999',type_de_pr:'PRF',abscisse:38392,ordre:999}),
  point('fs',{numero:'FS',type_de_pr:'FS',abscisse:38100,ordre:38.1}),
  point('ds',{numero:'DS',type_de_pr:'DS',abscisse:38200,ordre:38.2}),
  point('unrelated-end',{numero:'999',type_de_pr:'PRF',abscisse:38392,lien_vers_route_nommee:'OTHER'}),
  point('far',{numero:'45',abscisse:45000})])];
 let result=await t.requestPrData('lookup',{axis:'D 1',department:'01',numbers:'38,39,38',network_type:'D'},'FR');
 assert.deepEqual(Array.from(result.data,x=>x.source_id),['p38','end','fs','ds']);
 assert.equal(result.data[0].longitude,5.3);assert.match(result.data[0].source,/IGN.*officielle/);
 assert.match(query().get('CQL_FILTER'),/route IN \('D1','RD1'\)/);
 assert.match(query().get('CQL_FILTER'),/code_insee_du_departement='01'/);
 const terminal=t.Core.parsePrPayload(result.data).find(x=>x.pointType==='PRF');
 assert.equal(terminal.terminalPrNumber,38);assert.equal(terminal.terminalPrOffset,392);
 // Missing route links retain boundary matching, as in the previous provider contract.
 replies=[collection([point('unlinked',{lien_vers_route_nommee:null}),point('end',{numero:'999',type_de_pr:'PRF',abscisse:38392})])];
 result=await t.requestPrData('lookup',{axis:'D1',numbers:'38'});
 assert.equal(result.data.length,2);
 // Geographic and road filters precede LIMIT. One lookahead detects truncation.
 replies=[collection([point('first'),point('next')],8)];
 result=await t.requestPrData('bbox',{bbox:'5,46,6,47',axis:'D1',department:'01',network_type:'D',limit:1},'FR');
 assert.equal(result.data.length,1);assert.equal(result.meta.next_offset,1);assert(result.meta.filters_applied);
 assert.match(query().get('CQL_FILTER'),/strMatches/);
 assert.equal(query().get('COUNT'),'2');assert.equal(query().get('SORTBY'),'cleabs');assert.equal(query().get('SRSNAME'),'CRS:84');
 assert.match(query().get('CQL_FILTER'),/BBOX\(geometrie,5,46,6,47,'CRS:84'\)/);
 replies=[collection()];result=await t.requestPrData('bbox',{bbox:'5,46,6,47',axis:'D999'},'FR');
 assert.equal(result.meta.is_truncated,false);assert.equal(result.meta.filters_applied,true);
 // A terminal alone is labelled as an end, without inventing a reference outside the view.
 replies=[collection([point('end',{numero:'999',type_de_pr:'PRF',abscisse:38392})])];
 result=await t.searchPrLayerPoints([5,46,6,47]);
 assert.equal(t.Core.formatPrPointForDisplay(result.points[0]),'Fin');
 // Server pagination is followed completely and stable IDs are enforced.
 replies=[collection([point('a')],2),collection([point('b')],2)];
 result=await t.requestPrData('lookup',{axis:'D1',numbers:'38'});
 assert.equal(result.data.length,2);assert.equal(query().get('STARTINDEX'),'1');
 replies=[collection([point('a')],2),collection([point('a')],2)];
 await assert.rejects(()=>t.requestPrData('lookup',{axis:'D1',numbers:'38'}),/plusieurs fois/);
 replies=[collection([point('a')],2),collection([point('b')],3)];
 await assert.rejects(()=>t.requestPrData('lookup',{axis:'D1',numbers:'38'}),/modifiées/);
 // Directory is requested once and reused for managers, axes and centroids.
 const manager="Métropole Nice Côte d'Azur";
 replies=[collection([point('m1',{route:'M1',gestionnaire:manager},[7,43]),point('m2',{route:'M1',gestionnaire:manager},[9,45])])];
 const beforeDirectory=calls.length;
 result=await t.requestPrData('managers');assert.equal(result.data[0].road_manager,manager);
 result=await t.requestPrData('axes',{manager});assert.equal(result.data[0].axis,'M1');
 result=await t.requestPrData('scopes',{axis:'M1'});assert.equal(result.data[0].longitude,8);assert.equal(result.data[0].latitude,44);assert.equal(result.data[0].point_count,2);
 assert.equal(calls.length,beforeDirectory+1);
 replies=[collection()];await t.requestPrData('bbox',{bbox:'6,43,8,45',axis:'M1',manager,network_type:'I'});
 assert.match(query().get('CQL_FILTER'),/gestionnaire='Métropole Nice Côte d''Azur'/);
 // Invalid input never reaches a network destination.
 const beforeInvalid=calls.length;
 for(const args of [
  ['unknown',{}],['lookup',{axis:'D1',numbers:'1,,2'}],['lookup',{axis:'D1',numbers:'Infinity'}],
  ['lookup',{axis:'D1',numbers:'1',department:'xyz'}],['lookup',{axis:'D1',numbers:'1',network_type:'evil'}],
  ['bbox',{bbox:'1,2,,4'}],['bbox',{bbox:'1,-100,2,3'}],['bbox',{bbox:'1,2,3,4',limit:1001}],
  ['axes',{}],['scopes',{axis:"M1' OR 1=1"}]
 ])await assert.rejects(()=>t.requestPrData(...args));
 assert.equal(calls.length,beforeInvalid);
 for(const response of [[],{},collection([point('p')],0),{...collection(),numberMatched:'unknown'},collection([{...point('x'),geometry:null}])]){
  replies=[response];await assert.rejects(()=>t.requestPrData('bbox',{bbox:'5,46,6,47'}));
 }
 for(const o of calls){
  assert.equal(new URL(o.url).origin,'https://data.geopf.fr');assert.equal(new URL(o.url).pathname,'/wfs/ows');
  assert.equal(o.method,'GET');assert.equal(o.anonymous,true);assert.equal(o.redirect,'error');
  assert.equal(o.headers.apikey,undefined);assert.equal(o.data,undefined);
  assert.equal(o.headers.Cookie,undefined);assert.equal(o.headers.Referer,undefined);
 }
 assert(!/find_wme_pr_points|list_wme_pr_intercommunal|find_wme_pr_intercommunal/.test(source),'No old France RPC left');
 // Errors and cancellations never contact another service.
 for(const status of [403,429,503]){
  const urls=[];const failure=harness(o=>{urls.push(o.url);o.onload({status,responseText:'{"message":"test"}'});});
  await assert.rejects(()=>failure.requestPrData('bbox',{bbox:'5,46,6,47'}),e=>e.httpStatus===status);
  assert.equal(urls.length,status===503?2:1);assert.equal(new URL(urls[0]).hostname,'data.geopf.fr');
 }
 let aborted=0;const cancel=harness(()=>({abort(){aborted++;}}));const controller=new AbortController();
 const pending=cancel.requestPrData('bbox',{bbox:'5,46,6,47'},'FR',{signal:controller.signal}).catch(e=>e);
 controller.abort();assert.equal((await pending).isAbortError,true);assert.equal(aborted,1);
 console.log('IGN direct: lookup/terminal/filter/paging/directory/privacy/cancellation/no fallback PASS');
})().catch(e=>{console.error(e);process.exitCode=1});
