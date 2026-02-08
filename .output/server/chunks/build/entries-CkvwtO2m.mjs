import { u as useHead, a as useNuxtData, f as __nuxt_component_0$3 } from './server.mjs';
import { _ as __nuxt_component_1 } from './Card-C3aSdDCm.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "entries",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Ascend | All | Journal Entries",
      meta: [
        { name: "description", content: "Ascend All Journal Entries Dashboard." }
      ]
    });
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/journal/all", { key: "all_entries", lazy: true }, "$eHYXn6YZep")), await __temp, __restore();
    const { data } = useNuxtData("all_entries");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      const _component_baseCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-cards" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/spirit/${[item._id]}/journal`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                text: item.title,
                icon: "material-symbols:book-5-outline-rounded",
                iconColor: "bg-green-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  text: item.title,
                  icon: "material-symbols:book-5-outline-rounded",
                  iconColor: "bg-green-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["text"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/spirit/all/entries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=entries-CkvwtO2m.mjs.map
