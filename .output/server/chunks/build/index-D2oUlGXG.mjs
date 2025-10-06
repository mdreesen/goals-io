import { _ as __nuxt_component_0 } from './Header-BVSOQCaH.mjs';
import { defineComponent, ref, computed, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { i as useMotion } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const GOAL_OZ = 100;
const ML_PER_OZ = 29.57;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TrackerHydration",
  __ssrInlineRender: true,
  setup(__props) {
    const GOAL_ML = GOAL_OZ * ML_PER_OZ;
    const currentIntakeML = ref(0);
    const manualAmountOz = ref(8);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const currentIntakeOz = computed(() => {
      return (currentIntakeML.value / ML_PER_OZ).toFixed(0);
    });
    const progressPercent = computed(() => {
      const percentage = currentIntakeML.value / GOAL_ML * 100;
      return Math.min(percentage, 100);
    });
    const progressAccentClass = computed(() => {
      if (progressPercent.value < 50) return "from-teal-600 to-teal-700";
      if (progressPercent.value < 90) return "from-blue-500 to-indigo-600";
      return "from-green-500 to-teal-500";
    });
    const trackerRef = ref();
    useMotion(trackerRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-400"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg> Ascend Hydration Tracker </h1><p class="mt-2 text-base text-gray-400">Achieve your daily $\\text{100 oz}$ goal for optimal performance.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("successfully") || saveMessage.value.includes("reset"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Intake is zero"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><p class="text-xl font-medium text-gray-400">Current Intake</p><p class="${ssrRenderClass([{ "text-green-400": progressPercent.value >= 100 }, "text-7xl font-extrabold text-white mt-1 transition-colors duration-500"])}">${ssrInterpolate(currentIntakeOz.value)} <span class="text-3xl font-semibold text-gray-500">oz</span></p><p class="text-sm font-medium text-gray-500 mt-1">Goal: ${ssrInterpolate(GOAL_OZ)} oz</p></div><div${ssrRenderAttrs(mergeProps({ class: "w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } })))}><div class="${ssrRenderClass([["bg-gradient-to-r", progressAccentClass.value], "h-full rounded-full transition-all duration-1000 ease-out"])}" style="${ssrRenderStyle({ width: progressPercent.value + "%" })}"></div></div><form${ssrRenderAttrs(mergeProps({ class: "flex space-x-4 pt-4 border-t border-gray-800/50" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><div class="relative flex-grow"><input type="number"${ssrRenderAttr("value", manualAmountOz.value)} min="1" placeholder="8" required class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold">oz</span></div><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || manualAmountOz.value <= 0) ? " disabled" : ""} class="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 hover:from-teal-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span></button></form><div${ssrRenderAttrs(mergeProps({ class: "flex justify-between space-x-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value || currentIntakeML.value === 0) ? " disabled" : ""} class="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-indigo-700/30 hover:from-indigo-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Log Daily Intake </span></button><button${ssrIncludeBooleanAttr(isSaving.value || currentIntakeML.value === 0) ? " disabled" : ""} class="flex-shrink-0 px-5 py-3 rounded-full bg-gray-700 font-bold text-gray-300 transition duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-700/20 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 2v6h6"></path><path d="M21 22v-6h-6"></path><path d="M21 8A10 10 0 0 0 4.5 4.5"></path><path d="M3 16a10 10 0 0 0 16.5 3.5"></path></svg></button></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerHydration.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "AppTrackerHydration" });
const GOAL_MINUTES = 5;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TrackerColdSoak",
  __ssrInlineRender: true,
  setup(__props) {
    const GOAL_SECONDS = GOAL_MINUTES * 60;
    ref(null);
    const durationSeconds = ref(0);
    const isRunning = ref(false);
    ref(null);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const formattedTime = computed(() => {
      const totalSeconds = durationSeconds.value;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const pad = (num) => num.toString().padStart(2, "0");
      return `${pad(minutes)}:${pad(seconds)}`;
    });
    const progressPercent = computed(() => {
      const percentage = durationSeconds.value / GOAL_SECONDS * 100;
      return Math.min(percentage, 100);
    });
    const progressAccentClass = computed(() => {
      if (progressPercent.value < 50) return "from-blue-600 to-cyan-500";
      if (progressPercent.value < 90) return "from-blue-400 to-cyan-400";
      return "from-white to-sky-300";
    });
    const trackerRef = ref();
    useMotion(trackerRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-sky-400"><path d="M12 2v2"></path><path d="m19.8 4.2-1.4 1.4"></path><path d="M22 12h-2"></path><path d="m19.8 19.8-1.4-1.4"></path><path d="M12 22v-2"></path><path d="m4.2 19.8 1.4-1.4"></path><path d="M2 12h2"></path><path d="m4.2 4.2 1.4 1.4"></path><circle cx="12" cy="12" r="7"></circle></svg> Ascend Cold Soak Tracker </h1><p class="mt-2 text-base text-gray-400">Track your contrast therapy sessions and optimize recovery.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("successfully") || saveMessage.value.includes("Embrace the cold"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("duration is zero"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging") || saveMessage.value.includes("paused") || saveMessage.value.includes("resumed")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><p class="text-xl font-medium text-gray-400">Current Soak Time</p><p class="${ssrRenderClass([{ "text-sky-400": durationSeconds.value > 0, "text-teal-400": progressPercent.value >= 100 }, "text-7xl font-extrabold text-white mt-1 transition-colors duration-500"])}">${ssrInterpolate(formattedTime.value)}</p><p class="text-sm font-medium text-gray-500 mt-1">Goal: ${ssrInterpolate(GOAL_MINUTES)} minutes</p></div><div${ssrRenderAttrs(mergeProps({ class: "w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } })))}><div class="${ssrRenderClass([["bg-gradient-to-r", progressAccentClass.value], "h-full rounded-full transition-all duration-1000 ease-out"])}" style="${ssrRenderStyle({ width: progressPercent.value + "%" })}"></div></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-center space-x-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="${ssrRenderClass([{
        "from-red-600 to-pink-700 shadow-red-700/30 hover:from-red-500 hover:to-pink-600 focus:ring-red-500/50": isRunning.value,
        // Red when running (to pause)
        "from-green-600 to-teal-700 shadow-green-700/30 hover:from-green-500 hover:to-teal-600 focus:ring-green-500/50": !isRunning.value
        // Green when paused (to start)
      }, "flex-1 px-5 py-3 rounded-full bg-gradient-to-r font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl hover:scale-[1.01] focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed"])}"><span class="flex items-center justify-center">`);
      if (isRunning.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`);
      }
      _push(` ${ssrInterpolate(isRunning.value ? "Pause Soak" : durationSeconds.value > 0 ? "Resume Soak" : "Start Soak")}</span></button></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-between space-x-4 pt-4 border-t border-gray-800/50" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value || durationSeconds.value === 0) ? " disabled" : ""} class="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-sky-700/30 hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Log Session (${ssrInterpolate(formattedTime.value)}) </span></button><button${ssrIncludeBooleanAttr(isSaving.value || durationSeconds.value === 0) ? " disabled" : ""} class="flex-shrink-0 px-5 py-3 rounded-full bg-gray-700 font-bold text-gray-300 transition duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-700/20 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 2v6h6"></path><path d="M21 22v-6h-6"></path><path d="M21 8A10 10 0 0 0 4.5 4.5"></path><path d="M3 16a10 10 0 0 0 16.5 3.5"></path></svg></button></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerColdSoak.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "AppTrackerColdSoak" });
const GOAL_HOURS = 16;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerFasting",
  __ssrInlineRender: true,
  setup(__props) {
    const GOAL_SECONDS = GOAL_HOURS * 60 * 60;
    ref(null);
    const durationSeconds = ref(0);
    const isRunning = ref(false);
    ref(null);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const formattedTime = computed(() => {
      const totalSeconds = durationSeconds.value;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      const pad = (num) => num.toString().padStart(2, "0");
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    });
    const progressPercent = computed(() => {
      const percentage = durationSeconds.value / GOAL_SECONDS * 100;
      return Math.min(percentage, 100);
    });
    const progressAccentClass = computed(() => {
      if (progressPercent.value < 50) return "from-purple-600 to-indigo-500";
      if (progressPercent.value < 90) return "from-pink-500 to-purple-600";
      return "from-orange-400 to-yellow-300";
    });
    const trackerRef = ref();
    useMotion(trackerRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-pink-400"><path d="M12 2v2"></path><path d="m16 20-3-3H9L6 20"></path><path d="M12 22v-2"></path><path d="M5 22h14"></path><path d="M18 6a6 6 0 1 0-12 0 6 6 0 1 0 12 0Z"></path></svg> Ascend Fasting Tracker </h1><p class="mt-2 text-base text-gray-400">Track your intermittent fasting duration and metabolic cycles.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("successfully") || saveMessage.value.includes("Focus on your energy"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("duration is zero"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging") || saveMessage.value.includes("paused") || saveMessage.value.includes("resumed")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><p class="text-xl font-medium text-gray-400">Elapsed Time (HH:MM:SS)</p><p class="${ssrRenderClass([{ "text-pink-400": durationSeconds.value > 0, "text-orange-400": progressPercent.value >= 100 }, "text-7xl font-extrabold text-white mt-1 transition-colors duration-500"])}">${ssrInterpolate(formattedTime.value)}</p><p class="text-sm font-medium text-gray-500 mt-1">Target: ${ssrInterpolate(GOAL_HOURS)} hours</p></div><div${ssrRenderAttrs(mergeProps({ class: "w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } })))}><div class="${ssrRenderClass([["bg-gradient-to-r", progressAccentClass.value], "h-full rounded-full transition-all duration-1000 ease-out"])}" style="${ssrRenderStyle({ width: progressPercent.value + "%" })}"></div></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-center space-x-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="${ssrRenderClass([{
        "from-red-600 to-pink-700 shadow-red-700/30 hover:from-red-500 hover:to-pink-600 focus:ring-red-500/50": isRunning.value,
        // Red when running (to pause)
        "from-green-600 to-teal-700 shadow-green-700/30 hover:from-green-500 hover:to-teal-600 focus:ring-green-500/50": !isRunning.value
        // Green when paused (to start)
      }, "flex-1 px-5 py-3 rounded-full bg-gradient-to-r font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl hover:scale-[1.01] focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed"])}"><span class="flex items-center justify-center">`);
      if (isRunning.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`);
      }
      _push(` ${ssrInterpolate(isRunning.value ? "Pause Fast" : durationSeconds.value > 0 ? "Resume Fast" : "Start Fast")}</span></button></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-between space-x-4 pt-4 border-t border-gray-800/50" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value || durationSeconds.value === 0) ? " disabled" : ""} class="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-purple-700/30 hover:from-purple-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> End and Log Fast (${ssrInterpolate(formattedTime.value)}) </span></button><button${ssrIncludeBooleanAttr(isSaving.value || durationSeconds.value === 0) ? " disabled" : ""} class="flex-shrink-0 px-5 py-3 rounded-full bg-gray-700 font-bold text-gray-300 transition duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-700/20 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 2v6h6"></path><path d="M21 22v-6h-6"></path><path d="M21 8A10 10 0 0 0 4.5 4.5"></path><path d="M3 16a10 10 0 0 0 16.5 3.5"></path></svg></button></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerFasting.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "AppTrackerFasting" });
const GOAL_WEIGHT_LBS = 180;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWeight",
  __ssrInlineRender: true,
  setup(__props) {
    const currentWeightLbs = ref(205);
    const targetWeightLbs = ref(GOAL_WEIGHT_LBS);
    const weightInput = ref(205);
    const isLogging = ref(false);
    const saveMessage = ref(null);
    const progressPercent = computed(() => {
      const startingWeight = 220;
      if (currentWeightLbs.value <= targetWeightLbs.value) return 100;
      const totalDifference = startingWeight - targetWeightLbs.value;
      const currentDifference = startingWeight - currentWeightLbs.value;
      if (totalDifference <= 0) return 0;
      const percentage = currentDifference / totalDifference * 100;
      return Math.min(Math.max(percentage, 0), 100);
    });
    const progressAccentClass = computed(() => {
      if (progressPercent.value < 50) return "from-red-500 to-orange-400";
      if (progressPercent.value < 90) return "from-teal-500 to-cyan-500";
      return "from-green-500 to-blue-500";
    });
    const statusText = computed(() => {
      if (currentWeightLbs.value <= targetWeightLbs.value) {
        return "Goal Achieved! Maintaining strength.";
      }
      const difference = currentWeightLbs.value - targetWeightLbs.value;
      return `${difference.toFixed(1)} lbs to go. Keep Ascending!`;
    });
    const trackerRef = ref();
    useMotion(trackerRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-400"><path d="M12 3a7 7 0 0 0-7 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a7 7 0 0 0-7-7z"></path><path d="M5 10l7 7 7-7"></path><line x1="12" y1="17" x2="12" y2="20"></line></svg> Ascend Weight Tracker </h1><p class="mt-2 text-base text-gray-400">Log your progress towards your target weight in pounds ($\\text{lbs}$). </p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("successfully") || saveMessage.value.includes("Weight updated"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("valid weight"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><p class="text-xl font-medium text-gray-400">Current Weight</p><p class="${ssrRenderClass([{ "text-teal-400": currentWeightLbs.value <= targetWeightLbs.value }, "text-7xl font-extrabold text-white mt-1 transition-colors duration-500"])}">${ssrInterpolate(currentWeightLbs.value.toFixed(1))} <span class="text-3xl font-semibold text-gray-500">lbs</span></p><p class="text-sm font-medium text-gray-500 mt-1">Target: ${ssrInterpolate(targetWeightLbs.value)} lbs</p><p class="${ssrRenderClass([{ "text-green-400": currentWeightLbs.value <= targetWeightLbs.value, "text-yellow-400": currentWeightLbs.value > targetWeightLbs.value }, "text-sm font-bold mt-2"])}">${ssrInterpolate(statusText.value)}</p></div><div${ssrRenderAttrs(mergeProps({ class: "w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } })))}><div class="${ssrRenderClass([["bg-gradient-to-r", progressAccentClass.value], "h-full rounded-full transition-all duration-1000 ease-out"])}" style="${ssrRenderStyle({ width: progressPercent.value + "%" })}"></div></div><form${ssrRenderAttrs(mergeProps({ class: "flex space-x-4 pt-4 border-t border-gray-800/50" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><div class="relative flex-grow"><input type="number" step="0.1"${ssrRenderAttr("value", weightInput.value)} min="1" placeholder="Enter today&#39;s weight" required class="w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isLogging.value) ? " disabled" : ""}><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold">lbs</span></div><button type="submit"${ssrIncludeBooleanAttr(isLogging.value || weightInput.value <= 0) ? " disabled" : ""} class="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> ${ssrInterpolate(isLogging.value ? "Saving..." : "Log Weight")}</span></button></form><div${ssrRenderAttrs(mergeProps({ class: "flex justify-end pt-2" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } })))}><button${ssrIncludeBooleanAttr(isLogging.value) ? " disabled" : ""} class="flex-shrink-0 px-4 py-2 rounded-full bg-gray-700 font-bold text-gray-300 text-sm transition duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-700/20 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1"><path d="M3 2v6h6"></path><path d="M21 22v-6h-6"></path><path d="M21 8A10 10 0 0 0 4.5 4.5"></path><path d="M3 16a10 10 0 0 0 16.5 3.5"></path></svg> Undo Input </span></button></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "AppTrackerWeight" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWorkout",
  __ssrInlineRender: true,
  setup(__props) {
    const WORKOUT_TYPES = ["Strength Training", "Cardio", "Yoga", "HIIT", "Running"];
    const workoutType = ref(WORKOUT_TYPES[0]);
    const durationMinutes = ref(30);
    const caloriesBurned = ref(300);
    const isLogging = ref(false);
    const saveMessage = ref(null);
    const effortScore = computed(() => {
      const intensity = durationMinutes.value * caloriesBurned.value / 1e4;
      if (intensity < 1) return "Low Intensity";
      if (intensity < 5) return "Moderate Effort";
      if (intensity < 10) return "High Intensity";
      return "Ascended Effort!";
    });
    const effortAccentClass = computed(() => {
      const intensity = durationMinutes.value * caloriesBurned.value / 1e4;
      if (intensity < 1) return "from-gray-500 to-gray-700";
      if (intensity < 5) return "from-yellow-500 to-orange-400";
      if (intensity < 10) return "from-teal-500 to-cyan-500";
      return "from-green-500 to-blue-500";
    });
    const trackerRef = ref();
    useMotion(trackerRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-400"><path d="M14 2c4 0 5 1 5 5s-1 5-5 5-5-1-5-5 1-5 5-5z"></path><path d="M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"></path><path d="M17 21h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3"></path></svg> Ascend Workout Tracker </h1><p class="mt-2 text-base text-gray-400">Log your training sessions, duration, and energy expenditure.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("successfully") || saveMessage.value.includes("Workout logged"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("valid"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center bg-gray-800/50 p-4 rounded-xl border border-gray-700" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><p class="text-xl font-medium text-gray-400">Estimated Effort Level</p><p class="${ssrRenderClass([["bg-gradient-to-r", effortAccentClass.value], "text-4xl font-extrabold mt-1 bg-clip-text text-transparent transition-colors duration-500"])}">${ssrInterpolate(effortScore.value)}</p></div><div${ssrRenderAttrs(mergeProps({ class: "w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } })))}><div class="${ssrRenderClass([["bg-gradient-to-r", effortAccentClass.value], "h-full rounded-full transition-all duration-1000 ease-out"])}" style="${ssrRenderStyle({ width: Math.min(durationMinutes.value.valueOf() * caloriesBurned.value.valueOf() / 5e3 * 100, 100) + "%" })}"></div></div><form${ssrRenderAttrs(mergeProps({ class: "space-y-4 pt-4 border-t border-gray-800/50" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><div class="relative"><label for="workoutType" class="block text-sm font-medium text-gray-300 mb-1">Workout Type</label><div class="relative"><select id="workoutType" required class="appearance-none w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isLogging.value) ? " disabled" : ""}><!--[-->`);
      ssrRenderList(WORKOUT_TYPES, (type) => {
        _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(workoutType.value) ? ssrLooseContain(workoutType.value, type) : ssrLooseEqual(workoutType.value, type)) ? " selected" : ""}>${ssrInterpolate(type)}</option>`);
      });
      _push(`<!--]--></select><svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg></div></div><div class="relative"><label for="duration" class="block text-sm font-medium text-gray-300 mb-1">Duration</label><input id="duration" type="number" step="1"${ssrRenderAttr("value", durationMinutes.value)} min="1" placeholder="Minutes" required class="w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isLogging.value) ? " disabled" : ""}><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold mt-3.5">min</span></div><div class="relative"><label for="calories" class="block text-sm font-medium text-gray-300 mb-1">Calories Burned</label><input id="calories" type="number" step="1"${ssrRenderAttr("value", caloriesBurned.value)} min="1" placeholder="Calories" required class="w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isLogging.value) ? " disabled" : ""}><span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold mt-3.5">kcal</span></div><button type="submit"${ssrIncludeBooleanAttr(isLogging.value || durationMinutes.value <= 0 || caloriesBurned.value <= 0) ? " disabled" : ""} class="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed mt-6"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> ${ssrInterpolate(isLogging.value ? "Saving..." : "Log Workout")}</span></button></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWorkout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "AppTrackerWorkout" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appTrackerHydration = __nuxt_component_1;
      const _component_appTrackerColdSoak = __nuxt_component_2;
      const _component_appTrackerFasting = __nuxt_component_3;
      const _component_appTrackerWeight = __nuxt_component_4;
      const _component_appTrackerWorkout = __nuxt_component_5;
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Hydration" }, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerHydration, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Cold Soak" }, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerColdSoak, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Fasting" }, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerFasting, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Weight" }, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerWeight, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Workout" }, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerWorkout, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/body/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D2oUlGXG.mjs.map
