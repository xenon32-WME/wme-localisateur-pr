'use strict';
// Execute the 1.2.0 SDK startup gate in an isolated JS realm.
// No WME, HTTP, GreasyFork, browser extension, or actual UI writes.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

const filename=path.join(__dirname,'../WME-Localisateur-de-PR-France.user.js');
const source=fs.readFileSync(filename,'utf8');
const getSdkCalls=[...source.matchAll(/\broot\.getWmeSdk\s*\(/g)];
assert.equal(getSdkCalls.length,1,'The 1.2.0 must acquire WME SDK exactly once');
assert.match(source,/sdk = root\.getWmeSdk\(\{ scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME, mode: "async" \}\);/);
assert.doesNotMatch(source,/mode: isAsync \?|repli de compatibilité|sdk = root\.getWmeSdk\(\{ scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME \}\)/);

const launchMarker='    initialize();';
const probeMarker='            await inspectSdkCompatibility();\n            appearanceSettings = loadAppearanceSettings();';
assert.equal(source.split(launchMarker).length,2,'Unique real initialization entrypoint required');
assert.equal(source.split(probeMarker).length,2,'Async compatibility probe must directly precede UI initialization');

// Insert a TEST-ONLY stop after the real SDK probe. The .user.js is unchanged:
// no WME UI functions are executed by Node.
const instrumented=source
  .replace(probeMarker,
    '            await inspectSdkCompatibility();\n'
    +'            if (root.__SDK_TEST_ONLY_STOP_AFTER_PROBE) return;\n'
    +'            appearanceSettings = loadAppearanceSettings();')
  .replace(launchMarker,
    '    root.__SDK_STARTUP_PROBE = Object.freeze({\n'
    +'      initialize,\n'
    +'      mode: () => sdkModeDiagnostic.mode,\n'
    +'      sdk: () => sdk,\n'
    +'    });');

function harness(sdkFactory, initializationPromise=Promise.resolve()){
  const sdkRequests=[];
  const errors=[];
  const notices=[];
  const warnings=[];
  const root={
    document:{},
    SDK_INITIALIZED:initializationPromise,
    __SDK_TEST_ONLY_STOP_AFTER_PROBE:true,
    getWmeSdk(options){
      sdkRequests.push({...options});
      return sdkFactory(options);
    },
  };
  const logger={
    error:(...args)=>errors.push(args),
    info:(...args)=>notices.push(args),
    warn:(...args)=>warnings.push(args),
    log:()=>{},
  };
  const context={unsafeWindow:root,console:logger,module:{exports:{}},Promise,Date};
  vm.runInNewContext(instrumented,context,{filename,timeout:5000});
  assert.equal(typeof root.__SDK_STARTUP_PROBE.initialize,'function');
  return {root,errors,notices,warnings,sdkRequests,initialize:root.__SDK_STARTUP_PROBE.initialize,
    mode:root.__SDK_STARTUP_PROBE.mode};
}

function ensureOneAsyncRequest(run){
  assert.equal(run.sdkRequests.length,1,'No second getWmeSdk call allowed');
  const call=run.sdkRequests[0];
  assert.equal(call.mode,'async');
  assert.equal(call.scriptId,'wme_localisateur_pr_fr');
  assert(typeof call.scriptName==='string'&&call.scriptName.length>0);
}
async function tests(){
  {
    // Even if old WME throws for the async flag, there MUST be no sync retry.
    const run=harness(()=>{throw Error('legacy WME rejects async mode')});
    await run.initialize();
    ensureOneAsyncRequest(run);
    assert.equal(run.errors.length,1);
    assert.match(String(run.errors[0][0]),/initialisation impossible/);
    assert.equal(run.notices.length,0);
    assert.equal(run.warnings.length,0);
    assert.equal(run.root.WmePrLocator,undefined,'No public API installed on rejection');
  }
  {
    // Old WME silently ignores mode: "async". Reject a synchronous Map method.
    const run=harness(()=>({
      Map:{getZoomLevel:()=>17},
      getSDKVersion:()=> 'legacy',
      getWMEVersion:()=> 'legacy',
    }));
    await run.initialize();
    ensureOneAsyncRequest(run);
    assert.equal(run.errors.length,1);
    assert.match(String(run.errors[0][1]),/asynchrone requis/);
    assert.equal(run.mode(),'SDK asynchrone indisponible');
    assert.equal(run.notices.length,0);
    assert.equal(run.root.WmePrLocator,undefined);
  }
  {
    // Missing or malformed map API must fail closed too.
    const run=harness(()=>({Map:{}}));
    await run.initialize();
    ensureOneAsyncRequest(run);
    assert.equal(run.errors.length,1);
    assert.equal(run.mode(),'SDK asynchrone indisponible');
  }
  {
    // A rejected async SDK method may not be accepted as a successful boot.
    const run=harness(()=>({Map:{getZoomLevel:()=>Promise.reject(Error('zoom rejected'))}}));
    await run.initialize();
    ensureOneAsyncRequest(run);
    assert.equal(run.errors.length,1);
    assert.equal(run.notices.length,0);
  }
  {
    // Respect SDK_INITIALIZED before touching getWmeSdk.
    let ready;
    const gate=new Promise(resolve=>{ready=resolve});
    const run=harness(()=>({
      Map:{getZoomLevel:()=>Promise.resolve(15)},
      getSDKVersion:()=>Promise.resolve('2.async'),
      getWMEVersion:()=>Promise.resolve('wme.async'),
    }),gate);
    const task=run.initialize();
    await Promise.resolve();
    assert.equal(run.sdkRequests.length,0,'Must wait for SDK_INITIALIZED');
    ready();
    await task;
    ensureOneAsyncRequest(run);
    assert.equal(run.errors.length,0);
    assert.equal(run.warnings.length,0);
    assert.equal(run.notices.length,1);
    assert.equal(run.mode(),'async confirmé');
    assert.equal(run.root.WmePrLocator,undefined,'Only test-only UI stop may prevent API creation');
  }
  console.log('RELEASE_1_2_0_ASYNC_SDK_ONLY=PASS — single explicit async acquisition; throwing/ignored/missing/rejected SDK fails closed; ready gate respected');
}
tests().catch(e=>{console.error(e);process.exitCode=1});

