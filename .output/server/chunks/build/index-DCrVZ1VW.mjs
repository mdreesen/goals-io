import { _ as __nuxt_component_0 } from './Header-92UjPXQ8.mjs';
import { b as useNuxtData, a as useUserSession, _ as __nuxt_component_0$2, d as _sfc_main$8, r as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Card-zJxjjdwR.mjs';
import { _ as _sfc_main$4 } from './Drawer-DPU8VbYy.mjs';
import { i as inputVarient, _ as __nuxt_component_0$1 } from './Label-CdSFOlb_.mjs';
import { _ as __nuxt_component_2$1 } from './ButtonSubmit-Cnujo8hl.mjs';
import { defineComponent, mergeProps, unref, ref, reactive, resolveDirective, withCtx, createVNode, withModifiers, withDirectives, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { f as formatDate } from './date-wF3mUuv1.mjs';
import { b as book_of_bible, m as mood } from './selections-q8B9mgh4.mjs';
import { u as useToast } from './useToast-DbWOdwrP.mjs';
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
import './Icon-8aWUErQK.mjs';
import 'vaul-vue';
import 'date-fns';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrackerBibleDevotional",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("devotional");
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const input = reactive({
      type: "Devotional",
      book: "",
      chapter: "",
      verses: "",
      notes: ""
    });
    async function log() {
      isLoading.value = true;
      $fetch(`/api/user/bible/devotional`, {
        method: "POST",
        body: {
          ...input,
          date: formatDate()
        }
      }).then(async () => {
        await refreshSession();
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
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_baseCard = __nuxt_component_1$1;
      const _component_UDrawer = _sfc_main$4;
      const _component_UButton = _sfc_main$8;
      const _component_baseLabel = __nuxt_component_0$1;
      const _component_baseButtonSubmit = __nuxt_component_2$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-cards"><!--[-->`);
      ssrRenderList(unref(data).reverse(), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/spirit/${[item._id]}/devotional`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                label: item.book_title,
                text: `${item?.chapter ? `Chapter ${item?.chapter} •` : ""} Verse ${item?.verses ? item?.verses : ""}`,
                date: item?.date,
                icon: "material-symbols:shield-outline-rounded",
                iconColor: "bg-gray-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  label: item.book_title,
                  text: `${item?.chapter ? `Chapter ${item?.chapter} •` : ""} Verse ${item?.verses ? item?.verses : ""}`,
                  date: item?.date,
                  icon: "material-symbols:shield-outline-rounded",
                  iconColor: "bg-gray-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["label", "text", "date"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans"><div class="w-full relative mb-4 flex justify-center">`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log a new devotional entry",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}><select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}><option value="" disabled selected hidden${_scopeId}>Choose book</option><!--[-->`);
            ssrRenderList(unref(book_of_bible), (item) => {
              _push2(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(input).book) ? ssrLooseContain(unref(input).book, item.value) : ssrLooseEqual(unref(input).book, item.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Chapter" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).chapter)} placeholder="Chapter" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Verses" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).verses)} placeholder="verses" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Notes" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Entry" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(unref(input).notes)}</textarea></div><div class="flex flex-col gap-8 pb-4"${_scopeId}>`);
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
                    "onUpdate:modelValue": ($event) => unref(input).book = $event,
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: "",
                      hidden: ""
                    }, "Choose book"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(book_of_bible), (item) => {
                      return openBlock(), createBlock("option", {
                        value: item.value,
                        key: item.label
                      }, toDisplayString(item.label), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(input).book]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Chapter" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).chapter = $event,
                    placeholder: "Chapter",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).chapter]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Verses" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).verses = $event,
                    placeholder: "verses",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).verses]
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
                    placeholder: "Entry",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).notes]
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
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Add devotional entry",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:shield-spark-rounded"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Add devotional entry",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:shield-spark-rounded"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBibleDevotional.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "AppTrackerBibleDevotional" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerBibleSermon",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("sermon");
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const input = reactive({
      type: "Sermon",
      book: "",
      chapter: "",
      verses: "",
      notes: ""
    });
    async function log() {
      isLoading.value = true;
      $fetch(`/api/user/bible/sermon`, {
        method: "POST",
        body: {
          ...input,
          date: formatDate()
        }
      }).then(async () => {
        await refreshSession();
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
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_baseCard = __nuxt_component_1$1;
      const _component_UDrawer = _sfc_main$4;
      const _component_UButton = _sfc_main$8;
      const _component_baseLabel = __nuxt_component_0$1;
      const _component_baseButtonSubmit = __nuxt_component_2$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-cards"><!--[-->`);
      ssrRenderList(unref(data).reverse(), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/spirit/${[item._id]}/sermon`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                label: item.book_title,
                text: `${item?.chapter ? `Chapter ${item?.chapter} •` : ""} Verse ${item?.verses ? item?.verses : ""}`,
                date: item?.date,
                icon: "material-symbols:shield-outline-rounded",
                iconColor: "bg-blue-500/60",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  label: item.book_title,
                  text: `${item?.chapter ? `Chapter ${item?.chapter} •` : ""} Verse ${item?.verses ? item?.verses : ""}`,
                  date: item?.date,
                  icon: "material-symbols:shield-outline-rounded",
                  iconColor: "bg-blue-500/60",
                  iconNav: "material-symbols:arrow-forward-ios-rounded"
                }, null, 8, ["label", "text", "date"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans"><div class="w-full relative mb-4 flex justify-center">`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log a new sermon entry",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}><select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}><option value="" disabled selected hidden${_scopeId}>Choose book</option><!--[-->`);
            ssrRenderList(unref(book_of_bible), (item) => {
              _push2(`<option${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(input).book) ? ssrLooseContain(unref(input).book, item.value) : ssrLooseEqual(unref(input).book, item.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(item.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Chapter" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).chapter)} placeholder="Chapter" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Verses" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).verses)} placeholder="verses" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Notes" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Entry" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(unref(input).notes)}</textarea></div><div class="flex flex-col gap-8 pb-4"${_scopeId}>`);
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
                    "onUpdate:modelValue": ($event) => unref(input).book = $event,
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: "",
                      hidden: ""
                    }, "Choose book"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(book_of_bible), (item) => {
                      return openBlock(), createBlock("option", {
                        value: item.value,
                        key: item.label
                      }, toDisplayString(item.label), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(input).book]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Chapter" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).chapter = $event,
                    placeholder: "Chapter",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).chapter]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Verses" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).verses = $event,
                    placeholder: "verses",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).verses]
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
                    placeholder: "Entry",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).notes]
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
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Add sermon entry",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:shield-spark-rounded"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Add sermon entry",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:shield-spark-rounded"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBibleSermon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "AppTrackerBibleSermon" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerJournal",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("journal");
    const { fetch: refreshSession } = useUserSession();
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
        await refreshSession();
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
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_baseCard = __nuxt_component_1$1;
      const _component_UDrawer = _sfc_main$4;
      const _component_UButton = _sfc_main$8;
      const _component_baseLabel = __nuxt_component_0$1;
      const _component_baseButtonSubmit = __nuxt_component_2$1;
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
      _push(`<!--]--></div><div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans"><div class="w-full relative mb-4 flex justify-center">`);
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
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Add entry",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:book-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Add entry",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:book-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerJournal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AppTrackerJournal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: data_setting } = useNuxtData("setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appTrackerBibleDevotional = __nuxt_component_1;
      const _component_appTrackerBibleSermon = __nuxt_component_2;
      const _component_appTrackerJournal = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-categories" }, _attrs))}>`);
      if (unref(data_setting).bibleSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Devotionals" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerBibleDevotional, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).bibleSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Sermons" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerBibleSermon, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).journalSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Journal" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerJournal, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
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
//# sourceMappingURL=index-DCrVZ1VW.mjs.map
