import { m as useRoute, k as __nuxt_component_0$2, j as refreshNuxtData, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_5 } from './Label-DcsIrBrT.mjs';
import { _ as __nuxt_component_6 } from './ButtonSubmit-CrJNqEUh.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './ButtonDelete-CwWjAAre.mjs';
import { i as inputVarient } from './varients-BkFSZmK0.mjs';
import { defineComponent, withAsyncContext, ref, reactive, resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { s as selection_book_kinds, a as selection_status_book } from './selections-Dcns7oz1.mjs';
import { u as useFetch } from './fetch-BNW_bqSB.mjs';
import { u as useToast } from './useToast-D_HBO5T1.mjs';
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
  __name: "books",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data, pending: pending_data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/user/books/${route.params.id}`, "$zf7YHpGOWq")), __temp = await __temp, __restore(), __temp);
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const input = reactive({
      book_author: "",
      book_image: "",
      book_start_date: "",
      status: "",
      book_title: "",
      booklist: false,
      kind_of_book: "",
      notes: ""
    });
    if (data.value) {
      input.book_author = data.value.book_author;
      input.book_start_date = data.value.book_start_date;
      input.book_image = data.value.book_image;
      input.book_title = data.value.book_title;
      input.booklist = data.value.booklist === "true";
      input.kind_of_book = data.value.kind_of_book;
      input.notes = data.value.notes;
      input.status = data.value.status;
    }
    async function delete_log() {
      isLoading.value = true;
      $fetch(`/api/user/books/${route.params.id}`, {
        method: "DELETE",
        body: input
      }).then(async () => {
        await refreshNuxtData();
        await navigateTo("/dashboard/mind");
      }).catch(async (error) => {
        toast.error("Failed to delete", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_baseLabel = __nuxt_component_5;
      const _component_baseButtonSubmit = __nuxt_component_6;
      const _component_baseButtonCancel = __nuxt_component_3;
      const _component_baseButtonDelete = __nuxt_component_4;
      const _directive_motion = resolveDirective("motion");
      if (!unref(pending_data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col w-full max-w-3xl p-3 mx-auto overflow-hidden" }, _attrs))}><div class="flex justify-center py-4">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "object-cover h-60",
          src: unref(data)?.book_image,
          format: "webp",
          preload: "",
          loading: "eager",
          "fetch-priority": "high"
        }, null, _parent));
        _push(`</div><form class="space-y-6"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Kind of book" }, null, _parent));
        _push(`<select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray(unref(input).kind_of_book) ? ssrLooseContain(unref(input).kind_of_book, "") : ssrLooseEqual(unref(input).kind_of_book, "")) ? " selected" : ""}>Kind of book</option><!--[-->`);
        ssrRenderList(unref(selection_book_kinds), (kind) => {
          _push(`<option${ssrRenderAttr("value", kind.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(input).kind_of_book) ? ssrLooseContain(unref(input).kind_of_book, kind.value) : ssrLooseEqual(unref(input).kind_of_book, kind.value)) ? " selected" : ""}>${ssrInterpolate(kind.label)}</option>`);
        });
        _push(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Status" }, null, _parent));
        _push(`<select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"><option${ssrRenderAttr("value", unref(data).status)} disabled hidden${ssrIncludeBooleanAttr(Array.isArray(unref(input).status) ? ssrLooseContain(unref(input).status, unref(data).status) : ssrLooseEqual(unref(input).status, unref(data).status)) ? " selected" : ""}>${ssrInterpolate(unref(data).status ? "Completed" : "Currently reading")}</option><!--[-->`);
        ssrRenderList(unref(selection_status_book), (status) => {
          _push(`<option${ssrRenderAttr("value", status.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(input).status) ? ssrLooseContain(unref(input).status, status.value) : ssrLooseEqual(unref(input).status, status.value)) ? " selected" : ""}>${ssrInterpolate(status.label)}</option>`);
        });
        _push(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Title" }, null, _parent));
        _push(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).book_title)} placeholder="Title" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Author" }, null, _parent));
        _push(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).book_author)} placeholder="Author" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Notes" }, null, _parent));
        _push(`<textarea id="text" type="text" placeholder="Book notes" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">${ssrInterpolate(unref(input).notes)}</textarea></div><div class="flex flex-col gap-8 pb-4">`);
        _push(ssrRenderComponent(_component_baseButtonSubmit, {
          text: "Save",
          isLoading: isLoading.value
        }, null, _parent));
        _push(ssrRenderComponent(_component_baseButtonCancel, {
          text: "Cancel",
          path: "/dashboard/mind",
          isLoading: isLoading.value
        }, null, _parent));
        _push(ssrRenderComponent(_component_baseButtonDelete, {
          onClick: delete_log,
          text: "Delete",
          isLoading: isLoading.value
        }, null, _parent));
        _push(`</div></form></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/mind/[id]/books.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=books-CuImh1Xh.mjs.map
