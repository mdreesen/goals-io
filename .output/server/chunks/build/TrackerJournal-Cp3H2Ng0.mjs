import { a as useNuxtData, f as __nuxt_component_0$3, k as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_1 } from './Card-C3aSdDCm.mjs';
import { _ as _sfc_main$1 } from './Drawer-CnjHbgeP.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './ButtonNav-DyhdEYKE.mjs';
import { _ as __nuxt_component_5 } from './Label-DcsIrBrT.mjs';
import { _ as __nuxt_component_6 } from './ButtonSubmit-CrJNqEUh.mjs';
import { i as inputVarient } from './varients-BkFSZmK0.mjs';
import { defineComponent, ref, reactive, resolveDirective, unref, withCtx, createVNode, withModifiers, withDirectives, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { f as formatDate } from './date-DqBAJ_np.mjs';
import { m as mood } from './selections-Dcns7oz1.mjs';
import { u as useToast } from './useToast-BIXgVI55.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TrackerJournal",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("journal");
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const input = reactive({
      mood: "",
      title: "",
      entry: ""
    });
    async function log() {
      isLoading.value = true;
      $fetch(`/api/user/journal/journal`, {
        method: "POST",
        body: {
          ...input,
          date: formatDate()
        }
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
      const _component_nuxt_link = __nuxt_component_0$3;
      const _component_baseCard = __nuxt_component_1;
      const _component_UDrawer = _sfc_main$1;
      const _component_baseButtonDrawer = __nuxt_component_3;
      const _component_baseButtonNav = __nuxt_component_4;
      const _component_baseLabel = __nuxt_component_5;
      const _component_baseButtonSubmit = __nuxt_component_6;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-cards"><!--[-->`);
      ssrRenderList(unref(data).reverse(), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/spirit/${[item._id]}/journal`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                text: item.title,
                icon: "material-symbols:book-5-outline-rounded",
                iconColor: "bg-green-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  text: item.title,
                  icon: "material-symbols:book-5-outline-rounded",
                  iconColor: "bg-green-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["text"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-col items-center justify-center w-full mx-auto p-8 font-sans"><div class="w-full relative mb-4 flex flex-col justify-center items-center gap-4">`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log a new journal entry",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}><select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}><option value="" disabled selected hidden${_scopeId}>Choose mood</option><!--[-->`);
            ssrRenderList(unref(mood), (item) => {
              _push2(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(input).mood) ? ssrLooseContain(unref(input).mood, item.value) : ssrLooseEqual(unref(input).mood, item.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Title" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).title)} placeholder="Title" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Entry" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Entry" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(unref(input).entry)}</textarea></div><div class="flex flex-col gap-8 pb-4"${_scopeId}>`);
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
                  withDirectives(createVNode("select", {
                    id: "status-select",
                    "onUpdate:modelValue": ($event) => unref(input).mood = $event,
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: "",
                      hidden: ""
                    }, "Choose mood"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(mood), (item) => {
                      return openBlock(), createBlock("option", {
                        value: item.value,
                        key: item.label
                      }, toDisplayString(item.label), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(input).mood]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Title" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).title = $event,
                    placeholder: "Title",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).title]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Entry" }),
                  withDirectives(createVNode("textarea", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).entry = $event,
                    placeholder: "Entry",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).entry]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                createVNode("div", { class: "flex flex-col gap-8 pb-4" }, [
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
              text: "Add entry",
              icon: "material-symbols:book-5"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_baseButtonNav, { path: "/dashboard/spirit/all/entries" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_baseButtonDrawer, {
                text: "Add entry",
                icon: "material-symbols:book-5"
              }),
              createVNode(_component_baseButtonNav, { path: "/dashboard/spirit/all/entries" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerJournal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TrackerJournal = Object.assign(_sfc_main, { __name: "AppTrackerJournal" });

export { TrackerJournal as default };
//# sourceMappingURL=TrackerJournal-Cp3H2Ng0.mjs.map
