import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useUserSession, u as useNuxtData } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-xl font-bold px-8 my-8 flex justify-center" }, _attrs))}>${ssrInterpolate(props.text)}</p>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "BaseDescription" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const { loggedIn } = useUserSession();
    const { data } = useNuxtData("profile");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseDescription = __nuxt_component_0;
      if (unref(loggedIn)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2"> Welcome, </h2>`);
        if (unref(data)?.first_name) {
          _push(`<h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">${ssrInterpolate(unref(data)?.first_name)}! </h2>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(data)?.username) {
          _push(ssrRenderComponent(_component_baseDescription, {
            text: unref(data)?.username ?? ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2"> Log in or sign up to get started! </h2></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = Object.assign(_sfc_main, { __name: "AppWelcome" });

export { Welcome as default };
//# sourceMappingURL=Welcome-dfYIqxkz.mjs.map
