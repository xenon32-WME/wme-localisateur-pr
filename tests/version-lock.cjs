'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process');
const root=path.join(__dirname,'..'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'pr-version-lock-'));
try{
 for(const file of ['WME-Localisateur-de-PR-France.user.js','README.md','LICENSE','CHANGELOG.md','CONTRIBUTING.md','AGENTS.md','.gitignore'])fs.copyFileSync(path.join(root,file),path.join(tmp,file));
 fs.mkdirSync(path.join(tmp,'scripts'));fs.copyFileSync(path.join(root,'scripts/package.py'),path.join(tmp,'scripts/package.py'));
 const run=(...args)=>cp.spawnSync('python3',['scripts/package.py',...args],{cwd:tmp,encoding:'utf8'});
 let r=run();assert.equal(r.status,0,r.stderr);assert.equal(run('--check').status,0);
 const file=path.join(tmp,'WME-Localisateur-de-PR-France.user.js');fs.appendFileSync(file,'\n// Changed executable artifact\n');
 r=run();assert.notEqual(r.status,0);assert(r.stderr.includes('Increment @version and VERSION'));
 assert.notEqual(run('--check').status,0);
 const s=fs.readFileSync(file,'utf8'),v=s.match(/const VERSION = "([^"]+)"/)[1],next=v.replace(/\d+$/,n=>Number(n)+1);
 fs.writeFileSync(file,s.replace('// @version      '+v,'// @version      '+next).replace('const VERSION = "'+v+'"','const VERSION = "'+next+'"'));
 r=run();assert.equal(r.status,0,r.stderr);assert.equal(run('--check').status,0);
 const manifest=JSON.parse(fs.readFileSync(path.join(tmp,'release-manifest.json')));assert.equal(Object.keys(manifest.versions).length,2);
 console.log('Version lock: same bytes reproducible, altered code refused, new version retains historical hash PASS');
}finally{fs.rmSync(tmp,{recursive:true,force:true});}
