'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { source } = require('./harness.cjs');
const header = source.slice(0, source.indexOf('// ==/UserScript==') + '// ==/UserScript=='.length) + '\n';
const meta = fs.readFileSync(path.join(__dirname, '../WME-Localisateur-de-PR-France.meta.js'), 'utf8');
assert.equal(meta, header, 'Published update metadata must match the distributed script');
function field(name) {
  const matches = [...header.matchAll(new RegExp('^// @' + name + '\\s+(.+)$', 'gm'))];
  assert.equal(matches.length, 1, 'One metadata value required: ' + name);
  return matches[0][1].trim();
}
const repo = 'https://github.com/xenon32-WME/wme-localisateur-pr';
const raw = 'https://raw.githubusercontent.com/xenon32-WME/wme-localisateur-pr/main/';
assert.equal(field('homepageURL'), repo);
assert.equal(field('supportURL'), repo + '/issues');
assert.equal(field('updateURL'), raw + 'WME-Localisateur-de-PR-France.meta.js');
assert.equal(field('downloadURL'), raw + 'WME-Localisateur-de-PR-France.user.js');
assert.equal(field('version'), source.match(/const VERSION = "([^"]+)"/)[1]);
const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
assert(readme.includes('**' + field('version') + '**'), 'README version must be current');
assert(readme.includes(field('downloadURL')), 'Installation link must point to the released file');
assert(!source.includes('sb_secret_'), 'Server secrets must never be shipped');
assert.equal((header.match(/\/\/ @require\s/g) || []).length, 0);
console.log('Public distribution metadata: PASS');
