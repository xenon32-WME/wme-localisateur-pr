'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const source = fs.readFileSync(path.join(__dirname, '../WME-Localisateur-de-PR-France.user.js'), 'utf8');
const settle = async () => { for (let i = 0; i < 100; i++) await Promise.resolve(); };
const point = (id, lon) => ({ id, axis: 'D1075', number: 20, abscissa: 20000,
    coordinate: [lon, 46.12], departmentCode: '01', networkType: 'D', pointType: 'PR', side: 'U' });

function fixture({ zoom = 16, points = [point('A', 5.3)] } = {}) {
    const timers = new Map(), events = new Map(), requests = [];
    let nextTimer = 0, now = 0, extent = [5.25, 46.10, 5.35, 46.15], features = [], removeHook;
    const root = { document: {},
        setTimeout(fn, delay = 0) { const id = ++nextTimer; timers.set(id, { fn, due: now + delay }); return id; },
        clearTimeout: id => timers.delete(id),
    };
    // Model an async SDK and its real event handlers, scheduler, cache and renderer.
    const hooks = `root.__TEST__ = {
        configure(api, loader, status) {
            sdk = api; searchPrLayerPoints = loader; ui = { prIndexStatus: status };
            prIndexLayerEnabled = true;
            appearanceSettings = Core.normalizeAppearanceSettings({ prLabelMode: 'never' });
            bindPrIndexMapEvents(); schedulePrIndexRefresh(0, true);
        },
        drawPrIndexPoints,
        disable() { prIndexLayerEnabled = false; prIndexRefreshGeneration++; },
    };`;
    vm.runInNewContext(source.replace('    initialize();', hooks), {
        unsafeWindow: root, module: { exports: {} }, console, URL, URLSearchParams, Promise, Date, JSON,
    });
    const status = {};
    root.__TEST__.configure({
        Events: { on: async ({ eventName, eventHandler }) => events.set(eventName, eventHandler) },
        Map: {
            getZoomLevel: async () => zoom, getMapExtent: async () => extent,
            removeAllFeaturesFromLayer: async () => { features = []; if (removeHook) { const fn = removeHook; removeHook = null; await fn(); } },
            addFeaturesToLayer: async args => { features = args.features; }, setLayerVisibility: async () => {},
        },
        DataModel: { Segments: { getAll: async () => [] }, Streets: { getAll: async () => [] } },
    }, async bbox => { requests.push([...bbox]); return { points: points.filter(p => p.coordinate[0] >= bbox[0] && p.coordinate[0] <= bbox[2]), truncated: false }; }, status);
    return {
        t: root.__TEST__, requests, status,
        moveTo(lon) { extent = [lon - .05, 46.10, lon + .05, 46.15]; },
        event(name) { events.get(name)(); },
        afterRemove(fn) { removeHook = fn; },
        markers: () => features.filter(f => f.properties.kind === 'pr-index'),
        async tick(ms = 1000) {
            const end = now + ms;
            await settle();
            for (let i = 0; i < 100; i++) {
                const next = [...timers].filter(([, t]) => t.due <= end).sort((a, b) => a[1].due - b[1].due)[0];
                if (!next) { now = end; return; }
                now = next[1].due; timers.delete(next[0]); next[1].fn(); await settle();
            }
            throw new Error('timer loop');
        },
    };
}

test('successive map moves fetch and display each new view', async () => {
    const f = fixture({ points: [point('A', 5.3), point('B', 6.3), point('C', 7.3)] });
    await f.tick(); assert.equal(f.markers().length, 1);
    for (const lon of [6.3, 7.3]) {
        f.moveTo(lon); f.event('wme-map-move-end'); await f.tick();
        assert.equal(f.markers()[0].geometry.coordinates[0], lon);
    }
    assert.equal(f.requests.length, 3);
});

test('map data completion recovers a view not refreshed by move-end, even without labels', async () => {
    const f = fixture({ zoom: 15, points: [point('A', 5.3), point('B', 6.3)] });
    await f.tick();
    f.moveTo(6.3); f.event('wme-map-data-loaded'); await f.tick();
    assert.equal(f.requests.length, 2, 'data-loaded must check the new extent, not only relayout old cached points');
    assert.equal(f.markers()[0].geometry.coordinates[0], 6.3);
    f.event('wme-map-data-loaded'); await f.tick();
    assert.equal(f.requests.length, 2, 'a repeated data-loaded event should reuse the current cache');
    f.t.disable(); f.moveTo(7.3); f.event('wme-map-data-loaded'); await f.tick();
    assert.equal(f.requests.length, 2, 'disabled layers must not load new areas');
});

test('a draw superseded after removal cannot leave stale render keys and an empty layer', async () => {
    const a = point('A', 5.3), b = point('B', 5.31);
    const f = fixture({ points: [a] }); await f.tick();
    let latest;
    f.afterRemove(() => { latest = f.t.drawPrIndexPoints([a]); });
    await f.t.drawPrIndexPoints([b]); await latest;
    assert.equal(f.markers().length, 1, 'the previous feature key does not prove anything is still on the map');
    assert.equal(f.markers()[0].geometry.coordinates[0], 5.3);
});
