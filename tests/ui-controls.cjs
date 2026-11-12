'use strict';
// Dynamic UI tests with fake controls. No WME DOM/network required.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const src=fs.readFileSync(path.join(__dirname,'..','WME-Localisateur-de-PR-France.user.js'),'utf8');
function extract(a,b){const i=src.indexOf(a),j=src.indexOf(b,i+a.length);assert(i>=0&&j>i,'Missing '+a);return src.slice(i,j);}
const c=extract('    const COUNTRY_CONFIG = Object.freeze({','    const UI_TRANSLATIONS = Object.freeze({');
const l=extract('    const UI_TRANSLATIONS = Object.freeze({','    const CUSTOMIZATION_TRANSLATIONS = Object.freeze({');
const {COUNTRY_CONFIG,UI_TRANSLATIONS}=vm.runInNewContext(c+l+'({COUNTRY_CONFIG,UI_TRANSLATIONS})');
assert.equal(COUNTRY_CONFIG.FR.source,'IGN BD TOPO');
assert.equal(COUNTRY_CONFIG.CO.source,'INVÍAS · Red Vial · BETA');
for(const lang of ['fr','es','en']){
 const t=UI_TRANSLATIONS[lang];
 for(const word of ['Supabase']) assert(t.sourceServerInfo.includes(word),lang+' hosting '+word);
 assert(t.franceSourceInfo.includes('IGN') && t.colombiaSourceInfo.includes('INVÍAS'));
 assert(t.sideRequired && t.motorwayHelp && t.attach && t.detach);
 for(const mode of ['sidebar','floating']){
  const button={textContent:'',title:'',setAttribute(key,val){this[key]=val;}};
  const sandbox=vm.createContext({ui:{displayToggle:button},displayMode:mode,tr:key=>t[key]});
  vm.runInContext(extract('    function updateDisplayToggleUi() {','    function applyCountryAndLanguageUi() {')+'updateDisplayToggleUi()',sandbox);
  const label=mode==='floating'?t.attach:t.detach;
  assert.equal(button.textContent,label);assert.equal(button.title,label);assert.equal(button['aria-label'],label);
 }
}
assert(extract('    function applyCountryAndLanguageUi() {','    async function setCountry(').includes('updateDisplayToggleUi()'));
assert(extract('    function applyDisplayMode(mode) {','    function buildDepartmentOptions() {').includes('updateDisplayToggleUi()'));
assert(src.includes('searchRouteType === "A" ? "sideRequired" : "side"'));
assert(src.includes('isFrance && searchRouteType === "A" ? tr("motorwayHelp")'));
const side={options:[],_value:'',replaceChildren(...opts){this.options=opts;this._value=opts[0]?.value??'';}};
Object.defineProperty(side,'value',{get(){return this._value;},set(x){this._value=this.options.some(o=>o.value===x)?x:'';}});
const ctx=vm.createContext({ui:{side,axis:{value:'A40'}},searchRouteType:'A',
 root:{document:{createElement:()=>({value:'',textContent:''})}},normalizeSearchAxis:v=>v,
 motorwaySearchDestination:(axis,side)=>axis==='A40'?(side==='D'?'Genève':'Mâcon'):''});
vm.runInContext(extract('    function refreshSearchSideOptions(departmentCode = null) {',
 '    function populateIntercommunalManagerOptions() {'),ctx);
const refresh=()=>vm.runInContext('refreshSearchSideOptions()',ctx);
const values=()=>side.options.map(o=>o.value);
refresh();assert.deepEqual(values(),['D','G']);assert.equal(side.value,'D');
assert(side.options[0].textContent.startsWith('Sens 1'));
assert(side.options[1].textContent.startsWith('Sens 2'));
side.value='G';refresh();assert.equal(side.value,'G');
ctx.ui.axis.value='A43';refresh();assert.equal(side.value,'G');
side._value='';refresh();assert.equal(side.value,'D');
side._value='Indifférent';refresh();assert.equal(side.value,'D');
for(const route of ['D','N','I']){
 ctx.searchRouteType=route;ctx.ui.axis.value=route==='I'?'M7':route+'79';side.value='';refresh();
 assert(values().includes(''),route+' keeps automatic');assert.equal(side.value,'');
 if(route==='N')assert.equal(side.options[0].textContent,'Indifférent');
}
ctx.searchRouteType='A';ctx.ui.axis.value='A40';refresh();
assert.deepEqual(values(),['D','G']);assert.equal(side.value,'D');
side.value='G';ctx.searchRouteType='D';refresh();ctx.searchRouteType='A';refresh();assert.equal(side.value,'G');
assert(src.includes('const preferredSide = external ? options.side : ui.side.value;'));
console.log('TEMP2 UI FR/ES/EN + dock/tooltip + hosting transparency + Axx direction: PASS.');

