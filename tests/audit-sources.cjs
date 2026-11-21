'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const {harness,source,ignFeature,ignCollection}=require('./harness.cjs');
const replies=[],calls=[];
const t=harness(o=>{calls.push(o);assert(replies.length);o.onload({status:200,responseText:JSON.stringify(replies.shift())});});
(async()=>{
 const date='2026-03-12T08:26:00Z';
 replies.push(ignCollection([ignFeature('dated',{date_modification:date})]));
 const r=await t.searchPrPoints({axis:'D1',lookupNumbers:[38]});
 assert.equal(r.points[0].sourceUpdatedAt,date);
 assert.match(r.points[0].source,/IGN/);
 const panel={textContent:''};t.setUi({dataOrigin:panel});
 for(const [lang,word,missing,badge] of [
  ['fr','Mise à jour','non renseignée','DE L’AUTEUR'],
  ['en','Object updates','not provided','AUTHOR']
 ]){
  t.setLanguage(lang);
  assert(t.franceSourceSummary(r.points).includes(word));
  assert(t.franceSourceSummary(r.points).includes('2026-03-12'));
  assert(t.franceSourceSummary([{sourceUpdatedAt:'bad-date'}]).includes(missing));
  const status=t.prIndexLoadedStatusMessage(r.points);
  assert(status.includes('2026-03-12'));assert(panel.textContent.includes('2026-03-12'));
  const descriptor=t.Core.buildPrCartoucheDescriptor({axis:'A40',prText:'≈121',side:'D',annotation:t.authorCorrectionBadge()});
  const svg=decodeURIComponent(descriptor.dataUri.split(',')[1]);
  assert(svg.includes(badge));assert(svg.includes('≈121'));
  assert(descriptor.height>t.Core.buildPrCartoucheDescriptor({axis:'A40',prText:'121',side:'D'}).height);
 }
 assert(t.franceSourceSummary([...r.points,{sourceUpdatedAt:null}]).includes('1 undated'));
 assert(t.franceSourceSummary([...r.points,{sourceUpdatedAt:'2026-01-20'}]).includes('2026-01-20 → 2026-03-12'));
 assert(source.includes('ui.autoSelect.checked = readSetting(SETTINGS_AUTO_SELECT_KEY) === "1"'));
 const local=harness(()=>{throw Error('No local update request');},{GM_info:{scriptUpdateURL:'https://update.greasyfork.org/scripts/590425/old.user.js',script:{updateURL:'none',downloadURL:'none'}}});
 const installation=local.getGreasyForkInstallationInfo();assert.equal(installation.metaUrl,'');assert(installation.pageUrl.includes('590425'));
 assert(!source.includes('const IS_DEV_BUILD'));
 assert(!source.includes('IGN_BDTOPO_IMPORT_EDITION'));
 console.log('Audit sources: official dates, missing dates, two languages, author correction labels PASS');
})().catch(e=>{console.error(e);process.exitCode=1});
