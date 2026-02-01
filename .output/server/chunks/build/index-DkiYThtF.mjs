import { a as useNuxtData, b as __nuxt_component_0, u as useUserSession, _ as __nuxt_component_0$5 } from './server.mjs';
import { defineComponent, mergeProps, unref, computed, ref, reactive, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { f as formatDate } from './date-wF3mUuv1.mjs';
import { u as useToast } from './useToast-BIXgVI55.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { differenceInSeconds } from 'date-fns';
import { Droplets, Flame, Sparkles, Zap } from 'lucide-vue-next';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TrackerHydration",
  __ssrInlineRender: true,
  setup(__props) {
    useUserSession();
    useToast();
    const { data } = useNuxtData("hydration");
    const userDailyGoal = computed(() => Number(data.value.latestWeight?.weight ?? 0) / 2);
    const userCurrentWater = computed(() => {
      if (data.value.latestWater?.date !== formatDate()) return 0;
      return Number(data.value.latestWater?.water_intake) ?? 0;
    });
    ref(userCurrentWater.value);
    ref(false);
    ref("");
    ref(data.value?.latestWater?.date ?? "00/00/00");
    const percentage = computed(() => {
      return Math.min(userCurrentWater.value / userDailyGoal.value * 100);
    });
    computed(() => 100 - percentage.value);
    computed(() => percentage.value >= 100);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$5;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerHydration.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-cced4761"]]), { __name: "AppTrackerHydration" });
const radius = 120;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerFasting",
  __ssrInlineRender: true,
  setup(__props) {
    useUserSession();
    useToast();
    const { data } = useNuxtData("fasting");
    ref(data.value.latestData?.start);
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
    const elapsedTime = computed(() => {
      if (!startTime.value) return 0;
      return differenceInSeconds(currentTime.value, startTime.value);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$5;
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
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-ce7eecad"]]), { __name: "AppTrackerFasting" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWeight",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("weight");
    ref(false);
    ref("");
    ref(false);
    computed(() => data.value.latestData?.weight);
    useUserSession();
    useToast();
    reactive({
      weight: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$5;
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
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-83bc349b"]]), { __name: "AppTrackerWeight" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWorkout",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtData("workout");
    ref(false);
    ref("");
    ref(false);
    useUserSession();
    useToast();
    reactive({
      type: "",
      duration: "",
      description: "",
      sets: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$5;
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
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-026759db"]]), { __name: "AppTrackerWorkout" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: data_setting } = useNuxtData("setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appTrackerHydration = __nuxt_component_1;
      const _component_appTrackerFasting = __nuxt_component_2;
      const _component_appTrackerWeight = __nuxt_component_3;
      const _component_appTrackerWorkout = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-categories" }, _attrs))}>`);
      if (unref(data_setting).waterSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Hydration" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerHydration, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).fastingSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Fasting" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerFasting, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).weightSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Weight" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerWeight, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).workoutSetting.value) {
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
//# sourceMappingURL=index-DkiYThtF.mjs.map
