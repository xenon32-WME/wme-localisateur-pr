const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'WME-Localisateur-de-PR-France.user.js'), 'utf8');
assert.match(source, /GREASYFORK_UPDATE_CHECK_INTERVAL_MS = 24 \* 60 \* 60 \* 1000/);
const start = source.indexOf('    function parseGreasyForkVersion(metaText) {');
const end = source.indexOf('    function loadAppearanceSettings() {', start);
assert(start > 0 && end > start);
const actualImplementation = source.slice(start, end);
const DAY = 24 * 60 * 60 * 1000;
const BASE = 2_000_000_000_000;

function env({ now = BASE, existing = null, failsToStore = false, network = async () => '// @version      1.1.5\n', metaUrl = 'https://update.greasyfork.org/scripts/590425/a.meta.js' } = {}) {
    const settings = existing || new Map();
    const history = { requests: 0, writes: 0, errors: 0 };
    let current = now;
    let failStore = failsToStore;
    let currentMeta = metaUrl;
    let fetcher = network;
    const button = { dataset: {}, title: '', setAttribute() {} };
    const sandbox = {
        SETTINGS_GREASYFORK_UPDATE_KEY: 'wme_localisateur_pr_fr:greasyfork-update-check-v1',
        GREASYFORK_UPDATE_CHECK_INTERVAL_MS: DAY,
        SCRIPT_NAME: 'Localisateur de PR France',
        VERSION: '1.2.0.temp2',
        Date: { now: () => current },
        console: { warn: () => { history.errors++; } },
        ui: { greasyForkButton: button },
        comparePublicVersions: () => -1,
        getGreasyForkInstallationInfo: () => ({ pageUrl: 'https://greasyfork.org/fr/scripts/590425', metaUrl: currentMeta, exact: true }),
        readSetting: key => settings.get(key) || '',
        writeSetting: (key, value) => { if (failStore) throw new Error('GM_setValue failed'); settings.set(key, value); history.writes++; },
        requestText: (...args) => { history.requests++; return fetcher(...args); },
    };
    vm.createContext(sandbox);
    vm.runInContext(actualImplementation + '\nthis.check = checkGreasyForkUpdate;', sandbox);
    return { check: () => sandbox.check(), history, settings, button, clock: t => { current = t; }, metaUrl: v => { currentMeta = v; }, failStore: v => { failStore = v; }, fetcher: v => { fetcher = v; } };
}

(async () => {
    // One success: no repeated request on panel reopen or after 23h59m.
    let a = env();
    await a.check();
    assert.equal(a.history.requests, 1);
    assert.equal(JSON.parse(a.settings.values().next().value).latestVersion, '1.1.5');
    await a.check();
    a.clock(BASE + DAY - 1);
    await a.check();
    assert.equal(a.history.requests, 1);
    a.clock(BASE + DAY);
    await a.check();
    assert.equal(a.history.requests, 2);

    // Persisted cache also survives a new page context.
    const shared = new Map();
    let b = env({ existing: shared });
    await b.check();
    let bReload = env({ existing: shared, now: BASE + 3000 });
    await bReload.check();
    assert.equal(bReload.history.requests, 0);

    // A network failure is recorded *before* the HTTP request; no flood on reload.
    const brokenStorage = new Map();
    let c = env({ existing: brokenStorage, network: async () => { throw new Error('offline'); } });
    await c.check();
    assert.equal(c.history.requests, 1);
    assert.equal(JSON.parse(brokenStorage.values().next().value).attemptedAt, BASE);
    let cReload = env({ existing: brokenStorage, now: BASE + 1000 });
    await cReload.check();
    assert.equal(cReload.history.requests, 0);
    c.clock(BASE + DAY - 1);
    await c.check();
    assert.equal(c.history.requests, 1);
    c.clock(BASE + DAY);
    await c.check();
    assert.equal(c.history.requests, 2);

    // An older temp1 cache with checkedAt only remains valid.
    const legacy = new Map([['wme_localisateur_pr_fr:greasyfork-update-check-v1', JSON.stringify({ checkedAt: BASE - DAY / 2, latestVersion: '1.1.5', metaUrl: 'https://update.greasyfork.org/scripts/590425/a.meta.js' })]]);
    let d = env({ existing: legacy });
    await d.check();
    assert.equal(d.history.requests, 0);
    d.clock(BASE + DAY / 2);
    await d.check();
    assert.equal(d.history.requests, 1);

    // If storage cannot persist the attempt, no network call is made.
    let e = env({ failsToStore: true });
    await e.check();
    await e.check();
    assert.equal(e.history.requests, 0);
    assert(e.history.errors >= 1);

    // Concurrent calls within one script instance result in one request.
    let finish;
    let f = env({ network: () => new Promise(resolve => { finish = resolve; }) });
    const p1 = f.check();
    const p2 = f.check();
    assert.equal(f.history.requests, 1);
    finish('// @version 1.1.5\n');
    await Promise.all([p1, p2]);
    assert.equal(f.history.requests, 1);

    // Changing the script metadata URL does not reset the per-script limit.
    let g = env();
    await g.check();
    g.metaUrl('https://update.greasyfork.org/scripts/590425/other.meta.js');
    await g.check();
    assert.equal(g.history.requests, 1);

    // Local installation has no metadata check.
    let h = env({ metaUrl: '' });
    await h.check();
    assert.equal(h.history.requests, 0);
    assert.equal(h.button.dataset.exactPage, 'true');
    console.log('GreasyFork 24 h : OK — success, failure, retry, legacy cache, reload, concurrency, no storage, local install.');
})().catch(error => { console.error(error); process.exitCode = 1; });

