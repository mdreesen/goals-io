import { _ as __nuxt_component_0 } from './Header-92UjPXQ8.mjs';
import { _ as __nuxt_component_2$1 } from './ButtonSubmit-Cnujo8hl.mjs';
import { defineComponent, mergeProps, unref, computed, ref, createVNode, resolveDynamicComponent, reactive, resolveDirective, withCtx, withModifiers, withDirectives, createBlock, openBlock, vModelText, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { Check, Minus, Plus, Droplets, Flame, Sparkles, Zap, Square } from 'lucide-vue-next';
import { f as formatDate } from './date-wF3mUuv1.mjs';
import { b as useNuxtData, a as useUserSession, _ as __nuxt_component_0$2, d as _sfc_main$8, r as refreshNuxtData } from './server.mjs';
import { u as useToast } from './useToast-DbWOdwrP.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { differenceInSeconds, format, addHours } from 'date-fns';
import { _ as __nuxt_component_1$1 } from './Card-zJxjjdwR.mjs';
import { _ as _sfc_main$5 } from './Drawer-DPU8VbYy.mjs';
import { i as inputVarient, _ as __nuxt_component_0$1 } from './Label-CdSFOlb_.mjs';
import { w as workout } from './selections-q8B9mgh4.mjs';
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
import './Icon-8aWUErQK.mjs';
import 'vaul-vue';

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
      const _component_baseButtonSubmit = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8" }, _attrs))} data-v-d5846a39><div class="relative w-64 h-64 group cursor-pointer select-none" data-v-d5846a39><div class="${ssrRenderClass([{ "border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)]": isComplete.value }, "absolute inset-0 rounded-full border border-neutral-800 transition-colors duration-500"])}" data-v-d5846a39></div><div class="absolute inset-2 rounded-full overflow-hidden bg-neutral-900 border-4 border-neutral-900 shadow-inner isolation-isolate transform transition-transform active:scale-95 duration-200" data-v-d5846a39><div class="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-difference pointer-events-none" data-v-d5846a39><span class="text-6xl font-bold text-white tabular-nums tracking-tighter" data-v-d5846a39>${ssrInterpolate(currentOz.value)}</span><span class="text-sm font-medium text-neutral-400 mt-1" data-v-d5846a39> Goal ${ssrInterpolate(userDailyGoal.value)} oz </span></div><div class="absolute left-0 w-full h-full transition-all duration-1000 ease-in-out" style="${ssrRenderStyle({ top: `${wavePosition.value}%` })}" data-v-d5846a39><div class="wave absolute left-1/2 -top-[160%] w-[200%] h-[200%] -ml-[100%] rounded-[40%] bg-white opacity-10 animate-spin-slow" data-v-d5846a39></div><div class="wave absolute left-1/2 -top-[165%] w-[200%] h-[200%] -ml-[100%] rounded-[45%] bg-blue-500 animate-spin-medium" data-v-d5846a39></div></div>`);
      if (isComplete.value) {
        _push(`<div class="absolute inset-0 z-20 flex items-center justify-center bg-emerald-500/20 backdrop-blur-[2px]" data-v-d5846a39><div class="bg-emerald-500 text-black p-3 rounded-full shadow-lg animate-pop" data-v-d5846a39>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-8 h-8 stroke-3" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-12 w-full relative" data-v-d5846a39><div class="flex flex-col items-center justify-center gap-8 w-full top-0 left-0" data-v-d5846a39><div class="flex items-center text-center gap-4" data-v-d5846a39><button class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none" aria-label="Remove water" data-v-d5846a39>`);
      _push(ssrRenderComponent(unref(Minus), { class: "w-5 h-5" }, null, _parent));
      _push(`</button><div data-v-d5846a39><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-d5846a39>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-d5846a39>+8oz</span></div><div data-v-d5846a39><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-d5846a39>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-d5846a39>+12oz</span></div><div data-v-d5846a39><button class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-v-d5846a39>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-8 h-8" }, null, _parent));
      _push(`</button><span class="text-[10px] text-neutral-500 font-medium" data-v-d5846a39>+18oz</span></div><button class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none" aria-label="Remove water" data-v-d5846a39>`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div><form class="w-full" data-v-d5846a39>`);
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
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-d5846a39"]]), { __name: "AppTrackerHydration" });
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
    const isLoading = ref(false);
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
    const useIsFasting = computed(() => data.value.latestData?.start);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-125 p-6 rounded-3xl relative overflow-hidden" }, _attrs))} data-v-0f17b4dd><div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none" data-v-0f17b4dd></div><div class="relative w-75 h-75 flex items-center justify-center mb-8" data-v-0f17b4dd><svg class="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]" data-v-0f17b4dd><circle cx="150" cy="150"${ssrRenderAttr("r", radius)} stroke="currentColor" stroke-width="6" fill="transparent" class="text-zinc-800" data-v-0f17b4dd></circle><circle cx="150" cy="150"${ssrRenderAttr("r", radius)} stroke="url(#gradient)" stroke-width="8" fill="transparent" stroke-linecap="round" class="transition-all duration-1000 ease-out" style="${ssrRenderStyle({ strokeDasharray: circumference, strokeDashoffset: dashOffset.value })}" data-v-0f17b4dd></circle><defs data-v-0f17b4dd><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-0f17b4dd><stop offset="0%" stop-color="#818cf8" data-v-0f17b4dd></stop><stop offset="100%" stop-color="#22d3ee" data-v-0f17b4dd></stop></linearGradient></defs></svg><div class="absolute inset-0 flex flex-col items-center justify-center z-20" data-v-0f17b4dd>`);
      if (!useIsFasting.value) {
        _push(`<div class="text-center animate-in fade-in zoom-in duration-500" data-v-0f17b4dd></div>`);
      } else {
        _push(`<div class="text-center" data-v-0f17b4dd><div class="flex items-center justify-center space-x-2 mb-2" data-v-0f17b4dd>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentStage.value.icon), {
          class: ["w-4 h-4 animate-pulse", currentStage.value.color]
        }, null), _parent);
        _push(`<span class="text-xs font-bold uppercase tracking-widest text-zinc-400" data-v-0f17b4dd>${ssrInterpolate(currentStage.value.name)}</span></div><h1 class="text-5xl font-medium tracking-tighter tabular-nums drop-shadow-lg" data-v-0f17b4dd>${ssrInterpolate(formattedTime.value)}</h1><p class="text-zinc-500 text-xs mt-2" data-v-0f17b4dd>${ssrInterpolate(currentStage.value.desc)}</p></div>`);
      }
      _push(`</div></div>`);
      if (useIsFasting.value) {
        _push(`<div class="w-full max-w-70 z-10" data-v-0f17b4dd><div class="flex justify-between items-center mb-4 px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/5" data-v-0f17b4dd><div class="text-left" data-v-0f17b4dd><p class="text-[10px] text-zinc-500 uppercase font-bold" data-v-0f17b4dd>Goal</p><p class="text-zinc-200 font-medium" data-v-0f17b4dd>${ssrInterpolate(goalHours.value)} Hours</p></div><div class="text-right" data-v-0f17b4dd><p class="text-[10px] text-zinc-500 uppercase font-bold" data-v-0f17b4dd>End Time</p><p class="text-zinc-200 font-medium" data-v-0f17b4dd>${ssrInterpolate(startTime.value ? unref(format)(unref(addHours)(startTime.value, goalHours.value), "h:mm a") : "--:--")}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value) {
        _push(`<button class="${ssrRenderClass(`w-full max-w-70 py-4 rounded-xl border ${useIsFasting.value ? "border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300" : "border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:text-green-300"} transition-all text-sm font-semibold flex items-center justify-center gap-2`)}" data-v-0f17b4dd>`);
        _push(ssrRenderComponent(unref(Square), { class: "w-4 h-4 fill-current" }, null, _parent));
        _push(` ${ssrInterpolate(!useIsFasting.value ? "Start Fast" : "End Fast")}</button>`);
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
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-0f17b4dd"]]), { __name: "AppTrackerFasting" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWeight",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("weight");
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const currentWeight = computed(() => data.value.latestData?.weight);
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    const input = reactive({
      weight: ""
    });
    async function log() {
      isLoading.value = true;
      $fetch("/api/user/weight/weight", {
        method: "POST",
        body: input
      }).then(async () => {
        await refreshSession();
        await refreshNuxtData();
        open.value = false;
        isLoading.value = false;
      }).catch(async (error) => {
        toast.error("Failed to create", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_baseCard = __nuxt_component_1$1;
      const _component_UDrawer = _sfc_main$5;
      const _component_UButton = _sfc_main$8;
      const _component_baseLabel = __nuxt_component_0$1;
      const _component_baseButtonSubmit = __nuxt_component_2$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full max-w-sm mx-auto font-sans" }, _attrs))} data-v-eea09e00><div class="relative w-full flex flex-col items-center justify-center mb-10 group" data-v-eea09e00><div class="relative z-10 flex items-baseline gap-1 cursor-pointer" data-v-eea09e00><div class="relative w-48" data-v-eea09e00><div class="w-full flex gap-2 justify-center items-baseline bg-transparent text-center text-6xl font-bold text-white focus:outline-none pb-2" data-v-eea09e00><span data-v-eea09e00>${ssrInterpolate(currentWeight.value)}</span><span class="text-sm" data-v-eea09e00>lbs.</span></div></div></div></div><div class="container-cards" data-v-eea09e00><!--[-->`);
      ssrRenderList(unref(data).latestDataArr.reverse(), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/body/${[item._id]}/weight`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                label: `${item.weight} lbs`,
                date: item.date,
                icon: "material-symbols:monitor-weight",
                iconColor: "bg-gray-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  label: `${item.weight} lbs`,
                  date: item.date,
                  icon: "material-symbols:monitor-weight",
                  iconColor: "bg-gray-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["label", "date"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="w-full relative" data-v-eea09e00><div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans" data-v-eea09e00><div class="w-full relative mb-4 flex justify-center" data-v-eea09e00>`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log weight",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6" data-v-eea09e00${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-eea09e00${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Weight" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).weight)} placeholder="Example: 180.5" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-eea09e00${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_baseButtonSubmit, {
              text: "Save",
              isLoading: isLoading.value
            }, null, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(log, ["prevent"]),
                class: "space-y-6"
              }, [
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Weight" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).weight = $event,
                    placeholder: "Example: 180.5",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).weight]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                createVNode(_component_baseButtonSubmit, {
                  text: "Save",
                  isLoading: isLoading.value
                }, null, 8, ["isLoading"])
              ], 32)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Log weight",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:monitor-weight-outline-sharp"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Log weight",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:monitor-weight-outline-sharp"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-eea09e00"]]), { __name: "AppTrackerWeight" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerWorkout",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("workout");
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    const input = reactive({
      type: "",
      duration: "",
      description: "",
      sets: ""
    });
    async function log() {
      isLoading.value = true;
      $fetch("/api/user/workout/workout", {
        method: "POST",
        body: {
          ...input,
          date: formatDate()
        }
      }).then(async () => {
        await refreshSession();
        await refreshNuxtData();
        open.value = false;
        isLoading.value = false;
      }).catch(async (error) => {
        toast.error("Failed to create", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_baseCard = __nuxt_component_1$1;
      const _component_UDrawer = _sfc_main$5;
      const _component_UButton = _sfc_main$8;
      const _component_baseLabel = __nuxt_component_0$1;
      const _component_baseButtonSubmit = __nuxt_component_2$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full max-w-sm mx-auto font-sans" }, _attrs))} data-v-77d46df4><div class="container-cards" data-v-77d46df4><!--[-->`);
      ssrRenderList(unref(data)?.latestData.reverse(), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/body/${[item._id]}/workout`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                label: item.type,
                text: item.description,
                date: item.date,
                icon: "material-symbols:run-circle-rounded",
                iconColor: "bg-blue-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  label: item.type,
                  text: item.description,
                  date: item.date,
                  icon: "material-symbols:run-circle-rounded",
                  iconColor: "bg-blue-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["label", "text", "date"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="w-full relative" data-v-77d46df4><div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans" data-v-77d46df4><div class="w-full relative mb-4 flex justify-center" data-v-77d46df4>`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log new workout",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6" data-v-77d46df4${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-77d46df4${_scopeId}><select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-77d46df4${_scopeId}><option value="" disabled selected hidden data-v-77d46df4${_scopeId}>Choose workout</option><!--[-->`);
            ssrRenderList(unref(workout), (item) => {
              _push2(`<option${ssrRenderAttr("value", item.value)} data-v-77d46df4${ssrIncludeBooleanAttr(Array.isArray(unref(input).type) ? ssrLooseContain(unref(input).type, item.value) : ssrLooseEqual(unref(input).type, item.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-77d46df4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Duration (in minutes)" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).duration)} placeholder="Example: 60" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-77d46df4${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-77d46df4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Description" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).description)} placeholder="Legs, arms, core..." required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-77d46df4${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-77d46df4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Sets" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Your workout sets" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-77d46df4${_scopeId}>${ssrInterpolate(unref(input).sets)}</textarea></div>`);
            _push2(ssrRenderComponent(_component_baseButtonSubmit, {
              text: "Save",
              isLoading: isLoading.value
            }, null, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(log, ["prevent"]),
                class: "space-y-6"
              }, [
                withDirectives((openBlock(), createBlock("div", null, [
                  withDirectives(createVNode("select", {
                    id: "status-select",
                    "onUpdate:modelValue": ($event) => unref(input).type = $event,
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: "",
                      hidden: ""
                    }, "Choose workout"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(workout), (item) => {
                      return openBlock(), createBlock("option", {
                        value: item.value,
                        key: item.label
                      }, toDisplayString(item.label), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(input).type]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Duration (in minutes)" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).duration = $event,
                    placeholder: "Example: 60",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).duration]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Description" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).description = $event,
                    placeholder: "Legs, arms, core...",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).description]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Sets" }),
                  withDirectives(createVNode("textarea", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).sets = $event,
                    placeholder: "Your workout sets",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).sets]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                createVNode(_component_baseButtonSubmit, {
                  text: "Save",
                  isLoading: isLoading.value
                }, null, 8, ["isLoading"])
              ], 32)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Add workout",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:directions-run-rounded"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Add workout",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:directions-run-rounded"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerWorkout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-77d46df4"]]), { __name: "AppTrackerWorkout" });
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
//# sourceMappingURL=index-C32V0fJ-.mjs.map
