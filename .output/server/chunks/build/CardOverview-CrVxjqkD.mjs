import { _ as _sfc_main$1, a as __nuxt_component_1 } from './Icon-C65KOFMp.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-CluF5aK3.mjs';
import { a as useNuxtData } from './server.mjs';
import 'reka-ui';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '@vercel/speed-insights/nuxt';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardOverview",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    collection: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/stats", { key: "stats", lazy: true }, "$065uish_ka")), await __temp, __restore();
    const { data } = useNuxtData("stats");
    const books = {
      start: computed(() => data.value?.lastestBooks?.bookCurrentStartedYear),
      end: computed(() => data.value?.lastestBooks?.bookCurrentEndedYear)
    };
    const fasting = {
      duration: computed(() => data.value?.latestFasting?.duration),
      isFasting: computed(() => data.value?.latestFasting?.start)
    };
    const dailyWater = {
      water: computed(() => data.value?.latestWater?.water_intake),
      date: computed(() => data.value?.latestWater?.date)
    };
    const weight = {
      weight: computed(() => data.value?.latestWeight?.weight),
      date: computed(() => data.value?.latestWeight?.date)
    };
    const animateIcons = computed(() => {
      switch (true) {
        case (props.collection === "fasting" && fasting?.isFasting.value):
          return "animate-bounce";
        default:
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_baseIcon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-full max-w-lg divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center"${_scopeId}>`);
            if (props.icon) {
              _push2(ssrRenderComponent(_component_baseIcon, {
                iconName: props.icon,
                styles: `text-white ${animateIcons.value}`
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="text-white"${_scopeId}>${ssrInterpolate(props.text)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                props.icon ? (openBlock(), createBlock(_component_baseIcon, {
                  key: 0,
                  iconName: props.icon,
                  styles: `text-white ${animateIcons.value}`
                }, null, 8, ["iconName", "styles"])) : createCommentVNode("", true),
                createVNode("span", { class: "text-white" }, toDisplayString(props.text), 1)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.collection === "books") {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white"${_scopeId}><span${_scopeId}>Started ${ssrInterpolate(books.start)} books</span><span${_scopeId}>Finished ${ssrInterpolate(books.end)} books</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.collection === "fasting") {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white"${_scopeId}><span${_scopeId}>Duration ${ssrInterpolate(fasting?.duration)} hours</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.collection === "dailyWater") {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center font-extrabold text-white"${_scopeId}><span class="text-2xl"${_scopeId}>${ssrInterpolate(dailyWater?.water)} oz.</span><span class="text-lg"${_scopeId}>${ssrInterpolate(dailyWater?.date)}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.collection === "weight") {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center font-extrabold text-white"${_scopeId}><span class="text-2xl"${_scopeId}>${ssrInterpolate(weight?.weight)} lbs</span><span class="text-lg"${_scopeId}>${ssrInterpolate(weight?.date)}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.collection === "books" ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center text-2xl font-extrabold text-white" }, [
                  createVNode("span", null, "Started " + toDisplayString(books.start) + " books", 1),
                  createVNode("span", null, "Finished " + toDisplayString(books.end) + " books", 1)
                ])
              ])) : createCommentVNode("", true),
              __props.collection === "fasting" ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center text-2xl font-extrabold text-white" }, [
                  createVNode("span", null, "Duration " + toDisplayString(fasting?.duration) + " hours", 1)
                ])
              ])) : createCommentVNode("", true),
              __props.collection === "dailyWater" ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-extrabold text-white" }, [
                  createVNode("span", { class: "text-2xl" }, toDisplayString(dailyWater?.water) + " oz.", 1),
                  createVNode("span", { class: "text-lg" }, toDisplayString(dailyWater?.date), 1)
                ])
              ])) : createCommentVNode("", true),
              __props.collection === "weight" ? (openBlock(), createBlock("div", { key: 3 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-extrabold text-white" }, [
                  createVNode("span", { class: "text-2xl" }, toDisplayString(weight?.weight) + " lbs", 1),
                  createVNode("span", { class: "text-lg" }, toDisplayString(weight?.date), 1)
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/CardOverview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardOverview = Object.assign(_sfc_main, { __name: "BaseCardOverview" });

export { CardOverview as default };
//# sourceMappingURL=CardOverview-CrVxjqkD.mjs.map
