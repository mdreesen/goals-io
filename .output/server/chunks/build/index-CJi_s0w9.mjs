import { u as useFetch, _ as __nuxt_component_0 } from './Header-BNpLB6jy.mjs';
import { defineComponent, withAsyncContext, unref, computed, ref, mergeProps, createVNode, resolveDynamicComponent, reactive, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderVNode, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import { Check, Minus, Plus, Snowflake, Trophy, Play, Square, Droplets, Flame, Sparkles, Zap, Trash2, Dumbbell, Activity, Clock, X, ArrowRight } from 'lucide-vue-next';
import { a as useUserSession } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { differenceInSeconds, format, addHours } from 'date-fns';
import { i as inputVarient } from './varients-BkFSZmK0.mjs';
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
import '@vue/shared';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TrackerHydration",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => {
      },
      required: true
    }
  },
  setup(__props) {
    useUserSession();
    const props = __props;
    const userDailyGoal = computed(() => Number(props.data?.latestWeight?.weight) / 2);
    const userCurrentWater = computed(() => Number(props.data?.latestWater?.water_intake) ?? 0);
    const currentOz = ref(userCurrentWater.value);
    const isLoading = ref(false);
    ref("");
    const percentage = computed(() => {
      return Math.min(userCurrentWater.value / userDailyGoal.value * 100, 100);
    });
    const wavePosition = computed(() => 100 - percentage.value);
    const isComplete = computed(() => percentage.value >= 100);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8" }, _attrs))} data-v-d67ee27b><div class="relative w-64 h-64 group cursor-pointer select-none" data-v-d67ee27b><div class="${ssrRenderClass([{ "border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)]": isComplete.value }, "absolute inset-0 rounded-full border border-neutral-800 transition-colors duration-500"])}" data-v-d67ee27b></div><div class="absolute inset-2 rounded-full overflow-hidden bg-neutral-900 border-4 border-neutral-900 shadow-inner isolation-isolate transform transition-transform active:scale-95 duration-200" data-v-d67ee27b><div class="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-difference pointer-events-none" data-v-d67ee27b><span class="text-6xl font-bold text-white tabular-nums tracking-tighter" data-v-d67ee27b>${ssrInterpolate(currentOz.value)}</span><span class="text-sm font-medium text-neutral-400 mt-1" data-v-d67ee27b> Goal ${ssrInterpolate(userDailyGoal.value)} oz </span></div><div class="absolute left-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]" style="${ssrRenderStyle({ top: `${wavePosition.value}%` })}" data-v-d67ee27b><div class="wave absolute left-1/2 -top-[160%] w-[200%] h-[200%] -ml-[100%] rounded-[40%] bg-white opacity-10 animate-spin-slow" data-v-d67ee27b></div><div class="wave absolute left-1/2 -top-[165%] w-[200%] h-[200%] -ml-[100%] rounded-[45%] bg-blue-500 animate-spin-medium" data-v-d67ee27b></div></div>`);
      if (isComplete.value) {
        _push(`<div class="absolute inset-0 z-20 flex items-center justify-center bg-emerald-500/20 backdrop-blur-[2px]" data-v-d67ee27b><div class="bg-emerald-500 text-black p-3 rounded-full shadow-lg animate-pop" data-v-d67ee27b>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-8 h-8 stroke-[3]" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 w-full relative" data-v-d67ee27b><div class="flex flex-col items-center justify-center gap-8 w-full top-0 left-0" data-v-d67ee27b><div class="flex items-center text-center gap-4" data-v-d67ee27b><button class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none" aria-label="Remove water" data-v-d67ee27b>`);
      _push(ssrRenderComponent(unref(Minus), { class: "w-5 h-5" }, null, _parent));
      _push(`</button><div data-v-d67ee27b><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-d67ee27b>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-d67ee27b>+8oz</span></div><div data-v-d67ee27b><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-d67ee27b>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-d67ee27b>+12oz</span></div><div data-v-d67ee27b><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-d67ee27b>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-d67ee27b>+18oz</span></div></div><form class="w-full" data-v-d67ee27b><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="${ssrRenderClass(`${isLoading.value ? "bg-gradient-to-r from-gray-500 to-gray-600" : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`)}" data-v-d67ee27b>${ssrInterpolate(isLoading.value ? "Logging..." : "Log")}</button></form></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerHydration.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-d67ee27b"]]), { __name: "AppTrackerHydration" });
const BUFFER_TIME = 10;
const DEFAULT_GOAL = 180;
const radius$1 = 120;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TrackerColdSoak",
  __ssrInlineRender: true,
  setup(__props) {
    const status = ref("idle");
    const sessionDuration = ref(0);
    const bufferLeft = ref(BUFFER_TIME);
    const targetGoal = ref(DEFAULT_GOAL);
    ref(null);
    const formatTime = (seconds) => {
      const m = Math.floor(seconds / 60).toString().padStart(1, "0");
      const s = (seconds % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    };
    const circumference = 2 * Math.PI * radius$1;
    const progressOffset = computed(() => {
      if (status.value === "buffer") return 0;
      const progress = Math.min(sessionDuration.value / targetGoal.value, 1);
      return circumference - progress * circumference;
    });
    const isGoalMet = computed(() => {
      return sessionDuration.value >= targetGoal.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col items-center justify-center min-h-[600px] w-full max-w-md mx-auto rounded-[3rem] p-8 overflow-hidden select-none" }, _attrs))}><div class="${ssrRenderClass([status.value === "active" ? "bg-cyan-950/20" : "bg-transparent", "absolute inset-0 transition-all duration-1000 pointer-events-none"])}"></div><div class="z-10 w-full flex justify-between items-center mb-6"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Snowflake), {
        class: ["w-5 h-5 transition-colors duration-500", isGoalMet.value ? "text-yellow-400" : "text-cyan-400"]
      }, null, _parent));
      _push(`<span class="text-sm font-bold tracking-widest text-zinc-500 uppercase">Ascend Cold</span></div><div class="px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"><span class="${ssrRenderClass([{
        "text-zinc-400": status.value === "idle",
        "text-orange-400": status.value === "buffer",
        "text-cyan-400": status.value === "active" && !isGoalMet.value,
        "text-yellow-400": status.value === "active" && isGoalMet.value
      }, "text-xs font-bold"])}">${ssrInterpolate(status.value === "idle" ? "STANDBY" : status.value.toUpperCase())}</span></div></div><div class="relative z-10 mb-12"><svg class="w-[300px] h-[300px] transform -rotate-90 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"><circle cx="150" cy="150"${ssrRenderAttr("r", radius$1)} stroke="currentColor" stroke-width="4" fill="transparent" class="text-zinc-800/50"></circle>`);
      if (status.value === "active" || status.value === "completed") {
        _push(`<circle cx="150" cy="150"${ssrRenderAttr("r", radius$1)}${ssrRenderAttr("stroke", isGoalMet.value ? "#facc15" : "#22d3ee")} stroke-width="12" fill="transparent" stroke-linecap="round" class="transition-all duration-1000 ease-linear" style="${ssrRenderStyle({ strokeDasharray: circumference, strokeDashoffset: progressOffset.value })}"></circle>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "buffer") {
        _push(`<circle cx="150" cy="150"${ssrRenderAttr("r", radius$1)} stroke="#fb923c" stroke-width="8" fill="transparent" class="animate-pulse" style="${ssrRenderStyle({ strokeDasharray: circumference, strokeDashoffset: 0 })}"></circle>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</svg><div class="absolute inset-0 flex flex-col items-center justify-center">`);
      if (status.value === "buffer") {
        _push(`<div class="text-center animate-in zoom-in duration-300"><span class="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Enter Water</span><span class="text-8xl font-black text-white tabular-nums tracking-tighter">${ssrInterpolate(bufferLeft.value)}</span></div>`);
      } else if (status.value === "active" || status.value === "completed") {
        _push(`<div class="text-center">`);
        if (isGoalMet.value) {
          _push(`<div class="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce">`);
          _push(ssrRenderComponent(unref(Trophy), { class: "w-8 h-8 text-yellow-400 fill-yellow-400/20" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="text-7xl font-medium text-white tracking-tighter tabular-nums drop-shadow-2xl">${ssrInterpolate(formatTime(sessionDuration.value))}</h1><p class="text-zinc-500 text-xs mt-4 font-medium tracking-widest uppercase">${ssrInterpolate(isGoalMet.value ? "Goal Surpassed" : "Current Time")}</p></div>`);
      } else {
        _push(`<div class="flex flex-col items-center gap-6"><div class="text-center"><span class="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Target Goal</span><div class="flex items-center justify-center gap-4 mt-2"><button class="p-2 hover:bg-white/10 rounded-full text-zinc-500 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(unref(Minus), { class: "w-5 h-5" }, null, _parent));
        _push(`</button><span class="text-5xl text-white tracking-tight">${ssrInterpolate(formatTime(targetGoal.value))}</span><button class="p-2 hover:bg-white/10 rounded-full text-zinc-500 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(unref(Plus), { class: "w-5 h-5" }, null, _parent));
        _push(`</button></div></div></div>`);
      }
      _push(`</div></div><div class="w-full max-w-[280px] z-20">`);
      if (status.value === "idle" || status.value === "completed") {
        _push(`<button class="group relative w-full h-16 bg-white rounded-2xl flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"><span class="text-zinc-900 font-bold text-lg uppercase tracking-wide">${ssrInterpolate(status.value === "completed" ? "Reset Tracker" : "Start Session")}</span>`);
        if (status.value !== "completed") {
          _push(ssrRenderComponent(unref(Play), { class: "w-5 h-5 text-zinc-900 fill-zinc-900" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<div class="w-full"><button class="w-full h-16 rounded-2xl bg-zinc-800 border border-zinc-700 text-white font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 active:scale-[0.98] transition-all">`);
        _push(ssrRenderComponent(unref(Square), { class: "w-5 h-5 fill-current" }, null, _parent));
        _push(`<span>Finish Soak</span></button>`);
        if (status.value === "buffer") {
          _push(`<p class="mt-4 text-center text-zinc-500 text-xs animate-pulse"> Prepare to submerge... </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
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
const radius = 120;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerFasting",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => {
      },
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useUserSession();
    const isFasting = ref(props.data?.start || false);
    ref(props.data?.ended || true);
    const startTime = ref(props.data?.start_date || null);
    ref(props.data?.end_date || null);
    const currentTime = ref(/* @__PURE__ */ new Date());
    const goalHours = ref(props.data?.duration || 16);
    ref(null);
    ref(false);
    ref("");
    const stages = [
      { name: "Stable", threshold: 0, icon: Droplets, color: "text-blue-400", desc: "Blood Sugar Stabilizing" },
      { name: "Burning", threshold: 12, icon: Flame, color: "text-orange-400", desc: "Fat Burning (Ketosis)" },
      { name: "Repair", threshold: 18, icon: Sparkles, color: "text-purple-400", desc: "Autophagy" },
      { name: "Ascended", threshold: 24, icon: Zap, color: "text-yellow-400", desc: "Peak Mental Clarity" }
    ];
    const elapsedTime = computed(() => {
      if (!startTime.value) return 0;
      return differenceInSeconds(currentTime.value, startTime.value);
    });
    const progressPercentage = computed(() => {
      const totalSeconds = goalHours.value * 3600;
      const pct = elapsedTime.value / totalSeconds * 100;
      return Math.min(pct, 100);
    });
    const currentStage = computed(() => {
      const hours = elapsedTime.value / 3600;
      return stages.slice().reverse().find((s) => hours >= s.threshold) || stages[0];
    });
    const formattedTime = computed(() => {
      const h = Math.floor(elapsedTime.value / 3600).toString().padStart(2, "0");
      const m = Math.floor(elapsedTime.value % 3600 / 60).toString().padStart(2, "0");
      const s = (elapsedTime.value % 60).toString().padStart(2, "0");
      return `${h}:${m}:${s}`;
    });
    const circumference = 2 * Math.PI * radius;
    const dashOffset = computed(() => {
      return circumference - progressPercentage.value / 100 * circumference;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-[500px] p-6 rounded-3xl relative overflow-hidden" }, _attrs))} data-v-cc0c3686><div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none" data-v-cc0c3686></div><div class="relative w-[300px] h-[300px] flex items-center justify-center mb-8" data-v-cc0c3686><svg class="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]" data-v-cc0c3686><circle cx="150" cy="150"${ssrRenderAttr("r", radius)} stroke="currentColor" stroke-width="6" fill="transparent" class="text-zinc-800" data-v-cc0c3686></circle><circle cx="150" cy="150"${ssrRenderAttr("r", radius)} stroke="url(#gradient)" stroke-width="8" fill="transparent" stroke-linecap="round" class="transition-all duration-1000 ease-out" style="${ssrRenderStyle({ strokeDasharray: circumference, strokeDashoffset: dashOffset.value })}" data-v-cc0c3686></circle><defs data-v-cc0c3686><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-cc0c3686><stop offset="0%" stop-color="#818cf8" data-v-cc0c3686></stop><stop offset="100%" stop-color="#22d3ee" data-v-cc0c3686></stop></linearGradient></defs></svg><div class="absolute inset-0 flex flex-col items-center justify-center z-20" data-v-cc0c3686>`);
      if (!isFasting.value) {
        _push(`<div class="text-center animate-in fade-in zoom-in duration-500" data-v-cc0c3686><button class="group relative flex items-center justify-center w-16 h-16 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" data-v-cc0c3686>`);
        _push(ssrRenderComponent(unref(Play), { class: "w-6 h-6 text-black fill-black ml-1 group-hover:text-indigo-600 transition-colors" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<div class="text-center" data-v-cc0c3686><div class="flex items-center justify-center space-x-2 mb-2" data-v-cc0c3686>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentStage.value.icon), {
          class: ["w-4 h-4 animate-pulse", currentStage.value.color]
        }, null), _parent);
        _push(`<span class="text-xs font-bold uppercase tracking-widest text-zinc-400" data-v-cc0c3686>${ssrInterpolate(currentStage.value.name)}</span></div><h1 class="text-5xl font-medium text-white tracking-tighter tabular-nums drop-shadow-lg" data-v-cc0c3686>${ssrInterpolate(formattedTime.value)}</h1><p class="text-zinc-500 text-xs mt-2" data-v-cc0c3686>${ssrInterpolate(currentStage.value.desc)}</p></div>`);
      }
      _push(`</div></div>`);
      if (isFasting.value) {
        _push(`<div class="w-full max-w-[280px] z-10" data-v-cc0c3686><div class="flex justify-between items-center mb-4 px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/5" data-v-cc0c3686><div class="text-left" data-v-cc0c3686><p class="text-[10px] text-zinc-500 uppercase font-bold" data-v-cc0c3686>Goal</p><p class="text-zinc-200 font-medium" data-v-cc0c3686>${ssrInterpolate(goalHours.value)} Hours</p></div><div class="text-right" data-v-cc0c3686><p class="text-[10px] text-zinc-500 uppercase font-bold" data-v-cc0c3686>End Time</p><p class="text-zinc-200 font-medium" data-v-cc0c3686>${ssrInterpolate(startTime.value ? unref(format)(unref(addHours)(startTime.value, goalHours.value), "h:mm a") : "--:--")}</p></div></div><button class="w-full py-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all text-sm font-semibold flex items-center justify-center gap-2" data-v-cc0c3686>`);
        _push(ssrRenderComponent(unref(Square), { class: "w-4 h-4 fill-current" }, null, _parent));
        _push(` End Fast </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerFasting.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-cc0c3686"]]), { __name: "AppTrackerFasting" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWeight",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => {
      },
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(false);
    ref("");
    const currentWeight = computed(() => props.data?.latestData?.weight);
    useUserSession();
    const input = reactive({
      weight: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans" }, _attrs))} data-v-72e0eb15><div class="relative w-full flex flex-col items-center justify-center mb-10 group" data-v-72e0eb15><div class="relative z-10 flex items-baseline gap-1 cursor-pointer" data-v-72e0eb15><div class="relative w-48" data-v-72e0eb15><div class="w-full flex gap-2 justify-center items-baseline bg-transparent text-center text-6xl font-bold text-white focus:outline-none pb-2" data-v-72e0eb15><span data-v-72e0eb15>${ssrInterpolate(currentWeight.value)}</span><span class="text-sm" data-v-72e0eb15>lbs.</span></div></div></div></div><div class="w-full relative" data-v-72e0eb15><form class="space-y-6" data-v-72e0eb15><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-72e0eb15><label for="text" class="block text-sm font-medium text-gray-300 mb-1" data-v-72e0eb15>Log Weight</label><input id="text" type="text"${ssrRenderAttr("value", unref(input).weight)} placeholder="Example: 180.5" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-72e0eb15></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-72e0eb15><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="${ssrRenderClass(`${isLoading.value ? "bg-gradient-to-r from-gray-500 to-gray-600" : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`)}" data-v-72e0eb15>${ssrInterpolate(isLoading.value ? "Saving..." : "Save")}</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-72e0eb15"]]), { __name: "AppTrackerWeight" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWorkout",
  __ssrInlineRender: true,
  setup(__props) {
    const workouts = ref([
      { id: "1", title: "Heavy Push Day", duration: "60m", type: "strength", intensity: 3, completed: false },
      { id: "2", title: "Zone 2 Jog", duration: "30m", type: "cardio", intensity: 2, completed: true }
    ]);
    const isAdding = ref(false);
    const activePressId = ref(null);
    const pressProgress = ref(0);
    const newTitle = ref("");
    const newDuration = ref("");
    const newType = ref("strength");
    const newIntensity = ref(2);
    ref(null);
    const completedCount = computed(() => workouts.value.filter((w) => w.completed).length);
    const progressWidth = computed(() => workouts.value.length ? completedCount.value / workouts.value.length * 100 : 0);
    const getTypeColor = (type) => {
      switch (type) {
        case "strength":
          return "text-orange-400 border-orange-500/30";
        case "cardio":
          return "text-blue-400 border-blue-500/30";
        case "mobility":
          return "text-emerald-400 border-emerald-500/30";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col items-center w-full max-w-sm mx-auto min-h-[600px] p-6 font-sans overflow-hidden bg-black/50 rounded-[40px] border border-neutral-900 shadow-2xl" }, _attrs))} data-v-69ad939a><div class="${ssrRenderClass([{ "opacity-20 blur-sm": isAdding.value }, "w-full mb-8 z-10 transition-all duration-500"])}" data-v-69ad939a><div class="flex justify-between items-end mb-4" data-v-69ad939a><div data-v-69ad939a><h2 class="text-white text-2xl font-bold tracking-tight" data-v-69ad939a>Ascend</h2><p class="text-neutral-500 text-xs font-medium uppercase tracking-widest mt-1" data-v-69ad939a>Daily Protocol</p></div><div class="text-3xl font-bold text-white/20 tabular-nums" data-v-69ad939a>${ssrInterpolate(completedCount.value)}<span class="text-lg text-neutral-600" data-v-69ad939a>/${ssrInterpolate(workouts.value.length)}</span></div></div><div class="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden" data-v-69ad939a><div class="h-full bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)" style="${ssrRenderStyle({ width: `${progressWidth.value}%` })}" data-v-69ad939a></div></div></div><div class="${ssrRenderClass([{ "opacity-20 blur-sm pointer-events-none": isAdding.value }, "w-full flex-1 space-y-3 z-10 overflow-y-auto no-scrollbar transition-all duration-500"])}" data-v-69ad939a><!--[-->`);
      ssrRenderList(workouts.value, (item) => {
        _push(`<div class="relative group w-full h-20" data-v-69ad939a><button class="absolute -right-12 top-0 h-full w-12 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 z-30 bg-neutral-900/80 rounded-r-2xl" data-v-69ad939a>`);
        _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
        _push(`</button><div class="${ssrRenderClass([{ "border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]": item.completed }, "absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300"])}" data-v-69ad939a>`);
        if (activePressId.value === item.id) {
          _push(`<div class="absolute top-0 left-0 h-full bg-neutral-800 transition-none" style="${ssrRenderStyle({ width: `${pressProgress.value}%` })}" data-v-69ad939a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{ "opacity-100": item.completed }, "absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 transition-opacity duration-500"])}" data-v-69ad939a></div><div class="relative z-10 h-full px-5 flex items-center justify-between" data-v-69ad939a><div class="flex items-center gap-4" data-v-69ad939a><div class="${ssrRenderClass([item.completed ? "bg-white/20 border-white/20 text-white" : `bg-transparent ${getTypeColor(item.type)}`, "w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300"])}" data-v-69ad939a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.type === "strength" ? unref(Dumbbell) : item.type === "cardio" ? unref(Activity) : unref(Zap)), { class: "w-4 h-4" }, null), _parent);
        _push(`</div><div class="flex flex-col" data-v-69ad939a><span class="${ssrRenderClass([item.completed ? "text-white" : "text-neutral-200", "text-sm font-semibold transition-colors"])}" data-v-69ad939a>${ssrInterpolate(item.title)}</span><span class="${ssrRenderClass([item.completed ? "text-white/80" : "text-neutral-500", "text-xs transition-colors"])}" data-v-69ad939a>${ssrInterpolate(item.duration)} • Level ${ssrInterpolate(item.intensity)}</span></div></div><div class="w-6 h-6 flex items-center justify-center" data-v-69ad939a>`);
        if (item.completed) {
          _push(ssrRenderComponent(unref(Check), { class: "w-5 h-5 text-white stroke-[3]" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--><button class="w-full py-5 rounded-2xl border border-dashed border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 group" data-v-69ad939a>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-5 h-5 group-hover:scale-110 transition-transform" }, null, _parent));
      _push(`<span class="text-sm font-medium" data-v-69ad939a>Add New Protocol</span></button></div>`);
      if (isAdding.value) {
        _push(`<div class="absolute inset-x-0 bottom-0 h-[85%] bg-[#0A0A0A] rounded-t-[30px] border-t border-neutral-800 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] z-40 p-6 flex flex-col" data-v-69ad939a><div class="w-full flex justify-center mb-6" data-v-69ad939a><div class="w-12 h-1 bg-neutral-800 rounded-full" data-v-69ad939a></div></div><div class="flex-1 flex flex-col gap-8" data-v-69ad939a><div class="space-y-2" data-v-69ad939a><label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold" data-v-69ad939a>Protocol Name</label><input${ssrRenderAttr("value", newTitle.value)} type="text" placeholder="e.g. Upper Body Push" class="w-full bg-transparent text-2xl font-bold text-white placeholder:text-neutral-700 focus:outline-none focus:placeholder:text-neutral-800 transition-colors" data-v-69ad939a></div><div class="space-y-3" data-v-69ad939a><label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold" data-v-69ad939a>Focus Area</label><div class="flex gap-3" data-v-69ad939a><!--[-->`);
        ssrRenderList(["strength", "cardio", "mobility"], (t) => {
          _push(`<button class="${ssrRenderClass([newType.value === t ? "bg-neutral-800 border-white text-white" : "bg-transparent border-neutral-800 text-neutral-600 hover:border-neutral-600", "flex-1 py-3 rounded-xl border flex flex-col items-center gap-2 transition-all duration-200"])}" data-v-69ad939a>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(t === "strength" ? unref(Dumbbell) : t === "cardio" ? unref(Activity) : unref(Zap)), { class: "w-5 h-5" }, null), _parent);
          _push(`<span class="text-[10px] uppercase font-bold" data-v-69ad939a>${ssrInterpolate(t)}</span></button>`);
        });
        _push(`<!--]--></div></div><div class="grid grid-cols-2 gap-6" data-v-69ad939a><div class="space-y-2" data-v-69ad939a><label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold" data-v-69ad939a>Duration</label><div class="flex items-center gap-2 border-b border-neutral-800 pb-2 focus-within:border-white transition-colors" data-v-69ad939a>`);
        _push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-neutral-500" }, null, _parent));
        _push(`<input${ssrRenderAttr("value", newDuration.value)} type="text" placeholder="45m" class="w-full bg-transparent text-white focus:outline-none" data-v-69ad939a></div></div><div class="space-y-2" data-v-69ad939a><label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold" data-v-69ad939a>Intensity</label><div class="flex items-center justify-between pt-1" data-v-69ad939a><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<button class="${ssrRenderClass([newIntensity.value === i ? "bg-orange-500 border-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]" : "border-neutral-800 text-neutral-600 hover:border-neutral-600", "w-8 h-8 rounded-full flex items-center justify-center transition-all border"])}" data-v-69ad939a>`);
          _push(ssrRenderComponent(unref(Flame), {
            class: ["w-3 h-3", { "fill-black": newIntensity.value === i }]
          }, null, _parent));
          _push(`</button>`);
        });
        _push(`<!--]--></div></div></div></div><div class="mt-auto flex items-center gap-4" data-v-69ad939a><button class="p-4 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors" data-v-69ad939a>`);
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
        _push(`</button><button${ssrIncludeBooleanAttr(!newTitle.value) ? " disabled" : ""} class="flex-1 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-69ad939a><span data-v-69ad939a>Create Protocol</span>`);
        _push(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isAdding.value) {
        _push(`<div class="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-30 pointer-events-none" data-v-69ad939a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWorkout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-69ad939a"]]), { __name: "AppTrackerWorkout" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: latestHydrationData, pending: pending_hydration } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/user/water/water", { lazy: true }, "$rQjhMtlwVd")), __temp = await __temp, __restore(), __temp);
    const { data: latestFastingData, pending: pending_fasting } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/user/fasting/fasting", { lazy: true }, "$Dw0t3lKcjq")), __temp = await __temp, __restore(), __temp);
    const { data: latestWeightData, pending: pending_weight } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/user/weight/weight", { lazy: true }, "$2uZyvSmbI5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appTrackerHydration = __nuxt_component_1;
      const _component_appTrackerColdSoak = __nuxt_component_2;
      const _component_appTrackerFasting = __nuxt_component_3;
      const _component_appTrackerWeight = __nuxt_component_4;
      const _component_appTrackerWorkout = __nuxt_component_5;
      _push(`<!--[-->`);
      if (!unref(pending_hydration)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Hydration" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerHydration, { data: unref(latestHydrationData) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Cold Soak" }, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerColdSoak, null, null, _parent));
      _push(`</div>`);
      if (!unref(pending_fasting)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Fasting" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerFasting, {
          data: unref(latestFastingData)?.latestData
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(pending_weight)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Weight" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerWeight, { data: unref(latestWeightData) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
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
//# sourceMappingURL=index-CJi_s0w9.mjs.map
