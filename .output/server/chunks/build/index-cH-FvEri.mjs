import { defineComponent, ref, resolveDirective, mergeProps, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { h as useMotion } from './server.mjs';
import { MoreHorizontal, CheckCircle, BookOpen, ChevronRight, Bookmark } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
    const entryList = ref([
      { id: 1, statement: "I am capable of achieving my most ambitious goals.", loggedAt: "2025-10-02" },
      { id: 2, statement: "I choose peace and clarity in every situation.", loggedAt: "2025-10-01" }
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
        class: "min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
      }, _attrs))}><div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-purple-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Ascend Affirmations </h1><p class="mt-2 text-base text-gray-400">Set your daily intention and reinforce positive beliefs.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Please enter"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log New Statement</h2><div><label for="affirmation-statement" class="block text-sm font-medium text-gray-400 mb-2">Affirmation Statement</label><textarea id="affirmation-statement" rows="3" placeholder="Example: I trust my journey and celebrate my growth." class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}>${ssrInterpolate(newAffirmation.value)}</textarea></div><div class="flex justify-end pt-2"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newAffirmation.value.trim()) ? " disabled" : ""} class="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-indigo-700/30 hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg> Affirm &amp; Seal </span></button></div></form><div class="pt-8 space-y-5"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Intentions</h2><ul class="max-h-96 overflow-y-auto pr-3 space-y-3"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-indigo-600/50"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } })))}><div class="flex items-start justify-between"><div class="flex items-center flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-indigo-400"><path d="M20 11.08V8l-6-6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7"></path><path d="M14 2v6h6"></path><path d="m17 19-2 2h4l-2-2Z"></path></svg><p class="text-lg font-medium text-gray-200 italic leading-tight">&quot;${ssrInterpolate(item.statement)}&quot;</p></div><p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No affirmations yet. Set your intention! </li>`);
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
    const books = ref([
      {
        id: "b1",
        title: "The Creative Act",
        author: "Rick Rubin",
        status: "reading",
        totalPages: 432,
        currentPage: 210,
        coverGradient: "bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600"
      },
      {
        id: "b2",
        title: "Dune",
        author: "Frank Herbert",
        status: "reading",
        totalPages: 896,
        currentPage: 145,
        coverGradient: "bg-gradient-to-br from-orange-400 via-amber-600 to-amber-900"
      },
      {
        id: "b3",
        title: "Atomic Habits",
        author: "James Clear",
        status: "read",
        totalPages: 320,
        currentPage: 320,
        coverGradient: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600"
      },
      {
        id: "b4",
        title: "Deep Work",
        author: "Cal Newport",
        status: "read",
        totalPages: 304,
        currentPage: 304,
        coverGradient: "bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400"
      },
      {
        id: "b5",
        title: "Project Hail Mary",
        author: "Andy Weir",
        status: "tbr",
        totalPages: 496,
        currentPage: 0,
        coverGradient: "bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600"
      }
    ]);
    const selectedBookId = ref(books.value[0].id);
    const activeBook = computed(() => books.value.find((b) => b.id === selectedBookId.value) || books.value[0]);
    const progressPercent = computed(() => {
      return Math.round(activeBook.value.currentPage / activeBook.value.totalPages * 100);
    });
    const isCompleted = computed(() => activeBook.value.status === "read");
    const progressSegments = computed(() => {
      const total = 30;
      const active = Math.round(progressPercent.value / 100 * total);
      return { total, active };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col h-[750px] w-full max-w-md mx-auto bg-zinc-950 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl font-sans" }, _attrs))} data-v-ef1b3220><div class="${ssrRenderClass([activeBook.value.coverGradient, "absolute top-0 inset-x-0 h-[500px] opacity-20 blur-[120px] pointer-events-none transition-colors duration-1000 ease-in-out"])}" data-v-ef1b3220></div><div class="relative z-10 px-8 pt-8 pb-4 flex justify-between items-center" data-v-ef1b3220><span class="text-xs font-bold text-zinc-500 uppercase tracking-widest" data-v-ef1b3220>Ascend Library</span><button class="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" data-v-ef1b3220>`);
      _push(ssrRenderComponent(unref(MoreHorizontal), { class: "w-4 h-4 text-zinc-400" }, null, _parent));
      _push(`</button></div><div class="relative z-10 pl-8 mb-8" data-v-ef1b3220><div class="flex gap-4 overflow-x-auto pb-8 pt-4 pr-8 snap-x scrollbar-hide" data-v-ef1b3220><!--[-->`);
      ssrRenderList(books.value, (book) => {
        _push(`<div class="flex-shrink-0 snap-center group cursor-pointer" data-v-ef1b3220><div class="${ssrRenderClass([[
          book.coverGradient,
          selectedBookId.value === book.id ? "scale-110 ring-2 ring-white ring-offset-2 ring-offset-zinc-950 -translate-y-2" : "opacity-60 hover:opacity-100"
        ], "w-20 h-28 rounded-lg shadow-lg mb-3 relative transition-all duration-300 transform"])}" data-v-ef1b3220><div class="absolute left-1 top-0 bottom-0 w-[1px] bg-black/10" data-v-ef1b3220></div>`);
        if (book.status === "read") {
          _push(`<div class="absolute -top-2 -right-2 bg-black rounded-full border border-zinc-800 p-1" data-v-ef1b3220>`);
          _push(ssrRenderComponent(unref(CheckCircle), { class: "w-3 h-3 text-emerald-500" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass([selectedBookId.value === book.id ? "opacity-100" : "opacity-0", "w-20 text-center transition-opacity duration-300"])}" data-v-ef1b3220><p class="text-[10px] font-bold text-white truncate" data-v-ef1b3220>${ssrInterpolate(book.title)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 relative z-10 flex flex-col items-center px-8" data-v-ef1b3220><div class="perspective-1000 mb-8" data-v-ef1b3220><div class="${ssrRenderClass([activeBook.value.coverGradient, "w-40 h-60 rounded-r-2xl rounded-l-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] transform rotate-y-12 transition-all duration-700 ease-out border-l-2 border-white/10 flex flex-col justify-end p-4 relative overflow-hidden"])}" data-v-ef1b3220><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" data-v-ef1b3220></div><h2 class="text-white font-bold text-lg leading-tight relative z-10" data-v-ef1b3220>${ssrInterpolate(activeBook.value.title)}</h2><p class="text-white/80 text-xs font-medium relative z-10" data-v-ef1b3220>${ssrInterpolate(activeBook.value.author)}</p>`);
      if (isCompleted.value) {
        _push(`<div class="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md p-2 rounded-full border border-emerald-500/50" data-v-ef1b3220>`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-emerald-200" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full space-y-6" data-v-ef1b3220><div class="grid grid-cols-3 gap-4 border-y border-white/5 py-6" data-v-ef1b3220><div class="text-center" data-v-ef1b3220><span class="block text-xl font-mono font-bold text-white" data-v-ef1b3220>${ssrInterpolate(activeBook.value.currentPage)}</span><span class="text-[10px] uppercase text-zinc-500 font-bold tracking-wider" data-v-ef1b3220>Current</span></div><div class="text-center border-x border-white/5" data-v-ef1b3220><span class="block text-xl font-mono font-bold text-white" data-v-ef1b3220>${ssrInterpolate(progressPercent.value)}%</span><span class="text-[10px] uppercase text-zinc-500 font-bold tracking-wider" data-v-ef1b3220>Absorbed</span></div><div class="text-center" data-v-ef1b3220><span class="block text-xl font-mono font-bold text-white" data-v-ef1b3220>${ssrInterpolate(activeBook.value.totalPages)}</span><span class="text-[10px] uppercase text-zinc-500 font-bold tracking-wider" data-v-ef1b3220>Total</span></div></div><div class="space-y-2" data-v-ef1b3220><div class="flex gap-[2px] h-2 w-full opacity-80" data-v-ef1b3220><!--[-->`);
      ssrRenderList(progressSegments.value.total, (i) => {
        _push(`<div class="${ssrRenderClass([i <= progressSegments.value.active ? "bg-white" : "bg-zinc-800", "flex-1 rounded-full transition-colors duration-300"])}" data-v-ef1b3220></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-between text-[10px] text-zinc-500 font-bold uppercase" data-v-ef1b3220><span data-v-ef1b3220>Start</span><span data-v-ef1b3220>Finish</span></div></div></div></div><div class="p-6 relative z-20" data-v-ef1b3220>`);
      if (activeBook.value.status === "reading") {
        _push(`<div class="flex gap-4" data-v-ef1b3220><button class="flex-1 h-14 bg-zinc-800 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors group" data-v-ef1b3220>`);
        _push(ssrRenderComponent(unref(BookOpen), { class: "w-4 h-4 text-zinc-400 group-hover:text-white" }, null, _parent));
        _push(`<span class="text-zinc-300 font-bold text-sm group-hover:text-white" data-v-ef1b3220>Read 10 Pages</span></button><button class="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" data-v-ef1b3220>`);
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-6 h-6 text-black" }, null, _parent));
        _push(`</button></div>`);
      } else if (activeBook.value.status === "read") {
        _push(`<div class="w-full h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center gap-2" data-v-ef1b3220>`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-emerald-400" }, null, _parent));
        _push(`<span class="text-emerald-400 font-bold text-sm uppercase tracking-wide" data-v-ef1b3220>Completed</span></div>`);
      } else {
        _push(`<div class="w-full h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center gap-2 group cursor-pointer hover:bg-indigo-500/20 transition-colors" data-v-ef1b3220>`);
        _push(ssrRenderComponent(unref(Bookmark), { class: "w-5 h-5 text-indigo-400" }, null, _parent));
        _push(`<span class="text-indigo-400 font-bold text-sm uppercase tracking-wide" data-v-ef1b3220>Start Reading</span></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBook.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-ef1b3220"]]), { __name: "AppTrackerBook" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerGratitude",
  __ssrInlineRender: true,
  setup(__props) {
    const entryList = ref([
      { id: 1, entry: "I am grateful for the clean, cold water after my morning workout.", loggedAt: "2025-10-02" },
      { id: 2, entry: "I appreciate the quiet time I had to read 50 pages of my book today.", loggedAt: "2025-10-01" }
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
      }, _attrs))}><div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-amber-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> Ascend Gratitude Tracker </h1><p class="mt-2 text-base text-gray-400">Focus on the positive and log what you are truly grateful for today.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("logged successfully"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("cannot be empty"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Logging")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log Today&#39;s Gratitude</h2><div><label for="gratitude-entry" class="block text-sm font-medium text-gray-400 mb-2">What made today special?</label><textarea id="gratitude-entry" rows="5" placeholder="I am grateful for..." class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}>${ssrInterpolate(newEntry.value)}</textarea></div><div class="flex justify-end pt-2"><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newEntry.value.trim()) ? " disabled" : ""} class="px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-yellow-700 font-bold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-amber-700/30 hover:from-amber-500 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M12 1.5l3.24 6.54L22 9l-5 4.87 1.18 6.88-6.18-3.25L5.82 20.75 7 15.87 2 11.5l6.76-0.96L12 1.5z"></path></svg> Log Gratitude </span></button></div></form><div class="pt-8 space-y-5"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Gratitude History</h2><ul class="max-h-96 overflow-y-auto pr-3 space-y-4"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-amber-600/50"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } })))}><div class="flex items-start justify-between"><div class="flex items-start flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-amber-400"><path d="M20 7v10h-6V7h6z"></path><path d="M4 7v10h-6V7h6z"></path><path d="M12 20s-8 4-8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg><div class="flex flex-col"><p class="text-lg text-gray-200 leading-tight italic">${ssrInterpolate(item.entry)}</p></div></div><p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">${ssrInterpolate(item.loggedAt)}</p></div></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> Nothing yet? Find something small to be grateful for! </li>`);
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
    const entryList = ref([
      { id: 1, name: "Meditate for 10 minutes", streak: 5, loggedDate: "2025-10-05", isCompleted: true },
      { id: 2, name: "Cold Soak session", streak: 2, loggedDate: "2025-10-04", isCompleted: false },
      { id: 3, name: "Read 20 pages", streak: 10, loggedDate: "2025-10-03", isCompleted: true }
    ]);
    const newHabitName = ref("");
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
      }, _attrs))}><div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 transition-all duration-500 border border-gray-800"><header${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } })))}><h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-400"><path d="M12 2a10 10 0 0 0 10 10 10 10 0 0 0-10 10 10 10 0 0 0-10-10A10 10 0 0 0 12 2Z"></path><path d="M12 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5Z"></path><path d="M12 10a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2Z"></path></svg> Ascend Habit Tracker </h1><p class="mt-2 text-base text-gray-400">Build momentum. Track your daily consistency and watch your habits ascend.</p></header>`);
      if (saveMessage.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center p-3 rounded-xl font-medium transition-all duration-300", {
            "bg-green-600/30 text-green-400 border border-green-600": saveMessage.value.includes("successfully") || saveMessage.value.includes("checked off"),
            "bg-red-600/30 text-red-400 border border-red-600": saveMessage.value.includes("Error") || saveMessage.value.includes("Please enter"),
            "bg-indigo-600/30 text-indigo-400 border border-indigo-600": saveMessage.value.includes("Creating") || saveMessage.value.includes("Checking in") || saveMessage.value.includes("Undoing")
          }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } })))}>${ssrInterpolate(saveMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4 border border-gray-700/50 p-6 rounded-xl bg-gray-800/30" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } })))}><h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2 text-teal-400"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add New Habit </h2><div class="flex space-x-4"><input type="text"${ssrRenderAttr("value", newHabitName.value)} placeholder="e.g., Drink 100oz water" required class="flex-grow rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""}><button type="submit"${ssrIncludeBooleanAttr(isSaving.value || !newHabitName.value.trim()) ? " disabled" : ""} class="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 hover:from-teal-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed"><span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span></button></div></form><div class="pt-8 space-y-5"><h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Today&#39;s Habits</h2><ul class="max-h-96 overflow-y-auto pr-3 space-y-4"><!--[-->`);
      ssrRenderList(entryList.value, (item, index) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: item.id,
          class: "flex items-center justify-between p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-indigo-600/50"
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } })))}><div class="flex items-center flex-1 min-w-0"><button${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} class="${ssrRenderClass([
          item.isCompleted ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-700 hover:bg-gray-600 border border-gray-600",
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-colors duration-200"
        ])}">`);
        if (item.isCompleted) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-400"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`);
        }
        _push(`</button><div class="flex flex-col overflow-hidden"><p class="${ssrRenderClass([{ "line-through text-gray-500": item.isCompleted }, "text-lg font-medium truncate"])}">${ssrInterpolate(item.name)}</p><span class="${ssrRenderClass([item.streak > 0 ? "text-teal-400" : "text-gray-500", "text-sm font-semibold mt-1"])}"> 🔥 ${ssrInterpolate(item.streak)} Day Streak </span></div></div></li>`);
      });
      _push(`<!--]-->`);
      if (entryList.value.length === 0) {
        _push(`<li class="text-center text-gray-500 py-4"> No habits defined. Add your first goal above! </li>`);
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
//# sourceMappingURL=index-cH-FvEri.mjs.map
