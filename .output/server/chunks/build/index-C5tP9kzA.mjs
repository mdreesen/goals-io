import { _ as _sfc_main$4 } from './Drawer-DPU8VbYy.mjs';
import { b as useNuxtData, a as useUserSession, d as _sfc_main$8, r as refreshNuxtData, f as useAppConfig, g as reactivePick, k as useFormField, t as tv, l as _sfc_main$e } from './server.mjs';
import { i as inputVarient, _ as __nuxt_component_0$1 } from './Label-CdSFOlb_.mjs';
import { _ as __nuxt_component_2 } from './ButtonSubmit-Cnujo8hl.mjs';
import { defineComponent, mergeProps, ref, reactive, resolveDirective, withCtx, createVNode, unref, withModifiers, withDirectives, createBlock, openBlock, vModelText, mergeModels, useSlots, useModel, useId, computed, Fragment, createCommentVNode, renderSlot, createTextVNode, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderTeleport, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { useForwardProps, Primitive, SwitchRoot, SwitchThumb, Label } from 'reka-ui';
import { Trash2, AlertTriangle, X, ShieldAlert } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { f as formatDate, t as timeZone } from './date-wF3mUuv1.mjs';
import { u as useToast } from './useToast-DbWOdwrP.mjs';
import 'vaul-vue';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '@vercel/speed-insights/nuxt';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'date-fns';

const theme = {
  "slots": {
    "root": "relative flex items-start",
    "base": [
      "inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-accented",
      "transition-[background] duration-200"
    ],
    "container": "flex items-center",
    "thumb": "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
    "icon": [
      "absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12",
      "transition-[color,opacity] duration-200"
    ],
    "wrapper": "ms-2",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "data-[state=checked]:bg-primary focus-visible:outline-primary",
        "icon": "group-data-[state=checked]:text-primary"
      },
      "secondary": {
        "base": "data-[state=checked]:bg-secondary focus-visible:outline-secondary",
        "icon": "group-data-[state=checked]:text-secondary"
      },
      "success": {
        "base": "data-[state=checked]:bg-success focus-visible:outline-success",
        "icon": "group-data-[state=checked]:text-success"
      },
      "info": {
        "base": "data-[state=checked]:bg-info focus-visible:outline-info",
        "icon": "group-data-[state=checked]:text-info"
      },
      "warning": {
        "base": "data-[state=checked]:bg-warning focus-visible:outline-warning",
        "icon": "group-data-[state=checked]:text-warning"
      },
      "error": {
        "base": "data-[state=checked]:bg-error focus-visible:outline-error",
        "icon": "group-data-[state=checked]:text-error"
      },
      "neutral": {
        "base": "data-[state=checked]:bg-inverted focus-visible:outline-inverted",
        "icon": "group-data-[state=checked]:text-highlighted"
      }
    },
    "size": {
      "xs": {
        "base": "w-7",
        "container": "h-4",
        "thumb": "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "w-8",
        "container": "h-4",
        "thumb": "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "w-9",
        "container": "h-5",
        "thumb": "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "w-10",
        "container": "h-5",
        "thumb": "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "w-11",
        "container": "h-6",
        "thumb": "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
        "wrapper": "text-base"
      }
    },
    "checked": {
      "true": {
        "icon": "group-data-[state=checked]:opacity-100"
      }
    },
    "unchecked": {
      "true": {
        "icon": "group-data-[state=unchecked]:opacity-100"
      }
    },
    "loading": {
      "true": {
        "icon": "animate-spin"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    }
  },
  "defaultVariants": {
    "color": "primary",
    "size": "md"
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "USwitch",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    checkedIcon: { type: null, required: false },
    uncheckedIcon: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    value: { type: String, required: false },
    defaultValue: { type: Boolean, required: false }
  }, {
    "modelValue": { type: Boolean, ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: Boolean, ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name: name2, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.switch || {} })({
      size: size.value,
      color: color.value,
      required: props.required,
      loading: props.loading,
      disabled: disabled.value || props.loading
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SwitchRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name2),
              disabled: unref(disabled) || __props.loading,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base })
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwitchThumb), {
                    "data-slot": "thumb",
                    class: ui.value.thumb({ class: props.ui?.thumb })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.loading) {
                          _push4(ssrRenderComponent(_sfc_main$e, {
                            name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!--[-->`);
                          if (__props.checkedIcon) {
                            _push4(ssrRenderComponent(_sfc_main$e, {
                              name: __props.checkedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, checked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.uncheckedIcon) {
                            _push4(ssrRenderComponent(_sfc_main$e, {
                              name: __props.uncheckedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          __props.loading ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 0,
                            name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$e, {
                              key: 0,
                              name: __props.checkedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, checked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$e, {
                              key: 1,
                              name: __props.uncheckedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwitchThumb), {
                      "data-slot": "thumb",
                      class: ui.value.thumb({ class: props.ui?.thumb })
                    }, {
                      default: withCtx(() => [
                        __props.loading ? (openBlock(), createBlock(_sfc_main$e, {
                          key: 0,
                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 0,
                            name: __props.checkedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 1,
                            name: __props.uncheckedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, [
                createVNode(unref(SwitchRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name2),
                  disabled: unref(disabled) || __props.loading,
                  "data-slot": "base",
                  class: ui.value.base({ class: props.ui?.base })
                }), {
                  default: withCtx(() => [
                    createVNode(unref(SwitchThumb), {
                      "data-slot": "thumb",
                      class: ui.value.thumb({ class: props.ui?.thumb })
                    }, {
                      default: withCtx(() => [
                        __props.loading ? (openBlock(), createBlock(_sfc_main$e, {
                          key: 0,
                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon, checked: true, unchecked: true })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 0,
                            name: __props.checkedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, checked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 1,
                            name: __props.uncheckedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon, unchecked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(unref(Label), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeleteProfile",
  __ssrInlineRender: true,
  emits: ["confirm-delete"],
  setup(__props, { emit: __emit }) {
    const isOpen = ref(false);
    const isHolding = ref(false);
    const progress = ref(0);
    ref(null);
    const isDeleted = ref(false);
    useUserSession();
    ref(false);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans" }, _attrs))} data-v-7638c164><button class="group relative px-6 py-4 rounded-2xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all w-full flex items-center justify-between overflow-hidden" data-v-7638c164><div class="flex items-center gap-3 relative z-10" data-v-7638c164><div class="p-2 bg-red-500/10 rounded-lg text-red-500 group-hover:text-red-400 transition-colors" data-v-7638c164>`);
      _push(ssrRenderComponent(unref(Trash2), { class: "w-5 h-5" }, null, _parent));
      _push(`</div><div class="text-left" data-v-7638c164><span class="block text-red-500 font-bold text-sm" data-v-7638c164>Delete Profile</span><span class="block text-red-500/50 text-[10px] uppercase font-bold tracking-wider" data-v-7638c164>Irreversible</span></div></div>`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5 text-red-500/20 group-hover:text-red-500 transition-colors relative z-10" }, null, _parent));
      _push(`</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (isOpen.value) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center px-6" data-v-7638c164><div class="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" data-v-7638c164></div><div class="relative w-full max-w-sm bg-zinc-900 border border-white/10 rounded-4xl p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" data-v-7638c164><button class="absolute top-4 right-4 p-2 text-zinc-600 hover:text-white transition-colors z-20" data-v-7638c164>`);
          _push2(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
          _push2(`</button><div class="relative z-10 flex flex-col items-center text-center" data-v-7638c164><div class="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 ring-1 ring-red-500/30" data-v-7638c164>`);
          _push2(ssrRenderComponent(unref(ShieldAlert), { class: "w-8 h-8 text-red-500" }, null, _parent));
          _push2(`</div><h2 class="text-2xl font-bold text-white mb-2" data-v-7638c164>Final Warning</h2><p class="text-zinc-400 text-sm leading-relaxed mb-8" data-v-7638c164> This will wipe your history, metrics, and progress. There is no going back. </p><div class="w-full relative" data-v-7638c164><div data-v-7638c164><button class="relative w-full h-16 rounded-xl bg-zinc-800 overflow-hidden flex items-center justify-center border border-white/5 group select-none touch-none" data-v-7638c164><div class="absolute bottom-0 left-0 h-full bg-red-600 transition-all duration-75 ease-linear" style="${ssrRenderStyle({ width: `${progress.value}%` })}" data-v-7638c164></div><div class="relative z-10 flex items-center gap-2 pointer-events-none" data-v-7638c164>`);
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(isDeleted.value ? "" : unref(Trash2)), {
            class: ["w-5 h-5 transition-colors", progress.value > 50 ? "text-white" : "text-red-500"]
          }, null), _parent);
          _push2(`<span class="${ssrRenderClass([progress.value > 50 ? "text-white" : "text-red-500", "font-bold uppercase tracking-widest text-sm transition-colors"])}" data-v-7638c164>${ssrInterpolate(isDeleted.value ? "Account Deleted" : isHolding.value ? "Hold to Delete..." : "Press & Hold")}</span></div></button></div>`);
          if (!isDeleted.value) {
            _push2(`<p class="mt-4 text-[10px] text-zinc-600 font-bold uppercase tracking-widest opacity-60" data-v-7638c164> Release to cancel </p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div><div class="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none rounded-full" data-v-7638c164></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/DeleteProfile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-7638c164"]]), { __name: "BaseDeleteProfile" });
const name = "nuxt-app";
const type = "module";
const version = "0.1.0.5";
const scripts = { "build": 'NODE_OPTIONS="--max-old-space-size=4096" nuxt build', "dev": "nuxt dev", "generate": "nuxt generate", "preview": "nuxt preview", "postinstall": "nuxt prepare" };
const dependencies = { "@internationalized/date": "^3.10.1", "@nuxt/image": "^1.11.0", "@nuxt/kit": "^4.2.2", "@nuxt/ui": "^4.3.0", "@pinia/nuxt": "^0.11.3", "@tailwindcss/vite": "^4.1.13", "@vercel/analytics": "^1.6.1", "@vercel/speed-insights": "^1.3.1", "@vite-pwa/nuxt": "^1.0.4", "@vueuse/motion": "^3.0.3", "bcrypt": "^6.0.0", "date-fns": "^4.1.0", "lucide-vue-next": "^0.556.0", "mongodb": "^6.20.0", "mongoose": "^8.18.2", "nuxt": "^4.2.2", "nuxt-auth-utils": "^0.5.25", "nuxt-charts": "^0.2.4", "nuxt-notify": "^1.1.4", "pinia": "^3.0.4", "reka-ui": "^2.6.1", "resend": "^6.6.0", "tailwindcss": "^4.1.13", "vue": "^3.5.21", "vue-router": "^4.5.1", "zod": "^4.1.11" };
const devDependencies = { "@iconify-json/lucide": "^1.2.68", "@iconify-json/material-symbols": "^1.2.39", "@nuxtjs/color-mode": "^3.5.2", "@nuxtjs/pwa": "^3.1.2", "@types/bcrypt": "^6.0.0", "@types/node": "^24.5.2", "baseline-browser-mapping": "^2.9.5", "sass": "^1.93.0", "typescript": "^5.9.2", "vue-tsc": "^3.0.8" };
const packageJson = {
  name,
  type,
  "private": true,
  version,
  scripts,
  dependencies,
  devDependencies
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("profile");
    const { fetch: refreshSession } = useUserSession();
    let errorMessage = ref("");
    const isLoading = ref(false);
    const open = ref(false);
    useUserSession();
    const toast = useToast();
    const input = reactive({
      username: "",
      first_name: "",
      last_name: ""
    });
    if (data.value) {
      input.username = data.value?.username;
      input.first_name = data.value?.first_name;
      input.last_name = data.value?.last_name;
    }
    const toggleSetting = (item) => {
      item.value = !item.value;
      isLoading.value = true;
      $fetch(`/api/user/profile/settings`, {
        method: "PUT",
        body: {
          title: item?.title,
          setting: item?.setting,
          value: item.value,
          _id: item?._id
        }
      }).then(async () => {
        await refreshSession();
        await refreshNuxtData();
        isLoading.value = false;
      }).catch(async (error) => {
        toast.error("Update failed", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    };
    async function log() {
      isLoading.value = true;
      $fetch(`/api/user/profile`, {
        method: "PUT",
        body: input
      }).then(async () => {
        await refreshSession();
        await refreshNuxtData();
        open.value = false;
        isLoading.value = false;
      }).catch(async (error) => {
        toast.error("Failed to update", "Try again");
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDrawer = _sfc_main$4;
      const _component_UButton = _sfc_main$8;
      const _component_baseLabel = __nuxt_component_0$1;
      const _component_baseButtonSubmit = __nuxt_component_2;
      const _component_USwitch = _sfc_main$3;
      const _component_baseDeleteProfile = __nuxt_component_5;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen p-4 sm:p-8" }, _attrs))}><div class="max-w-4xl mx-auto py-10 flex flex-col gap-8"><header class="pb-8 border-b border-gray-700"><h1 class="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400"> Settings </h1><p class="mt-2 text-gray-400">Manage your profile, preferences, and privacy settings.</p></header><section class="space-y-6"><h2 class="text-2xl font-semibold mb-6"> Update your user profile </h2><div class="flex justify-center items-center p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300"><div class="flex flex-col gap-5"><span>Update your user profile info</span><div class="w-full relative mb-4 flex justify-center">`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Update user profile",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Who are you called to be?" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).username)} placeholder="Leader, hard worker, etc..." class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "First Name" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).first_name)} placeholder="First name" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Last name" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).last_name)} placeholder="Last name" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div class="flex flex-col gap-8 pb-4"${_scopeId}>`);
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
                  createVNode(_component_baseLabel, { text: "Who are you called to be?" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).username = $event,
                    placeholder: "Leader, hard worker, etc...",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).username]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "First Name" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).first_name = $event,
                    placeholder: "First name",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).first_name]
                  ])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Last name" }),
                  withDirectives(createVNode("input", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).last_name = $event,
                    placeholder: "Last name",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).last_name]
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
              label: "Update profile",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:person-edit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Update profile",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:person-edit"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="space-y-6"><h2 class="text-2xl font-semibold mb-6"> Body preferences </h2><div class="flex justify-between items-center p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300"><div class="flex flex-col gap-5"><!--[-->`);
      ssrRenderList(unref(data)?.bodySettings, (item) => {
        _push(`<div><span class="text-sm text-gray-400 mt-1 max-w-lg">${ssrInterpolate(item.title)}</span>`);
        _push(ssrRenderComponent(_component_USwitch, {
          onClick: ($event) => toggleSetting(item),
          "unchecked-icon": "i-lucide-x",
          "checked-icon": "i-lucide-check",
          color: "primary",
          modelValue: item.value,
          "onUpdate:modelValue": ($event) => item.value = $event,
          loading: isLoading.value
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="space-y-6"><h2 class="text-2xl font-semibold mb-6"> Mind preferences </h2><div class="flex justify-between items-center p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300"><div class="flex flex-col gap-5"><!--[-->`);
      ssrRenderList(unref(data)?.mindSettings, (item) => {
        _push(`<div><span class="text-sm text-gray-400 mt-1 max-w-lg">${ssrInterpolate(item.title)}</span>`);
        _push(ssrRenderComponent(_component_USwitch, {
          onClick: ($event) => toggleSetting(item),
          "unchecked-icon": "i-lucide-x",
          "checked-icon": "i-lucide-check",
          color: "info",
          modelValue: item.value,
          "onUpdate:modelValue": ($event) => item.value = $event,
          loading: isLoading.value
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="space-y-6"><h2 class="text-2xl font-semibold mb-6"> Spirit preferences </h2><div class="flex justify-between items-center p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300"><div class="flex flex-col gap-5"><!--[-->`);
      ssrRenderList(unref(data)?.spiritSettings, (item) => {
        _push(`<div><span class="text-sm text-gray-400 mt-1 max-w-lg">${ssrInterpolate(item.title)}</span>`);
        _push(ssrRenderComponent(_component_USwitch, {
          onClick: ($event) => toggleSetting(item),
          "unchecked-icon": "i-lucide-x",
          "checked-icon": "i-lucide-check",
          color: "neutral",
          modelValue: item.value,
          "onUpdate:modelValue": ($event) => item.value = $event,
          loading: isLoading.value
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><div class="flex flex-col mt-4 pt-8 border-t border-gray-700 text-gray-400"><span>Date: ${ssrInterpolate(unref(formatDate)())}</span><span>Time zone: ${ssrInterpolate(unref(timeZone)())}</span><span>Version: ${ssrInterpolate(unref(packageJson).version)}</span></div><div class="flex flex-col gap-8 mt-10 pt-8 border-t border-gray-700"><button class="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition duration-300"> Sign Out </button>`);
      _push(ssrRenderComponent(_component_baseDeleteProfile, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Profile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AppProfile" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appProfile = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-categories" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_appProfile, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C5tP9kzA.mjs.map
