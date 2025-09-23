import { defineComponent, ref, reactive, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { d as useUserSession, e as useMotion } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const isLoggingIn = ref(false);
    const message = ref("");
    useUserSession();
    const credentials = reactive({
      email: "",
      password: ""
    });
    useMotion(formRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.5,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen items-center justify-center bg-gray-950 p-4 overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-gray-800 to-purple-950 opacity-70"></div><section class="flex flex-col items-center gap-8"><div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, {
        initial: { opacity: 0, y: -20 },
        enter: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } }
      })))}><h1 class="flex flex-col text-4xl sm:text-6xl font-extrabold text-white leading-tight"><span>Welcome to</span><span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"> ASCΞND </span></h1><p class="mt-2 text-lg sm:text-xl text-gray-400">Log in to unlock your journey.</p></div><div class="relative z-20 w-full max-w-sm rounded-3xl border border-gray-700 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-md space-y-6 transform transition-all duration-300">`);
      if (message.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center py-2 px-4 rounded-lg", message.value.includes("successful") ? "bg-green-600/30 text-green-400" : "bg-red-600/30 text-red-400"]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0 } }))}><label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label><input id="email" type="email"${ssrRenderAttr("value", unref(credentials).email)} placeholder="Email" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }))}><label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label><input id="password" type="password"${ssrRenderAttr("value", unref(credentials).password)} placeholder="Password" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }))}><button type="submit"${ssrIncludeBooleanAttr(isLoggingIn.value) ? " disabled" : ""} class="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">${ssrInterpolate(isLoggingIn.value ? "Logging In..." : "Log In")}</button></div></form><div class="relative flex items-center justify-center py-4"><div className="absolute w-full border-t border-gray-700"></div><span className="relative z-10 bg-gray-800/80 backdrop-blur-md px-4 text-gray-400 text-sm">OR</span></div><div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.3 } } })))}><p class="text-gray-400 text-sm"> Don&#39;t have an account? <a href="/signup" class="text-blue-400 hover:underline transition-colors">Sign up</a></p></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(authentication)/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-C0xNTFpF.mjs.map
