'use strict';
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const excluded=new Set(['run.cjs','harness.cjs','live-supabase.cjs']);
let count=0;
for(const file of fs.readdirSync(__dirname).filter(x=>x.endsWith('.cjs')&&!excluded.has(x)).sort()){
 const run=cp.spawnSync(process.execPath,[path.join(__dirname,file)],{encoding:'utf8'});
 if(run.status!==0){process.stderr.write(run.stdout+run.stderr);console.error('FAILED: '+file);process.exit(run.status||1);}
 console.log('PASS '+file);count++;
}
console.log(count+' offline suites passed');
