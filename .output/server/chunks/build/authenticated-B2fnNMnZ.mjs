import { _ as __nuxt_component_0$5, D as useState } from './server.mjs';
import { defineComponent, withAsyncContext, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useFetch } from './fetch-CluF5aK3.mjs';
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
import '@vue/shared';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    computed(() => [{
      label: "Main",
      to: "/dashboard"
      // icon: 'i-lucide-book-open',
    }, {
      label: "Body",
      to: "/dashboard/body"
      // icon: 'mdi-light:account',
    }, {
      label: "Mind",
      // icon: 'i-simple-icons-figma',
      to: "/dashboard/mind"
    }, {
      label: "Spirit",
      // icon: 'i-lucide-rocket',
      to: "/dashboard/spirit"
    }, {
      label: "Profile",
      // icon: 'i-lucide-rocket',
      to: "/dashboard/profile"
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$5;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "BaseNavBar" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "authenticated",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/stats", { key: "stats" }, "$_mpkqLPzyj")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/books", { key: "chart_book" }, "$9QdW1yLAUZ")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/water", { key: "chart_hydration" }, "$p5JQGq97On")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/weight", { key: "chart_weight" }, "$JM3-AuSMJ0")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/workouts", { key: "chart_workout" }, "$naBNDQQB8S")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/water/water", { key: "hydration" }, "$V5AC42aInm")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/fasting/fasting", { key: "fasting" }, "$vn5IbJ_owl")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/weight/weight", { key: "weight" }, "$ad2mLt8uL6")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/workout/workout", { key: "workout" }, "$3ozrDyvkUz")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/books/books", { key: "books" }, "$EBAPtzbHxB")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/gratitudes/gratitudes", { key: "gratitudes" }, "$AnRKo-5Ixl")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/journal/journal", { key: "journal" }, "$axFWFe_j92")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/bible/devotional", { key: "devotional" }, "$S5K8iwnmFG")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/bible/sermon", { key: "sermon" }, "$LsljYWduDB")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/profile", { key: "profile" }, "$-srpdBt1B9")), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/profile/setting", { key: "setting" }, "$AKxjgjR2xM")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseNavBar = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_baseNavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/authenticated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=authenticated-B2fnNMnZ.mjs.map
