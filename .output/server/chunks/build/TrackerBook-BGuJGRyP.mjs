import { _ as __nuxt_component_0 } from './SectionHeader-FY2Kj4sD.mjs';
import { a as useNuxtData, k as refreshNuxtData, _ as __nuxt_component_0$4 } from './server.mjs';
import { defineComponent, ref, reactive, resolveDirective, mergeProps, unref, withCtx, createVNode, withModifiers, withDirectives, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Drawer-CnjHbgeP.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './ButtonNav-DyhdEYKE.mjs';
import { _ as __nuxt_component_5 } from './Label-DcsIrBrT.mjs';
import { _ as __nuxt_component_6 } from './ButtonSubmit-CrJNqEUh.mjs';
import { i as inputVarient } from './varients-BkFSZmK0.mjs';
import { s as selection_book_kinds } from './selections-Dcns7oz1.mjs';
import { f as formatDate } from './date-DqBAJ_np.mjs';
import { u as useToast } from './useToast-BIXgVI55.mjs';
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
import '@vercel/speed-insights/nuxt';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vaul-vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => props.data.length >= 3 ? true : false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BaseCarousel" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TrackerBook",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("books");
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const input = reactive({
      book_title: "",
      kind_of_book: "",
      book_author: "",
      book_start_date: formatDate(),
      notes: "",
      booklist: false,
      status: false
    });
    async function log() {
      isLoading.value = true;
      $fetch("/api/user/books/books", {
        method: "POST",
        body: input
      }).then(async () => {
        await refreshNuxtData();
        open.value = false;
        isLoading.value = false;
      }).catch(async (error) => {
        toast.error("Failed to create", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseSectionHeader = __nuxt_component_0;
      const _component_baseCarousel = __nuxt_component_1;
      const _component_UDrawer = _sfc_main$2;
      const _component_baseButtonDrawer = __nuxt_component_3;
      const _component_baseButtonNav = __nuxt_component_4;
      const _component_baseLabel = __nuxt_component_5;
      const _component_baseButtonSubmit = __nuxt_component_6;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col w-full max-w-3xl mx-auto overflow-hidden" }, _attrs))} data-v-db3bb013>`);
      if (unref(data)?.current.length >= 1) {
        _push(`<section data-v-db3bb013>`);
        _push(ssrRenderComponent(_component_baseSectionHeader, { text: "Currently Reading" }, null, _parent));
        _push(ssrRenderComponent(_component_baseCarousel, {
          data: unref(data)?.current
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)?.latestData.length >= 1) {
        _push(`<section data-v-db3bb013>`);
        _push(ssrRenderComponent(_component_baseSectionHeader, { text: "Latest Reads" }, null, _parent));
        _push(ssrRenderComponent(_component_baseCarousel, {
          data: unref(data)?.latestData.reverse()
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center w-full mx-auto p-8 font-sans" data-v-db3bb013><div class="w-full relative mb-4 flex flex-col justify-center items-center gap-4" data-v-db3bb013>`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log a new book",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6" data-v-db3bb013${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-db3bb013${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Kind of book" }, null, _parent2, _scopeId));
            _push2(`<select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-db3bb013${_scopeId}><option value="" disabled selected hidden data-v-db3bb013${_scopeId}>Kind of book</option><!--[-->`);
            ssrRenderList(unref(selection_book_kinds), (kind) => {
              _push2(`<option${ssrRenderAttr("value", kind.value)} data-v-db3bb013${ssrIncludeBooleanAttr(Array.isArray(unref(input).kind_of_book) ? ssrLooseContain(unref(input).kind_of_book, kind.value) : ssrLooseEqual(unref(input).kind_of_book, kind.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(kind.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-db3bb013${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Title" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).book_title)} placeholder="Title" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-db3bb013${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-db3bb013${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Author" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).book_author)} placeholder="Author" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-db3bb013${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-db3bb013${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Notes" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Book notes" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-db3bb013${_scopeId}>${ssrInterpolate(unref(input).notes)}</textarea></div><div class="text-center" data-v-db3bb013${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseButtonSubmit, {
              text: "Save",
              isLoading: isLoading.value
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(log, ["prevent"]),
                class: "space-y-6"
              }, [
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Kind of book" }),
                  withDirectives(createVNode("select", {
                    id: "status-select",
                    "onUpdate:modelValue": ($event) => unref(input).kind_of_book = $event,
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: "",
                      hidden: ""
                    }, "Kind of book"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selection_book_kinds), (kind) => {
                      return openBlock(), createBlock("option", {
                        value: kind.value,
                        key: kind.label
                      }, toDisplayString(kind.label), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(input).kind_of_book]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Title" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).book_title = $event,
                    placeholder: "Title",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).book_title]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Author" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).book_author = $event,
                    placeholder: "Author",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).book_author]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Notes" }),
                  withDirectives(createVNode("textarea", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).notes = $event,
                    placeholder: "Book notes",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).notes]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_baseButtonSubmit, {
                    text: "Save",
                    isLoading: isLoading.value
                  }, null, 8, ["isLoading"])
                ])
              ], 32)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_baseButtonDrawer, {
              text: "Add book",
              icon: "material-symbols:book-4-spark-rounded"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_baseButtonNav, { path: "/dashboard/mind/all/books" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_baseButtonDrawer, {
                text: "Add book",
                icon: "material-symbols:book-4-spark-rounded"
              }),
              createVNode(_component_baseButtonNav, { path: "/dashboard/mind/all/books" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TrackerBook = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-db3bb013"]]), { __name: "AppTrackerBook" });

export { TrackerBook as default };
//# sourceMappingURL=TrackerBook-BGuJGRyP.mjs.map
