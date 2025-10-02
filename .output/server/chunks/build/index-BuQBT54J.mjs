import { defineComponent, ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerBible",
  __ssrInlineRender: true,
  setup(__props) {
    const entryList = ref([
      { id: 1, type: "Sermon", topic: "The Power of Forgiveness", reflection: "True forgiveness means releasing the expectation of an apology.", loggedAt: "2025-10-02" },
      { id: 2, type: "Devotional", topic: "Psalm 23", reflection: "Focused on recognizing the comfort of God’s presence in times of scarcity.", loggedAt: "2025-10-01" }
    ]);
    const newEntryType = ref("Sermon");
    const newTopic = ref("");
    const newReflection = ref("");
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
    const getEntryIcon = (type) => {
      return type === "Sermon" ? "M7 7h10l-2 7h-6l-2-7Z" : "M12 2v20M17 5H7M17 19H7";
    };
    const getIconColor = (type) => {
      return type === "Sermon" ? "text-indigo-400" : "text-yellow-400";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "trackerRef",
        ref: trackerRef,
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center"
      }, _attrs))}><div class="w-full max-w-3xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-yellow-400/20 ring-4 ring-yellow-600/20 transition-all duration-500 hover:ring-yellow-500/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-yellow-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg> Sermon &amp; Devotional Note Taker </h1><p class="mt-2 text-gray-300">Capture your detailed notes and key spiritual insights for future reference.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Please fill in"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log New Notes</h2><div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"><div class="md:col-span-1"><label for="entry-type" class="block text-sm font-bold text-gray-300 mb-1">Type</label><select id="entry-type" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><option value="Sermon"${ssrIncludeBooleanAttr(Array.isArray(newEntryType.value) ? ssrLooseContain(newEntryType.value, "Sermon") : ssrLooseEqual(newEntryType.value, "Sermon")) ? " selected" : ""}>Sermon</option><option value="Devotional"${ssrIncludeBooleanAttr(Array.isArray(newEntryType.value) ? ssrLooseContain(newEntryType.value, "Devotional") : ssrLooseEqual(newEntryType.value, "Devotional")) ? " selected" : ""}>Devotional</option></select></div><div class="md:col-span-3"><label for="entry-topic" class="block text-sm font-bold text-gray-300 mb-1">Topic / Title</label><input id="entry-topic" type="text"${ssrRenderAttr("value", newTopic.value)} placeholder="e.g., Hope in the Midst of Trials" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div></div><div><label for="entry-reflection" class="block text-sm font-bold text-gray-300 mb-1">Key Takeaway / Notes</label><textarea id="entry-reflection" rows="3" placeholder="What was the main point and how will you apply it this week? (Your detailed notes go here)" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}>${ssrInterpolate(newReflection.value)}</textarea></div><div class="flex justify-end"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newTopic.value.trim() || !newReflection.value.trim()) ? " disabled" : ""} class="px-8 py-3 rounded-xl bg-yellow-600 font-semibold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-yellow-700/50 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M12 20h9"></path><path d="M16.5 3.5l4 4L7.5 18 4 18l.5-3.5L16.5 3.5Z"></path></svg> Log Notes </span></button></div></form><div class="pt-6 space-y-3"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Notes</h2><ul class="max-h-72 overflow-y-auto pr-2 space-y-2"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex flex-col p-4 border-b border-gray-700 last:border-b-0 bg-gray-800/30 rounded-lg group transition duration-200 hover:bg-white/10"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } })))}><div class="flex items-center justify-between mb-2"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${ssrRenderClass([getIconColor(item.type), "w-5 h-5 mr-3 flex-shrink-0"])}"><path${ssrRenderAttr("d", getEntryIcon(item.type))}></path></svg><p class="${ssrRenderClass([getIconColor(item.type), "text-lg font-bold"])}">${ssrInterpolate(item.type)}</p></div><p class="text-xs text-gray-500 flex-shrink-0">Logged: ${ssrInterpolate(item.loggedAt)}</p></div><h3 class="text-xl font-medium text-gray-100 mt-1 pl-8">${ssrInterpolate(item.topic)}</h3><p class="text-sm text-gray-400 mt-1 pl-8 italic">&quot;${ssrInterpolate(item.reflection)}&quot;</p></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No entries yet. Log your first sermon or devotional! </li>`);
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
      { id: 1, title: "Morning Reflection", content: "Felt a great sense of peace during the sunrise. Must remember to prioritize this time.", loggedAt: "2025-10-02" },
      { id: 2, title: "Goal Review", content: "Reviewed my Q4 goals. Need to spend more focused time on the Nuxt project.", loggedAt: "2025-10-01" }
    ]);
    const newEntryTitle = ref("");
    const newEntryContent = ref("");
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
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center"
      }, _attrs))}><div class="w-full max-w-3xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 border border-teal-400/20 ring-4 ring-teal-600/20 transition-all duration-500 hover:ring-teal-500/30"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Ascend Journal Taker </h1><p class="mt-2 text-gray-300">Capture your daily thoughts, reflections, and progress.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Please fill in"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">New Journal Entry</h2><div><label for="entry-title" class="block text-sm font-bold text-gray-300 mb-1">Title</label><input id="entry-title" type="text"${ssrRenderAttr("value", newEntryTitle.value)} placeholder="e.g., A productive Tuesday" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}></div><div><label for="entry-content" class="block text-sm font-bold text-gray-300 mb-1">Journal Content</label><textarea id="entry-content" rows="5" placeholder="Write about your day, your thoughts, or your progress toward your goals..." class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}>${ssrInterpolate(newEntryContent.value)}</textarea></div><div class="flex justify-end"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newEntryTitle.value.trim() || !newEntryContent.value.trim()) ? " disabled" : ""} class="px-8 py-3 rounded-xl bg-teal-600 font-semibold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-teal-700/50 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Save Entry </span></button></div></form><div class="pt-6 space-y-3"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Journal History</h2><ul class="max-h-72 overflow-y-auto pr-2 space-y-2"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex flex-col p-4 border-b border-gray-700 last:border-b-0 bg-gray-800/30 rounded-lg group transition duration-200 hover:bg-white/10"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } })))}><div class="flex items-center justify-between mb-2"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-3 flex-shrink-0 text-teal-400"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path></svg><p class="text-lg font-bold text-gray-100">${ssrInterpolate(item.title)}</p></div><p class="text-xs text-gray-500 flex-shrink-0">Logged: ${ssrInterpolate(item.loggedAt)}</p></div><p class="text-sm text-gray-400 mt-1 pl-8 italic">${ssrInterpolate(item.content)}</p></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No entries yet. Start logging your thoughts! </li>`);
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
//# sourceMappingURL=index-BuQBT54J.mjs.map
