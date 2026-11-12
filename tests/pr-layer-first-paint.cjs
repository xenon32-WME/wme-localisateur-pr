'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../WME-Localisateur-de-PR-France.user.js'), 'utf8');
const settle = async () => { for (let i = 0; i < 80; i++) await Promise.resolve(); };

function fixture() {
    const timers = new Map(), draws = [], calls = { zoom: 0, extent: 0, segments: 0, streets: 0 };
    let timerId = 0, resolveGeometry;
    const geometry = new Promise(resolve => { resolveGeometry = resolve; });
    const root = { document: {}, setTimeout: fn => { timers.set(++timerId, fn); return timerId; }, clearTimeout: id => timers.delete(id) };
    const hooks = `root.__TEST__ = {
        refreshPrIndexLayer, drawPrIndexPoints,
        configure: (api, status, points) => {
            sdk = api; ui = { prIndexStatus: status }; prIndexLayerEnabled = true;
            prIndexRefreshGeneration = 1;
            appearanceSettings = Core.normalizeAppearanceSettings({ prLabelMode: 'always', prLabelStyle: 'cartouche' });
            searchPrLayerPoints = async () => ({ points, truncated: false });
        },
        disable: () => { prIndexLayerEnabled = false; prIndexRefreshGeneration++; },
        supersede: () => { prIndexRefreshGeneration++; },
    };`;
    vm.runInNewContext(source.replace('    initialize();', hooks), {
        unsafeWindow: root, module: { exports: {} }, console, URL, URLSearchParams, Promise, Date, JSON,
    });
    const point = { id: 'pr20', axis: 'D1075', number: 20, abscissa: 20000, coordinate: [5.3, 46.12],
        departmentCode: '01', networkType: 'D', pointType: 'PR', side: 'U' };
    const status = {};
    root.__TEST__.configure({
        Map: {
            getZoomLevel: async () => { calls.zoom++; return 16; },
            getMapExtent: async () => { calls.extent++; return [5.25, 46.10, 5.35, 46.15]; },
            removeAllFeaturesFromLayer: async () => {},
            addFeaturesToLayer: async ({ features }) => { draws.push(features); },
            setLayerVisibility: async () => {},
        },
        DataModel: {
            Segments: { getAll: async () => { calls.segments++; await geometry; return [{ id: 1, primaryStreetId: 11,
                fromNodeId: 1, toNodeId: 2, geometry: { coordinates: [[5.3, 46.11], [5.3, 46.13]] } }]; } },
            Streets: { getAll: async () => { calls.streets++; await geometry; return [{ id: 11, name: 'D1075' }]; } },
        },
    }, status, [point]);
    return { t: root.__TEST__, draws, calls, status, point, resolveGeometry,
        flush: async () => { const jobs = [...timers.values()]; timers.clear(); jobs.forEach(fn => fn()); await settle(); } };
}

(async () => {
    const f = fixture();
    const first = f.t.refreshPrIndexLayer(1);
    await settle();
    assert.equal(f.draws.length, 1, 'PRs must appear while the optional WME geometry is still pending');
    await first;
    assert.match(f.status.textContent, /1 PR chargés/);
    assert.equal(f.calls.zoom, 1, 'reuse the map view read for the refresh');
    assert.equal(f.calls.extent, 1, 'do not fetch the same extent twice before the first paint');
    const initialMarker = f.draws[0].find(x => x.properties.kind === 'pr-index');
    const initialLabel = f.draws[0].find(x => x.properties.kind === 'pr-index-cartouche');
    assert(initialLabel, 'labels remain available before WME geometry arrives');
    f.resolveGeometry(); await settle(); await f.flush();
    assert.equal(f.draws.length, 2, 'refine label placement once the geometry is ready');
    const refinedMarker = f.draws[1].find(x => x.properties.kind === 'pr-index');
    const refinedLabel = f.draws[1].find(x => x.properties.kind === 'pr-index-cartouche');
    assert.deepEqual(initialMarker.geometry.coordinates, refinedMarker.geometry.coordinates, 'the source PR position never moves');
    assert.notEqual(initialLabel.properties.cartoucheXOffset, refinedLabel.properties.cartoucheXOffset);
    assert.equal(f.calls.segments, 1); assert.equal(f.calls.streets, 1);

    const disabled = fixture();
    await disabled.t.refreshPrIndexLayer(1);
    disabled.t.disable(); disabled.resolveGeometry(); await settle(); await disabled.flush();
    assert.equal(disabled.draws.length, 1, 'late geometry must not revive a disabled layer');

    const stale = fixture();
    stale.t.supersede();
    await stale.t.drawPrIndexPoints([stale.point], { visibleBbox: [5.25, 46.10, 5.35, 46.15], zoomLevel: 16, generation: 1 });
    assert.equal(stale.draws.length, 0, 'a reused view must be rejected after a new map generation');
    console.log('PR first paint without waiting for WME geometry, later refinement and view reuse: PASS');
})().catch(error => { console.error(error); process.exitCode = 1; });
