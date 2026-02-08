import { u as useHead, a as useNuxtData, b as __nuxt_component_0, _ as __nuxt_component_0$4 } from './server.mjs';
import { _ as __nuxt_component_6 } from './ButtonSubmit-CrJNqEUh.mjs';
import { defineComponent, mergeProps, unref, computed, ref, watch, reactive, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { Check, Minus, Plus, Droplets, Flame, Sparkles, Zap } from 'lucide-vue-next';
import { f as formatDate } from './date-DqBAJ_np.mjs';
import { u as useToast } from './useToast-BIXgVI55.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { differenceInSeconds } from 'date-fns';
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
import '@vercel/speed-insights/nuxt';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './varients-BkFSZmK0.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TrackerHydration",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const { data } = useNuxtData("hydration");
    const userDailyGoal = computed(() => Number(data.value.latestWeight?.weight ?? 0) / 2);
    const userCurrentWater = computed(() => {
      if (data.value.latestWater?.date !== formatDate()) return 0;
      return Number(data.value.latestWater?.water_intake) ?? 0;
    });
    const currentOz = ref(userCurrentWater.value);
    const isLoading = ref(false);
    ref("");
    ref(data.value?.latestWater?.date ?? "00/00/00");
    const percentage = computed(() => {
      return Math.min(userCurrentWater.value / userDailyGoal.value * 100);
    });
    const wavePosition = computed(() => 100 - percentage.value);
    const isComplete = computed(() => percentage.value >= 100);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseButtonSubmit = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full mx-auto p-8" }, _attrs))} data-v-5c0e7fb3><div class="relative w-64 h-64 group cursor-pointer select-none" data-v-5c0e7fb3><div class="${ssrRenderClass([{ "border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)]": isComplete.value }, "absolute inset-0 rounded-full border border-neutral-800 transition-colors duration-500"])}" data-v-5c0e7fb3></div><div class="absolute inset-2 rounded-full overflow-hidden bg-neutral-900 border-4 border-neutral-900 shadow-inner transform transition-transform active:scale-95 duration-200" data-v-5c0e7fb3><div class="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-difference pointer-events-none" data-v-5c0e7fb3><span class="text-6xl font-bold text-white tabular-nums tracking-tighter" data-v-5c0e7fb3>${ssrInterpolate(currentOz.value)}</span><span class="text-sm font-medium text-neutral-400 mt-1" data-v-5c0e7fb3> Goal ${ssrInterpolate(userDailyGoal.value)} oz </span></div><div class="absolute left-0 w-full h-full transition-all duration-1000 ease-in-out" style="${ssrRenderStyle({ top: `${wavePosition.value}%` })}" data-v-5c0e7fb3><div class="wave absolute left-1/2 -top-[160%] w-[200%] h-[200%] -ml-[100%] rounded-[40%] bg-white opacity-10 animate-spin-slow" data-v-5c0e7fb3></div><div class="wave absolute left-1/2 -top-[165%] w-[200%] h-[200%] -ml-[100%] rounded-[45%] bg-blue-500 animate-spin-medium" data-v-5c0e7fb3></div></div>`);
      if (isComplete.value) {
        _push(`<div class="absolute inset-0 z-20 flex items-center justify-center bg-emerald-500/20 backdrop-blur-[2px]" data-v-5c0e7fb3><div class="bg-emerald-500 text-black p-3 rounded-full shadow-lg animate-pop" data-v-5c0e7fb3>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-8 h-8 stroke-3" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 w-full relative" data-v-5c0e7fb3><div class="flex flex-col items-center justify-center gap-8 w-full top-0 left-0" data-v-5c0e7fb3><div class="flex items-center text-center gap-4" data-v-5c0e7fb3><button class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none" aria-label="Remove water" data-v-5c0e7fb3>`);
      _push(ssrRenderComponent(unref(Minus), { class: "w-5 h-5" }, null, _parent));
      _push(`</button><div data-v-5c0e7fb3><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-5c0e7fb3>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-5c0e7fb3>+8oz</span></div><div data-v-5c0e7fb3><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-5c0e7fb3>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-5c0e7fb3>+12oz</span></div><div data-v-5c0e7fb3><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-5c0e7fb3>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-5c0e7fb3>+18oz</span></div><button class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none" aria-label="Remove water" data-v-5c0e7fb3>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div><form class="w-full text-center max-w-md" data-v-5c0e7fb3>`);
      _push(ssrRenderComponent(_component_baseButtonSubmit, {
        text: "Save",
        isLoading: isLoading.value
      }, null, _parent));
      _push(`</form></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerHydration.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-5c0e7fb3"]]), { __name: "AppTrackerHydration" });
const radius = 120;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerFasting",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    let { data } = useNuxtData("fasting");
    const isFasting = ref(data.value.latestData?.start);
    const startTime = ref(data.value.latestData?.start_date);
    const currentTime = ref(/* @__PURE__ */ new Date());
    const goalHours = ref(16);
    ref(null);
    ref(false);
    ref("");
    const stages = [
      { name: "Stable", threshold: 0, icon: Droplets, color: "text-blue-400", desc: "Blood Sugar Stabilizing" },
      { name: "Burning", threshold: 12, icon: Flame, color: "text-orange-400", desc: "Fat Burning (Ketosis)" },
      { name: "Repair", threshold: 18, icon: Sparkles, color: "text-purple-400", desc: "Autophagy" },
      { name: "Ascended", threshold: 24, icon: Zap, color: "text-yellow-400", desc: "Peak Mental Clarity" }
    ];
    const difference = computed(() => differenceInSeconds(currentTime.value, startTime.value));
    const elapsedTime = computed(() => {
      if (!startTime.value) return 0;
      return difference.value;
    });
    computed(() => data.value.latestData?.start);
    const progressPercentage = computed(() => {
      const totalSeconds = goalHours.value * 3600;
      const pct = elapsedTime.value / totalSeconds * 100;
      return Math.min(pct, 100);
    });
    computed(() => {
      const hours = elapsedTime.value / 3600;
      return stages.slice().reverse().find((s) => hours >= s.threshold) || stages[0];
    });
    computed(() => {
      const h = Math.floor(elapsedTime.value / 3600).toString().padStart(2, "0");
      const m = Math.floor(elapsedTime.value % 3600 / 60).toString().padStart(2, "0");
      const s = (elapsedTime.value % 60).toString().padStart(2, "0");
      return `${h}:${m}:${s}`;
    });
    const circumference = 2 * Math.PI * radius;
    computed(() => {
      return circumference - progressPercentage.value / 100 * circumference;
    });
    watch(data, () => {
      isFasting.value = data.value.latestData.start;
      startTime.value = data.value.latestData?.start_date;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerFasting.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-a50339b9"]]), { __name: "AppTrackerFasting" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWeight",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("weight");
    ref(false);
    ref("");
    ref(false);
    computed(() => data.value.latestData?.weight);
    useToast();
    reactive({
      weight: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      resolveDirective("motion");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-858c9fd3"]]), { __name: "AppTrackerWeight" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWorkout",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtData("workout");
    ref(false);
    ref("");
    ref(false);
    useToast();
    reactive({
      type: "",
      duration: "",
      description: "",
      sets: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      resolveDirective("motion");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWorkout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-969c958d"]]), { __name: "AppTrackerWorkout" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Ascend | Body",
      meta: [
        { name: "description", content: "Ascend Body Dashboard." }
      ]
    });
    const { data: data_setting } = useNuxtData("setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appTrackerHydration = __nuxt_component_1;
      const _component_appTrackerFasting = __nuxt_component_2;
      const _component_appTrackerWeight = __nuxt_component_3;
      const _component_appTrackerWorkout = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-categories" }, _attrs))}>`);
      if (unref(data_setting)?.waterSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Hydration" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerHydration, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting)?.fastingSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Fasting" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerFasting, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting)?.weightSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Weight" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerWeight, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting)?.workoutSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Workout" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerWorkout, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
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
//# sourceMappingURL=index-bZKMSfLA.mjs.map
