'use strict';
// Privacy / GreasyFork / Tampermonkey network guards against regressions.
// Synthetic-only tests; no network, WME, cookies or personal IPs accessed.
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'..','WME-Localisateur-de-PR-France.user.js'),'utf8');
function part(start,end){
 const i=source.indexOf(start),j=source.indexOf(end,i+start.length);
 assert(i>=0&&j>i,'Missing part: '+start);return source.slice(i,j);
}
const translated=part('    const UI_TRANSLATIONS = Object.freeze({','    const CUSTOMIZATION_TRANSLATIONS = Object.freeze({');
const translations=vm.runInNewContext(translated+'UI_TRANSLATIONS');
for(const lang of ['fr','es','en']){
 const t=translations[lang];
 assert(t.sourceServerInfo.includes('Supabase'),lang+' hosting');
 assert(t.connectionPrivacyInfo.includes('Supabase'),lang+' provider');
 assert(!t.connectionPrivacyInfo.includes('MariaDB'),lang+' no obsolete database assurance');
 assert(t.localPrivacyInfo.includes('Tampermonkey'),lang+' local storage');
 assert(t.localPrivacyInfo.includes('GreasyFork'),lang+' updates');
 assert(t.localPrivacyInfo.includes('24'),lang+' interval');
}
assert(source.includes('<p id="wme-pr-data-network"></p>'));
assert(source.includes('<p id="wme-pr-data-local"></p>'));
assert(source.includes('ui.dataNetwork.textContent = tr("connectionPrivacyInfo")'));
assert(source.includes('ui.dataLocal.textContent = tr("localPrivacyInfo")'));
const guard=vm.createContext({URL});
vm.runInContext(part('    function isAllowedGreasyForkUrl(value) {','    function getGreasyForkInstallationInfo() {')
  +'globalThis.validUrl=isAllowedGreasyForkUrl;',guard);
for(const url of [
 'https://greasyfork.org/fr/scripts/590425-wme-localisateur-de-pr-france',
 'https://update.greasyfork.org/scripts/590425/PR-Locator.user.js',
 'https://update.greasyfork.org/scripts/590425/PR-Locator.meta.js',
])assert(guard.validUrl(url),'Expected accepted update URL: '+url);
for(const url of [
 'http://update.greasyfork.org/scripts/590425/update.meta.js',
 'https://update.greasyfork.org.attacker.invalid/scripts/590425/a.meta.js',
 'https://evil.invalid/?next=https://update.greasyfork.org/scripts/590425/a.user.js',
 'https://update.greasyfork.org/scripts/999999/malicious.meta.js',
 'https://greasyfork.org/en/scripts/1-other',
 'https://user:password@greasyfork.org/fr/scripts/590425-file.user.js',
 'https://update.greasyfork.org:444/scripts/590425/file.user.js',
])assert(!guard.validUrl(url),'Expected rejected metadata URL: '+url);
assert(source.includes('.filter(isAllowedGreasyForkUrl)'), 'Only trusted update URLs must be retained');
const wrapper=part('    function requestWithoutCookies(request, details) {',
  '    function requestText(url, sourceLabel = "service distant", options = {}) {');
assert.equal((source.match(/requestWithoutCookies\(request, \{/g)||[]).length,2,
 'Both JSON and GreasyFork metadata transport must be cookie-free');
const scheduled=new Map();let nextId=1,clears=0;
const sandbox=vm.createContext({
  root:{
   setTimeout:(fn,ms)=>{const id=nextId++;scheduled.set(id,{fn,ms});return id;},
   clearTimeout:id=>{scheduled.delete(id);clears++;}
  },PR_REQUEST_TIMEOUT_MS:20000,Promise
});
vm.runInContext(wrapper+'globalThis.req=requestWithoutCookies;',sandbox);
let callDetails=null,loaded=0,failed=0,expired=0,abortCount=0;
function send(){return sandbox.req(d=>{callDetails=d;return {abort(){abortCount++;}}},{
  method:'GET',url:'https://example.invalid/rest/v1/rpc/lookup',
  timeout:1234,onload:()=>loaded++,onerror:()=>failed++,ontimeout:()=>expired++
});}
send();assert.equal(callDetails.anonymous,true);
assert.equal(callDetails.method,'GET');
assert.equal([...scheduled.values()][0].ms,1234);
callDetails.onload({status:200,responseText:'{}'});
assert.equal(loaded,1);assert.equal(scheduled.size,0);
callDetails.onerror(new Error('late'));assert.equal(failed,0);
send();assert.equal(scheduled.size,1);
const watchdog=[...scheduled.values()][0].fn;
watchdog();assert.equal(expired,1);assert.equal(abortCount,1);
callDetails.onload({status:200});assert.equal(loaded,1);
const before=clears;
assert.throws(()=>sandbox.req(()=>{throw Error('request failed');},{timeout:5000}),/request failed/);
assert(scheduled.size===0 && clears>before,'Synchronous failures must release timeout guards');
let resolved=0;
sandbox.req(()=>Promise.resolve({status:200}),{timeout:900,onload:()=>resolved++});
(async()=>{await Promise.resolve();await Promise.resolve();
 assert.equal(resolved,1);assert.equal(scheduled.size,0);
 console.log('TEMP2 cookie-free requests / watchdog / HTTPS GreasyFork allowlist / FR-ES-EN privacy: PASS.');
})().catch(e=>{console.error(e);process.exitCode=1});

