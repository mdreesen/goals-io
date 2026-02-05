import { m as useRoute, b as __nuxt_component_0, n as navigateTo } from './server.mjs';
import { i as inputVarient, _ as __nuxt_component_5 } from './Label-BSaw2oj1.mjs';
import { _ as __nuxt_component_6 } from './ButtonSubmit-CHrczC4x.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './ButtonDelete-Cvv6EFDG.mjs';
import { defineComponent, withAsyncContext, ref, reactive, resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { m as mood } from './selections-Dcns7oz1.mjs';
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
  __name: "journal",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data, pending: pending_data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/user/journal/${route.params.id}`, "$0N9kfdtjww")), __temp = await __temp, __restore(), __temp);
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const input = reactive({
      mood: "",
      title: "",
      entry: ""
    });
    if (data.value) {
      input.mood = data.value.mood;
      input.title = data.value.title;
      input.entry = data.value.entry;
    }
    async function delete_log() {
      isLoading.value = true;
      $fetch(`/api/user/journal/${route.params.id}`, {
        method: "DELETE",
        body: input
      }).then(async () => {
        await navigateTo("/dashboard/spirit");
      }).catch(async (error) => {
        toast.error("Failed to delete", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_baseLabel = __nuxt_component_5;
      const _component_baseButtonSubmit = __nuxt_component_6;
      const _component_baseButtonCancel = __nuxt_component_3;
      const _component_baseButtonDelete = __nuxt_component_4;
      const _directive_motion = resolveDirective("motion");
      if (!unref(pending_data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col w-full max-w-3xl p-3 mx-auto overflow-hidden" }, _attrs))}><div class="py-8">`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Edit journal entry" }, null, _parent));
        _push(`</div><form class="space-y-6"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}><select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="" disabled selected hidden>Choose mood</option><!--[-->`);
        ssrRenderList(unref(mood), (item) => {
          _push(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(input).mood) ? ssrLooseContain(unref(input).mood, item.value) : ssrLooseEqual(unref(input).mood, item.value)) ? " selected" : ""}>${ssrInterpolate(item.label)}</option>`);
        });
        _push(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Title" }, null, _parent));
        _push(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).title)} placeholder="Title" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}>`);
        _push(ssrRenderComponent(_component_baseLabel, { text: "Entry" }, null, _parent));
        _push(`<textarea id="text" type="text" placeholder="Entry" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">${ssrInterpolate(unref(input).entry)}</textarea></div><div class="flex flex-col gap-8 pb-4">`);
        _push(ssrRenderComponent(_component_baseButtonSubmit, {
          text: "Save",
          isLoading: isLoading.value
        }, null, _parent));
        _push(ssrRenderComponent(_component_baseButtonCancel, {
          text: "Cancel",
          path: "/dashboard/spirit",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/spirit/[id]/journal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=journal-D4Al5rru.mjs.map
