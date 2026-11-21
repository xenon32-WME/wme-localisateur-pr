'use strict';
const assert = require('node:assert/strict');
const {harness, source} = require('./harness.cjs');

(async () => {
 const network = [], values = new Map([
  ['wme_localisateur_pr_fr:country', 'CO'],
  ['wme_localisateur_pr_fr:language', 'es'],
  ['wme_localisateur_pr_fr:auto-select-result', '1'],
 ]), readKeys = [];
 const t = harness(options => {network.push(options); throw Error('Unexpected network request');}, {
  GM_getValue: key => {readKeys.push(key); return values.get(key) || '';},
  GM_setValue: (key, value) => values.set(key, value),
 });
 assert.equal(t.loadLanguageSetting(), 'fr');
 assert.equal(values.get('wme_localisateur_pr_fr:language'), 'fr');
 assert.equal(values.get('wme_localisateur_pr_fr:auto-select-result'), '1');
 assert(!readKeys.some(key => key.endsWith(':country')));
 for (const [saved, expected] of [['en','en'], ['EN','en'], ['fr','fr'], ['es','fr'], ['','fr']]) {
  values.set('wme_localisateur_pr_fr:language', saved);
  assert.equal(t.loadLanguageSetting(), expected);
 }
 t.setLanguageUi('es'); assert.equal(t.getLanguage(), 'fr');
 t.setLanguageUi('en'); assert.equal(t.getLanguage(), 'en');
 assert.equal(t.prIndexRequestContext().country, 'FR');
 for (const country of ['CO','US','',null]) {
  await assert.rejects(() => t.requestPrData('bbox',{bbox:'5,46,6,47'},country), /France uniquement/);
 }
 for (const mode of ['target','guides']) {
  await assert.rejects(() => t.requestPrData(mode,{axis:'4005',chainage:15000},'FR'));
 }
 let searches=0;
 const api=t.createPrLocatorPublicApi({search:async()=>{searches++;},isReady:()=>true,scriptVersion:'1.2.7'});
 await assert.rejects(() => api.locate({country:'CO',axis:'4005',prFrom:'15+359'}),e=>e.code==='UNSUPPORTED_COUNTRY');
 assert.equal(searches,0); assert.equal(network.length,0);
 const hosts=[...source.matchAll(/^\/\/ @connect\s+(\S+)/gm)].map(m=>m[1]).sort();
 assert.deepEqual(hosts,['data.geopf.fr','greasyfork.org','update.greasyfork.org']);
 assert(!/supabase|colombi|inv[ií]as|Red Vial|sb_publishable_|wme-pr-country/i.test(source));
 assert(!source.includes('<option value="es">'));
 assert(!source.includes('SETTINGS_COUNTRY_KEY'));
 console.log('France isolation: no foreign provider/credential/permission, rejected unsupported requests, old language migrated, unrelated preferences retained PASS');
})().catch(error=>{console.error(error);process.exitCode=1;});
