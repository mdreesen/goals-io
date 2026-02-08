import { u as useHead, a as useNuxtData, b as __nuxt_component_0 } from './server.mjs';
import { c as createLazyVisibleComponent } from './lazy-hydrated-component-NSWjnDYS.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const __nuxt_component_1_lazy_visible = createLazyVisibleComponent("components/app/TrackerBook.vue", () => import('./TrackerBook-BGuJGRyP.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy_visible = createLazyVisibleComponent("components/app/TrackerGratitude.vue", () => import('./TrackerGratitude-_59kOyb2.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `Ascend | Mind`,
      meta: [
        { name: "description", content: "Ascend Mind Dashboard." }
      ]
    });
    const { data: data_setting } = useNuxtData("setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_LazyVisibleAppTrackerBook = __nuxt_component_1_lazy_visible;
      const _component_LazyVisibleAppTrackerGratitude = __nuxt_component_2_lazy_visible;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-categories" }, _attrs))}>`);
      if (unref(data_setting)?.bookSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Books" }, null, _parent));
        _push(ssrRenderComponent(_component_LazyVisibleAppTrackerBook, { "hydrate-on-visible": "" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting)?.gratitudeSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Gratitudes" }, null, _parent));
        _push(ssrRenderComponent(_component_LazyVisibleAppTrackerGratitude, { "hydrate-on-visible": "" }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/mind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D-8C1Ut_.mjs.map
