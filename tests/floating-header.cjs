'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'..','WME-Localisateur-de-PR-France.user.js'),'utf8');
const start=source.indexOf('    function addStyles() {');
const end=source.indexOf('    function readFloatingGeometry()',start);
assert(start>=0&&end>start,'CSS and floating geometry boundaries');
const element={id:'',textContent:''},installed=[];
const ctx=vm.createContext({SCRIPT_ID:'wme_localisateur_pr_fr',root:{document:{
 getElementById:()=>null,
 createElement:tag=>{assert.equal(tag,'style');return element;},
 head:{appendChild:el=>installed.push(el)}
}}});
vm.runInContext(source.slice(start,end)+'\naddStyles();',ctx);
assert.equal(installed.length,1);
const css=element.textContent;
function body(selector){
 const marker=selector+' {';
 const index=css.indexOf(marker);
 assert(index>=0,'Missing CSS rule: '+selector);
 return css.slice(index+marker.length,css.indexOf('}',index+marker.length));
}
const outer=body('.wme-pr-floating-host');
const fixed=body('.wme-pr-floating-host .wme-pr-header');
const sidebar=body('.wme-pr-header');
assert.match(outer,/overflow:\s*auto\s*;/,'Outer window remains scrollable');
assert.match(outer,/resize:\s*both\s*;/,'Outer window remains resizable');
assert.match(fixed,/position:\s*sticky\s*;/);
assert.match(fixed,/top:\s*0\s*;/);
assert.match(fixed,/z-index:\s*[1-9]/);
assert.match(fixed,/margin:\s*-12px -12px 12px\s*;/,'Covers panel gutters');
assert.match(fixed,/padding:\s*12px 12px 10px\s*;/);
assert.match(fixed,/background:\s*var\(--wz-color-base-100, #fff\)/,
 'Opaque WME theme background covers scrolling content');
assert.doesNotMatch(sidebar,/position:\s*sticky|overflow:\s*/,'Sidebar remains unchanged');
assert.match(css,/\.wme-pr-floating-host\.is-collapsed\s*\.wme-pr-panel > :not\(\.wme-pr-header\)\s*\{\s*display:\s*none\s*!important/);
assert.match(css,/\.wme-pr-floating-host\s*\.wme-pr-title-row\s*\{\s*cursor:\s*move/);
const template=source.slice(source.indexOf('        tabPane.innerHTML = '));
const header=template.slice(template.indexOf('<div class="wme-pr-header">'),template.indexOf('<div id="wme-pr-search-panel"'));
for(const id of ['wme-pr-panel-title','wme-pr-floating-collapse','wme-pr-display-toggle',
 'wme-pr-country','wme-pr-language','wme-pr-subtitle','wme-pr-customization-toggle'])
 assert(header.includes('id="'+id+'"'),'Pinned header should contain '+id);
assert(!header.includes('id="wme-pr-data-info"'),'Privacy details should scroll');
assert(source.includes('applyDisplayMode(displayMode)'),'Saved mode still applied after reload');
console.log('TEMP2 floating fixed header: PASS — full header fixed, body scrolling, drag/resize/collapse kept, anchored sidebar unaffected.');

