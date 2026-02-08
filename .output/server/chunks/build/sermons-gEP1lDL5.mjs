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
  __name: "sermons",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Ascend | All | Sermons",
      meta: [
        { name: "description", content: "Ascend All Sermons Dashboard." }
      ]
    });
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/bible/sermon/all", { key: "all_sermons", lazy: true }, "$BhTGJJ3csd")), await __temp, __restore();
    const { data } = useNuxtData("all_sermons");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      const _component_baseCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-cards" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/spirit/${[item._id]}/sermon`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                label: item.book_title,
                text: `${item?.chapter ? `Chapter ${item?.chapter} •` : ""} Verse ${item?.verses ? item?.verses : ""}`,
                date: item?.date,
                icon: "material-symbols:shield-outline-rounded",
                iconColor: "bg-blue-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  label: item.book_title,
                  text: `${item?.chapter ? `Chapter ${item?.chapter} •` : ""} Verse ${item?.verses ? item?.verses : ""}`,
                  date: item?.date,
                  icon: "material-symbols:shield-outline-rounded",
                  iconColor: "bg-blue-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["label", "text", "date"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/spirit/all/sermons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sermons-gEP1lDL5.mjs.map
