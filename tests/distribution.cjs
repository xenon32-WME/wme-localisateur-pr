'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { source } = require('./harness.cjs');
const header = source.slice(0, source.indexOf('// ==/UserScript==') + '// ==/UserScript=='.length) + '\n';
const meta = fs.readFileSync(path.join(__dirname, '../WME-Localisateur-de-PR-France.meta.js'), 'utf8');
assert(meta === header, 'Published update metadata must match the distributed script');
function field(name) {
  const matches = [...header.matchAll(new RegExp('^// @' + name + '\\s+(.+)$', 'gm'))];
  assert.equal(matches.length, 1, 'One metadata value required: ' + name);
  return matches[0][1].trim();
}
const repo = 'https://github.com/xenon32-WME/wme-localisateur-pr';
assert.equal(field('homepageURL'), repo);
assert.equal(field('supportURL'), repo + '/issues');
assert(!/^\/\/ @(?:updateURL|downloadURL|installURL)\s/m.test(header), 'Let GreasyFork supply its update channel; no none or main URL in the submitted header');
assert.equal(field('version'), source.match(/const VERSION = "([^"]+)"/)[1]);
const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
assert(readme.includes('**' + field('version') + '**'), 'README version must be current');
assert(readme.includes('archive'), 'Local development install is distributed in an archive');
assert(!source.includes('sb_secret_'), 'Server secrets must never be shipped');
assert.equal((header.match(/\/\/ @require\s/g) || []).length, 0);
console.log('Public distribution metadata: PASS');
