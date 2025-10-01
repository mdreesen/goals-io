import { defineComponent, ref, computed, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const OZ_FACTOR_TO_ML = 29.57;
const DAILY_GOAL_OZ = 100;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TrackerHydration",
  __ssrInlineRender: true,
  setup(__props) {
    const dailyGoalML = DAILY_GOAL_OZ * OZ_FACTOR_TO_ML;
    const currentIntakeML = ref(0);
    const manualAmountOZ = ref(8);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const progressPercent = computed(() => {
      const percent = currentIntakeML.value / dailyGoalML * 100;
      return Math.min(100, percent);
    });
    const progressColor = computed(() => {
      if (progressPercent.value < 50) return "bg-blue-500";
      if (progressPercent.value < 100) return "bg-yellow-500";
      return "bg-green-500";
    });
    const hydrationRef = ref();
    useMotion(hydrationRef, {
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
        ref_key: "hydrationRef",
        ref: hydrationRef,
        class: "p-4 sm:p-8 text-white flex items-center justify-center"
      }, _attrs))}><div class="w-full max-w-xl rounded-3xl bg-gray-900/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8 transition-all duration-500"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 mr-3 text-blue-400"><path d="M12 22a7 7 0 0 0 7-7c0-2.34-1.12-4.23-2.52-5.51A3 3 0 0 0 12 6a3 3 0 0 0-4.48 2.49C6.12 10.77 5 12.66 5 15a7 7 0 0 0 7 7Z"></path></svg> Hydration Tracker </h1><p class="mt-2 text-gray-400">Track your water intake towards your daily goal of ${ssrInterpolate(DAILY_GOAL_OZ)}oz.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error"),
            "bg-blue-600/30 text-blue-400 border border-blue-600": saveMessage.value.includes("Saving") || saveMessage.value.includes("zero")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4 text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><div class="text-7xl font-extrabold text-white" style="${ssrRenderStyle({ "text-shadow": "0 0 10px rgba(76, 29, 149, 0.5)" })}">${ssrInterpolate((currentIntakeML.value / OZ_FACTOR_TO_ML).toFixed(1))} <span class="text-3xl text-gray-400">/ ${ssrInterpolate(DAILY_GOAL_OZ)} oz</span></div><div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner shadow-black/50"><div style="${ssrRenderStyle({ width: progressPercent.value + "%" })}" class="${ssrRenderClass([[progressColor.value], "h-4 rounded-full transition-all duration-700 ease-out"])}"></div></div><p class="text-sm text-gray-400 font-medium pt-2">${ssrInterpolate(progressPercent.value.toFixed(0))}% Complete `);
      if (progressPercent.value >= 100) {
        _push(`<span class="text-green-400 font-bold"> - Goal Reached!</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row gap-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.3 } } })))}><input type="number"${ssrRenderAttr("value", manualAmountOZ.value)} min="1" placeholder="Amount in Ounces" class="flex-1 p-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"><div class="flex-1 p-3 rounded-xl bg-gray-700/50 border border-gray-600 flex items-center justify-center font-semibold text-lg shadow-xl"> Ounces (oz) </div><button${ssrIncludeBooleanAttr(manualAmountOZ.value <= 0 || isSaving.value) ? " disabled" : ""} class="${ssrRenderClass([[
        manualAmountOZ.value <= 0 || isSaving.value ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
      ], "sm:w-auto p-3 rounded-xl font-semibold transition duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"])}"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><span class="ml-2 hidden sm:inline">Add Water</span></span></button></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-between pt-4 gap-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.7 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="flex-1 px-6 py-3 bg-green-600 rounded-lg font-semibold text-white transition duration-300 transform active:scale-[0.98] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> ${ssrInterpolate(isSaving.value ? "Logging..." : "Log Daily Intake")}</span></button><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="px-4 py-3 bg-red-600 rounded-lg font-semibold text-white hover:bg-red-700 transition duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.75L3 16"></path><path d="M3 3v4h4"></path><path d="M3 16V9h4"></path></svg></button></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerHydration.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "AppTrackerHydration" });
const SOAK_GOAL_SECONDS = 300;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TrackerColdSoak",
  __ssrInlineRender: true,
  setup(__props) {
    const isRunning = ref(false);
    ref(0);
    const elapsedTime = ref(0);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const formatTime = (ms) => {
      const totalSeconds = Math.floor(ms / 1e3);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    const currentSoakTimeFormatted = computed(() => formatTime(elapsedTime.value));
    const progressPercent = computed(() => {
      const currentSeconds = elapsedTime.value / 1e3;
      const percent = currentSeconds / SOAK_GOAL_SECONDS * 100;
      return Math.min(100, percent);
    });
    const isGoalReached = computed(() => elapsedTime.value >= SOAK_GOAL_SECONDS * 1e3);
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
        class: "p-4 sm:p-8 text-white flex items-center justify-center"
      }, _attrs))}><div class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-blue-400/20 ring-4 ring-blue-500/20 transition-all duration-500 hover:ring-blue-400/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-cyan-300"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M7 7h10M7 12h10M7 17h10"></path></svg> Cold Soak Tracker </h1><p class="mt-2 text-gray-300">${ssrInterpolate(SOAK_GOAL_SECONDS / 60)} minutes.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("short"),
            "bg-blue-600/30 text-blue-400 border border-blue-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4 text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><div class="text-8xl font-extrabold text-white" style="${ssrRenderStyle({ "text-shadow": "0 0 15px rgba(59, 130, 246, 0.5)" })}">${ssrInterpolate(currentSoakTimeFormatted.value)}</div><div class="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner shadow-black/50"><div style="${ssrRenderStyle({ width: progressPercent.value + "%" })}" class="${ssrRenderClass([[isGoalReached.value ? "bg-green-500" : "bg-blue-400"], "h-3 rounded-full transition-all duration-700 ease-out"])}"></div></div><p class="text-sm text-gray-400 font-medium pt-2">${ssrInterpolate(progressPercent.value.toFixed(0))}% towards 5 min Goal `);
      if (isGoalReached.value) {
        _push(`<span class="text-green-400 font-bold"> - Goal Surpassed!</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-center pt-4 gap-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="${ssrRenderClass([[
        isRunning.value ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-yellow-500/40 focus:ring-yellow-500" : "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/40 focus:ring-blue-500"
      ], "p-4 rounded-full font-semibold transition duration-300 transform active:scale-[0.9] shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900"])}">`);
      if (isRunning.value) {
        _push(`<span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"></rect><rect width="4" height="16" x="14" y="4"></rect></svg></span>`);
      } else {
        _push(`<span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></span>`);
      }
      _push(`</button><button${ssrIncludeBooleanAttr(isSaving.value || elapsedTime.value === 0 || isRunning.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": isSaving.value || elapsedTime.value === 0 || isRunning.value }, "p-4 rounded-full bg-green-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-green-700/50 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"])}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button><button${ssrIncludeBooleanAttr(isSaving.value || isRunning.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": isSaving.value || isRunning.value }, "p-4 rounded-full bg-red-600 font-semibold text-white hover:bg-red-700 transition duration-300 transform active:scale-[0.9] shadow-xl shadow-red-700/50 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"])}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6"></path><path d="M21 17a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.75L3 14"></path><path d="M3.5 22v-6h6"></path></svg></button></div><div${ssrRenderAttrs(mergeProps({ class: "pt-4 text-center text-gray-500 text-sm" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 0.9 } } })))}><p>Soak duration is logged in seconds for data analysis.</p></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerColdSoak.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "AppTrackerColdSoak" });
const GOAL_DURATION_HOURS = 16;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerFasting",
  __ssrInlineRender: true,
  setup(__props) {
    const SOAK_GOAL_SECONDS2 = GOAL_DURATION_HOURS * 60 * 60;
    const isRunning = ref(false);
    ref(0);
    const elapsedTime = ref(0);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const formatTime = (ms) => {
      const totalSeconds = Math.floor(ms / 1e3);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    const currentSoakTimeFormatted = computed(() => formatTime(elapsedTime.value));
    const progressPercent = computed(() => {
      const currentSeconds = elapsedTime.value / 1e3;
      const percent = currentSeconds / SOAK_GOAL_SECONDS2 * 100;
      return Math.min(100, percent);
    });
    const isGoalReached = computed(() => elapsedTime.value >= SOAK_GOAL_SECONDS2 * 1e3);
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
        class: "sm:p-8 text-white flex items-center justify-center"
      }, _attrs))}><div class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-purple-400/20 ring-4 ring-purple-500/20 transition-all duration-500 hover:ring-purple-400/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-orange-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-orange-400"><path d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path><path d="M5 22a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1z"></path><path d="M8 5v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5"></path><path d="M8 19v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4"></path><path d="m14 10-2 2-2-2"></path><path d="m10 14 2-2 2 2"></path></svg> Fasting Tracker </h1><p class="mt-2 text-gray-300">Embrace the metabolic shift. Target: ${ssrInterpolate(GOAL_DURATION_HOURS)} hours.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("short"),
            "bg-purple-600/30 text-purple-400 border border-purple-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4 text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><div class="text-8xl font-mono font-extrabold text-white" style="${ssrRenderStyle({ "text-shadow": "0 0 15px rgba(124, 58, 237, 0.5)" })}">${ssrInterpolate(currentSoakTimeFormatted.value)}</div><div class="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner shadow-black/50"><div style="${ssrRenderStyle({ width: progressPercent.value + "%" })}" class="${ssrRenderClass([[isGoalReached.value ? "bg-orange-500" : "bg-purple-500"], "h-3 rounded-full transition-all duration-700 ease-out"])}"></div></div><p class="text-sm text-gray-400 font-medium pt-2">${ssrInterpolate(progressPercent.value.toFixed(0))}% towards ${ssrInterpolate(GOAL_DURATION_HOURS)} hr Goal `);
      if (isGoalReached.value) {
        _push(`<span class="text-orange-400 font-bold"> - Goal Surpassed!</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div${ssrRenderAttrs(mergeProps({ class: "flex justify-center pt-4 gap-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="${ssrRenderClass([[
        isRunning.value ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-yellow-500/40 focus:ring-yellow-500" : "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/40 focus:ring-purple-500"
      ], "p-4 rounded-full font-semibold transition duration-300 transform active:scale-[0.9] shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900"])}">`);
      if (isRunning.value) {
        _push(`<span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"></rect><rect width="4" height="16" x="14" y="4"></rect></svg></span>`);
      } else {
        _push(`<span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></span>`);
      }
      _push(`</button><button${ssrIncludeBooleanAttr(isSaving.value || elapsedTime.value === 0 || isRunning.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": isSaving.value || elapsedTime.value === 0 || isRunning.value }, "p-4 rounded-full bg-orange-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-orange-700/50 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"])}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button><button${ssrIncludeBooleanAttr(isSaving.value || isRunning.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": isSaving.value || isRunning.value }, "p-4 rounded-full bg-red-600 font-semibold text-white hover:bg-red-700 transition duration-300 transform active:scale-[0.9] shadow-xl shadow-red-700/50 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"])}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6"></path><path d="M21 17a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.75L3 14"></path><path d="M3.5 22v-6h6"></path></svg></button></div><div${ssrRenderAttrs(mergeProps({ class: "pt-4 text-center text-gray-500 text-sm" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 0.9 } } })))}><p>Fast duration is logged in seconds for long-term analysis.</p></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerFasting.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "AppTrackerFasting" });
const START_WEIGHT_LBS = 210;
const TARGET_WEIGHT_LBS = 180;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWeight",
  __ssrInlineRender: true,
  setup(__props) {
    const currentWeight = ref(null);
    const lastLoggedWeight = ref(205.5);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const progressPercent = computed(() => {
      if (!currentWeight.value) return 0;
      const totalRange = START_WEIGHT_LBS - TARGET_WEIGHT_LBS;
      const progressMade = START_WEIGHT_LBS - currentWeight.value;
      const percent = progressMade / totalRange * 100;
      return Math.max(0, Math.min(100, percent));
    });
    const weightToGoal = computed(() => {
      if (!currentWeight.value) return TARGET_WEIGHT_LBS - lastLoggedWeight.value;
      return TARGET_WEIGHT_LBS - currentWeight.value;
    });
    const weightDifference = computed(() => {
      if (!currentWeight.value) return 0;
      return currentWeight.value - lastLoggedWeight.value;
    });
    const isGoalReached = computed(() => (currentWeight.value ?? 9999) <= TARGET_WEIGHT_LBS);
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
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "p-4 sm:p-8 text-white flex items-center justify-center"
      }, _attrs))}><div class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-green-400/20 ring-4 ring-green-500/20 transition-all duration-500 hover:ring-green-400/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300"><path d="M12 2a9 9 0 0 1 9 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11a9 9 0 0 1 9-9z"></path><path d="M12 22V15"></path><path d="M15 15H9"></path></svg> Weight Tracker </h1><p class="mt-2 text-gray-300">Log your progress. Target: ${ssrInterpolate(TARGET_WEIGHT_LBS)} lbs.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("valid weight"),
            "bg-blue-600/30 text-blue-400 border border-blue-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><label for="weight-input" class="block text-xl font-bold text-gray-200"> Current Weight (lbs) </label><div class="flex items-center space-x-4"><input id="weight-input" type="number" step="0.1" min="1"${ssrRenderAttr("value", currentWeight.value)} placeholder="0.0" class="flex-grow rounded-xl border border-gray-600 bg-gray-700/50 py-4 px-6 text-3xl text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><button${ssrIncludeBooleanAttr(isSaving.value || !currentWeight.value) ? " disabled" : ""} class="px-8 py-4 rounded-xl bg-green-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-green-700/50 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Log Weight </span></button></div></div><div class="pt-6 space-y-4"><h2 class="text-2xl font-bold text-gray-200">Goal Progress</h2><div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner shadow-black/50"><div${ssrRenderAttrs(_temp0 = mergeProps({
        style: { width: progressPercent.value + "%" },
        class: [[isGoalReached.value ? "bg-yellow-400" : "bg-teal-500"], "h-4 rounded-full transition-all duration-700 ease-out"]
      }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { width: 0 }, enter: { width: `${progressPercent.value}%` } })))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></div><p class="text-sm text-gray-400 font-medium pt-2">${ssrInterpolate(progressPercent.value.toFixed(1))}% towards Goal (${ssrInterpolate(TARGET_WEIGHT_LBS)} lbs) </p><div class="grid grid-cols-3 gap-4 text-center border-t border-gray-700 pt-4"><div${ssrRenderAttrs(mergeProps({ class: "p-3 bg-gray-700/50 rounded-xl border border-gray-600" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><p class="text-sm text-gray-400">Last Weight</p><p class="text-xl font-bold text-teal-300">${ssrInterpolate(lastLoggedWeight.value.toFixed(1))} lbs</p></div><div${ssrRenderAttrs(mergeProps({
        class: ["p-3 bg-gray-700/50 rounded-xl border border-gray-600", weightToGoal.value > 0 ? "border-red-500/50" : "border-green-500/50"]
      }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } })))}><p class="text-sm text-gray-400">To Target</p><p class="${ssrRenderClass([weightToGoal.value > 0 ? "text-red-400" : "text-green-400", "text-xl font-bold"])}">${ssrInterpolate(Math.abs(weightToGoal.value).toFixed(1))} lbs </p></div><div${ssrRenderAttrs(mergeProps({
        class: ["p-3 bg-gray-700/50 rounded-xl border border-gray-600", weightDifference.value > 0 ? "border-red-500/50" : "border-green-500/50"]
      }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6 } } })))}><p class="text-sm text-gray-400">From Last</p><p class="${ssrRenderClass([weightDifference.value > 0 ? "text-red-400" : "text-green-400", "text-xl font-bold"])}">${ssrInterpolate(weightDifference.value.toFixed(1))} lbs </p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "AppTrackerWeight" });
const MOCK_TOTAL_WORKOUTS = 42;
const weeklyGoal = 5;
const mockSessionsThisWeek = 3;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWorkout",
  __ssrInlineRender: true,
  setup(__props) {
    const lastLoggedWorkout = ref("Strength Training");
    const lastLoggedDuration = ref(45);
    const workoutName = ref("");
    const durationMinutes = ref(null);
    const caloriesBurned = ref(null);
    const isSaving = ref(false);
    const saveMessage = ref(null);
    computed(() => {
      return caloriesBurned.value !== null && caloriesBurned.value > 0 ? caloriesBurned.value.toFixed(0) : "—";
    });
    const weeklyProgressPercent = computed(() => mockSessionsThisWeek / weeklyGoal * 100);
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
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "p-4 sm:p-8 text-white flex items-center justify-center"
      }, _attrs))}><div class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-green-400/20 ring-4 ring-green-500/20 transition-all duration-500 hover:ring-green-400/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300"><path d="M14.4 14.4 9 19.8"></path><path d="M18 18.5a4 4 0 0 0-5.5-5.5L8 9.5l3.5-3.5 1.5 1.5c.3.3.6.4 1 .4s.7-.1 1-.4l1.5-1.5 3-3-1.5-1.5c-.3-.3-.4-.6-.4-1s.1-.7.4-1L21 2z"></path></svg> Workout Tracker </h1><p class="mt-2 text-gray-300">Log your training session details to track consistency.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("valid duration"),
            "bg-blue-600/30 text-blue-400 border border-blue-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } })))}><label for="workout-name" class="block text-xl font-bold text-gray-200"> Workout Name </label><input id="workout-name" type="text"${ssrRenderAttr("value", workoutName.value)} placeholder="e.g., Upper Body Strength" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><div class="grid grid-cols-2 gap-4"><div><label for="duration-input" class="block text-xl font-bold text-gray-200 mb-2"> Duration (mins) </label><input id="duration-input" type="number" step="5" min="1"${ssrRenderAttr("value", durationMinutes.value)} placeholder="45" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div><div><label for="calories-input" class="block text-xl font-bold text-gray-200 mb-2"> Calories Burned (Optional) </label><input id="calories-input" type="number" step="10" min="0"${ssrRenderAttr("value", caloriesBurned.value)} placeholder="400" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div></div><button${ssrIncludeBooleanAttr(isSaving.value || !workoutName.value || !durationMinutes.value) ? " disabled" : ""} class="w-full mt-6 py-4 rounded-xl bg-green-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-green-700/50 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-3"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Log Workout </span></button></div><div class="pt-6 space-y-4"><h2 class="text-2xl font-bold text-gray-200">Weekly Summary</h2><div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner shadow-black/50"><div${ssrRenderAttrs(_temp0 = mergeProps({
        style: { width: weeklyProgressPercent.value + "%" },
        class: [[weeklyProgressPercent.value >= 100 ? "bg-yellow-400" : "bg-teal-500"], "h-4 rounded-full transition-all duration-700 ease-out"]
      }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { width: 0 }, enter: { width: `${weeklyProgressPercent.value}%` } })))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></div><p class="text-sm text-gray-400 font-medium pt-2">${ssrInterpolate(mockSessionsThisWeek)} / ${ssrInterpolate(weeklyGoal)} sessions this week. (${ssrInterpolate(weeklyProgressPercent.value.toFixed(1))}%) </p><div class="grid grid-cols-3 gap-4 text-center border-t border-gray-700 pt-4"><div${ssrRenderAttrs(mergeProps({ class: "p-3 bg-gray-700/50 rounded-xl border border-gray-600" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } })))}><p class="text-sm text-gray-400">Last Session</p><p class="text-lg font-bold text-teal-300 truncate">${ssrInterpolate(lastLoggedWorkout.value)}</p></div><div${ssrRenderAttrs(mergeProps({ class: "p-3 bg-gray-700/50 rounded-xl border border-gray-600" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } })))}><p class="text-sm text-gray-400">Duration</p><p class="text-xl font-bold text-teal-300">${ssrInterpolate(lastLoggedDuration.value)} min </p></div><div${ssrRenderAttrs(mergeProps({ class: "p-3 bg-gray-700/50 rounded-xl border border-gray-600" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6 } } })))}><p class="text-sm text-gray-400">Total Logged</p><p class="text-xl font-bold text-teal-300">${ssrInterpolate(MOCK_TOTAL_WORKOUTS)}</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWorkout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "AppTrackerWorkout" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appTrackerHydration = __nuxt_component_0;
      const _component_appTrackerColdSoak = __nuxt_component_1;
      const _component_appTrackerFasting = __nuxt_component_2;
      const _component_appTrackerWeight = __nuxt_component_3;
      const _component_appTrackerWorkout = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Welcome to the Body page</h1>`);
      _push(ssrRenderComponent(_component_appTrackerHydration, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerColdSoak, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerFasting, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerWeight, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerWorkout, null, null, _parent));
      _push(`</div>`);
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
//# sourceMappingURL=index-D3-zEQqN.mjs.map
