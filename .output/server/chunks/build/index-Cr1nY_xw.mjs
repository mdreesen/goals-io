import { defineComponent, ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { i as useMotion } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerAffirmations",
  __ssrInlineRender: true,
  setup(__props) {
    const affirmationsList = ref([
      { id: 1, text: "I embrace change and welcome new opportunities.", loggedAt: "2025-10-01" },
      { id: 2, text: "My potential is limitless.", loggedAt: "2025-09-30" },
      { id: 3, text: "I am capable of achieving my biggest goals.", loggedAt: "2025-09-29" }
    ]);
    const newAffirmation = ref("");
    const isSaving = ref(false);
    const saveMessage = ref(null);
    const trackerRef = ref();
    useMotion(trackerRef, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "p-4 sm:p-8 text-white flex flex-col items-center justify-center"
      }, _attrs))}><div class="w-full max-w-2xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-purple-400/20 ring-4 ring-purple-600/20 transition-all duration-500 hover:ring-purple-500/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-yellow-300"><path d="M20.25 15.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12.5 10.75 6 17.25l-2.75-2.75a2.5 2.5 0 0 1 0-3.535l6.5-6.5a2.5 2.5 0 0 1 3.535 0l2.75 2.75 4-4"></path><path d="m15.5 13.5 2.75-2.75"></path><path d="m11.5 9.5 3-3"></path></svg> Daily Affirmations </h1><p class="mt-2 text-gray-300">Log your positive statements to anchor your mindset.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("write an affirmation"),
            "bg-purple-600/30 text-purple-400 border border-purple-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><label for="affirmation-input" class="block text-xl font-bold text-gray-200"> What is your affirmation for today? </label><div class="flex space-x-4"><input id="affirmation-input" type="text"${ssrRenderAttr("value", newAffirmation.value)} placeholder="e.g., I am deserving of success." class="flex-grow rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newAffirmation.value.trim()) ? " disabled" : ""} class="px-6 py-3 rounded-xl bg-pink-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-pink-700/50 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg></button></div></form><div class="pt-6 space-y-3"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent History</h2><ul class="space-y-3 max-h-60 overflow-y-auto pr-2"><!--[-->`);
      ssrRenderList(affirmationsList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex items-start p-3 bg-gray-800/70 rounded-xl border border-gray-700 shadow-md"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } })))}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mt-1 mr-3 text-yellow-400 flex-shrink-0"><path d="M12 1.5l2.675 5.5h5.825l-4.75 4.125 1.625 5.25L12 16.5l-4.375 2.375 1.625-5.25-4.75-4.125h5.825L12 1.5z"></path></svg><div class="flex-grow"><p class="text-lg font-medium text-gray-100">${ssrInterpolate(item.text)}</p><p class="text-xs text-gray-400 mt-1">Logged: ${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (affirmationsList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No affirmations logged yet. Start your positive habit! </li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerAffirmations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AppTrackerAffirmations" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appTrackerAffirmations = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Welcome to the mind page</h1>`);
      _push(ssrRenderComponent(_component_appTrackerAffirmations, null, null, _parent));
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
//# sourceMappingURL=index-Cr1nY_xw.mjs.map
