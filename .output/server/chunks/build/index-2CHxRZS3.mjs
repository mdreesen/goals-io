import { defineComponent, withAsyncContext, computed, unref, withCtx, createVNode, mergeProps, createBlock, createCommentVNode, openBlock, toDisplayString, ref, useSSRContext, useSlots, useTemplateRef, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { a as useNuxtData, b as __nuxt_component_0$3, u as useUserSession, _ as __nuxt_component_0$5 } from './server.mjs';
import { u as useFetch } from './fetch-BNW_bqSB.mjs';
import { _ as _sfc_main$1$1, a as __nuxt_component_2$1 } from './Icon-BdU6WHaT.mjs';
import { c as createLazyVisibleComponent } from './lazy-hydrated-component-B8_Q-rfU.mjs';
import { _ as __nuxt_component_0$4 } from './SectionHeader-FY2Kj4sD.mjs';
import { ChevronDown } from 'lucide-vue-next';
import { defineStore } from 'pinia';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Orientation, StackedBar, GroupedBar, Scatter, Position } from '@unovis/ts';
import { VisXYContainer, VisXYLabels, VisTooltip, VisStackedBar, VisGroupedBar, VisAxis, VisBulletLegend, VisScatter } from '@unovis/vue';
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
import '@vue/shared';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Description",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-xl font-bold px-[2rem] my-8 flex justify-center" }, _attrs))}>${ssrInterpolate(props.text)}</p>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Description.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$7, { __name: "BaseDescription" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { loggedIn } = useUserSession();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/profile", { key: "profile" }, "$Vj7nXTHUSu")), await __temp, __restore();
    const { data } = useNuxtData("profile");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseDescription = __nuxt_component_0$2;
      if (unref(loggedIn)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2"> Welcome, </h2><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">${ssrInterpolate(unref(data).first_name)}! </h2>`);
        _push(ssrRenderComponent(_component_baseDescription, {
          text: unref(data).username ?? ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2"> Log in or sign up to get started! </h2></div>`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Welcome.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$6, { __name: "AppWelcome" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/stats", { key: "stats" }, "$065uish_ka")), await __temp, __restore();
    const { data } = useNuxtData("stats");
    const books = {
      start: computed(() => data.value?.lastestBooks?.bookCurrentStartedYear),
      end: computed(() => data.value?.lastestBooks?.bookCurrentEndedYear)
    };
    const coldSoak = {
      date: computed(() => data.value?.latestColdSoak?.date)
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
      const _component_UCard = _sfc_main$1$1;
      const _component_baseIcon = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-full max-w-lg divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
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
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.collection === "books") {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white"${_scopeId}><span${_scopeId}>Started ${ssrInterpolate(books.start)} books</span><span${_scopeId}>Finished ${ssrInterpolate(books.end)} books</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.collection === "coldSoak") {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white"${_scopeId}><span${_scopeId}>${ssrInterpolate(coldSoak?.date)}</span></div></div>`);
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
              __props.collection === "coldSoak" ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center text-2xl font-extrabold text-white" }, [
                  createVNode("span", null, toDisplayString(coldSoak?.date), 1)
                ])
              ])) : createCommentVNode("", true),
              __props.collection === "fasting" ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center text-2xl font-extrabold text-white" }, [
                  createVNode("span", null, "Duration " + toDisplayString(fasting?.duration) + " hours", 1)
                ])
              ])) : createCommentVNode("", true),
              __props.collection === "dailyWater" ? (openBlock(), createBlock("div", { key: 3 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-extrabold text-white" }, [
                  createVNode("span", { class: "text-2xl" }, toDisplayString(dailyWater?.water) + " oz.", 1),
                  createVNode("span", { class: "text-lg" }, toDisplayString(dailyWater?.date), 1)
                ])
              ])) : createCommentVNode("", true),
              __props.collection === "weight" ? (openBlock(), createBlock("div", { key: 4 }, [
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/CardOverview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$5, { __name: "BaseCardOverview" });
const isYear = () => {
  const date = /* @__PURE__ */ new Date();
  return date.getFullYear();
};
const useYear = defineStore("year", {
  state: () => ({ year: isYear() }),
  actions: {
    set(year) {
      this.year = year;
    }
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ButtonYear",
  __ssrInlineRender: true,
  props: {
    data: { type: Array, default: () => [] },
    modelValue: { type: Number },
    startYear: { type: Number, default: 2020 },
    endYear: { type: Number, default: (/* @__PURE__ */ new Date()).getFullYear() + 2 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useYear();
    let isOpen = ref(false);
    const containerRef = ref(null);
    ref(null);
    const useData = ref(props.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "relative inline-block text-left font-sans select-none z-10"
      }, _attrs))} data-v-4d078922><button class="${ssrRenderClass([{ "border-white/20": unref(isOpen) }, "group flex items-center gap-2 pl-4 pr-3 py-2 backdrop-blur-sm border rounded-full transition-all duration-300 hover:bg-zinc-800"])}" data-v-4d078922><span class="text-sm font-medium transition-colors tabular-nums" data-v-4d078922>${ssrInterpolate(unref(useYear)().year)}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["w-4 h-4 transition-transform duration-300", { "-rotate-180": unref(isOpen) }]
      }, null, _parent));
      _push(`</button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute top-full left-0 mt-2 w-32 max-h-60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col" data-v-4d078922><div class="overflow-y-auto scrollbar-hide py-1" data-v-4d078922><!--[-->`);
        ssrRenderList(useData.value, (year) => {
          _push(`<button${ssrRenderAttr("data-active", year === __props.modelValue)} class="${ssrRenderClass([year === __props.modelValue ? "text-white bg-white/5" : "text-zinc-500 hover:text-zinc-300", "w-full text-left px-4 py-2.5 text-sm transition-colors relative flex items-center justify-between group"])}" data-v-4d078922><span class="font-medium" data-v-4d078922>${ssrInterpolate(year)}</span>`);
          if (year === __props.modelValue) {
            _push(`<span class="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-v-4d078922></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonYear.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-4d078922"]]), { __name: "BaseButtonYear" });
function o(n) {
  if (n && Object.keys(n).length > 0) {
    const e = Object.keys(n)[0];
    return n[e];
  }
}
function p$1(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const y$1 = (n, e) => {
  const r = Object.keys(n[0]).filter(($) => $ !== e), t = Object.keys(n[0][r[0]]);
  return n.map(($) => ({
    month: $.month,
    ...r.flatMap(
      (c) => t.map((a) => ({
        [`${c}${p$1(a)}`]: $[c][a]
      }))
    ).reduce((c, a) => ({ ...c, ...a }), {})
  }));
};
const x = { style: { padding: "10px 15px" } }, _ = { style: {
  color: "var(--tooltip-value-color)",
  textTransform: "capitalize",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  marginBottom: "0.25rem",
  paddingBottom: "0.25rem"
} }, T = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  props: {
    data: {},
    categories: {},
    toolTipTitle: {},
    yFormatter: { type: Function }
  },
  setup(d2) {
    const a = d2, m2 = ["_index", "_stacked", "_ending"], g2 = computed(() => Object.entries(a.data ?? []).filter(
      ([t, u]) => !m2.includes(t) && Object.keys(a.categories).includes(t)
    ));
    return (t, u) => (openBlock(), createElementBlock("div", x, [
      createElementVNode("div", _, toDisplayString(t.toolTipTitle), 1),
      (openBlock(true), createElementBlock(Fragment, null, renderList(g2.value, ([o2, s], v) => {
        var p2, c;
        return openBlock(), createElementBlock("div", {
          key: o2,
          style: { display: "flex", "align-items": "center", "margin-bottom": "4px" }
        }, [
          createElementVNode("span", {
            style: normalizeStyle([{ width: "8px", height: "8px", "border-radius": "4px", "margin-right": "8px" }, {
              backgroundColor: typeof ((p2 = t.categories[o2]) == null ? void 0 : p2.color) == "string" && ((c = t.categories[o2]) != null && c.color) ? t.categories[o2].color : `var(--vis-color${v})`
            }])
          }, null, 4),
          createElementVNode("div", null, [
            createElementVNode("span", {
              style: normalizeStyle([{ "font-weight": "600", "margin-right": "8px" }, { color: "var(--tooltip-label-color)" }])
            }, toDisplayString(t.categories[o2].name) + ":", 1),
            createElementVNode("span", {
              style: normalizeStyle([{ "font-weight": "400" }, { color: "var(--tooltip-value-color)" }])
            }, toDisplayString(t.yFormatter ? t.yFormatter(s) : s), 1)
          ])
        ]);
      }), 128))
    ]));
  }
});
var l$1 = /* @__PURE__ */ ((a) => (a.Top = "top", a.Bottom = "bottom", a))(l$1 || {});
function g(t) {
  return computed(() => {
    const r = f(t.categories), e = p(t.categories, r), o2 = l(e, t.categories), c = d(e), n = m(o2), s = y(r, t.spacing), a = t.stackAndGrouped ? y$1(t.data, t.xAxis) : t.data;
    return {
      states: r,
      groupedByState: e,
      colors: o2,
      bars: c,
      colorFunctions: n,
      positions: s,
      chartData: a
    };
  });
}
function f(t) {
  const r = /* @__PURE__ */ new Set();
  return Object.keys(t).forEach((o2) => {
    const c = o2.match(/([A-Z][a-z]+)$/);
    c && r.add(c[1]);
  }), Array.from(r);
}
function p(t, r) {
  const e = {};
  return r.forEach((o2) => {
    e[o2] = Object.keys(t).filter(
      (c) => c.endsWith(o2)
    );
  }), e;
}
function l(t, r) {
  const e = {};
  return Object.entries(t).forEach(([o2, c]) => {
    e[o2] = c.map((n) => {
      var a;
      const s = (a = r[n]) == null ? void 0 : a.color;
      return Array.isArray(s) ? s[0] ?? "#ccc" : s ?? "#ccc";
    });
  }), e;
}
function d(t) {
  const r = {};
  return Object.entries(t).forEach(([e, o2]) => {
    r[e] = o2.map((c) => {
      const n = c.replace(e, "").toLowerCase();
      return (s) => s[n + e];
    });
  }), r;
}
function m(t) {
  const r = {};
  return Object.entries(t).forEach(([e, o2]) => {
    r[e] = (c, n) => o2[n] ?? "#ccc";
  }), r;
}
function y(t, r = 0.4) {
  const e = t.length, o2 = {};
  return t.forEach((c, n) => {
    const s = (n - (e - 1) / 2) * r;
    o2[c] = s;
  }), o2;
}
const re = {
  ref: "slotWrapper",
  style: { display: "none" }
};
/* @__PURE__ */ defineComponent({
  __name: "BarChart",
  props: {
    data: {},
    stacked: { type: Boolean },
    height: {},
    xLabel: {},
    yLabel: {},
    padding: { default: () => ({
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    }) },
    categories: {},
    xFormatter: {},
    yFormatter: {},
    yNumTicks: {},
    minMaxTicksOnly: { type: Boolean },
    xNumTicks: {},
    xExplicitTicks: {},
    yAxis: {},
    groupPadding: { default: 0 },
    barPadding: { default: 0.2 },
    radius: {},
    hideLegend: { type: Boolean },
    hideTooltip: { type: Boolean, default: false },
    orientation: { default: Orientation.Vertical },
    legendPosition: {},
    xDomainLine: { type: Boolean },
    yDomainLine: { type: Boolean },
    xTickLine: { type: Boolean },
    yTickLine: { type: Boolean },
    xGridLine: { type: Boolean },
    yGridLine: { type: Boolean, default: true },
    hideXAxis: { type: Boolean },
    hideYAxis: { type: Boolean },
    stackedGroupedSpacing: { default: 0.1 },
    stackAndGrouped: { type: Boolean },
    valueLabel: {},
    xAxis: {}
  },
  emits: ["click"],
  setup(G, { emit: S }) {
    const O = S, a = G, w = useSlots();
    useTemplateRef("slotWrapper");
    const s = ref();
    if (a.valueLabel && !a.xAxis)
      throw new Error(
        "BarChart: 'xAxis' prop is required when 'valueLabel' is enabled. Please provide an 'xAxis' to display value labels."
      );
    if (!a.yAxis || a.yAxis.length === 0)
      throw new Error("yAxis is required");
    const h = computed(() => a.yAxis.map((e) => (r) => r[e])), x2 = (e, r) => {
      var i;
      return (i = Object.values(a.categories)[r]) == null ? void 0 : i.color;
    }, c = computed(
      () => g({
        data: a.data,
        categories: a.categories,
        stackAndGrouped: a.stackAndGrouped,
        xAxis: a.xAxis,
        spacing: a.stackedGroupedSpacing
      }).value
    ), A = computed(
      () => a.legendPosition === l$1.Top
    );
    function B(e) {
      return s.value = e, D();
    }
    function D(e) {
      return "";
    }
    const T$1 = a.yAxis.map((e) => (r) => r[e]), E = T$1.length, N = a.data.flatMap(
      (e, r) => T$1.map((i, d2) => ({
        x: r,
        y: Number(i(e) ?? 0),
        itemIndex: d2
      }))
    ), z = (e) => {
      if (a.stacked || a.stackAndGrouped) return e.x;
      const r = E;
      if (r <= 1) return e.x;
      const d2 = 1 - (a.groupPadding ?? 0), g2 = d2 / r, y2 = -d2 / 2, n = g2 * e.itemIndex + g2 / 2, f2 = 1 - (a.barPadding ?? 0), M = (y2 + n) * f2;
      return e.x + M;
    };
    return (e, r) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle({
        display: "flex",
        flexDirection: A.value ? "column-reverse" : "column",
        gap: "1rem"
      }),
      onClick: r[0] || (r[0] = (i) => O("click", i, s.value))
    }, [
      createVNode(unref(VisXYContainer), {
        padding: e.padding,
        height: e.height
      }, {
        default: withCtx(() => {
          var i, d2, g2, y2;
          return [
            e.valueLabel ? (openBlock(), createBlock(unref(VisXYLabels), {
              key: 0,
              data: unref(N),
              x: z,
              y: (n) => {
                var l2;
                return n.y + (((l2 = a.valueLabel) == null ? void 0 : l2.labelSpacing) ?? 0);
              },
              label: (i = a.valueLabel) == null ? void 0 : i.label,
              backgroundColor: ((d2 = a.valueLabel) == null ? void 0 : d2.backgroundColor) ?? "transparent",
              color: ((g2 = a.valueLabel) == null ? void 0 : g2.color) ?? "red",
              labelFontSize: (y2 = a.valueLabel) == null ? void 0 : y2.labelFontSize
            }, null, 8, ["data", "y", "label", "backgroundColor", "color", "labelFontSize"])) : createCommentVNode("", true),
            createVNode(unref(VisTooltip), {
              triggers: {
                [unref(GroupedBar).selectors.bar]: B,
                [unref(StackedBar).selectors.bar]: B
              }
            }, null, 8, ["triggers"]),
            e.stackAndGrouped ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(c.value.states, (n) => (openBlock(), createBlock(unref(VisStackedBar), {
              key: n,
              data: c.value.chartData,
              x: (l2, f2) => f2 + c.value.positions[n],
              y: c.value.bars[n],
              color: c.value.colorFunctions[n],
              "rounded-corners": e.radius ?? 0,
              "group-padding": e.groupPadding ?? 0,
              "bar-padding": e.barPadding,
              orientation: e.orientation ?? unref(Orientation).Vertical
            }, null, 8, ["data", "x", "y", "color", "rounded-corners", "group-padding", "bar-padding", "orientation"]))), 128)) : e.stacked ? (openBlock(), createBlock(unref(VisStackedBar), {
              key: 3,
              data: e.data,
              x: (n, l2) => l2,
              y: h.value,
              color: x2,
              "rounded-corners": e.radius ?? 0,
              "group-padding": e.groupPadding ?? 0,
              "bar-padding": e.barPadding ?? 0.2,
              orientation: e.orientation ?? unref(Orientation).Vertical
            }, null, 8, ["data", "x", "y", "rounded-corners", "group-padding", "bar-padding", "orientation"])) : (openBlock(), createBlock(unref(VisGroupedBar), {
              key: 2,
              data: e.data,
              x: (n, l2) => l2,
              y: h.value,
              color: x2,
              "rounded-corners": e.radius ?? 0,
              "group-padding": e.groupPadding ?? 0,
              "bar-padding": e.barPadding ?? 0.2,
              orientation: e.orientation ?? unref(Orientation).Vertical
            }, null, 8, ["data", "x", "y", "rounded-corners", "group-padding", "bar-padding", "orientation"])),
            e.hideXAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
              key: 4,
              type: "x",
              "tick-format": e.xFormatter,
              label: e.xLabel,
              "grid-line": e.xGridLine,
              "domain-line": !!e.xDomainLine,
              "tick-line": e.xTickLine,
              "num-ticks": e.xNumTicks,
              "tick-values": e.xExplicitTicks,
              minMaxTicksOnly: e.minMaxTicksOnly
            }, null, 8, ["tick-format", "label", "grid-line", "domain-line", "tick-line", "num-ticks", "tick-values", "minMaxTicksOnly"])),
            e.hideYAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
              key: 5,
              type: "y",
              label: e.yLabel,
              "grid-line": e.orientation !== unref(Orientation).Horizontal && e.yGridLine,
              "domain-line": !!e.yDomainLine,
              "tick-format": e.yFormatter,
              "num-ticks": e.yNumTicks,
              "tick-line": e.yTickLine
            }, null, 8, ["label", "grid-line", "domain-line", "tick-format", "num-ticks", "tick-line"]))
          ];
        }),
        _: 1
      }, 8, ["padding", "height"]),
      e.hideLegend ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: A.value ? "1rem" : void 0
        })
      }, [
        createVNode(unref(VisBulletLegend), {
          items: Object.values(a.categories).map((i) => ({
            ...i,
            color: Array.isArray(i.color) ? i.color[0] : i.color
          }))
        }, null, 8, ["items"])
      ], 4)),
      createElementVNode("div", re, [
        unref(w).tooltip ? renderSlot(e.$slots, "tooltip", {
          key: 0,
          values: s.value
        }) : s.value ? renderSlot(e.$slots, "fallback", { key: 1 }, () => [
          createVNode(T, {
            data: s.value,
            categories: a.categories,
            toolTipTitle: unref(o)(s.value) ?? "",
            yFormatter: a.orientation === unref(Orientation).Horizontal ? a.xFormatter : a.yFormatter
          }, null, 8, ["data", "categories", "toolTipTitle", "yFormatter"])
        ]) : createCommentVNode("", true)
      ], 512)
    ], 4));
  }
});
const j = {
  key: 0,
  class: "flex items-center justify-end pb-4"
}, W = {
  ref: "slotWrapper",
  class: "hidden"
};
/* @__PURE__ */ defineComponent({
  __name: "BubbleChart",
  props: {
    xAccessor: {},
    yAccessor: {},
    sizeAccessor: {},
    labelPosition: {},
    sizeRange: {},
    opacity: {},
    xExplicitTicks: { default: void 0 },
    minMaxTicksOnly: { type: Boolean, default: false },
    data: {},
    hideLegend: { type: Boolean, default: false },
    height: {},
    xLabel: { default: "" },
    yLabel: { default: "" },
    padding: { default: () => ({ top: 5, right: 5, bottom: 5, left: 5 }) },
    categories: {},
    categoryKey: {},
    xFormatter: {},
    yFormatter: {},
    legendPosition: { default: l$1.Bottom },
    sizeOptions: {},
    xDomainLine: { type: Boolean, default: true },
    yDomainLine: { type: Boolean, default: true },
    xTickLine: { type: Boolean, default: true },
    yTickLine: { type: Boolean, default: true },
    xGridLine: { type: Boolean, default: false },
    yGridLine: { type: Boolean, default: true },
    hideXAxis: { type: Boolean, default: false },
    hideYAxis: { type: Boolean, default: false },
    xNumTicks: { default: void 0 },
    yNumTicks: { default: void 0 },
    hideTooltip: { type: Boolean, default: false },
    crosshairConfig: { default: () => ({
      color: "#666"
    }) }
  },
  emits: ["click"],
  setup(k, { emit: x2 }) {
    const e = k, L = useSlots();
    useTemplateRef("slotWrapper");
    const a = ref(), T$1 = e.xAccessor, h = e.yAccessor, b = e.sizeAccessor || ((o2) => typeof o2.comments == "number" ? o2.comments : 1), B = (o2) => {
      var d2, y2;
      if (!e.categories || !e.categoryKey)
        return console.warn(
          "BubbleChart: categories and categoryKey are required for color mapping"
        ), "#cccccc";
      const r = String(o2[e.categoryKey]);
      let i = (d2 = e.categories[r]) == null ? void 0 : d2.color;
      return Object.keys(e.categories).length === 1 && (i = (y2 = e.categories[e.categoryKey]) == null ? void 0 : y2.color), i || (console.warn(
        `BubbleChart: No color defined for category "${r}"`
      ), "#cccccc");
    }, v = x2;
    function A(o2) {
      return a.value = o2, F();
    }
    function F(o2) {
      return "";
    }
    const V = {
      [Scatter.selectors.point]: A
    };
    return (o$1, r) => (openBlock(), createElementBlock(Fragment, null, [
      !e.hideLegend && e.legendPosition === unref(l$1).Top ? (openBlock(), createElementBlock("div", j, [
        createVNode(unref(VisBulletLegend), {
          items: Object.values(e.categories).map((i) => ({
            ...i,
            color: Array.isArray(i.color) ? i.color[0] : i.color
          }))
        }, null, 8, ["items"])
      ])) : createCommentVNode("", true),
      createVNode(unref(VisXYContainer), {
        data: e.data,
        height: e.height || 600,
        padding: e.padding,
        scaleByDomain: true,
        onClick: r[0] || (r[0] = (i) => v("click", i, a.value))
      }, {
        default: withCtx(() => [
          e.hideTooltip ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisTooltip), {
            key: 0,
            triggers: V
          })),
          createVNode(unref(VisScatter), {
            x: unref(T$1),
            y: unref(h),
            color: B,
            size: unref(b),
            labelPosition: e.labelPosition || unref(Position).Bottom,
            sizeRange: e.sizeRange || [1, 20],
            opacity: e.opacity,
            cursor: "pointer"
          }, null, 8, ["x", "y", "size", "labelPosition", "sizeRange", "opacity"]),
          e.hideXAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
            key: 1,
            type: "x",
            label: e.xLabel,
            tickFormat: e.xFormatter,
            gridLine: e.xGridLine,
            domainLine: !!e.xDomainLine,
            tickLine: e.xTickLine,
            numTicks: e.xNumTicks,
            tickValues: e.xExplicitTicks,
            minMaxTicksOnly: e.minMaxTicksOnly
          }, null, 8, ["label", "tickFormat", "gridLine", "domainLine", "tickLine", "numTicks", "tickValues", "minMaxTicksOnly"])),
          e.hideYAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
            key: 2,
            type: "y",
            label: e.yLabel,
            tickFormat: e.yFormatter,
            gridLine: e.yGridLine,
            domainLine: !!e.yDomainLine,
            tickLine: e.yTickLine,
            numTicks: e.yNumTicks
          }, null, 8, ["label", "tickFormat", "gridLine", "domainLine", "tickLine", "numTicks"]))
        ]),
        _: 1
      }, 8, ["data", "height", "padding"]),
      createElementVNode("div", W, [
        unref(L).tooltip ? renderSlot(o$1.$slots, "tooltip", {
          key: 0,
          values: a.value
        }) : a.value ? renderSlot(o$1.$slots, "fallback", { key: 1 }, () => [
          createVNode(T, {
            data: a.value,
            categories: e.categories || {},
            toolTipTitle: unref(o)(a.value) ?? "",
            yFormatter: e.yFormatter
          }, null, 8, ["data", "categories", "toolTipTitle", "yFormatter"])
        ]) : createCommentVNode("", true)
      ], 512)
    ], 64));
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartBarGroup",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    barOneName: {
      type: String,
      required: true
    },
    barTwoName: {
      type: String,
      required: true
    },
    barOneLabel: {
      type: String,
      required: true
    },
    barTwoLabel: {
      type: String,
      required: true
    },
    dataYears: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => props.data);
    ({
      [props.barOneName]: { name: props.barOneLabel },
      [props.barTwoName]: { name: props.barTwoLabel }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseButtonYear = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_baseButtonYear, {
        data: props.dataYears
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartBarGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "BaseChartBarGroup" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChartLine",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    lineName: {
      type: String,
      required: true
    },
    lineLabel: {
      type: String,
      required: true
    },
    dataYears: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => props.data);
    ({
      [props.lineName]: { name: `${props.lineLabel}` }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseButtonYear = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_baseButtonYear, { data: __props.dataYears }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartLine.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$2, { __name: "BaseChartLine" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChartBar",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    barName: {
      type: String,
      required: true
    },
    barLabel: {
      type: String,
      required: true
    },
    dataYears: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => props.data);
    computed(() => ({
      [props.barName]: {
        name: `${props.barLabel}`,
        color: "#60a5fa"
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseButtonYear = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_baseButtonYear, { data: __props.dataYears }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "BaseChartBar" });
function monthStartEnd({ data, startLabel, endLabel, year }) {
  const january_start = data.filter((item) => item?.[startLabel]?.includes("Jan") && item?.[startLabel]?.includes(year)).length;
  const february_start = data.filter((item) => item?.[startLabel]?.includes("Feb") && item?.[startLabel]?.includes(year)).length;
  const march_start = data.filter((item) => item?.[startLabel]?.includes("Mar") && item?.[startLabel]?.includes(year)).length;
  const april_start = data.filter((item) => item?.[startLabel]?.includes("Apr") && item?.[startLabel]?.includes(year)).length;
  const may_start = data.filter((item) => item?.[startLabel]?.includes("May") && item?.[startLabel]?.includes(year)).length;
  const june_start = data.filter((item) => item?.[startLabel]?.includes("Jun") && item?.[startLabel]?.includes(year)).length;
  const july_start = data.filter((item) => item?.[startLabel]?.includes("Jul") && item?.[startLabel]?.includes(year)).length;
  const august_start = data.filter((item) => item?.[startLabel]?.includes("Aug") && item?.[startLabel]?.includes(year)).length;
  const september_start = data.filter((item) => item?.[startLabel]?.includes("Sep") && item?.[startLabel]?.includes(year)).length;
  const october_start = data.filter((item) => item?.[startLabel]?.includes("Oct") && item?.[startLabel]?.includes(year)).length;
  const november_start = data.filter((item) => item?.[startLabel]?.includes("Nov") && item?.[startLabel]?.includes(year)).length;
  const december_start = data.filter((item) => item?.[startLabel]?.includes("Dec") && item?.[startLabel]?.includes(year)).length;
  const january_end = data.filter((item) => item?.[endLabel]?.includes("Jan") && item?.[endLabel]?.includes(year)).length;
  const february_end = data.filter((item) => item?.[endLabel]?.includes("Feb") && item?.[endLabel]?.includes(year)).length;
  const march_end = data.filter((item) => item?.[endLabel]?.includes("Mar") && item?.[endLabel]?.includes(year)).length;
  const april_end = data.filter((item) => item?.[endLabel]?.includes("Apr") && item?.[endLabel]?.includes(year)).length;
  const may_end = data.filter((item) => item?.[endLabel]?.includes("May") && item?.[endLabel]?.includes(year)).length;
  const june_end = data.filter((item) => item?.[endLabel]?.includes("Jun") && item?.[endLabel]?.includes(year)).length;
  const july_end = data.filter((item) => item?.[endLabel]?.includes("Jul") && item?.[endLabel]?.includes(year)).length;
  const august_end = data.filter((item) => item?.[endLabel]?.includes("Aug") && item?.[endLabel]?.includes(year)).length;
  const september_end = data.filter((item) => item?.[endLabel]?.includes("Sep") && item?.[endLabel]?.includes(year)).length;
  const october_end = data.filter((item) => item?.[endLabel]?.includes("Oct") && item?.[endLabel]?.includes(year)).length;
  const november_end = data.filter((item) => item?.[endLabel]?.includes("Nov") && item?.[endLabel]?.includes(year)).length;
  const december_end = data.filter((item) => item?.[endLabel]?.includes("Dec") && item?.[endLabel]?.includes(year)).length;
  return [
    {
      month: "January",
      start_date: january_start,
      end_date: january_end
    },
    {
      month: "February",
      start_date: february_start,
      end_date: february_end
    },
    {
      month: "March",
      start_date: march_start,
      end_date: march_end
    },
    {
      month: "April",
      start_date: april_start,
      end_date: april_end
    },
    {
      month: "May",
      start_date: may_start,
      end_date: may_end
    },
    {
      month: "June",
      start_date: june_start,
      end_date: june_end
    },
    {
      month: "July",
      start_date: july_start,
      end_date: july_end
    },
    {
      month: "August",
      start_date: august_start,
      end_date: august_end
    },
    {
      month: "September",
      start_date: september_start,
      end_date: september_end
    },
    {
      month: "October",
      start_date: october_start,
      end_date: october_end
    },
    {
      month: "November",
      start_date: november_start,
      end_date: november_end
    },
    {
      month: "December",
      start_date: december_start,
      end_date: december_end
    }
  ];
}
function monthStart({ data, startLabel, year }) {
  const january_start = data.filter((item) => item?.[startLabel]?.includes("Jan") && item?.[startLabel]?.includes(year)).length;
  const february_start = data.filter((item) => item?.[startLabel]?.includes("Feb") && item?.[startLabel]?.includes(year)).length;
  const march_start = data.filter((item) => item?.[startLabel]?.includes("Mar") && item?.[startLabel]?.includes(year)).length;
  const april_start = data.filter((item) => item?.[startLabel]?.includes("Apr") && item?.[startLabel]?.includes(year)).length;
  const may_start = data.filter((item) => item?.[startLabel]?.includes("May") && item?.[startLabel]?.includes(year)).length;
  const june_start = data.filter((item) => item?.[startLabel]?.includes("Jun") && item?.[startLabel]?.includes(year)).length;
  const july_start = data.filter((item) => item?.[startLabel]?.includes("Jul") && item?.[startLabel]?.includes(year)).length;
  const august_start = data.filter((item) => item?.[startLabel]?.includes("Aug") && item?.[startLabel]?.includes(year)).length;
  const september_start = data.filter((item) => item?.[startLabel]?.includes("Sep") && item?.[startLabel]?.includes(year)).length;
  const october_start = data.filter((item) => item?.[startLabel]?.includes("Oct") && item?.[startLabel]?.includes(year)).length;
  const november_start = data.filter((item) => item?.[startLabel]?.includes("Nov") && item?.[startLabel]?.includes(year)).length;
  const december_start = data.filter((item) => item?.[startLabel]?.includes("Dec") && item?.[startLabel]?.includes(year)).length;
  return [
    {
      month: "January",
      date: january_start
    },
    {
      month: "February",
      date: february_start
    },
    {
      month: "March",
      date: march_start
    },
    {
      month: "April",
      date: april_start
    },
    {
      month: "May",
      date: may_start
    },
    {
      month: "June",
      date: june_start
    },
    {
      month: "July",
      date: july_start
    },
    {
      month: "August",
      date: august_start
    },
    {
      month: "September",
      date: september_start
    },
    {
      month: "October",
      date: october_start
    },
    {
      month: "November",
      date: november_start
    },
    {
      month: "December",
      date: december_start
    }
  ];
}
function filterYear({ data, year }) {
  return data?.filter((item) => item?.date.includes(year) ?? "") ?? [];
}
const __nuxt_component_3_lazy_visible = createLazyVisibleComponent("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue", () => import('./Container-lY4GUcnP.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const yearStore = useYear();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/books", { key: "chart_book" }, "$LfO9GtariX")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/water", { key: "chart_hydration" }, "$KMKYIrndvK")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/weight", { key: "chart_weight" }, "$SDIVj1M84F")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/workouts", { key: "chart_workout" }, "$qASg8yHiFN")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/profile/setting", { key: "setting" }, "$WP_QjALZe2")), await __temp, __restore();
    const { data: data_chart_book } = useNuxtData("chart_book");
    const { data: data_chart_hydration } = useNuxtData("chart_hydration");
    const { data: data_chart_weight } = useNuxtData("chart_weight");
    const { data: data_chart_workout } = useNuxtData("chart_workout");
    const { data: data_setting } = useNuxtData("setting");
    const useBookChart = computed(() => monthStartEnd({ data: data_chart_book.value?.data, startLabel: "book_start_date", endLabel: "book_end_date", year: yearStore.year.toString() }));
    const useHydrationChart = computed(() => filterYear({ data: data_chart_hydration.value?.data, year: yearStore.year.toString() }));
    const useWeightChart = computed(() => filterYear({ data: data_chart_weight.value?.data, year: yearStore.year.toString() }));
    const useWorkoutChart = computed(() => monthStart({ data: data_chart_workout.value?.data, startLabel: "date", year: yearStore.year.toString() }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appWelcome = __nuxt_component_0$1;
      const _component_baseHeader = __nuxt_component_0$3;
      const _component_baseCardOverview = __nuxt_component_2;
      const _component_LazyVisibleUContainer = __nuxt_component_3_lazy_visible;
      const _component_baseSectionHeader = __nuxt_component_0$4;
      const _component_baseChartBarGroup = __nuxt_component_5;
      const _component_baseChartLine = __nuxt_component_6;
      const _component_baseChartBar = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}><section>`);
      _push(ssrRenderComponent(_component_appWelcome, null, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Your Overview" }, null, _parent));
      _push(`<div class="container-cards">`);
      if (unref(data_setting).bookSetting.value) {
        _push(ssrRenderComponent(_component_baseCardOverview, {
          text: "Books",
          color: "bg-gradient-to-br from-green-600 to-green-700",
          icon: "material-symbols:book-ribbon-outline-rounded",
          collection: "books"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).fastingSetting.value) {
        _push(ssrRenderComponent(_component_baseCardOverview, {
          text: "Fasting",
          color: "bg-gradient-to-br from-yellow-600 to-yellow-700",
          icon: "material-symbols:nest-clock-farsight-analog-outline-rounded",
          collection: "fasting"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).waterSetting.value) {
        _push(ssrRenderComponent(_component_baseCardOverview, {
          text: "Daily Water",
          color: "bg-gradient-to-br from-blue-600 to-blue-700",
          icon: "material-symbols:water-medium-outline-rounded",
          collection: "dailyWater"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).weightSetting.value) {
        _push(ssrRenderComponent(_component_baseCardOverview, {
          text: "Weight",
          color: "bg-gradient-to-br from-purple-600 to-purple-700",
          icon: "material-symbols:monitor-weight-outline",
          collection: "weight"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="sections">`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Your Progress Charts" }, null, _parent));
      if (unref(data_setting).bookSetting.value) {
        _push(ssrRenderComponent(_component_LazyVisibleUContainer, { "hydrate-on-visible": "" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Books" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_baseChartBarGroup, {
                data: useBookChart.value,
                barOneName: "start_date",
                barTwoName: "end_date",
                barOneLabel: "Start Date",
                barTwoLabel: "End Date",
                dataYears: unref(data_chart_book).years
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseSectionHeader, { text: "Books" }),
                createVNode(_component_baseChartBarGroup, {
                  data: useBookChart.value,
                  barOneName: "start_date",
                  barTwoName: "end_date",
                  barOneLabel: "Start Date",
                  barTwoLabel: "End Date",
                  dataYears: unref(data_chart_book).years
                }, null, 8, ["data", "dataYears"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).waterSetting.value) {
        _push(ssrRenderComponent(_component_LazyVisibleUContainer, { "hydrate-on-visible": "" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Water Intake" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_baseChartLine, {
                data: useHydrationChart.value,
                lineName: "water_intake",
                lineLabel: "Water total",
                dataYears: unref(data_chart_hydration).years
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseSectionHeader, { text: "Water Intake" }),
                createVNode(_component_baseChartLine, {
                  data: useHydrationChart.value,
                  lineName: "water_intake",
                  lineLabel: "Water total",
                  dataYears: unref(data_chart_hydration).years
                }, null, 8, ["data", "dataYears"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).weightSetting.value) {
        _push(ssrRenderComponent(_component_LazyVisibleUContainer, { "hydrate-on-visible": "" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Weight" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_baseChartLine, {
                data: useWeightChart.value,
                lineName: "weight",
                lineLabel: "Weight",
                dataYears: unref(data_chart_weight).years
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseSectionHeader, { text: "Weight" }),
                createVNode(_component_baseChartLine, {
                  data: useWeightChart.value,
                  lineName: "weight",
                  lineLabel: "Weight",
                  dataYears: unref(data_chart_weight).years
                }, null, 8, ["data", "dataYears"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).workoutSetting.value) {
        _push(ssrRenderComponent(_component_LazyVisibleUContainer, { "hydrate-on-visible": "" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Workouts" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_baseChartBar, {
                data: useWorkoutChart.value,
                barName: "date",
                barLabel: "Total",
                dataYears: unref(data_chart_workout).years
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseSectionHeader, { text: "Workouts" }),
                createVNode(_component_baseChartBar, {
                  data: useWorkoutChart.value,
                  barName: "date",
                  barLabel: "Total",
                  dataYears: unref(data_chart_workout).years
                }, null, 8, ["data", "dataYears"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2CHxRZS3.mjs.map
