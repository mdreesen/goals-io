import { defineComponent, withAsyncContext, withCtx, unref, createBlock, createCommentVNode, openBlock, computed, toValue, reactive, mergeProps, renderSlot, createVNode, toDisplayString, mergeModels, useSlots, useModel, watch, toRef, createTextVNode, resolveDynamicComponent, withModifiers, Fragment, renderList, toHandlers, useSSRContext, useTemplateRef, ref, createElementBlock, normalizeStyle, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderList } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, AccordionTrigger, AccordionItem, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, AccordionContent, AccordionRoot, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport, VisuallyHidden, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui';
import { O as hash, x as defu } from '../nitro/nitro.mjs';
import { y as fetchDefaults, z as useAsyncData, A as useRequestFetch, b as useAppConfig, t as tv, f as useRoute, a as __nuxt_component_0$1, v as __nuxt_component_2$1, x as __nuxt_component_0$3, c as useLocale, g as createReusableTemplate, h as getSlotChildrenText, e as _sfc_main$8$1, i as _sfc_main$9$1, r as reactivePick, o as isArrayOfArray, m as _sfc_main$b$1, l as _sfc_main$e$1, p as get, q as pickLinkProps, s as _sfc_main$a$1, d as usePortal, j as useFieldGroup, k as useComponentIcons, w as __nuxt_component_0$2, n as createSharedComposable } from './server.mjs';
import { DrawerRootNested, DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription } from 'vaul-vue';
import { HoverCard, Popover } from 'reka-ui/namespaced';
import { Orientation, StackedBar, GroupedBar, Scatter, Position } from '@unovis/ts';
import { VisXYContainer, VisTooltip, VisStackedBar, VisGroupedBar, VisAxis, VisBulletLegend, VisScatter } from '@unovis/vue';
import { isPlainObject } from '@vue/shared';
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
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const theme$a = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};
const _sfc_main$i = {
  __name: "UContainer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$a), ...((_a = appConfig.ui) == null ? void 0 : _a.container) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const theme$9 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "side": {
      "top": {
        "content": "inset-x-0 top-0 max-h-full"
      },
      "right": {
        "content": "right-0 inset-y-0 w-full max-w-md"
      },
      "bottom": {
        "content": "inset-x-0 bottom-0 max-h-full"
      },
      "left": {
        "content": "left-0 inset-y-0 w-full max-w-md"
      }
    },
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]"
      }
    }
  },
  "compoundVariants": [
    {
      "transition": true,
      "side": "top",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "right",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "bottom",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "left",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
      }
    }
  ]
};
const _sfc_main$h = {
  __name: "USlideover",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    side: { type: null, required: false, default: "right" },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: [String, Object], required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const defaultEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, defaultEvents);
      }
      return defaultEvents;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$9), ...((_a = appConfig.ui) == null ? void 0 : _a.slideover) || {} })({
        transition: props.transition,
        side: props.side
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c2;
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              var _a3, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => {
                                          var _a4;
                                          return [
                                            props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("slideover.close")
                                            }, typeof props.close === "object" ? props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => {
                            var _a2, _b2, _c2;
                            return [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", { close }, () => {
                                  var _a3, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                    }, [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    renderSlot(_ctx.$slots, "actions"),
                                    props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => {
                                          var _a4;
                                          return [
                                            props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("slideover.close")
                                            }, typeof props.close === "object" ? props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              createVNode("div", {
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body", { close })
                              ], 2),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer", { close })
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c2;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  renderSlot(_ctx.$slots, "actions"),
                                  props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        return [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  renderSlot(_ctx.$slots, "actions"),
                                  props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        return [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                  ];
                }),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const theme$8 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-hidden"
      }
    }
  }
};
const _sfc_main$g = {
  __name: "UModal",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    fullscreen: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: [String, Object], required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const defaultEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, defaultEvents);
      }
      return defaultEvents;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$8), ...((_a = appConfig.ui) == null ? void 0 : _a.modal) || {} })({
        transition: props.transition,
        fullscreen: props.fullscreen
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c2;
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              var _a3, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => {
                                          var _a4;
                                          return [
                                            props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof props.close === "object" ? props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => {
                            var _a2, _b2, _c2;
                            return [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", { close }, () => {
                                  var _a3, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                    }, [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    renderSlot(_ctx.$slots, "actions"),
                                    props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => {
                                          var _a4;
                                          return [
                                            props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof props.close === "object" ? props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body", { close })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer", { close })
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c2;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  renderSlot(_ctx.$slots, "actions"),
                                  props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        return [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  renderSlot(_ctx.$slots, "actions"),
                                  props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        return [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                  ];
                }),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const theme$7 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default ring ring-default flex focus:outline-none",
    "handle": [
      "shrink-0 !bg-accented",
      "transition-opacity"
    ],
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row",
        "handle": "!ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse",
        "handle": "!mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]"
      }
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top",
        "bottom"
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "!w-12 !h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "!h-12 !w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": "top",
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top",
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-lg"
      }
    },
    {
      "direction": "bottom",
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom",
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-lg"
      }
    },
    {
      "direction": "left",
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left",
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-lg"
      }
    },
    {
      "direction": "right",
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right",
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-lg"
      }
    }
  ]
};
const _sfc_main$f = {
  __name: "UDrawer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    inset: { type: Boolean, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    handle: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    nested: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    activeSnapPoint: { type: [Number, String, null], required: false },
    closeThreshold: { type: Number, required: false },
    shouldScaleBackground: { type: Boolean, required: false },
    setBackgroundColorOnScale: { type: Boolean, required: false },
    scrollLockTimeout: { type: Number, required: false },
    fixed: { type: Boolean, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    modal: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    direction: { type: String, required: false, default: "bottom" },
    noBodyStyles: { type: Boolean, required: false },
    handleOnly: { type: Boolean, required: false },
    preventScrollRestoration: { type: Boolean, required: false },
    snapPoints: { type: Array, required: false }
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = {
      closeAutoFocus: (e) => e.preventDefault()
    };
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$7), ...((_a = appConfig.ui) == null ? void 0 : _a.drawer) || {} })({
        direction: props.direction,
        inset: props.inset
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.nested ? unref(DrawerRootNested) : unref(DrawerRoot)), mergeProps(unref(rootProps), _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DrawerTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DrawerPortal), unref(portalProps), {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DrawerOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DrawerContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, toHandlers(contentEvents)), {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        if (__props.handle) {
                          _push4(ssrRenderComponent(unref(DrawerHandle), {
                            class: ui.value.handle({ class: (_a2 = props.ui) == null ? void 0 : _a2.handle })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DrawerTitle), null, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DrawerDescription), null, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b3, _c2, _d2;
                          _push4(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId3}>`);
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_b3 = props.ui) == null ? void 0 : _b3.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b4;
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DrawerTitle), {
                                  class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                }, {
                                  default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DrawerDescription), {
                                  class: ui.value.description({ class: (_b4 = props.ui) == null ? void 0 : _b4.description })
                                }, {
                                  default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: (_b2 = props.ui) == null ? void 0 : _b2.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b3, _c2, _d2;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b3 = props.ui) == null ? void 0 : _b3.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b4;
                                    return [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b4 = props.ui) == null ? void 0 : _b4.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: (_a2 = props.ui) == null ? void 0 : _a2.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c2, _d2;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b3;
                                    return [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DrawerPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: (_a2 = props.ui) == null ? void 0 : _a2.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c, _d;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b3;
                                    return [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c = props.ui) == null ? void 0 : _c.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d = props.ui) == null ? void 0 : _d.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const theme$6 = {
  "slots": {
    "root": "bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-full",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": "-ms-1.5"
      },
      "right": {
        "toggle": "-me-1.5"
      }
    }
  }
};
const _sfc_main$e = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UHeader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false, default: "header" },
    title: { type: String, required: false, default: "Nuxt UI" },
    to: { type: String, required: false, default: "/" },
    mode: { type: null, required: false, default: "modal" },
    menu: { type: null, required: false },
    toggle: { type: [Boolean, Object], required: false, default: true },
    toggleSide: { type: String, required: false, default: "right" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const route = useRoute();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
    const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Nuxt UI").trim();
    });
    watch(() => route.fullPath, () => {
      open.value = false;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$6), ...((_a = appConfig.ui) == null ? void 0 : _a.header) || {} })();
    });
    const Menu = computed(() => ({
      slideover: _sfc_main$h,
      modal: _sfc_main$g,
      drawer: _sfc_main$f
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, {
      content: {
        onOpenAutoFocus: (e) => e.preventDefault()
      }
    }, props.mode === "modal" ? { fullscreen: true, transition: false } : {}));
    function toggleOpen() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", {
              open: open.value,
              toggle: toggleOpen
            }, () => {
              var _a2;
              if (__props.toggle) {
                _push2(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                  class: ui.value.toggle({ class: (_a2 = props.ui) == null ? void 0 : _a2.toggle, toggleSide: __props.toggleSide }),
                  onClick: toggleOpen
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: toggleOpen
              }, () => {
                var _a2;
                return [
                  __props.toggle ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                    key: 0,
                    color: "neutral",
                    variant: "ghost",
                    "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                    icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                  }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                    class: ui.value.toggle({ class: (_a2 = props.ui) == null ? void 0 : _a2.toggle, toggleSide: __props.toggleSide }),
                    onClick: toggleOpen
                  }), null, 16, ["aria-label", "icon", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.left({ class: (_a2 = props.ui) == null ? void 0 : _a2.left }))}"${_scopeId}>`);
            if (__props.toggleSide === "left") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              var _a3;
              _push2(ssrRenderComponent(_sfc_main$9$1, {
                to: __props.to,
                "aria-label": ariaLabel.value,
                class: ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title })
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(__props.title)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.left({ class: (_b2 = props.ui) == null ? void 0 : _b2.left })
              }, [
                __props.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "left", {}, () => {
                  var _a3;
                  return [
                    createVNode(_sfc_main$9$1, {
                      to: __props.to,
                      "aria-label": ariaLabel.value,
                      class: ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ]),
                      _: 3
                    }, 8, ["to", "aria-label", "class"])
                  ];
                })
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineRightTemplate), null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.right({ class: (_a2 = props.ui) == null ? void 0 : _a2.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            if (__props.toggleSide === "right") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.right({ class: (_b2 = props.ui) == null ? void 0 : _b2.right })
              }, [
                renderSlot(_ctx.$slots, "right"),
                __props.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: __props.as }, _ctx.$attrs, {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$i, {
              class: ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent3, _scopeId2));
                  _push3(`<div class="${ssrRenderClass(ui.value.center({ class: (_a3 = props.ui) == null ? void 0 : _a3.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      class: ui.value.center({ class: (_b3 = props.ui) == null ? void 0 : _b3.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$i, {
                class: ui.value.container({ class: (_b2 = props.ui) == null ? void 0 : _b2.container })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      class: ui.value.center({ class: (_a3 = props.ui) == null ? void 0 : _a3.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: unref(t)("header.title"),
        description: unref(t)("header.description")
      }, menuProps.value, {
        ui: {
          overlay: ui.value.overlay({ class: (_b = props.ui) == null ? void 0 : _b.overlay }),
          content: ui.value.content({ class: (_c = props.ui) == null ? void 0 : _c.content })
        }
      }), {
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", {}, () => {
              var _a2, _b2;
              if (__props.mode !== "drawer") {
                _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", {}, () => {
                var _a2, _b2;
                return [
                  __props.mode !== "drawer" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                  }, [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode(unref(ReuseRightTemplate))
                  ], 2)) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                  }, [
                    renderSlot(_ctx.$slots, "body")
                  ], 2)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const theme$5 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$d = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: [String, Object], required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: [String, Object], required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: [String, Object], required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$5), ...((_a = appConfig.ui) == null ? void 0 : _a.badge) || {} })({
        color: props.color,
        variant: props.variant,
        size: fieldGroupSize.value || props.size,
        square: props.square || !slots.default && !props.label,
        fieldGroup: orientation.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.base({ class: [(_a = props.ui) == null ? void 0 : _a.base, props.class] })
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a2, _b, _c;
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e$1, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$b$1, mergeProps({
                  size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a2;
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a2 = props.ui) == null ? void 0 : _a2.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a2;
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e$1, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a2, _b, _c;
                return [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$e$1, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b$1, mergeProps({
                    key: 1,
                    size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a2;
                return [
                  __props.label !== void 0 && __props.label !== null ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.label({ class: (_a2 = props.ui) == null ? void 0 : _a2.label })
                  }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a2;
                return [
                  unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e$1, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const theme$4 = {
  "slots": {
    "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    "arrow": "fill-default"
  }
};
const _sfc_main$c = {
  __name: "UPopover",
  __ssrInlineRender: true,
  props: {
    mode: { type: String, required: false, default: "click" },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false },
    openDelay: { type: Number, required: false, default: 0 },
    closeDelay: { type: Number, required: false, default: 0 }
  },
  emits: ["close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardPropsEmits(pick, emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.popover) || {} })({
        side: contentProps.value.side
      });
    });
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ("Anchor" in Component.value && !!slots.anchor) {
              _push2(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "anchor", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "anchor")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a = props.ui) == null ? void 0 : _a.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["reference", "class"])) : createCommentVNode("", true),
              "Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
                key: 1,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "anchor")
                ]),
                _: 3
              })) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, unref(portalProps), {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a = props.ui) == null ? void 0 : _a.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const kbdKeysMap = {
  meta: "",
  ctrl: "",
  alt: "",
  win: "\u229E",
  command: "\u2318",
  shift: "\u21E7",
  control: "\u2303",
  option: "\u2325",
  enter: "\u21B5",
  delete: "\u2326",
  backspace: "\u232B",
  escape: "\u238B",
  tab: "\u21E5",
  capslock: "\u21EA",
  arrowup: "\u2191",
  arrowright: "\u2192",
  arrowdown: "\u2193",
  arrowleft: "\u2190",
  pageup: "\u21DE",
  pagedown: "\u21DF",
  home: "\u2196",
  end: "\u2198"
};
const _useKbd = () => {
  const macOS = computed(() => false);
  const kbdKeysSpecificMap = reactive({
    meta: " ",
    alt: " ",
    ctrl: " "
  });
  function getKbdKey(value) {
    if (!value) {
      return;
    }
    if (["meta", "alt", "ctrl"].includes(value)) {
      return kbdKeysSpecificMap[value];
    }
    return kbdKeysMap[value] || value.toUpperCase();
  }
  return {
    macOS,
    getKbdKey
  };
};
const useKbd = /* @__PURE__ */ createSharedComposable(_useKbd);
const theme$3 = {
  "base": "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans",
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "sm": "h-4 min-w-[16px] text-[10px]",
      "md": "h-5 min-w-[20px] text-[11px]",
      "lg": "h-6 min-w-[24px] text-[12px]"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "text-inverted bg-primary"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "text-inverted bg-secondary"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "text-inverted bg-success"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "text-inverted bg-info"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "text-inverted bg-warning"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "text-inverted bg-error"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "ring ring-inset ring-primary/50 text-primary"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "ring ring-inset ring-secondary/50 text-secondary"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "ring ring-inset ring-success/50 text-success"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "ring ring-inset ring-info/50 text-info"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "ring ring-inset ring-warning/50 text-warning"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "ring ring-inset ring-error/50 text-error"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "text-primary bg-primary/10"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "text-secondary bg-secondary/10"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "text-success bg-success/10"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "text-info bg-info/10"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "text-warning bg-warning/10"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "text-error bg-error/10"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "text-primary ring ring-inset ring-primary/25 bg-primary/10"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "text-success ring ring-inset ring-success/25 bg-success/10"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "text-info ring ring-inset ring-info/25 bg-info/10"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "text-warning ring ring-inset ring-warning/25 bg-warning/10"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "text-error ring ring-inset ring-error/25 bg-error/10"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "color": "neutral",
    "size": "md"
  }
};
const _sfc_main$b = {
  __name: "UKbd",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "kbd" },
    value: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { getKbdKey } = useKbd();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.kbd) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class, color: props.color, variant: props.variant, size: props.size })
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(unref(getKbdKey)(__props.value))}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(unref(getKbdKey)(__props.value)), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
    "arrow": "fill-default",
    "text": "truncate",
    "kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['\xB7'] not-first-of-type:before:me-0.5",
    "kbdsSize": "sm"
  }
};
const _sfc_main$a = {
  __name: "UTooltip",
  __ssrInlineRender: true,
  props: {
    text: { type: String, required: false },
    kbds: { type: Array, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    delayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.tooltip) || {} })({
        side: contentProps.value.side
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(rootProps), {
        disabled: !(__props.text || ((_a = __props.kbds) == null ? void 0 : _a.length) || !!slots.content) || props.disabled
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(TooltipTrigger), mergeProps(_ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(TooltipPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TooltipContent), mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                  }), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a4, _b3, _c;
                          if (__props.text) {
                            _push4(`<span class="${ssrRenderClass(ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text }))}"${_scopeId3}>${ssrInterpolate(__props.text)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if ((_b3 = __props.kbds) == null ? void 0 : _b3.length) {
                            _push4(`<span class="${ssrRenderClass(ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds }))}"${_scopeId3}><!--[-->`);
                            ssrRenderList(__props.kbds, (kbd, index) => {
                              var _a5;
                              _push4(ssrRenderComponent(_sfc_main$b, mergeProps({
                                key: index,
                                size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(TooltipArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b3, _c;
                            return [
                              __props.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                              ((_b3 = __props.kbds) == null ? void 0 : _b3.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_sfc_main$b, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                  }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b2, _c;
                            return [
                              __props.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                              ((_b2 = __props.kbds) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_sfc_main$b, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                  }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(TooltipTrigger), mergeProps({ key: 0 }, _ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1040, ["reference", "class"])) : createCommentVNode("", true),
              createVNode(unref(TooltipPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b, _c;
                            return [
                              __props.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                              ((_b = __props.kbds) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_sfc_main$b, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                  }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "group ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childList": "isolate",
    "childLabel": "text-xs text-highlighted",
    "childItem": "",
    "childLink": "group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "childLinkWrapper": "min-w-0",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "truncate",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childLinkDescription": "text-muted",
    "separator": "px-2 h-px bg-border",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
    "content": "",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-[1] rounded-xs"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-primary",
        "childLink": "focus-visible:before:ring-primary"
      },
      "secondary": {
        "link": "focus-visible:before:ring-secondary",
        "childLink": "focus-visible:before:ring-secondary"
      },
      "success": {
        "link": "focus-visible:before:ring-success",
        "childLink": "focus-visible:before:ring-success"
      },
      "info": {
        "link": "focus-visible:before:ring-info",
        "childLink": "focus-visible:before:ring-info"
      },
      "warning": {
        "link": "focus-visible:before:ring-warning",
        "childLink": "focus-visible:before:ring-warning"
      },
      "error": {
        "link": "focus-visible:before:ring-error",
        "childLink": "focus-visible:before:ring-error"
      },
      "neutral": {
        "link": "focus-visible:before:ring-inverted",
        "childLink": "focus-visible:before:ring-inverted"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2",
        "childLink": "px-3 py-2 gap-2 before:inset-x-px before:inset-y-0",
        "childLinkLabel": "font-medium",
        "content": "absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
        "childLabel": "px-1.5 py-0.5",
        "childLink": "p-1.5 gap-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)"
      }
    },
    "active": {
      "true": {
        "childLink": "before:bg-elevated text-highlighted",
        "childLinkIcon": "text-default"
      },
      "false": {
        "link": "text-muted",
        "linkLeadingIcon": "text-dimmed",
        "childLink": [
          "hover:before:bg-elevated/50 text-default hover:text-highlighted",
          "transition-colors before:transition-colors"
        ],
        "childLinkIcon": [
          "text-dimmed group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-default",
        "childItem": "ps-1.5 -ms-px",
        "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5",
        "content": "shadow-sm rounded-sm min-h-6 p-1"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-elevated"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "disabled": false,
      "class": {
        "link": [
          "hover:before:bg-elevated/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-highlighted",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-secondary"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-success"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-info"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UNavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    trailingIcon: { type: [String, Object], required: false },
    externalIcon: { type: [Boolean, String, Object], required: false, default: true },
    items: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    collapsed: { type: Boolean, required: false },
    tooltip: { type: [Boolean, Object], required: false },
    popover: { type: [Boolean, Object], required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    content: { type: Object, required: false },
    contentOrientation: { type: null, required: false, default: "horizontal" },
    arrow: { type: Boolean, required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    delayDuration: { type: Number, required: false, default: 0 },
    disableClickTrigger: { type: Boolean, required: false },
    disableHoverTrigger: { type: Boolean, required: false },
    skipDelayDuration: { type: Number, required: false },
    disablePointerLeaveClose: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false },
    type: { type: String, required: false, default: "multiple" },
    collapsible: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      modelValue: props.modelValue,
      defaultValue: props.defaultValue,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const accordionProps = useForwardPropsEmits(reactivePick(props, "collapsible", "disabled", "type", "unmountOnHide"), emits);
    const contentProps = toRef(() => props.content);
    const tooltipProps = toRef(() => defu(typeof props.tooltip === "boolean" ? {} : props.tooltip, { delayDuration: 0, content: { side: "right" } }));
    const popoverProps = toRef(() => defu(typeof props.popover === "boolean" ? {} : props.popover, { mode: "hover", content: { side: "right", align: "start", alignOffset: 2 } }));
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.navigationMenu) || {} })({
        orientation: props.orientation,
        contentOrientation: props.orientation === "vertical" ? void 0 : props.contentOrientation,
        collapsed: props.collapsed,
        color: props.color,
        variant: props.variant,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      });
    });
    const lists = computed(
      () => {
        var _a;
        return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
      }
    );
    function getAccordionDefaultValue(list, level = 0) {
      const indexes = list.reduce((acc, item, index) => {
        if (item.defaultOpen || item.open) {
          acc.push(item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`));
        }
        return acc;
      }, []);
      return props.type === "single" ? indexes[0] : indexes;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a3, _b2, _c2, _d2, _e2, _f2;
                if (item.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$b$1, mergeProps({
                    size: ((_a3 = item.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    class: ui.value.linkLeadingAvatar({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkLeadingAvatar, (_d2 = item.ui) == null ? void 0 : _d2.linkLeadingAvatar], active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(_sfc_main$e$1, {
                    name: item.icon,
                    class: ui.value.linkLeadingIcon({ class: [(_e2 = props.ui) == null ? void 0 : _e2.linkLeadingIcon, (_f2 = item.ui) == null ? void 0 : _f2.linkLeadingIcon], active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if ((!__props.collapsed || __props.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: [(_a2 = props.ui) == null ? void 0 : _a2.linkLabel, (_b = item.ui) == null ? void 0 : _b.linkLabel] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(ssrRenderComponent(_sfc_main$e$1, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                    class: ui.value.linkLabelExternalIcon({ class: [(_c = props.ui) == null ? void 0 : _c.linkLabelExternalIcon, (_d = item.ui) == null ? void 0 : _d.linkLabelExternalIcon], active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((!__props.collapsed || __props.orientation !== "vertical") && (item.badge || __props.orientation === "horizontal" && (((_e = item.children) == null ? void 0 : _e.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"])) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && ((_g = item.children) == null ? void 0 : _g.length) && !__props.collapsed ? unref(AccordionTrigger) : "span"), {
                  as: "span",
                  class: ui.value.linkTrailing({ class: [(_h = props.ui) == null ? void 0 : _h.linkTrailing, (_i = item.ui) == null ? void 0 : _i.linkTrailing] }),
                  onClick: () => {
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                        item,
                        active,
                        index
                      }, () => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                        if (item.badge !== void 0) {
                          _push3(ssrRenderComponent(_sfc_main$d, mergeProps({
                            color: "neutral",
                            variant: "outline",
                            size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                          }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            class: ui.value.linkTrailingBadge({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length)) {
                          _push3(ssrRenderComponent(_sfc_main$e$1, {
                            name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon], active })
                          }, null, _parent3, _scopeId2));
                        } else if (item.trailingIcon) {
                          _push3(ssrRenderComponent(_sfc_main$e$1, {
                            name: item.trailingIcon,
                            class: ui.value.linkTrailingIcon({ class: [(_i2 = props.ui) == null ? void 0 : _i2.linkTrailingIcon, (_j = item.ui) == null ? void 0 : _j.linkTrailingIcon], active })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                          item,
                          active,
                          index
                        }, () => {
                          var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                          return [
                            item.badge !== void 0 ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                              key: 0,
                              color: "neutral",
                              variant: "outline",
                              size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                            }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                              class: ui.value.linkTrailingBadge({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                            __props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_sfc_main$e$1, {
                              key: 1,
                              name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                              class: ui.value.linkTrailingIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon], active })
                            }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e$1, {
                              key: 2,
                              name: item.trailingIcon,
                              class: ui.value.linkTrailingIcon({ class: [(_i2 = props.ui) == null ? void 0 : _i2.linkTrailingIcon, (_j = item.ui) == null ? void 0 : _j.linkTrailingIcon], active })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ];
                        })
                      ];
                    }
                  }),
                  _: 2
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a3, _b2, _c2, _d2, _e2, _f2;
                    return [
                      item.avatar ? (openBlock(), createBlock(_sfc_main$b$1, mergeProps({
                        key: 0,
                        size: ((_a3 = item.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui.value.linkLeadingAvatar({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkLeadingAvatar, (_d2 = item.ui) == null ? void 0 : _d2.linkLeadingAvatar], active, disabled: !!item.disabled })
                      }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                        key: 1,
                        name: item.icon,
                        class: ui.value.linkLeadingIcon({ class: [(_e2 = props.ui) == null ? void 0 : _e2.linkLeadingIcon, (_f2 = item.ui) == null ? void 0 : _f2.linkLeadingIcon], active, disabled: !!item.disabled })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  (!__props.collapsed || __props.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.linkLabel({ class: [(_a2 = props.ui) == null ? void 0 : _a2.linkLabel, (_b = item.ui) == null ? void 0 : _b.linkLabel] })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                      key: 0,
                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                      class: ui.value.linkLabelExternalIcon({ class: [(_c = props.ui) == null ? void 0 : _c.linkLabelExternalIcon, (_d = item.ui) == null ? void 0 : _d.linkLabelExternalIcon], active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!__props.collapsed || __props.orientation !== "vertical") && (item.badge || __props.orientation === "horizontal" && (((_e = item.children) == null ? void 0 : _e.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && ((_g = item.children) == null ? void 0 : _g.length) && !__props.collapsed ? unref(AccordionTrigger) : "span"), {
                    key: 1,
                    as: "span",
                    class: ui.value.linkTrailing({ class: [(_h = props.ui) == null ? void 0 : _h.linkTrailing, (_i = item.ui) == null ? void 0 : _i.linkTrailing] }),
                    onClick: withModifiers(() => {
                    }, ["stop", "prevent"])
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                        item,
                        active,
                        index
                      }, () => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                        return [
                          item.badge !== void 0 ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                            key: 0,
                            color: "neutral",
                            variant: "outline",
                            size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                          }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            class: ui.value.linkTrailingBadge({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                          __props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_sfc_main$e$1, {
                            key: 1,
                            name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon], active })
                          }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e$1, {
                            key: 2,
                            name: item.trailingIcon,
                            class: ui.value.linkTrailingIcon({ class: [(_i2 = props.ui) == null ? void 0 : _i2.linkTrailingIcon, (_j = item.ui) == null ? void 0 : _j.linkTrailingIcon], active })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionItem) : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  if (__props.orientation === "vertical" && item.type === "label" && !__props.collapsed) {
                    _push3(`<div class="${ssrRenderClass(ui.value.label({ class: [(_a2 = props.ui) == null ? void 0 : _a2.label, (_b = item.ui) == null ? void 0 : _b.label, item.class] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(_sfc_main$9$1, mergeProps(__props.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a4, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                              if (_push5) {
                                if (__props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover)) {
                                  _push5(ssrRenderComponent(_sfc_main$c, mergeProps({ ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                  }), {
                                    content: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, () => {
                                          var _a5, _b4, _c4, _d4;
                                          _push6(`<ul class="${ssrRenderClass(ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] }))}"${_scopeId5}><li class="${ssrRenderClass(ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] }))}"${_scopeId5}>${ssrInterpolate(unref(get)(item, props.labelKey))}</li><!--[-->`);
                                          ssrRenderList(item.children, (childItem, childIndex) => {
                                            var _a6, _b5;
                                            _push6(`<li class="${ssrRenderClass(ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] }))}"${_scopeId5}>`);
                                            _push6(ssrRenderComponent(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                              default: withCtx(({ active: childActive, ...childSlotProps }, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                                      var _a7, _b6, _c5, _d5;
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx((_6, _push9, _parent9, _scopeId8) => {
                                                            var _a8, _b7, _c6, _d6, _e4, _f4, _g4, _h4, _i4, _j4, _k2, _l2;
                                                            if (_push9) {
                                                              if (childItem.icon) {
                                                                _push9(ssrRenderComponent(_sfc_main$e$1, {
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, _parent9, _scopeId8));
                                                              } else {
                                                                _push9(`<!---->`);
                                                              }
                                                              _push9(`<span class="${ssrRenderClass(ui.value.childLinkLabel({ class: [(_c6 = props.ui) == null ? void 0 : _c6.childLinkLabel, (_d6 = item.ui) == null ? void 0 : _d6.childLinkLabel], active: childActive }))}"${_scopeId8}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                              if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                                _push9(ssrRenderComponent(_sfc_main$e$1, {
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, _parent9, _scopeId8));
                                                              } else {
                                                                _push9(`<!---->`);
                                                              }
                                                              _push9(`</span>`);
                                                            } else {
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_g4 = props.ui) == null ? void 0 : _g4.childLinkIcon, (_h4 = item.ui) == null ? void 0 : _h4.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_i4 = props.ui) == null ? void 0 : _i4.childLinkLabel, (_j4 = item.ui) == null ? void 0 : _j4.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_k2 = props.ui) == null ? void 0 : _k2.childLinkLabelExternalIcon, (_l2 = item.ui) == null ? void 0 : _l2.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLink, (_d5 = item.ui) == null ? void 0 : _d5.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c6, _d6, _e4, _f4;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c6 = props.ui) == null ? void 0 : _c6.childLinkLabel, (_d6 = item.ui) == null ? void 0 : _d6.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a7, _b6;
                                                        return [
                                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c5, _d5, _e4, _f4;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            _push6(`</li>`);
                                          });
                                          _push6(`<!--]--></ul>`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, () => {
                                            var _a5, _b4, _c4, _d4;
                                            return [
                                              createVNode("ul", {
                                                class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                              }, [
                                                createVNode("li", {
                                                  class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                                }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                                  var _a6, _b5;
                                                  return openBlock(), createBlock("li", {
                                                    key: childIndex,
                                                    class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                                  }, [
                                                    createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                      default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                        createVNode(unref(NavigationMenuLink), {
                                                          "as-child": "",
                                                          active: childActive,
                                                          onSelect: childItem.onSelect
                                                        }, {
                                                          default: withCtx(() => {
                                                            var _a7, _b6;
                                                            return [
                                                              createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                                class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                              }), {
                                                                default: withCtx(() => {
                                                                  var _a8, _b7, _c5, _d5, _e4, _f4;
                                                                  return [
                                                                    childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                      key: 0,
                                                                      name: childItem.icon,
                                                                      class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                    createVNode("span", {
                                                                      class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                    }, [
                                                                      createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                      childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                        key: 0,
                                                                        name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                        class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                    ], 2)
                                                                  ];
                                                                }),
                                                                _: 2
                                                              }, 1040, ["class"])
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1032, ["active", "onSelect"])
                                                      ]),
                                                      _: 2
                                                    }, 1040)
                                                  ], 2);
                                                }), 128))
                                              ], 2)
                                            ];
                                          })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      var _a5, _b4, _c4, _d4;
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$a$1, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(ReuseLinkTemplate), {
                                                  item,
                                                  active: active || item.active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                            class: ui.value.link({ class: [(_c4 = props.ui) == null ? void 0 : _c4.link, (_d4 = item.ui) == null ? void 0 : _d4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else if (__props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip)) {
                                  _push5(ssrRenderComponent(_sfc_main$a, mergeProps({
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      var _a5, _b4, _c4, _d4;
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$a$1, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(ReuseLinkTemplate), {
                                                  item,
                                                  active: active || item.active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                            class: ui.value.link({ class: [(_c4 = props.ui) == null ? void 0 : _c4.link, (_d4 = item.ui) == null ? void 0 : _d4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(_sfc_main$a$1, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                              } else {
                                return [
                                  __props.orientation === "vertical" && __props.collapsed && ((_f3 = item.children) == null ? void 0 : _f3.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$c, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [(_g3 = props.ui) == null ? void 0 : _g3.content, (_h3 = item.ui) == null ? void 0 : _h3.content] }) }
                                  }), {
                                    content: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, () => {
                                        var _a5, _b4, _c4, _d4;
                                        return [
                                          createVNode("ul", {
                                            class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                          }, [
                                            createVNode("li", {
                                              class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                            }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                              var _a6, _b5;
                                              return openBlock(), createBlock("li", {
                                                key: childIndex,
                                                class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                              }, [
                                                createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                  default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a7, _b6;
                                                        return [
                                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c5, _d5, _e4, _f4;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ], 2);
                                            }), 128))
                                          ], 2)
                                        ];
                                      })
                                    ]),
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
                                    key: 1,
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                                    class: ui.value.link({ class: [(_i3 = props.ui) == null ? void 0 : _i3.link, (_j3 = item.ui) == null ? void 0 : _j3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"]))
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (__props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              class: ui.value.content({ class: [(_d2 = props.ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                            }), {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active: active || item.active,
                                    index
                                  }, () => {
                                    var _a4, _b3;
                                    _push5(`<ul class="${ssrRenderClass(ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      var _a5, _b4;
                                      _push5(`<li class="${ssrRenderClass(ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                                var _a6, _b5, _c3, _d3;
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                                      var _a7, _b6, _c4, _d4, _e3, _f3, _g3, _h3, _i3, _j3, _k2, _l2, _m, _n, _o, _p, _q, _r, _s, _t;
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(_sfc_main$e$1, {
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div class="${ssrRenderClass(ui.value.childLinkWrapper({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLinkWrapper, (_d4 = item.ui) == null ? void 0 : _d4.childLinkWrapper] }))}"${_scopeId7}><p class="${ssrRenderClass(ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(_sfc_main$e$1, {
                                                            name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                            class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p class="${ssrRenderClass(ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_k2 = props.ui) == null ? void 0 : _k2.childLinkIcon, (_l2 = item.ui) == null ? void 0 : _l2.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_m = props.ui) == null ? void 0 : _m.childLinkWrapper, (_n = item.ui) == null ? void 0 : _n.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_o = props.ui) == null ? void 0 : _o.childLinkLabel, (_p = item.ui) == null ? void 0 : _p.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_q = props.ui) == null ? void 0 : _q.childLinkLabelExternalIcon, (_r = item.ui) == null ? void 0 : _r.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_s = props.ui) == null ? void 0 : _s.childLinkDescription, (_t = item.ui) == null ? void 0 : _t.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLink, (_d3 = item.ui) == null ? void 0 : _d3.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a7, _b6, _c4, _d4, _e3, _f3, _g3, _h3, _i3, _j3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLinkWrapper, (_d4 = item.ui) == null ? void 0 : _d4.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a6, _b5;
                                                  return [
                                                    createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, () => {
                                      var _a4, _b3;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a5, _b4;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a6, _b5;
                                                      return [
                                                        createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("div", {
                                                                class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                              }, [
                                                                createVNode("p", {
                                                                  class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2),
                                                                childItem.description ? (openBlock(), createBlock("p", {
                                                                  key: 0,
                                                                  class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_f2 = item.children) == null ? void 0 : _f2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_g2 = item.children) == null ? void 0 : _g2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a4, _b3, _c3, _d3, _e3;
                                return [
                                  __props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$c, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                  }), {
                                    content: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, () => {
                                        var _a5, _b4, _c4, _d4;
                                        return [
                                          createVNode("ul", {
                                            class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                          }, [
                                            createVNode("li", {
                                              class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                            }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                              var _a6, _b5;
                                              return openBlock(), createBlock("li", {
                                                key: childIndex,
                                                class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                              }, [
                                                createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                  default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a7, _b6;
                                                        return [
                                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c5, _d5, _e4, _f3;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ], 2);
                                            }), 128))
                                          ], 2)
                                        ];
                                      })
                                    ]),
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
                                    key: 1,
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                                    class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"]))
                                ];
                              }),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            __props.orientation === "horizontal" && (((_h2 = item.children) == null ? void 0 : _h2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              class: ui.value.content({ class: [(_i2 = props.ui) == null ? void 0 : _i2.content, (_j2 = item.ui) == null ? void 0 : _j2.content] })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active: active || item.active,
                                  index
                                }, () => {
                                  var _a4, _b3;
                                  return [
                                    createVNode("ul", {
                                      class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a5, _b4;
                                        return openBlock(), createBlock("li", {
                                          key: childIndex,
                                          class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                        }, [
                                          createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a6, _b5;
                                                  return [
                                                    createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !__props.collapsed) {
                    _push3(ssrRenderComponent(unref(AccordionContent), {
                      class: ui.value.content({ class: [(_e = props.ui) == null ? void 0 : _e.content, (_f = item.ui) == null ? void 0 : _f.content] })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                          }), {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(item.children, (childItem, childIndex) => {
                                  var _a4, _b3;
                                  _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                    key: childIndex,
                                    item: childItem,
                                    index: childIndex,
                                    level: level + 1,
                                    class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                    var _a4, _b3;
                                    return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                      key: childIndex,
                                      item: childItem,
                                      index: childIndex,
                                      level: level + 1,
                                      class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                                    }, null, 8, ["item", "index", "level", "class"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionRoot), mergeProps({
                              ...unref(accordionProps),
                              defaultValue: getAccordionDefaultValue(item.children, level + 1)
                            }, {
                              as: "ul",
                              class: ui.value.childList({ class: (_b2 = props.ui) == null ? void 0 : _b2.childList })
                            }), {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                  var _a4, _b3;
                                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                    key: childIndex,
                                    item: childItem,
                                    index: childIndex,
                                    level: level + 1,
                                    class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                                  }, null, 8, ["item", "index", "level", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1040, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.orientation === "vertical" && item.type === "label" && !__props.collapsed ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: [(_g = props.ui) == null ? void 0 : _g.label, (_h = item.ui) == null ? void 0 : _h.label, item.class] })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({ key: 1 }, __props.orientation === "vertical" && ((_i = item.children) == null ? void 0 : _i.length) && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a3, _b2, _c2, _d2, _e2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3, _c3, _d3, _e3;
                              return [
                                __props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$c, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                  ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                }), {
                                  content: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, () => {
                                      var _a5, _b4, _c4, _d4;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                        }, [
                                          createVNode("li", {
                                            class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a6, _b5;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a7, _b6;
                                                      return [
                                                        createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a8, _b7, _c5, _d5, _e4, _f2;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("span", {
                                                                class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                              }, [
                                                                createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ]),
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
                                  key: 1,
                                  text: unref(get)(item, props.labelKey)
                                }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                                  class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"]))
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          __props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: [(_d2 = props.ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active: active || item.active,
                                index
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a5, _b4;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                      }, [
                                        createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a6, _b5;
                                                return [
                                                  createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a7, _b6, _c3, _d3, _e3, _f2, _g2, _h2, _i2, _j2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.childLinkLabelExternalIcon, (_h2 = item.ui) == null ? void 0 : _h2.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: [(_i2 = props.ui) == null ? void 0 : _i2.childLinkDescription, (_j2 = item.ui) == null ? void 0 : _j2.childLinkDescription], active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true),
                    __props.orientation === "vertical" && ((_j = item.children) == null ? void 0 : _j.length) && !__props.collapsed ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 2,
                      class: ui.value.content({ class: [(_k = props.ui) == null ? void 0 : _k.content, (_l = item.ui) == null ? void 0 : _l.content] })
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                          }), {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                var _a4, _b2;
                                return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                  key: childIndex,
                                  item: childItem,
                                  index: childIndex,
                                  level: level + 1,
                                  class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b2 = childItem.ui) == null ? void 0 : _b2.childItem] })
                                }, null, 8, ["item", "index", "level", "class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionItem) : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`)
              }, {
                default: withCtx(() => {
                  var _a2, _b, _c, _d, _e, _f;
                  return [
                    __props.orientation === "vertical" && item.type === "label" && !__props.collapsed ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: [(_a2 = props.ui) == null ? void 0 : _a2.label, (_b = item.ui) == null ? void 0 : _b.label, item.class] })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({ key: 1 }, __props.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a3, _b2, _c2, _d2, _e2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3, _c3, _d3, _e3;
                              return [
                                __props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$c, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                  ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                }), {
                                  content: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, () => {
                                      var _a5, _b4, _c4, _d4;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                        }, [
                                          createVNode("li", {
                                            class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a6, _b5;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a7, _b6;
                                                      return [
                                                        createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a8, _b7, _c5, _d5, _e4, _f2;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("span", {
                                                                class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                              }, [
                                                                createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                                  key: 0,
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ]),
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
                                  key: 1,
                                  text: unref(get)(item, props.labelKey)
                                }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                                  class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"]))
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          __props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: [(_d2 = props.ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active: active || item.active,
                                index
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a5, _b4;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                      }, [
                                        createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a6, _b5;
                                                return [
                                                  createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a7, _b6, _c3, _d3, _e3, _f2, _g, _h, _i, _j;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e$1, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [(_g = props.ui) == null ? void 0 : _g.childLinkLabelExternalIcon, (_h = item.ui) == null ? void 0 : _h.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: [(_i = props.ui) == null ? void 0 : _i.childLinkDescription, (_j = item.ui) == null ? void 0 : _j.childLinkDescription], active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true),
                    __props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !__props.collapsed ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 2,
                      class: ui.value.content({ class: [(_e = props.ui) == null ? void 0 : _e.content, (_f = item.ui) == null ? void 0 : _f.content] })
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                          }), {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                var _a4, _b2;
                                return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                  key: childIndex,
                                  item: childItem,
                                  index: childIndex,
                                  level: level + 1,
                                  class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b2 = childItem.ui) == null ? void 0 : _b2.childItem] })
                                }, null, 8, ["item", "index", "level", "class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["value"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps({ ...unref(rootProps), ..._ctx.$attrs }, {
        "data-collapsed": __props.collapsed,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a3, _b2;
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionRoot) : unref(NavigationMenuList)), mergeProps({ ref_for: true }, __props.orientation === "vertical" && !__props.collapsed ? {
                ...unref(accordionProps),
                defaultValue: getAccordionDefaultValue(list)
              } : {}, {
                as: "ul",
                class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
              }), {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a4, _b3;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        class: ui.value.item({ class: [(_a4 = props.ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: [(_a4 = props.ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
              if (__props.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div class="${ssrRenderClass(ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push2, _parent2, _scopeId);
            if (__props.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a2 = props.ui) == null ? void 0 : _a2.viewportWrapper }))}"${_scopeId}>`);
              if (__props.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  class: ui.value.indicator({ class: (_b = props.ui) == null ? void 0 : _b.indicator })
                }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    var _a3, _b2;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                class: ui.value.viewport({ class: (_c = props.ui) == null ? void 0 : _c.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "list-leading"),
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                var _a3, _b2;
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionRoot) : unref(NavigationMenuList)), mergeProps({ ref_for: true }, __props.orientation === "vertical" && !__props.collapsed ? {
                    ...unref(accordionProps),
                    defaultValue: getAccordionDefaultValue(list)
                  } : {}, {
                    as: "ul",
                    class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
                  }), {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: [(_a4 = props.ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1040, ["class"])),
                  __props.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              renderSlot(_ctx.$slots, "list-trailing"),
              __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.viewportWrapper({ class: (_d = props.ui) == null ? void 0 : _d.viewportWrapper })
              }, [
                __props.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  class: ui.value.indicator({ class: (_e = props.ui) == null ? void 0 : _e.indicator })
                }, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("div", {
                        class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                      }, null, 2)
                    ];
                  }),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  class: ui.value.viewport({ class: (_f = props.ui) == null ? void 0 : _f.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const items = computed(() => [{
      label: "Main",
      to: "/dashboard",
      // icon: 'i-lucide-book-open',
      active: route.path.startsWith("/docs/getting-started")
    }, {
      label: "Body",
      to: "/dashboard/body",
      // icon: 'mdi-light:account',
      active: route.path.startsWith("/docs/components")
    }, {
      label: "Mind",
      // icon: 'i-simple-icons-figma',
      to: "/dashboard/mind"
    }, {
      label: "Spirit",
      // icon: 'i-lucide-rocket',
      to: "/dashboard/spirit"
    }, {
      label: "Profile",
      // icon: 'i-lucide-rocket',
      to: "/dashboard/profile"
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_2$1;
      const _component_UNavigationMenu = _sfc_main$9;
      _push(ssrRenderComponent(_component_UHeader, mergeProps({
        mode: "slideover",
        class: "border-none"
      }, _attrs), {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "flex items-center text-2xl font-extrabold h-[40px]"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-2xl font-bold"${_scopeId2}> ASC\u039END </span>`);
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    class: "h-[100px] w-[100px] opacity-60 left-[-58px] relative rounded-full object-cover scale-75 lg:hidden md:hidden",
                    alt: "White Raven Logo",
                    format: "webp",
                    width: "56px",
                    height: "100px",
                    src: "/images/logo_transparent_512x512.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "text-2xl font-bold" }, " ASC\u039END "),
                    createVNode(_component_NuxtImg, {
                      class: "h-[100px] w-[100px] opacity-60 left-[-58px] relative rounded-full object-cover scale-75 lg:hidden md:hidden",
                      alt: "White Raven Logo",
                      format: "webp",
                      width: "56px",
                      height: "100px",
                      src: "/images/logo_transparent_512x512.png"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "flex items-center text-2xl font-extrabold h-[40px]"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-2xl font-bold" }, " ASC\u039END "),
                  createVNode(_component_NuxtImg, {
                    class: "h-[100px] w-[100px] opacity-60 left-[-58px] relative rounded-full object-cover scale-75 lg:hidden md:hidden",
                    alt: "White Raven Logo",
                    format: "webp",
                    width: "56px",
                    height: "100px",
                    src: "/images/logo_transparent_512x512.png"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              items: unref(items),
              orientation: "vertical",
              class: "-mx-2.5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                items: unref(items),
                orientation: "vertical",
                class: "-mx-2.5"
              }, null, 8, ["items"])
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, { items: unref(items) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, { items: unref(items) }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/NavBar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$8, { __name: "AppNavBar" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-3xl font-bold my-8 flex justify-center" }, _attrs))}>${ssrInterpolate(props.title)}</h2>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$7, { __name: "BaseHeader" });
const theme = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$6 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.card) || {} })({
        variant: props.variant
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: (_e = props.ui) == null ? void 0 : _e.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    iconName: {
      type: String,
      default: "",
      required: false
    },
    styles: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_Icon, mergeProps({
        class: props.styles,
        name: props.iconName,
        size: "24"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Icon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "BaseIcon" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$6;
      const _component_baseIcon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-[300px] divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center"${_scopeId}>`);
            if (props.icon) {
              _push2(ssrRenderComponent(_component_baseIcon, {
                iconName: props.icon
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                props.icon ? (openBlock(), createBlock(_component_baseIcon, {
                  key: 0,
                  iconName: props.icon
                }, null, 8, ["iconName"])) : createCommentVNode("", true),
                createVNode("span", null, toDisplayString(props.title), 1)
              ])
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>FOOTER</span>`);
          } else {
            return [
              createVNode("span", null, "FOOTER")
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>BODY</span>`);
          } else {
            return [
              createVNode("span", null, "BODY")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "AppCard" });
function o$1(n) {
  if (n && Object.keys(n).length > 0) {
    const e = Object.keys(n)[0];
    return n[e];
  }
}
function p$1(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const y$1 = (n, e) => {
  const r = Object.keys(n[0]).filter(($) => $ !== e), t = Object.keys(n[0][r[0]]);
  return n.map(($) => ({
    month: $.month,
    ...r.flatMap(
      (c) => t.map((a) => ({
        [`${c}${p$1(a)}`]: $[c][a]
      }))
    ).reduce((c, a) => ({ ...c, ...a }), {})
  }));
};
const x = { style: { padding: "10px 15px" } }, _ = { style: {
  color: "var(--tooltip-value-color)",
  textTransform: "capitalize",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  marginBottom: "0.25rem",
  paddingBottom: "0.25rem"
} }, T = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  props: {
    data: {},
    categories: {},
    toolTipTitle: {},
    yFormatter: { type: Function }
  },
  setup(d2) {
    const a = d2, m2 = ["_index", "_stacked", "_ending"], g2 = computed(() => {
      var _a;
      return Object.entries((_a = a.data) != null ? _a : []).filter(
        ([t, u]) => !m2.includes(t) && Object.keys(a.categories).includes(t)
      );
    });
    return (t, u) => (openBlock(), createElementBlock("div", x, [
      createElementVNode("div", _, toDisplayString(t.toolTipTitle), 1),
      (openBlock(true), createElementBlock(Fragment, null, renderList(g2.value, ([o2, s], v) => {
        var p2, c;
        return openBlock(), createElementBlock("div", {
          key: o2,
          style: { display: "flex", "align-items": "center", "margin-bottom": "4px" }
        }, [
          createElementVNode("span", {
            style: normalizeStyle([{ width: "8px", height: "8px", "border-radius": "4px", "margin-right": "8px" }, {
              backgroundColor: typeof ((p2 = t.categories[o2]) == null ? void 0 : p2.color) == "string" && ((c = t.categories[o2]) != null && c.color) ? t.categories[o2].color : `var(--vis-color${v})`
            }])
          }, null, 4),
          createElementVNode("div", null, [
            createElementVNode("span", {
              style: normalizeStyle([{ "font-weight": "600", "margin-right": "8px" }, { color: "var(--tooltip-label-color)" }])
            }, toDisplayString(t.categories[o2].name) + ":", 1),
            createElementVNode("span", {
              style: normalizeStyle([{ "font-weight": "400" }, { color: "var(--tooltip-value-color)" }])
            }, toDisplayString(t.yFormatter ? t.yFormatter(s) : s), 1)
          ])
        ]);
      }), 128))
    ]));
  }
});
var l$1 = /* @__PURE__ */ ((a) => (a.Top = "top", a.Bottom = "bottom", a))(l$1 || {}), o = /* @__PURE__ */ ((a) => (a.Basis = "basis", a.BasisClosed = "basisClosed", a.BasisOpen = "basisOpen", a.Bundle = "bundle", a.Cardinal = "cardinal", a.CardinalClosed = "cardinalClosed", a.CardinalOpen = "cardinalOpen", a.CatmullRom = "catmullRom", a.CatmullRomClosed = "catmullRomClosed", a.CatmullRomOpen = "catmullRomOpen", a.Linear = "linear", a.LinearClosed = "linearClosed", a.MonotoneX = "monotoneX", a.MonotoneY = "monotoneY", a.Natural = "natural", a.Step = "step", a.StepAfter = "stepAfter", a.StepBefore = "stepBefore", a))(o || {});
function g(t) {
  return computed(() => {
    const r = f(t.categories), e = p(t.categories, r), o2 = l(e, t.categories), c = d(e), n = m(o2), s = y(r, t.spacing), a = t.stackAndGrouped ? y$1(t.data, t.xAxis) : t.data;
    return {
      states: r,
      groupedByState: e,
      colors: o2,
      bars: c,
      colorFunctions: n,
      positions: s,
      chartData: a
    };
  });
}
function f(t) {
  const r = /* @__PURE__ */ new Set();
  return Object.keys(t).forEach((o2) => {
    const c = o2.match(/([A-Z][a-z]+)$/);
    c && r.add(c[1]);
  }), Array.from(r);
}
function p(t, r) {
  const e = {};
  return r.forEach((o2) => {
    e[o2] = Object.keys(t).filter(
      (c) => c.endsWith(o2)
    );
  }), e;
}
function l(t, r) {
  const e = {};
  return Object.entries(t).forEach(([o2, c]) => {
    e[o2] = c.map((n) => {
      var _a;
      var a;
      const s = (a = r[n]) == null ? void 0 : a.color;
      return Array.isArray(s) ? (_a = s[0]) != null ? _a : "#ccc" : s != null ? s : "#ccc";
    });
  }), e;
}
function d(t) {
  const r = {};
  return Object.entries(t).forEach(([e, o2]) => {
    r[e] = o2.map((c) => {
      const n = c.replace(e, "").toLowerCase();
      return (s) => s[n + e];
    });
  }), r;
}
function m(t) {
  const r = {};
  return Object.entries(t).forEach(([e, o2]) => {
    r[e] = (c, n) => {
      var _a;
      return (_a = o2[n]) != null ? _a : "#ccc";
    };
  }), r;
}
function y(t, r = 0.4) {
  const e = t.length, o2 = {};
  return t.forEach((c, n) => {
    const s = (n - (e - 1) / 2) * r;
    o2[c] = s;
  }), o2;
}
const U = {
  ref: "slotWrapper",
  style: { display: "none" }
};
/* @__PURE__ */ defineComponent({
  __name: "BarChart",
  props: {
    data: {},
    stacked: { type: Boolean },
    height: {},
    xLabel: {},
    yLabel: {},
    padding: { default: () => ({
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    }) },
    categories: {},
    xFormatter: {},
    yFormatter: {},
    yNumTicks: { default: (t) => t.data.length > 24 ? 24 / 4 : t.data.length - 1 },
    minMaxTicksOnly: { type: Boolean },
    xNumTicks: { default: (t) => t.data.length > 24 ? 24 / 4 : t.data.length - 1 },
    xExplicitTicks: {},
    yAxis: {},
    groupPadding: {},
    barPadding: {},
    radius: {},
    hideLegend: { type: Boolean },
    hideTooltip: { type: Boolean, default: false },
    orientation: { default: Orientation.Vertical },
    legendPosition: {},
    xDomainLine: { type: Boolean },
    yDomainLine: { type: Boolean },
    xTickLine: { type: Boolean },
    yTickLine: { type: Boolean },
    xGridLine: { type: Boolean },
    yGridLine: { type: Boolean, default: true },
    hideXAxis: { type: Boolean },
    hideYAxis: { type: Boolean },
    stackedGroupedSpacing: { default: 0.1 },
    stackAndGrouped: { type: Boolean },
    xAxis: {}
  },
  emits: ["click"],
  setup(t, { emit: V }) {
    const x2 = V, a = t, G = useSlots();
    useTemplateRef("slotWrapper");
    const r = ref();
    if (!a.yAxis || a.yAxis.length === 0)
      throw new Error("yAxis is required");
    const f2 = computed(() => a.yAxis.map((e) => (d2) => d2[e])), v = (e, d2) => {
      var o2;
      return (o2 = Object.values(a.categories)[d2]) == null ? void 0 : o2.color;
    }, s = computed(
      () => g({
        data: a.data,
        categories: a.categories,
        stackAndGrouped: a.stackAndGrouped,
        xAxis: a.xAxis,
        spacing: a.stackedGroupedSpacing
      }).value
    ), h = computed(
      () => a.legendPosition === l$1.Top
    );
    function b(e) {
      return r.value = e, P();
    }
    function P(e) {
      return "";
    }
    return (e, d2) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle({
        display: "flex",
        flexDirection: h.value ? "column-reverse" : "column",
        gap: "1rem"
      }),
      onClick: d2[0] || (d2[0] = (o2) => x2("click", o2, r.value))
    }, [
      createVNode(unref(VisXYContainer), {
        padding: e.padding,
        height: e.height
      }, {
        default: withCtx(() => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          return [
            createVNode(unref(VisTooltip), {
              triggers: {
                [unref(GroupedBar).selectors.bar]: b,
                [unref(StackedBar).selectors.bar]: b
              }
            }, null, 8, ["triggers"]),
            e.stackAndGrouped ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(s.value.states, (o2) => {
              var _a2, _b2, _c2;
              return openBlock(), createBlock(unref(VisStackedBar), {
                key: o2,
                data: s.value.chartData,
                x: (p2, F) => F + s.value.positions[o2],
                y: s.value.bars[o2],
                color: s.value.colorFunctions[o2],
                "rounded-corners": (_a2 = e.radius) != null ? _a2 : 0,
                "group-padding": (_b2 = e.groupPadding) != null ? _b2 : 0,
                "bar-padding": e.barPadding,
                orientation: (_c2 = e.orientation) != null ? _c2 : unref(Orientation).Vertical
              }, null, 8, ["data", "x", "y", "color", "rounded-corners", "group-padding", "bar-padding", "orientation"]);
            }), 128)) : e.stacked ? (openBlock(), createBlock(unref(VisStackedBar), {
              key: 2,
              data: e.data,
              x: (o2, p2) => p2,
              y: f2.value,
              color: v,
              "rounded-corners": (_a = e.radius) != null ? _a : 0,
              "group-padding": (_b = e.groupPadding) != null ? _b : 0,
              "bar-padding": (_c = e.barPadding) != null ? _c : 0.2,
              orientation: (_d = e.orientation) != null ? _d : unref(Orientation).Vertical
            }, null, 8, ["data", "x", "y", "rounded-corners", "group-padding", "bar-padding", "orientation"])) : (openBlock(), createBlock(unref(VisGroupedBar), {
              key: 1,
              data: e.data,
              x: (o2, p2) => p2,
              y: f2.value,
              color: v,
              "rounded-corners": (_e = e.radius) != null ? _e : 0,
              "group-padding": (_f = e.groupPadding) != null ? _f : 0,
              "bar-padding": (_g = e.barPadding) != null ? _g : 0.2,
              orientation: (_h = e.orientation) != null ? _h : unref(Orientation).Vertical
            }, null, 8, ["data", "x", "y", "rounded-corners", "group-padding", "bar-padding", "orientation"])),
            e.hideXAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
              key: 3,
              type: "x",
              "tick-format": e.xFormatter,
              label: e.xLabel,
              "grid-line": e.xGridLine,
              "domain-line": !!e.xDomainLine,
              "tick-line": e.xTickLine,
              "num-ticks": e.xNumTicks,
              "tick-values": e.xExplicitTicks,
              minMaxTicksOnly: e.minMaxTicksOnly
            }, null, 8, ["tick-format", "label", "grid-line", "domain-line", "tick-line", "num-ticks", "tick-values", "minMaxTicksOnly"])),
            e.hideYAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
              key: 4,
              type: "y",
              label: e.yLabel,
              "grid-line": e.orientation !== unref(Orientation).Horizontal && e.yGridLine,
              "domain-line": !!e.yDomainLine,
              "tick-format": e.yFormatter,
              "num-ticks": e.yNumTicks,
              "tick-line": e.yTickLine
            }, null, 8, ["label", "grid-line", "domain-line", "tick-format", "num-ticks", "tick-line"]))
          ];
        }),
        _: 1
      }, 8, ["padding", "height"]),
      e.hideLegend ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: h.value ? "1rem" : void 0
        })
      }, [
        createVNode(unref(VisBulletLegend), {
          items: Object.values(a.categories)
        }, null, 8, ["items"])
      ], 4)),
      createElementVNode("div", U, [
        unref(G).tooltip ? renderSlot(e.$slots, "tooltip", {
          key: 0,
          values: r.value
        }) : r.value ? renderSlot(e.$slots, "fallback", { key: 1 }, () => {
          var _a;
          return [
            createVNode(T, {
              data: r.value,
              categories: a.categories,
              toolTipTitle: (_a = unref(o$1)(r.value)) != null ? _a : "",
              yFormatter: a.orientation === unref(Orientation).Horizontal ? a.xFormatter : a.yFormatter
            }, null, 8, ["data", "categories", "toolTipTitle", "yFormatter"])
          ];
        }) : createCommentVNode("", true)
      ], 512)
    ], 4));
  }
});
const X = {
  key: 0,
  class: "flex items-center justify-end pb-4"
}, Y = {
  key: 1,
  class: "flex items-center justify-end pt-4"
}, q = {
  ref: "slotWrapper",
  class: "hidden"
};
/* @__PURE__ */ defineComponent({
  __name: "BubbleChart",
  props: {
    xAccessor: {},
    yAccessor: {},
    sizeAccessor: {},
    labelPosition: {},
    sizeRange: {},
    opacity: {},
    xExplicitTicks: { default: void 0 },
    minMaxTicksOnly: { type: Boolean, default: false },
    data: {},
    hideLegend: { type: Boolean, default: false },
    height: {},
    xLabel: { default: "" },
    yLabel: { default: "" },
    padding: { default: () => ({ top: 5, right: 5, bottom: 5, left: 5 }) },
    categories: {},
    categoryKey: {},
    xFormatter: {},
    yFormatter: {},
    legendPosition: { default: l$1.Bottom },
    sizeOptions: {},
    xDomainLine: { type: Boolean, default: true },
    yDomainLine: { type: Boolean, default: true },
    xTickLine: { type: Boolean, default: true },
    yTickLine: { type: Boolean, default: true },
    xGridLine: { type: Boolean, default: false },
    yGridLine: { type: Boolean, default: true },
    hideXAxis: { type: Boolean, default: false },
    hideYAxis: { type: Boolean, default: false },
    xNumTicks: { default: void 0 },
    yNumTicks: { default: void 0 },
    hideTooltip: { type: Boolean, default: false },
    crosshairConfig: { default: () => ({
      color: "#666"
    }) }
  },
  emits: ["click"],
  setup(L, { emit: h }) {
    const e = L, T$1 = useSlots();
    useTemplateRef("slotWrapper");
    const o2 = ref(), y2 = computed(() => e.categories && typeof e.categories == "object" && !Array.isArray(e.categories) ? Object.values(e.categories) : Array.isArray(e.categories) ? e.categories : []), b = e.xAccessor, B = e.yAccessor, v = e.sizeAccessor || ((i) => typeof i.comments == "number" ? i.comments : 1), A = (i) => {
      var p2, f2;
      if (!e.categories || !e.categoryKey)
        return console.warn("BubbleChart: categories and categoryKey are required for color mapping"), "#cccccc";
      const n = String(i[e.categoryKey]);
      let l2 = (p2 = e.categories[n]) == null ? void 0 : p2.color;
      return Object.keys(e.categories).length === 1 && (l2 = (f2 = e.categories[e.categoryKey]) == null ? void 0 : f2.color), l2 || (console.warn(`BubbleChart: No color defined for category "${n}"`), "#cccccc");
    }, F = h;
    function V(i) {
      return o2.value = i, C();
    }
    function C(i) {
      return "";
    }
    const _2 = {
      [Scatter.selectors.point]: V
    };
    return (i, n) => (openBlock(), createElementBlock(Fragment, null, [
      !e.hideLegend && e.legendPosition === unref(l$1).Top ? (openBlock(), createElementBlock("div", X, [
        createVNode(unref(VisBulletLegend), { items: y2.value }, null, 8, ["items"])
      ])) : createCommentVNode("", true),
      createVNode(unref(VisXYContainer), {
        data: e.data,
        height: e.height || 600,
        padding: e.padding,
        scaleByDomain: true,
        onClick: n[0] || (n[0] = (l2) => F("click", l2, o2.value))
      }, {
        default: withCtx(() => [
          e.hideTooltip ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisTooltip), {
            key: 0,
            triggers: _2
          })),
          createVNode(unref(VisScatter), {
            x: unref(b),
            y: unref(B),
            color: A,
            size: unref(v),
            labelPosition: e.labelPosition || unref(Position).Bottom,
            sizeRange: e.sizeRange || [1, 20],
            opacity: e.opacity,
            cursor: "pointer"
          }, null, 8, ["x", "y", "size", "labelPosition", "sizeRange", "opacity"]),
          e.hideXAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
            key: 1,
            type: "x",
            label: e.xLabel,
            tickFormat: e.xFormatter,
            gridLine: e.xGridLine,
            domainLine: !!e.xDomainLine,
            tickLine: e.xTickLine,
            numTicks: e.xNumTicks,
            tickValues: e.xExplicitTicks,
            minMaxTicksOnly: e.minMaxTicksOnly
          }, null, 8, ["label", "tickFormat", "gridLine", "domainLine", "tickLine", "numTicks", "tickValues", "minMaxTicksOnly"])),
          e.hideYAxis ? createCommentVNode("", true) : (openBlock(), createBlock(unref(VisAxis), {
            key: 2,
            type: "y",
            label: e.yLabel,
            tickFormat: e.yFormatter,
            gridLine: e.yGridLine,
            domainLine: !!e.yDomainLine,
            tickLine: e.yTickLine,
            numTicks: e.yNumTicks
          }, null, 8, ["label", "tickFormat", "gridLine", "domainLine", "tickLine", "numTicks"]))
        ]),
        _: 1
      }, 8, ["data", "height", "padding"]),
      !e.hideLegend && e.legendPosition === unref(l$1).Bottom ? (openBlock(), createElementBlock("div", Y, [
        createVNode(unref(VisBulletLegend), { items: y2.value }, null, 8, ["items"])
      ])) : createCommentVNode("", true),
      createElementVNode("div", q, [
        unref(T$1).tooltip ? renderSlot(i.$slots, "tooltip", {
          key: 0,
          values: o2.value
        }) : o2.value ? renderSlot(i.$slots, "fallback", { key: 1 }, () => {
          var _a;
          return [
            createVNode(T, {
              data: o2.value,
              categories: e.categories || {},
              toolTipTitle: (_a = unref(o$1)(o2.value)) != null ? _a : "",
              yFormatter: e.yFormatter
            }, null, 8, ["data", "categories", "toolTipTitle", "yFormatter"])
          ];
        }) : createCommentVNode("", true)
      ], 512)
    ], 64));
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartBarGroup",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    barOneName: {
      type: String,
      required: true
    },
    barTwoName: {
      type: String,
      required: true
    },
    barOneLabel: {
      type: String,
      required: true
    },
    barTwoLabel: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const useData = props.data;
    const categories = {
      [props.barOneName]: { name: props.barOneLabel, color: "#60a5fa" },
      [props.barTwoName]: { name: props.barTwoLabel, color: "#0070fa" }
    };
    const xFormatter = (i) => {
      var _a;
      return `${(_a = useData[i]) == null ? void 0 : _a.month}`;
    };
    const yFormatter = (tick) => tick.toString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BarChart = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_BarChart, mergeProps({
        data: unref(useData),
        height: 300,
        categories,
        "y-axis": [props.barOneName, props.barTwoName],
        "group-padding": 0,
        "bar-padding": 0.2,
        "x-num-ticks": 6,
        radius: 4,
        "x-formatter": xFormatter,
        "y-formatter": yFormatter,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(l$1)).Top,
        "hide-legend": false,
        "y-grid-line": true
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/ChartBarGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "AppChartBarGroup" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChartBar",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    barName: {
      type: String,
      required: true
    },
    barLabel: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const useData = props.data;
    const categories = computed(() => ({
      [props.barName]: {
        name: `${props.barLabel}`,
        color: "#60a5fa"
      }
    }));
    const xFormatter = (i) => {
      var _a;
      return `${(_a = useData[i]) == null ? void 0 : _a.month}`;
    };
    const yFormatter = (tick) => tick.toString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BarChart = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_BarChart, mergeProps({
        data: unref(useData),
        height: 300,
        categories: unref(categories),
        "y-axis": [props.barName],
        "x-num-ticks": 6,
        radius: 4,
        "y-grid-line": true,
        "x-formatter": xFormatter,
        "y-formatter": yFormatter,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(l$1)).Top,
        "hide-legend": false
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/ChartBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "AppChartBar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChartLine",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    lineName: {
      type: String,
      required: true
    },
    lineLabel: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const useData = props.data;
    const categories = {
      [props.lineName]: { name: `${props.lineLabel}`, color: "#60a5fa" }
    };
    const xFormatter = (tick, _i, _ticks) => {
      var _a, _b;
      return (_b = (_a = useData[tick]) == null ? void 0 : _a.date) != null ? _b : "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LineChart = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_LineChart, mergeProps({
        data: unref(useData),
        height: 300,
        "x-label": "Date",
        "y-label": `${props.lineLabel}`,
        categories,
        "y-num-ticks": 4,
        "x-num-ticks": 7,
        "x-formatter": xFormatter,
        "curve-type": ("CurveType" in _ctx ? _ctx.CurveType : unref(o)).Basis,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(l$1)).Top,
        "hide-legend": false,
        "y-grid-line": true
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/ChartLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "AppChartLine" });
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: books, pending: pending_books } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/books", { lazy: true }, "$LfO9GtariX")), __temp = await __temp, __restore(), __temp);
    const { data: cold_soaks, pending: pending_cold_soaks } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/coldsoaks", { lazy: true }, "$KMKYIrndvK")), __temp = await __temp, __restore(), __temp);
    const { data: water_intake, pending: pending_water } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/water", { lazy: true }, "$SDIVj1M84F")), __temp = await __temp, __restore(), __temp);
    const { data: weight, pending: pending_weight } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/weight", { lazy: true }, "$qASg8yHiFN")), __temp = await __temp, __restore(), __temp);
    const { data: workouts, pending: pending_workouts } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/charts/workouts", { lazy: true }, "$WP_QjALZe2")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appNavBar = __nuxt_component_0;
      const _component_baseHeader = __nuxt_component_1$1;
      const _component_appCard = __nuxt_component_2;
      const _component_UContainer = _sfc_main$i;
      const _component_appChartBarGroup = __nuxt_component_4;
      const _component_appChartBar = __nuxt_component_5;
      const _component_appChartLine = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_appNavBar, null, null, _parent));
      _push(`<section>`);
      _push(ssrRenderComponent(_component_baseHeader, { title: "Your Overview" }, null, _parent));
      _push(`<div class="container-cards">`);
      _push(ssrRenderComponent(_component_appCard, {
        title: "Books",
        color: "bg-gradient-to-br from-green-600 to-green-700",
        icon: "material-symbols:book-ribbon-outline-rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        title: "Cold Soak",
        color: "bg-gradient-to-br from-blue-300 to-blue-500",
        icon: "material-symbols:snowing-heavy"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        title: "Fasting",
        color: "bg-gradient-to-br from-yellow-600 to-yellow-700",
        icon: "material-symbols:nest-clock-farsight-analog-outline-rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        title: "Daily Water",
        color: "bg-gradient-to-br from-blue-600 to-blue-700",
        icon: "material-symbols:water-medium-outline-rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_appCard, {
        title: "Weight",
        color: "bg-gradient-to-br from-purple-600 to-purple-700",
        icon: "material-symbols:monitor-weight-outline"
      }, null, _parent));
      _push(`</div></section><section class="sections">`);
      _push(ssrRenderComponent(_component_baseHeader, { title: "Your Progress Charts" }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(pending_books)) {
              _push2(ssrRenderComponent(_component_appChartBarGroup, {
                data: unref(books),
                barOneName: "start_date",
                barTwoName: "end_date",
                barOneLabel: "Start Date",
                barTwoLabel: "End Date"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(pending_books) ? (openBlock(), createBlock(_component_appChartBarGroup, {
                key: 0,
                data: unref(books),
                barOneName: "start_date",
                barTwoName: "end_date",
                barOneLabel: "Start Date",
                barTwoLabel: "End Date"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(pending_cold_soaks)) {
              _push2(ssrRenderComponent(_component_appChartBar, {
                data: unref(cold_soaks),
                barName: "date",
                barLabel: "Total"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(pending_cold_soaks) ? (openBlock(), createBlock(_component_appChartBar, {
                key: 0,
                data: unref(cold_soaks),
                barName: "date",
                barLabel: "Total"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(pending_water)) {
              _push2(ssrRenderComponent(_component_appChartLine, {
                data: unref(water_intake),
                lineName: "water_intake",
                lineLabel: "Water total"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(pending_water) ? (openBlock(), createBlock(_component_appChartLine, {
                key: 0,
                data: unref(water_intake),
                lineName: "water_intake",
                lineLabel: "Water total"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(pending_weight)) {
              _push2(ssrRenderComponent(_component_appChartLine, {
                data: unref(weight),
                lineName: "weight",
                lineLabel: "Weight"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(pending_weight) ? (openBlock(), createBlock(_component_appChartLine, {
                key: 0,
                data: unref(weight),
                lineName: "weight",
                lineLabel: "Weight"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(pending_workouts)) {
              _push2(ssrRenderComponent(_component_appChartBar, {
                data: unref(workouts),
                barName: "date",
                barLabel: "Total"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(pending_workouts) ? (openBlock(), createBlock(_component_appChartBar, {
                key: 0,
                data: unref(workouts),
                barName: "date",
                barLabel: "Total"
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-rcowERQR.mjs.map
