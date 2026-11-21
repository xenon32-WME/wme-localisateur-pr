'use strict';
// Opt-in GET-only check; no WME action, no feed/status write.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {harness,fetchRequest}=require('./harness.cjs');
const calls=[];
const t=harness(o=>{assert.equal(o.method,'GET');assert.equal(new URL(o.url).origin,'https://data.geopf.fr');
 calls.push({url:o.url,responseType:o.responseType||'text',nocache:Boolean(o.nocache)});return fetchRequest(o,async(url,options)=>{
  const r=await fetch(url,options);Object.assign(calls.at(-1),{status:r.status,content_type:r.headers.get('content-type')});return r;
 });});
(async()=>{
 const params={axis:'D8',department:'01',numbers:'26,27,28,29',network_type:'D'};
 const r=await t.requestPrData('lookup',params,'FR');
 for(const n of [27,28,29])assert(r.data.some(p=>p.pr_number===n&&p.axis==='D8'&&p.department_code==='01'));
 const report={tested_at:new Date().toISOString(),version:'1.2.7',environment:'Node.js; aucune recette WME',params,calls,points:r.data};
 if(process.env.PR_REPORT_PATH)fs.writeFileSync(process.env.PR_REPORT_PATH,JSON.stringify(report,null,2)+'\n');
 console.log('D8 / Ain: PR27, PR28, PR29 présents; réponse IGN valide; '+calls.length+' requête(s): PASS');
})().catch(e=>{console.error(e);process.exitCode=1});
