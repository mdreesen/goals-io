import { defineComponent, ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerBible",
  __ssrInlineRender: true,
  setup(__props) {
    const entryList = ref([
      { id: 1, type: "Sermon", topic: "The Power of Forgiveness", notes: "Key verse John 3:16. Focus on release, not holding onto bitterness.", loggedAt: "2025-10-02" },
      { id: 2, type: "Devotional", topic: "Daily Gratitude", notes: "Spent 15 mins reflecting on 3 things I am thankful for today.", loggedAt: "2025-10-01" }
    ]);
    const newType = ref("Sermon");
    const newTopic = ref("");
    const newNotes = ref("");
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
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-purple-400"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20h-4.5"></path><path d="M18 10h-8"></path><path d="M18 14h-8"></path></svg> Sermon &amp; Devotional Notes </h1><p class="mt-2 text-base text-gray-400">Capture your spiritual insights and reflections.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Please fill"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Saving")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log New Entry</h2><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><div class="sm:col-span-1"><label for="entry-type" class="block text-sm font-medium text-gray-400 mb-2">Entry Type</label><select id="entry-type" class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><option value="Sermon"${ssrIncludeBooleanAttr(Array.isArray(newType.value) ? ssrLooseContain(newType.value, "Sermon") : ssrLooseEqual(newType.value, "Sermon")) ? " selected" : ""}>Sermon</option><option value="Devotional"${ssrIncludeBooleanAttr(Array.isArray(newType.value) ? ssrLooseContain(newType.value, "Devotional") : ssrLooseEqual(newType.value, "Devotional")) ? " selected" : ""}>Devotional</option></select></div><div class="sm:col-span-2"><label for="entry-topic" class="block text-sm font-medium text-gray-400 mb-2">Topic / Title</label><input id="entry-topic" type="text"${ssrRenderAttr("value", newTopic.value)} placeholder="e.g., Joy in Suffering" class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div></div><div><label for="entry-notes" class="block text-sm font-medium text-gray-400 mb-2">Notes &amp; Key Takeaways</label><textarea id="entry-notes" rows="5" placeholder="Write your reflection, key scriptures, and application steps here." class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}>${ssrInterpolate(newNotes.value)}</textarea></div><div class="flex justify-end pt-2"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newTopic.value.trim() || !newNotes.value.trim()) ? " disabled" : ""} class="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-indigo-700/30 hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M12 20h9"></path><path d="M12 20a6 6 0 0 0-8-8 6 6 0 0 0-4 4 6 6 0 0 0 8 8Z"></path><path d="M16 4v16"></path><path d="M18 16L12 10 4 18"></path></svg> Save Reflection </span></button></div></form><div class="pt-8 space-y-5"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Reflections</h2><ul class="max-h-96 overflow-y-auto pr-3 space-y-4"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-indigo-600/50"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } })))}><div class="flex items-start justify-between"><div class="flex items-start flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-purple-400"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5S16 3.67 16 4.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20 7v10h-6V7h6z"></path><path d="M4 7v10h-6V7h6z"></path><path d="M12 20s-8 4-8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg><div class="flex flex-col"><span class="text-xs font-semibold uppercase text-indigo-400">${ssrInterpolate(item.type)}</span><p class="text-lg font-bold text-gray-200 leading-tight mt-0.5">${ssrInterpolate(item.topic)}</p><p class="text-sm text-gray-400 italic mt-1">${ssrInterpolate(item.notes)}</p></div></div><p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No reflections yet. Capture your first note! </li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBible.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "AppTrackerBible" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerJournal",
  __ssrInlineRender: true,
  setup(__props) {
    const entryList = ref([
      { id: 1, entry: "Felt very productive this morning after a cold soak. Need to keep this routine up.", loggedAt: "2025-10-02" },
      { id: 2, entry: "Reflected on my fasting progress today. The 16-hour window is becoming much easier.", loggedAt: "2025-10-01" }
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
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-400"><path d="M12 20h9"></path><path d="M12 20a6 6 0 0 0-8-8 6 6 0 0 0-4 4 6 6 0 0 0 8 8Z"></path><path d="M16 4v16"></path><path d="M18 16L12 10 4 18"></path></svg> Daily Reflection Journal </h1><p class="mt-2 text-base text-gray-400">Capture your thoughts, progress, and daily insights.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("saved successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("cannot be empty"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Saving")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">What&#39;s on your mind?</h2><div><label for="entry-notes" class="block text-sm font-medium text-gray-400 mb-2">Journal Entry (Today&#39;s Date: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())})</label><textarea id="entry-notes" rows="8" placeholder="Start writing... reflect on your day, your goals, or any key decisions." class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}>${ssrInterpolate(newEntry.value)}</textarea></div><div class="flex justify-end pt-2"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newEntry.value.trim()) ? " disabled" : ""} class="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-teal-700/30 hover:from-teal-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Lock &amp; Save Entry </span></button></div></form><div class="pt-8 space-y-5"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Reflections</h2><ul class="max-h-96 overflow-y-auto pr-3 space-y-4"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-teal-600/50"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } })))}><div class="flex items-start justify-between"><div class="flex items-start flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-teal-400"><path d="M8 20l1.3-1.3c2.7-2.7 6.7-2.7 9.4 0L20 20"></path><path d="M10 18v2"></path><path d="M14 18v2"></path><path d="M4 18v2"></path><path d="M12 4v16"></path></svg><div class="flex flex-col"><p class="text-lg text-gray-200 leading-tight italic">${ssrInterpolate(item.entry)}</p></div></div><p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> The page is your canvas. Write your first entry! </li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerJournal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppTrackerJournal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appTrackerBible = __nuxt_component_0;
      const _component_appTrackerJournal = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Welcome to the spirit page</h1>`);
      _push(ssrRenderComponent(_component_appTrackerBible, null, null, _parent));
      _push(ssrRenderComponent(_component_appTrackerJournal, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/spirit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DesqJv6q.mjs.map
