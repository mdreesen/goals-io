import { d as useUserSession, h as useMotion, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, reactive, resolveDirective, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { f as formVarient, c as containerVarient, i as inputVarient } from './varients-BkFSZmK0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const isLoading = ref(false);
    let errorMessage = ref("");
    useUserSession();
    const credentials = reactive({
      email: "",
      password: "",
      confirm_password: "",
      privacy_policy: true
    });
    useMotion(formRef, { ...formVarient() });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen items-center justify-center bg-gray-950 p-4 overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-gray-800 to-purple-950 opacity-70"></div><section class="flex flex-col items-center gap-8"><div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(containerVarient)() })))}><h1 class="flex flex-col text-4xl sm:text-6xl font-extrabold text-white leading-tight"><span>Welcome to</span><span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"> ASCΞND </span></h1><p class="mt-2 text-lg sm:text-xl text-gray-400">Sign up to unlock your journey.</p></div><div class="relative z-20 w-full max-w-sm rounded-3xl border border-gray-700 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-md space-y-6 transform transition-all duration-300">`);
      if (unref(errorMessage)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center py-2 px-4 rounded-lg", "bg-red-600/30 text-red-400"]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}><label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label><input id="email" type="email"${ssrRenderAttr("value", unref(credentials).email)} placeholder="Email" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}><label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label><input id="password" type="password"${ssrRenderAttr("value", unref(credentials).password)} placeholder="Password" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}><label for="password" class="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label><input id="confirm_password" type="password"${ssrRenderAttr("value", unref(credentials).confirm_password)} placeholder="Password" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-2" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}><input id="privacy" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(credentials).privacy_policy) ? ssrLooseContain(unref(credentials).privacy_policy, null) : unref(credentials).privacy_policy) ? " checked" : ""} required class="rounded-md border-gray-600 text-purple-500 focus:ring-purple-500 transition-colors duration-200"><label for="privacy" class="text-sm text-gray-400"> I agree to the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy_policy",
        class: "text-blue-400 hover:underline transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">${ssrInterpolate(isLoading.value ? "Signing Up..." : "Sign up")}</button></div></form><div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center py-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}><div class="absolute w-full border-t border-gray-700"></div><span class="relative z-10 bg-gray-800/80 backdrop-blur-md px-4 text-gray-400 text-sm">OR</span></div><div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}><p class="text-gray-400 text-sm"> Have an account already? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-blue-400 hover:underline transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log in`);
          } else {
            return [
              createTextVNode("Log in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(authentication)/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-C1EiB26M.mjs.map
