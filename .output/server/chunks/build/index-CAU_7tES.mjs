import { defineComponent, withAsyncContext, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, computed, toValue, reactive, ref, mergeProps, toDisplayString, useSlots, renderSlot, useSSRContext, useTemplateRef, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { f as fetchDefaults, b as useAsyncData, c as useRequestFetch, d as useUserSession, h as __nuxt_component_0$3, e as useAppConfig, t as tv, g as __nuxt_component_0$1$1 } from './server.mjs';
import { Primitive } from 'reka-ui';
import { _ as _sfc_main$b } from './Container-Cb3Pb78c.mjs';
import { Orientation, StackedBar, GroupedBar, Scatter, Position } from '@unovis/ts';
import { VisXYContainer, VisTooltip, VisStackedBar, VisGroupedBar, VisAxis, VisBulletLegend, VisScatter } from '@unovis/vue';
import { O as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    controller?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Description.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$a, { __name: "BaseDescription" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useUserSession();
    const useUser = ref(user?.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseDescription = __nuxt_component_0$1;
      _push(`<!--[--><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-2"> Welcome, </h2><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">${ssrInterpolate(unref(useUser).first_name)}! </h2>`);
      _push(ssrRenderComponent(_component_baseDescription, {
        text: unref(useUser).username
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Welcome.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$9, { __name: "AppWelcome" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Header",
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
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 flex justify-center mb-2" }, _attrs))}>${ssrInterpolate(props.text)}</h2>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$8, { __name: "BaseHeader" });
const theme = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$7 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.card || {} })({
      variant: props.variant
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: props.ui?.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: props.ui?.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    iconName: {
      type: String,
      default: "",
      required: false
    },
    styles: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1$1;
      _push(ssrRenderComponent(_component_Icon, mergeProps({
        class: props.styles,
        name: props.iconName,
        size: "24"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Icon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$6, { __name: "BaseIcon" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Card",
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
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$7;
      const _component_baseIcon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-[300px] divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center"${_scopeId}>`);
            if (props.icon) {
              _push2(ssrRenderComponent(_component_baseIcon, {
                iconName: props.icon
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>${ssrInterpolate(props.text)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                props.icon ? (openBlock(), createBlock(_component_baseIcon, {
                  key: 0,
                  iconName: props.icon
                }, null, 8, ["iconName"])) : createCommentVNode("", true),
                createVNode("span", null, toDisplayString(props.text), 1)
              ])
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>FOOTER</span>`);
          } else {
            return [
              createVNode("span", null, "FOOTER")
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>BODY</span>`);
          } else {
            return [
              createVNode("span", null, "BODY")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$5, { __name: "AppCard" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SectionHeader",
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
      _push(`<h3${ssrRenderAttrs(mergeProps({ class: "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 my-8 flex justify-center" }, _attrs))}>${ssrInterpolate(props.text)}</h3>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/SectionHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$4, { __name: "BaseSectionHeader" });
function o$1(n) {
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
var l$1 = /* @__PURE__ */ ((a) => (a.Top = "top", a.Bottom = "bottom", a))(l$1 || {}), o = /* @__PURE__ */ ((a) => (a.Basis = "basis", a.BasisClosed = "basisClosed", a.BasisOpen = "basisOpen", a.Bundle = "bundle", a.Cardinal = "cardinal", a.CardinalClosed = "cardinalClosed", a.CardinalOpen = "cardinalOpen", a.CatmullRom = "catmullRom", a.CatmullRomClosed = "catmullRomClosed", a.CatmullRomOpen = "catmullRomOpen", a.Linear = "linear", a.LinearClosed = "linearClosed", a.MonotoneX = "monotoneX", a.MonotoneY = "monotoneY", a.Natural = "natural", a.Step = "step", a.StepAfter = "stepAfter", a.StepBefore = "stepBefore", a))(o || {});
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
const U = {
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
    yNumTicks: { default: (t) => t.data.length > 24 ? 24 / 4 : t.data.length - 1 },
    minMaxTicksOnly: { type: Boolean },
    xNumTicks: { default: (t) => t.data.length > 24 ? 24 / 4 : t.data.length - 1 },
    xExplicitTicks: {},
    yAxis: {},
    groupPadding: {},
    barPadding: {},
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
    xAxis: {}
  },
  emits: ["click"],
  setup(t, { emit: V }) {
    const x2 = V, a = t, G = useSlots();
    useTemplateRef("slotWrapper");
    const r = ref();
    if (!a.yAxis || a.yAxis.length === 0)
      throw new Error("yAxis is required");
    const f2 = computed(() => a.yAxis.map((e) => (d2) => d2[e])), v = (e, d2) => {
      var o2;
      return (o2 = Object.values(a.categories)[d2]) == null ? void 0 : o2.color;
    }, s = computed(
      () => g({
        data: a.data,
        categories: a.categories,
        stackAndGrouped: a.stackAndGrouped,
        xAxis: a.xAxis,
        spacing: a.stackedGroupedSpacing
      }).value
    ), h = computed(
      () => a.legendPosition === l$1.Top
    );
    function b(e) {
      return r.value = e, P();
    }
    function P(e) {
      return "";
    }
    return (e, d2) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle({
        display: "flex",
        flexDirection: h.value ? "column-reverse" : "column",
        gap: "1rem"
      }),
      onClick: d2[0] || (d2[0] = (o2) => x2("click", o2, r.value))
    }, [
      createVNode(unref(VisXYContainer), {
        padding: e.padding,
        height: e.height
      }, {
        default: withCtx(() => [
          createVNode(unref(VisTooltip), {
            triggers: {
              [unref(GroupedBar).selectors.bar]: b,
              [unref(StackedBar).selectors.bar]: b
            }
          }, null, 8, ["triggers"]),
          e.stackAndGrouped ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(s.value.states, (o2) => (openBlock(), createBlock(unref(VisStackedBar), {
            key: o2,
            data: s.value.chartData,
            x: (p2, F) => F + s.value.positions[o2],
            y: s.value.bars[o2],
            color: s.value.colorFunctions[o2],
            "rounded-corners": e.radius ?? 0,
            "group-padding": e.groupPadding ?? 0,
            "bar-padding": e.barPadding,
            orientation: e.orientation ?? unref(Orientation).Vertical
          }, null, 8, ["data", "x", "y", "color", "rounded-corners", "group-padding", "bar-padding", "orientation"]))), 128)) : e.stacked ? (openBlock(), createBlock(unref(VisStackedBar), {
            key: 2,
            data: e.data,
            x: (o2, p2) => p2,
            y: f2.value,
            color: v,
            "rounded-corners": e.radius ?? 0,
            "group-padding": e.groupPadding ?? 0,
            "bar-padding": e.barPadding ?? 0.2,
            orientation: e.orientation ?? unref(Orientation).Vertical
          }, null, 8, ["data", "x", "y", "rounded-corners", "group-padding", "bar-padding", "orientation"])) : (openBlock(), createBlock(unref(VisGroupedBar), {
            key: 1,
            data: e.data,
            x: (o2, p2) => p2,
            y: f2.value,
            color: v,
            "rounded-corners": e.radius ?? 0,
            "group-padding": e.groupPadding ?? 0,
            "bar-padding": e.barPadding ?? 0.2,
            orientation: e.orientation ?? unref(Orientation).Vertical
          }, null, 8, ["data", "x", "y", "rounded-corners", "group-padding", "bar-padding", "orientation"])),
          e.hideXAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
            key: 3,
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
            key: 4,
            type: "y",
            label: e.yLabel,
            "grid-line": e.orientation !== unref(Orientation).Horizontal && e.yGridLine,
            "domain-line": !!e.yDomainLine,
            "tick-format": e.yFormatter,
            "num-ticks": e.yNumTicks,
            "tick-line": e.yTickLine
          }, null, 8, ["label", "grid-line", "domain-line", "tick-format", "num-ticks", "tick-line"]))
        ]),
        _: 1
      }, 8, ["padding", "height"]),
      e.hideLegend ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: h.value ? "1rem" : void 0
        })
      }, [
        createVNode(unref(VisBulletLegend), {
          items: Object.values(a.categories)
        }, null, 8, ["items"])
      ], 4)),
      createElementVNode("div", U, [
        unref(G).tooltip ? renderSlot(e.$slots, "tooltip", {
          key: 0,
          values: r.value
        }) : r.value ? renderSlot(e.$slots, "fallback", { key: 1 }, () => [
          createVNode(T, {
            data: r.value,
            categories: a.categories,
            toolTipTitle: unref(o$1)(r.value) ?? "",
            yFormatter: a.orientation === unref(Orientation).Horizontal ? a.xFormatter : a.yFormatter
          }, null, 8, ["data", "categories", "toolTipTitle", "yFormatter"])
        ]) : createCommentVNode("", true)
      ], 512)
    ], 4));
  }
});
const X = {
  key: 0,
  class: "flex items-center justify-end pb-4"
}, Y = {
  key: 1,
  class: "flex items-center justify-end pt-4"
}, q = {
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
  setup(L, { emit: h }) {
    const e = L, T$1 = useSlots();
    useTemplateRef("slotWrapper");
    const o2 = ref(), y2 = computed(() => e.categories && typeof e.categories == "object" && !Array.isArray(e.categories) ? Object.values(e.categories) : Array.isArray(e.categories) ? e.categories : []), b = e.xAccessor, B = e.yAccessor, v = e.sizeAccessor || ((i) => typeof i.comments == "number" ? i.comments : 1), A = (i) => {
      var p2, f2;
      if (!e.categories || !e.categoryKey)
        return console.warn("BubbleChart: categories and categoryKey are required for color mapping"), "#cccccc";
      const n = String(i[e.categoryKey]);
      let l2 = (p2 = e.categories[n]) == null ? void 0 : p2.color;
      return Object.keys(e.categories).length === 1 && (l2 = (f2 = e.categories[e.categoryKey]) == null ? void 0 : f2.color), l2 || (console.warn(`BubbleChart: No color defined for category "${n}"`), "#cccccc");
    }, F = h;
    function V(i) {
      return o2.value = i, C();
    }
    function C(i) {
      return "";
    }
    const _2 = {
      [Scatter.selectors.point]: V
    };
    return (i, n) => (openBlock(), createElementBlock(Fragment, null, [
      !e.hideLegend && e.legendPosition === unref(l$1).Top ? (openBlock(), createElementBlock("div", X, [
        createVNode(unref(VisBulletLegend), { items: y2.value }, null, 8, ["items"])
      ])) : createCommentVNode("", true),
      createVNode(unref(VisXYContainer), {
        data: e.data,
        height: e.height || 600,
        padding: e.padding,
        scaleByDomain: true,
        onClick: n[0] || (n[0] = (l2) => F("click", l2, o2.value))
      }, {
        default: withCtx(() => [
          e.hideTooltip ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisTooltip), {
            key: 0,
            triggers: _2
          })),
          createVNode(unref(VisScatter), {
            x: unref(b),
            y: unref(B),
            color: A,
            size: unref(v),
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
      !e.hideLegend && e.legendPosition === unref(l$1).Bottom ? (openBlock(), createElementBlock("div", Y, [
        createVNode(unref(VisBulletLegend), { items: y2.value }, null, 8, ["items"])
      ])) : createCommentVNode("", true),
      createElementVNode("div", q, [
        unref(T$1).tooltip ? renderSlot(i.$slots, "tooltip", {
          key: 0,
          values: o2.value
        }) : o2.value ? renderSlot(i.$slots, "fallback", { key: 1 }, () => [
          createVNode(T, {
            data: o2.value,
            categories: e.categories || {},
            toolTipTitle: unref(o$1)(o2.value) ?? "",
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
    }
  },
  setup(__props) {
    const props = __props;
    const useData = props.data;
    const categories = {
      [props.barOneName]: { name: props.barOneLabel, color: "#60a5fa" },
      [props.barTwoName]: { name: props.barTwoLabel, color: "#0070fa" }
    };
    const xFormatter = (i) => `${useData[i]?.month}`;
    const yFormatter = (tick) => tick.toString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BarChart = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_BarChart, mergeProps({
        data: unref(useData),
        height: 300,
        categories,
        "y-axis": [props.barOneName, props.barTwoName],
        "group-padding": 0,
        "bar-padding": 0.2,
        "x-num-ticks": 6,
        radius: 4,
        "x-formatter": xFormatter,
        "y-formatter": yFormatter,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(l$1)).Top,
        "hide-legend": false,
        "y-grid-line": true
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/ChartBarGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "AppChartBarGroup" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    }
  },
  setup(__props) {
    const props = __props;
    const useData = props.data;
    const categories = computed(() => ({
      [props.barName]: {
        name: `${props.barLabel}`,
        color: "#60a5fa"
      }
    }));
    const xFormatter = (i) => `${useData[i]?.month}`;
    const yFormatter = (tick) => tick.toString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BarChart = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_BarChart, mergeProps({
        data: unref(useData),
        height: 300,
        categories: unref(categories),
        "y-axis": [props.barName],
        "x-num-ticks": 6,
        radius: 4,
        "y-grid-line": true,
        "x-formatter": xFormatter,
        "y-formatter": yFormatter,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(l$1)).Top,
        "hide-legend": false
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/ChartBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$2, { __name: "AppChartBar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    }
  },
  setup(__props) {
    const props = __props;
    const useData = props.data;
    const categories = {
      [props.lineName]: { name: `${props.lineLabel}`, color: "#60a5fa" }
    };
    const xFormatter = (tick, _i, _ticks) => {
      return useData[tick]?.date ?? "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LineChart = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_LineChart, mergeProps({
        data: unref(useData),
        height: 300,
        "x-label": "Date",
        "y-label": `${props.lineLabel}`,
        categories,
        "y-num-ticks": 4,
        "x-num-ticks": 7,
        "x-formatter": xFormatter,
        "curve-type": ("CurveType" in _ctx ? _ctx.CurveType : unref(o)).Basis,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(l$1)).Top,
        "hide-legend": false,
        "y-grid-line": true
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/ChartLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "AppChartLine" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: books, pending: pending_books } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/books", { lazy: true }, "$LfO9GtariX")), __temp = await __temp, __restore(), __temp);
    const { data: cold_soaks, pending: pending_cold_soaks } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/coldsoaks", { lazy: true }, "$KMKYIrndvK")), __temp = await __temp, __restore(), __temp);
    const { data: water_intake, pending: pending_water } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/water", { lazy: true }, "$SDIVj1M84F")), __temp = await __temp, __restore(), __temp);
    const { data: weight, pending: pending_weight } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/weight", { lazy: true }, "$qASg8yHiFN")), __temp = await __temp, __restore(), __temp);
    const { data: workouts, pending: pending_workouts } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/workouts", { lazy: true }, "$WP_QjALZe2")), __temp = await __temp, __restore(), __temp);
    const { data: stats, pending: pending_stats } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/stats", { lazy: true }, "$54DM7eVV6x")), __temp = await __temp, __restore(), __temp);
    console.log(stats.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appWelcome = __nuxt_component_0;
      const _component_baseHeader = __nuxt_component_1$1;
      const _component_appCard = __nuxt_component_2;
      const _component_UContainer = _sfc_main$b;
      const _component_baseSectionHeader = __nuxt_component_4;
      const _component_appChartBarGroup = __nuxt_component_5;
      const _component_appChartBar = __nuxt_component_6;
      const _component_appChartLine = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}><section>`);
      _push(ssrRenderComponent(_component_appWelcome, null, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Your Overview" }, null, _parent));
      _push(`<div class="container-cards">`);
      _push(ssrRenderComponent(_component_appCard, {
        text: "Books",
        color: "bg-gradient-to-br from-green-600 to-green-700",
        icon: "material-symbols:book-ribbon-outline-rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        text: "Cold Soak",
        color: "bg-gradient-to-br from-blue-300 to-blue-500",
        icon: "material-symbols:snowing-heavy"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        text: "Fasting",
        color: "bg-gradient-to-br from-yellow-600 to-yellow-700",
        icon: "material-symbols:nest-clock-farsight-analog-outline-rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        text: "Daily Water",
        color: "bg-gradient-to-br from-blue-600 to-blue-700",
        icon: "material-symbols:water-medium-outline-rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        text: "Weight",
        color: "bg-gradient-to-br from-purple-600 to-purple-700",
        icon: "material-symbols:monitor-weight-outline"
      }, null, _parent));
      _push(`</div></section><section class="sections">`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Your Progress Charts" }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Books" }, null, _parent2, _scopeId));
            if (!unref(pending_books)) {
              _push2(ssrRenderComponent(_component_appChartBarGroup, {
                data: unref(books),
                barOneName: "start_date",
                barTwoName: "end_date",
                barOneLabel: "Start Date",
                barTwoLabel: "End Date"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_baseSectionHeader, { text: "Books" }),
              !unref(pending_books) ? (openBlock(), createBlock(_component_appChartBarGroup, {
                key: 0,
                data: unref(books),
                barOneName: "start_date",
                barTwoName: "end_date",
                barOneLabel: "Start Date",
                barTwoLabel: "End Date"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Cold Soaks" }, null, _parent2, _scopeId));
            if (!unref(pending_cold_soaks)) {
              _push2(ssrRenderComponent(_component_appChartBar, {
                data: unref(cold_soaks),
                barName: "date",
                barLabel: "Total"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_baseSectionHeader, { text: "Cold Soaks" }),
              !unref(pending_cold_soaks) ? (openBlock(), createBlock(_component_appChartBar, {
                key: 0,
                data: unref(cold_soaks),
                barName: "date",
                barLabel: "Total"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Water Intake" }, null, _parent2, _scopeId));
            if (!unref(pending_water)) {
              _push2(ssrRenderComponent(_component_appChartLine, {
                data: unref(water_intake),
                lineName: "water_intake",
                lineLabel: "Water total"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_baseSectionHeader, { text: "Water Intake" }),
              !unref(pending_water) ? (openBlock(), createBlock(_component_appChartLine, {
                key: 0,
                data: unref(water_intake),
                lineName: "water_intake",
                lineLabel: "Water total"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Weight" }, null, _parent2, _scopeId));
            if (!unref(pending_weight)) {
              _push2(ssrRenderComponent(_component_appChartLine, {
                data: unref(weight),
                lineName: "weight",
                lineLabel: "Weight"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_baseSectionHeader, { text: "Weight" }),
              !unref(pending_weight) ? (openBlock(), createBlock(_component_appChartLine, {
                key: 0,
                data: unref(weight),
                lineName: "weight",
                lineLabel: "Weight"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_baseSectionHeader, { text: "Workouts" }, null, _parent2, _scopeId));
            if (!unref(pending_workouts)) {
              _push2(ssrRenderComponent(_component_appChartBar, {
                data: unref(workouts),
                barName: "date",
                barLabel: "Total"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_baseSectionHeader, { text: "Workouts" }),
              !unref(pending_workouts) ? (openBlock(), createBlock(_component_appChartBar, {
                key: 0,
                data: unref(workouts),
                barName: "date",
                barLabel: "Total"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
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
//# sourceMappingURL=index-CAU_7tES.mjs.map
