'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '../WME-Localisateur-de-PR-France.user.js'), 'utf8');
function fixture() {
    const requests = [], draws = [], status = {};
    const root = { document: {}, setTimeout: fn => setTimeout(fn, 0), clearTimeout };
    const hooks = `root.__TEST__ = {
        refreshPrIndexLayer,
        configure: (loader, draw, api, label) => {
            searchPrLayerPoints = loader; drawPrIndexPoints = draw;
            sdk = api; ui = { prIndexStatus: label }; prIndexLayerEnabled = true;
        },
        generation: value => { prIndexRefreshGeneration = value; },
        country: value => { currentCountry = value; },
        enabled: value => { prIndexLayerEnabled = value; },
        cache: () => prIndexCache,
    };`;
    vm.runInNewContext(source.replace('    initialize();', hooks), {
        unsafeWindow: root, module: { exports: {} }, console: { ...console, error() {} },
        URL, URLSearchParams, Promise, Date, JSON,
    });
    const t = root.__TEST__;
    let extent = [5, 46, 5.1, 46.1], generation = 0;
    t.configure((bbox, context) => new Promise((resolve, reject) => {
        requests.push({ bbox, context, resolve, reject });
    }), async points => { draws.push(points); return true; }, {
        Map: { getZoomLevel: async () => 16, getMapExtent: async () => extent },
    }, status);
    return {
        t, requests, draws, status,
        start: (nextExtent = extent) => {
            extent = nextExtent; t.generation(++generation);
            return t.refreshPrIndexLayer(generation);
        },
    };
}
const settle = async () => { for (let i = 0; i < 25; i++) await Promise.resolve(); };
const result = id => ({ points: [{ id }], truncated: false });
const networkError = () => Object.assign(new Error('temporary network failure'), { isNetworkError: true });

(async () => {
    // WME emits two refresh events for the same view while its first RPC is pending.
    const same = fixture();
    const first = same.start(); await settle();
    const second = same.start(); await settle();
    assert.equal(same.requests.length, 1, 'identical pending requests are shared');
    same.requests[0].resolve(result('current'));
    await Promise.all([first, second]);
    assert.equal(same.draws.length, 1, 'the latest refresh must draw the response');
    assert.equal(same.t.cache().points[0].id, 'current');
    assert.match(same.status.textContent, /1 PR chargés/);

    // A late response for another view must not replace the latest cache or status.
    const moved = fixture();
    const old = moved.start(); await settle();
    const latest = moved.start([6, 47, 6.1, 47.1]); await settle();
    moved.requests[1].resolve(result('latest')); await latest;
    const success = moved.status.textContent;
    moved.requests[0].resolve(result('old')); await old;
    assert.equal(moved.draws.length, 1);
    assert.equal(moved.t.cache().points[0].id, 'latest');
    assert.equal(moved.status.textContent, success);

    // Stale network errors must not announce retries over a newer successful view.
    const stale = fixture();
    const obsolete = stale.start(); await settle();
    const fresh = stale.start([6, 47, 6.1, 47.1]); await settle();
    stale.requests[1].resolve(result('fresh')); await fresh;
    const freshStatus = stale.status.textContent;
    stale.requests[0].reject(networkError()); await obsolete;
    assert.equal(stale.status.textContent, freshStatus);
    assert.equal(stale.requests.length, 2);

    // Same coordinates in a different country must use a distinct request.
    const country = fixture();
    const fr = country.start(); await settle();
    country.t.country('CO'); const co = country.start(); await settle();
    assert.equal(country.requests.length, 2);
    country.requests[1].resolve(result('co')); await co;
    country.requests[0].resolve(result('fr')); await fr;
    assert.equal(country.t.cache().points[0].id, 'co');
    assert.equal(country.draws.length, 1);

    // A failed request is released so the same view can be loaded again.
    const recovery = fixture();
    const failed = recovery.start(); await settle();
    recovery.requests[0].reject(Object.assign(new Error('HTTP 400'), { httpStatus: 400 }));
    await failed;
    assert.match(recovery.status.textContent, /HTTP 400/);
    const retry = recovery.start(); await settle();
    assert.equal(recovery.requests.length, 2);
    recovery.requests[1].resolve(result('recovered')); await retry;
    assert.equal(recovery.t.cache().points[0].id, 'recovered');

    // Disabling the layer while a request is pending must suppress its late error.
    const disabled = fixture();
    const pending = disabled.start(); await settle();
    disabled.t.enabled(false); disabled.status.textContent = 'désactivé';
    disabled.requests[0].reject(networkError()); await pending;
    assert.equal(disabled.status.textContent, 'désactivé');
    assert.equal(disabled.draws.length, 0);
    console.log('PR layer concurrent refresh, stale results, country scope and recovery: PASS');
})().catch(error => { console.error(error); process.exitCode = 1; });
