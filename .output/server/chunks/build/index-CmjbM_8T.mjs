import { defineComponent, ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { h as useMotion } from './server.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TrackerAffirmation",
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerAffirmation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "AppTrackerAffirmation" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerBook",
  __ssrInlineRender: true,
  setup(__props) {
    const bookList = ref([
      { id: 1, title: "The Martian", author: "Andy Weir", progress: 100, loggedAt: "2025-09-28" },
      { id: 2, title: "Project Hail Mary", author: "Andy Weir", progress: 50, loggedAt: "2025-10-01" },
      { id: 3, title: "Dune", author: "Frank Herbert", progress: 10, loggedAt: "2025-10-02" }
    ]);
    const newTitle = ref("");
    const newAuthor = ref("");
    const newProgress = ref(0);
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
    const getProgressColor = (progress) => {
      if (progress === 100) return "text-green-400";
      if (progress >= 50) return "text-yellow-400";
      return "text-red-400";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "p-4 sm:p-8 text-white flex flex-col items-center justify-center"
      }, _attrs))}><div class="w-full max-w-2xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-lime-400/20 ring-4 ring-lime-600/20 transition-all duration-500 hover:ring-lime-500/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-lime-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-yellow-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg> Ascend Book Tracker </h1><p class="mt-2 text-gray-300">Log your current reads and track your progress.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("enter a book title"),
            "bg-lime-600/30 text-lime-400 border border-lime-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="md:col-span-2"><label for="book-title" class="block text-sm font-bold text-gray-200 mb-1">Book Title</label><input id="book-title" type="text"${ssrRenderAttr("value", newTitle.value)} placeholder="e.g., The Midnight Library" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div><div class="md:col-span-1"><label for="book-author" class="block text-sm font-bold text-gray-200 mb-1">Author</label><input id="book-author" type="text"${ssrRenderAttr("value", newAuthor.value)} placeholder="e.g., Matt Haig" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div></div><div class="flex items-center space-x-4"><div class="flex-grow"><label for="book-progress" class="block text-sm font-bold text-gray-200 mb-1"> Progress: <span class="${ssrRenderClass([getProgressColor(newProgress.value), "font-extrabold"])}">${ssrInterpolate(newProgress.value)}%</span></label><input id="book-progress" type="range" min="0" max="100" step="5"${ssrRenderAttr("value", newProgress.value)} class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer range-lg transition-all duration-300 [&amp;::-webkit-slider-thumb]:bg-lime-500 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-moz-range-thumb]:bg-lime-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newTitle.value.trim() || !newAuthor.value.trim()) ? " disabled" : ""} class="mt-6 px-6 py-3 rounded-xl bg-lime-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-lime-700/50 hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg></button></div></form><div class="pt-6 space-y-3"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Reading History</h2><ul class="max-h-60 overflow-y-auto pr-2"><!--[-->`);
      ssrRenderList(bookList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex items-start justify-between p-3 border-b border-gray-700 last:border-b-0 group hover:bg-white/5 rounded-md transition duration-200"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } })))}><div class="flex-grow"><p class="text-lg font-medium text-gray-100 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-3 text-lime-400 flex-shrink-0"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> ${ssrInterpolate(item.title)} `);
        if (item.progress === 100) {
          _push(`<span class="ml-2 text-xs font-bold text-green-400 bg-green-900/50 px-2 py-0.5 rounded-full">DONE</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="text-sm text-gray-400 mt-1 ml-8">by ${ssrInterpolate(item.author)}</p></div><div class="flex flex-col items-end pl-4"><p class="${ssrRenderClass([getProgressColor(item.progress), "text-lg font-bold"])}">${ssrInterpolate(item.progress)}%</p><p class="text-xs text-gray-500 mt-1">Updated: ${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (bookList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> Your reading list is empty. Add a book to get started! </li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBook.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "AppTrackerBook" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerGratitude",
  __ssrInlineRender: true,
  setup(__props) {
    const gratitudeList = ref([
      { id: 1, text: "I am grateful for the sunny weather and fresh air today.", loggedAt: "2025-10-01" },
      { id: 2, text: "Grateful for a successful, peaceful workday.", loggedAt: "2025-09-30" },
      { id: 3, text: "Thankful for my supportive friends and family.", loggedAt: "2025-09-29" }
    ]);
    const newEntry = ref("");
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
      }, _attrs))}><div class="w-full max-w-2xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-pink-400/20 ring-4 ring-pink-600/20 transition-all duration-500 hover:ring-pink-500/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-pink-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-orange-300"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> Gratitude Journal </h1><p class="mt-2 text-gray-300">Log something positive every day to shift your perspective.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("grateful for"),
            "bg-purple-600/30 text-purple-400 border border-purple-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><label for="gratitude-input" class="block text-xl font-bold text-gray-200"> What are you grateful for right now? </label><div class="flex space-x-4"><input id="gratitude-input" type="text"${ssrRenderAttr("value", newEntry.value)} placeholder="e.g., The sound of rain outside my window." class="flex-grow rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newEntry.value.trim()) ? " disabled" : ""} class="px-6 py-3 rounded-xl bg-orange-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-orange-700/50 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg></button></div></form><div class="pt-6 space-y-3"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Entries</h2><ul class="max-h-60 overflow-y-auto pr-2"><!--[-->`);
      ssrRenderList(gratitudeList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex items-start p-3 border-b border-gray-700 last:border-b-0"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } })))}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mt-1 mr-3 text-orange-400 flex-shrink-0"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><div class="flex-grow"><p class="text-lg font-medium text-gray-100">${ssrInterpolate(item.text)}</p><p class="text-xs text-gray-400 mt-1">Logged: ${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (gratitudeList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> The best time to start is now! Log your first moment of gratitude. </li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerGratitude.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "AppTrackerGratitude" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerHabit",
  __ssrInlineRender: true,
  setup(__props) {
    const habitList = ref([
      { id: 1, name: "Meditate for 10 minutes", targetFrequency: "Daily", streak: 5, lastCompleted: "2025-10-02", loggedAt: "2025-10-01" },
      { id: 2, name: "Read 20 pages", targetFrequency: "Daily", streak: 12, lastCompleted: "2025-10-02", loggedAt: "2025-10-01" },
      { id: 3, name: "Go for a walk", targetFrequency: "3 times/week", streak: 2, lastCompleted: "2025-10-01", loggedAt: "2025-10-02" }
    ]);
    const newHabitName = ref("");
    const newHabitFrequency = ref("Daily");
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
    const isCompletedToday = (lastCompletedDate) => {
      if (!lastCompletedDate) return false;
      const today = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
      return lastCompletedDate === today;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center"
      }, _attrs))}><div class="w-full max-w-3xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-indigo-400/20 ring-4 ring-indigo-600/20 transition-all duration-500 hover:ring-indigo-500/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20v-2a8 8 0 0 1 0-16V2Z"></path></svg> Ascend Habit Tracker </h1><p class="mt-2 text-gray-300">Build unstoppable routines and track your progress daily.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("completed") || saveMessage.value.includes("created"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Please enter"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Creating") || saveMessage.value.includes("undone")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Create New Habit</h2><div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"><div class="md:col-span-2"><label for="habit-name" class="block text-sm font-bold text-gray-300 mb-1">Habit Name</label><input id="habit-name" type="text"${ssrRenderAttr("value", newHabitName.value)} placeholder="e.g., Drink 8 glasses of water" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div><div class="md:col-span-1"><label for="habit-frequency" class="block text-sm font-bold text-gray-300 mb-1">Frequency</label><select id="habit-frequency" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><option value="Daily"${ssrIncludeBooleanAttr(Array.isArray(newHabitFrequency.value) ? ssrLooseContain(newHabitFrequency.value, "Daily") : ssrLooseEqual(newHabitFrequency.value, "Daily")) ? " selected" : ""}>Daily</option><option value="5 times/week"${ssrIncludeBooleanAttr(Array.isArray(newHabitFrequency.value) ? ssrLooseContain(newHabitFrequency.value, "5 times/week") : ssrLooseEqual(newHabitFrequency.value, "5 times/week")) ? " selected" : ""}>5 times/week</option><option value="3 times/week"${ssrIncludeBooleanAttr(Array.isArray(newHabitFrequency.value) ? ssrLooseContain(newHabitFrequency.value, "3 times/week") : ssrLooseEqual(newHabitFrequency.value, "3 times/week")) ? " selected" : ""}>3 times/week</option><option value="Weekly"${ssrIncludeBooleanAttr(Array.isArray(newHabitFrequency.value) ? ssrLooseContain(newHabitFrequency.value, "Weekly") : ssrLooseEqual(newHabitFrequency.value, "Weekly")) ? " selected" : ""}>Weekly</option></select></div><div class="md:col-span-1"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newHabitName.value.trim()) ? " disabled" : ""} class="w-full px-6 py-3 rounded-xl bg-indigo-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-indigo-700/50 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg><span class="ml-2 hidden sm:inline">Create Habit</span></span></button></div></div></form><div class="pt-6 space-y-3"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Your Active Habits</h2><ul class="max-h-72 overflow-y-auto pr-2 space-y-2"><!--[-->`);
      ssrRenderList(habitList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: ["flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0 bg-gray-800/30 rounded-lg group transition duration-200", { "border-l-4 border-l-green-500": isCompletedToday(item.lastCompleted) }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } })))}><div class="flex-grow flex items-center"><button class="${ssrRenderClass([[isCompletedToday(item.lastCompleted) ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-700/50 border border-indigo-400/50 hover:bg-gray-700 text-indigo-400"], "w-8 h-8 rounded-full flex items-center justify-center transition duration-300 flex-shrink-0"])}" aria-label="Toggle completion">`);
        if (isCompletedToday(item.lastCompleted)) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`);
        }
        _push(`</button><div class="ml-4"><p class="text-lg font-medium text-gray-100">${ssrInterpolate(item.name)}</p><p class="text-xs text-gray-400 mt-0.5">Target: ${ssrInterpolate(item.targetFrequency)}</p></div></div><div class="flex items-center text-right pl-4 flex-shrink-0"><p class="${ssrRenderClass([item.streak > 0 ? "text-teal-400" : "text-gray-500", "text-2xl font-extrabold mr-2"])}">${ssrInterpolate(item.streak)}</p><p class="text-sm text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-red-500 inline-block"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><path d="M14 2v6h6"></path></svg> Day Streak </p></div></li>`);
      });
      _push(`<!--]-->`);
      if (habitList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No habits defined yet. Start building your foundation! </li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerHabit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AppTrackerHabit" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appTrackerAffirmation = __nuxt_component_0;
      const _component_appTrackerBook = __nuxt_component_1;
      const _component_appTrackerGratitude = __nuxt_component_2;
      const _component_appTrackerHabit = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Welcome to the mind page</h1>`);
      _push(ssrRenderComponent(_component_appTrackerAffirmation, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerBook, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerGratitude, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerHabit, null, null, _parent));
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
//# sourceMappingURL=index-CmjbM_8T.mjs.map
