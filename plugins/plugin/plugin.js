var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var plugin_exports = {};
__export(plugin_exports, {
  cool: () => cool,
  default: () => plugin_default,
  greet: () => greet,
  plugin: () => plugin
});
const import_meta = {};
let wasm;
let cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachegetInt32Memory0;
}
let cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function cool() {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.cool(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(r0, r1);
  }
}
function plugin() {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.plugin(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(r0, r1);
  }
}
function greet() {
  wasm.greet();
}
async function load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        if (module2.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
async function init(input) {
  if (typeof input === "undefined") {
    input = new URL("plugin_bg.wasm", import_meta.url);
  }
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_alert_bf33e1927c0720cc = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
  };
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = require("fs").readFileSync(require("path").join(__dirname, "plugin.wasm"));
  }
  const { instance, module: module2 } = await load(await input, imports);
  wasm = instance.exports;
  init.__wbindgen_wasm_module = module2;
  return wasm;
}
var plugin_default = init;
module.exports = __toCommonJS(plugin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cool,
  greet,
  plugin
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGx1Z2luLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbmxldCB3YXNtO1xuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5MDtcbn1cblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG4vKipcbiogQHJldHVybnMge3N0cmluZ31cbiovXG5leHBvcnQgZnVuY3Rpb24gY29vbCgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXRwdHIgPSB3YXNtLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KTtcbiAgICAgICAgd2FzbS5jb29sKHJldHB0cik7XG4gICAgICAgIHZhciByMCA9IGdldEludDMyTWVtb3J5MCgpW3JldHB0ciAvIDQgKyAwXTtcbiAgICAgICAgdmFyIHIxID0gZ2V0SW50MzJNZW1vcnkwKClbcmV0cHRyIC8gNCArIDFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHIwLCByMSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KTtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocjAsIHIxKTtcbiAgICB9XG59XG5cbi8qKlxuKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW4oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmV0cHRyID0gd2FzbS5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7XG4gICAgICAgIHdhc20ucGx1Z2luKHJldHB0cik7XG4gICAgICAgIHZhciByMCA9IGdldEludDMyTWVtb3J5MCgpW3JldHB0ciAvIDQgKyAwXTtcbiAgICAgICAgdmFyIHIxID0gZ2V0SW50MzJNZW1vcnkwKClbcmV0cHRyIC8gNCArIDFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHIwLCByMSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KTtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocjAsIHIxKTtcbiAgICB9XG59XG5cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBncmVldCgpIHtcbiAgICB3YXNtLmdyZWV0KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWQobW9kdWxlLCBpbXBvcnRzKSB7XG4gICAgaWYgKHR5cGVvZiBSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJyAmJiBtb2R1bGUgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhtb2R1bGUsIGltcG9ydHMpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgIT0gJ2FwcGxpY2F0aW9uL3dhc20nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZ2AgZmFpbGVkIGJlY2F1c2UgeW91ciBzZXJ2ZXIgZG9lcyBub3Qgc2VydmUgd2FzbSB3aXRoIGBhcHBsaWNhdGlvbi93YXNtYCBNSU1FIHR5cGUuIEZhbGxpbmcgYmFjayB0byBgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVgIHdoaWNoIGlzIHNsb3dlci4gT3JpZ2luYWwgZXJyb3I6XFxuXCIsIGUpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IG1vZHVsZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICByZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydHMpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShtb2R1bGUsIGltcG9ydHMpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5Lkluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbnN0YW5jZSwgbW9kdWxlIH07XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdChpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlucHV0ID0gbmV3IFVSTCgncGx1Z2luX2JnLndhc20nLCBpbXBvcnQubWV0YS51cmwpO1xuICAgIH1cbiAgICBjb25zdCBpbXBvcnRzID0ge307XG4gICAgaW1wb3J0cy53YmcgPSB7fTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19hbGVydF9iZjMzZTE5MjdjMDcyMGNjID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgICAgICBhbGVydChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIFJlcXVlc3QgPT09ICdmdW5jdGlvbicgJiYgaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB8fCAodHlwZW9mIFVSTCA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnB1dCBpbnN0YW5jZW9mIFVSTCkpIHtcbiAgICAgICAgaW5wdXQgPSBmZXRjaChpbnB1dCk7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHsgaW5zdGFuY2UsIG1vZHVsZSB9ID0gYXdhaXQgbG9hZChhd2FpdCBpbnB1dCwgaW1wb3J0cyk7XG5cbiAgICB3YXNtID0gaW5zdGFuY2UuZXhwb3J0cztcbiAgICBpbml0Ll9fd2JpbmRnZW5fd2FzbV9tb2R1bGUgPSBtb2R1bGU7XG5cbiAgICByZXR1cm4gd2FzbTtcbn1cblxu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
