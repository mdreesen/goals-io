import { a as useNuxtData, b as __nuxt_component_0, u as useUserSession, d as _sfc_main$9, c as __nuxt_component_1$1$1, r as refreshNuxtData, e as useLocale, f as useAppConfig, g as reactivePick, t as tv, h as __nuxt_component_2$1$1 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './SectionHeader-FY2Kj4sD.mjs';
import { defineComponent, mergeProps, unref, ref, reactive, watch, resolveDirective, withCtx, createVNode, isRef, withModifiers, withDirectives, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, computed, createCommentVNode, renderSlot, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive } from 'reka-ui';
import { _ as _sfc_main$1$1, a as __nuxt_component_2$3 } from './Icon-8aWUErQK.mjs';
import { _ as _sfc_main$6 } from './Drawer-DPU8VbYy.mjs';
import { i as inputVarient, _ as __nuxt_component_0$2 } from './Label-CdSFOlb_.mjs';
import { _ as _sfc_main$7 } from './InputDate-BuQ5VgN7.mjs';
import { _ as __nuxt_component_2$2 } from './ButtonSubmit-Cnujo8hl.mjs';
import { s as selection_book_kinds, a as selection_save } from './selections-q8B9mgh4.mjs';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';
import { u as useFormatDate, f as formatDate } from './date-wF3mUuv1.mjs';
import { u as useToast } from './useToast-DbWOdwrP.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1$2 } from './Card-zJxjjdwR.mjs';
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
import 'vaul-vue';
import 'reka-ui/namespaced';
import './index-DiemhQAF.mjs';
import 'date-fns';

const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$5 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = computed(() => {
      if (typeof props.autoplay === "boolean") {
        return true;
      }
      return props.autoplay.stopOnInteraction ?? true;
    });
    const stopAutoScrollOnInteraction = computed(() => {
      if (typeof props.autoScroll === "boolean") {
        return true;
      }
      return props.autoScroll.stopOnInteraction ?? true;
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], async () => {
      await loadPlugins();
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      if (stopAutoplayOnInteraction.value) {
        emblaApi.value?.plugins().autoplay?.stop();
      }
      if (stopAutoScrollOnInteraction.value) {
        emblaApi.value?.plugins().autoScroll?.stop();
      }
    }
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": __props.orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: props.ui?.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: props.ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$9, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: props.ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$9, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: props.ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: props.ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
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
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: props.ui?.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: props.ui?.arrows })
                }, [
                  createVNode(_sfc_main$9, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: props.ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$9, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: props.ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: props.ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardBook",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    kind: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    },
    date: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1$1;
      const _component_NuxtImg = __nuxt_component_2$1$1;
      const _component_baseIcon = __nuxt_component_2$3;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-full h-68 max-w-lg divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex min-h-0 h-24 flex-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "relative z-10 h-full w-full object-contain drop-shadow-md",
              src: props.image
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex min-h-0 h-24 flex-auto" }, [
                createVNode(_component_NuxtImg, {
                  class: "relative z-10 h-full w-full object-contain drop-shadow-md",
                  src: props.image
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center font-extrabold gap-2"${_scopeId}><div class="overflow-hidden text-ellipsis items-center content-center flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseIcon, {
              iconName: props.icon,
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-1 overflow-hidden text-ellipsis text-sm capitalize"${_scopeId}>${ssrInterpolate(props.kind)}</span></div><div${_scopeId}><span class="text-sm font-bold text-ellipsis leading-tight line-clamp-2"${_scopeId}>${ssrInterpolate(props.title)}</span><span class="m-0 text-xs leading-tight line-clamp-1"${_scopeId}>${ssrInterpolate(props.author)}</span></div><div${_scopeId}>`);
            if (props.date.date) {
              _push2(`<span class="m-0 text-xs leading-tight text-ellipsis line-clamp-1"${_scopeId}>Started ${ssrInterpolate(props.date.date)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.date.date_two) {
              _push2(`<div class="m-0 text-xs leading-tight text-ellipsis line-clamp-1"${_scopeId}><span class="pr-2"${_scopeId}>Ended</span> ${ssrInterpolate(props.date.date_two)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-extrabold gap-2" }, [
                  createVNode("div", { class: "overflow-hidden text-ellipsis items-center content-center flex" }, [
                    createVNode(_component_baseIcon, {
                      iconName: props.icon,
                      size: "14"
                    }, null, 8, ["iconName"]),
                    createVNode("span", { class: "ml-1 overflow-hidden text-ellipsis text-sm capitalize" }, toDisplayString(props.kind), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-sm font-bold text-ellipsis leading-tight line-clamp-2" }, toDisplayString(props.title), 1),
                    createVNode("span", { class: "m-0 text-xs leading-tight line-clamp-1" }, toDisplayString(props.author), 1)
                  ]),
                  createVNode("div", null, [
                    props.date.date ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "m-0 text-xs leading-tight text-ellipsis line-clamp-1"
                    }, "Started " + toDisplayString(props.date.date), 1)) : createCommentVNode("", true),
                    props.date.date_two ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "m-0 text-xs leading-tight text-ellipsis line-clamp-1"
                    }, [
                      createVNode("span", { class: "pr-2" }, "Ended"),
                      createTextVNode(" " + toDisplayString(props.date.date_two), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/CardBook.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2$1 = Object.assign(_sfc_main$4, { __name: "BaseCardBook" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    function icons(str) {
      switch (true) {
        case str === "Audiobook":
          return "material-symbols:headphones-rounded";
        case str === "Printed":
          return "material-symbols:book-5-rounded";
        case str === "Ebook":
          return "material-symbols:fullscreen-portrait-outline";
        default:
          return "material-symbols:book-5-rounded";
      }
    }
    const useArrows = computed(() => props.data.length >= 3 ? true : false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_1$1$1;
      const _component_baseCardBook = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UCarousel, mergeProps({
        loop: "",
        arrows: unref(useArrows),
        autoplay: { delay: 5e3 },
        "wheel-gestures": "",
        prev: { variant: "solid" },
        next: { variant: "solid" },
        items: props.data,
        ui: {
          item: "basis-1/2 ps-0 flex p-2 justify-center h-full lg:basis-1/4 md:basis-1/4 sm:basis-1/3",
          prev: "sm:start-8",
          next: "sm:end-8",
          container: `ms-0 items-center ${props.data.length === 1 ? "justify-center" : ""}`
        }
      }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full w-full flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/dashboard/mind/${[item?._id]}/books`,
              class: "flex items-center w-full h-full text-2xl font-extrabold -x-2"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_baseCardBook, {
                    kind: item?.kind_of_book,
                    title: item?.book_title,
                    author: item?.book_author,
                    image: item?.book_image,
                    date: { date: item?.book_start_date, date_two: item?.book_end_date },
                    icon: icons(item?.kind_of_book)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_baseCardBook, {
                      kind: item?.kind_of_book,
                      title: item?.book_title,
                      author: item?.book_author,
                      image: item?.book_image,
                      date: { date: item?.book_start_date, date_two: item?.book_end_date },
                      icon: icons(item?.kind_of_book)
                    }, null, 8, ["kind", "title", "author", "image", "date", "icon"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-full w-full flex gap-4" }, [
                createVNode(_component_NuxtLink, {
                  to: `/dashboard/mind/${[item?._id]}/books`,
                  class: "flex items-center w-full h-full text-2xl font-extrabold -x-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_baseCardBook, {
                      kind: item?.kind_of_book,
                      title: item?.book_title,
                      author: item?.book_author,
                      image: item?.book_image,
                      date: { date: item?.book_start_date, date_two: item?.book_end_date },
                      icon: icons(item?.kind_of_book)
                    }, null, 8, ["kind", "title", "author", "image", "date", "icon"])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$3, { __name: "BaseCarousel" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TrackerBook",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("books");
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const formattedDate = ref();
    const open = ref(false);
    let date = ref(new CalendarDate(today(getLocalTimeZone()).year, today(getLocalTimeZone()).month, today(getLocalTimeZone()).day));
    const { fetch: refreshSession } = useUserSession();
    const input = reactive({
      book_title: "",
      kind_of_book: "",
      book_author: "",
      book_start_date: formattedDate.value,
      notes: "",
      booklist: ""
    });
    watch(date, () => {
      formattedDate.value = useFormatDate(date.value.toDate(getLocalTimeZone()));
      input.book_start_date = formattedDate.value;
    }, { immediate: true });
    async function log() {
      isLoading.value = true;
      $fetch("/api/user/books/books", {
        method: "POST",
        body: input
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
      const _component_baseSectionHeader = __nuxt_component_0$1;
      const _component_baseCarousel = __nuxt_component_1$1;
      const _component_UDrawer = _sfc_main$6;
      const _component_UButton = _sfc_main$9;
      const _component_baseLabel = __nuxt_component_0$2;
      const _component_UInputDate = _sfc_main$7;
      const _component_baseButtonSubmit = __nuxt_component_2$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col w-full max-w-3xl mx-auto overflow-hidden" }, _attrs))} data-v-468bb075>`);
      if (unref(data)?.current.length >= 1) {
        _push(`<section data-v-468bb075>`);
        _push(ssrRenderComponent(_component_baseSectionHeader, { text: "Currently Reading" }, null, _parent));
        _push(ssrRenderComponent(_component_baseCarousel, {
          data: unref(data)?.current
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)?.latestData.length >= 1) {
        _push(`<section data-v-468bb075>`);
        _push(ssrRenderComponent(_component_baseSectionHeader, { text: "Latest Reads" }, null, _parent));
        _push(ssrRenderComponent(_component_baseCarousel, {
          data: unref(data)?.latestData.reverse()
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans" data-v-468bb075><div class="w-full relative mb-4 flex justify-center" data-v-468bb075>`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Log a new book",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6" data-v-468bb075${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-468bb075${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Kind of book" }, null, _parent2, _scopeId));
            _push2(`<select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-468bb075${_scopeId}><option value="" disabled selected hidden data-v-468bb075${_scopeId}>Kind of book</option><!--[-->`);
            ssrRenderList(unref(selection_book_kinds), (kind) => {
              _push2(`<option${ssrRenderAttr("value", kind.value)} data-v-468bb075${ssrIncludeBooleanAttr(Array.isArray(unref(input).kind_of_book) ? ssrLooseContain(unref(input).kind_of_book, kind.value) : ssrLooseEqual(unref(input).kind_of_book, kind.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(kind.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-468bb075${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Save for future reads" }, null, _parent2, _scopeId));
            _push2(`<select id="status-select" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-468bb075${_scopeId}><option value="" disabled selected hidden data-v-468bb075${_scopeId}>Select</option><!--[-->`);
            ssrRenderList(unref(selection_save), (status) => {
              _push2(`<option${ssrRenderAttr("value", status.value)} data-v-468bb075${ssrIncludeBooleanAttr(Array.isArray(unref(input).booklist) ? ssrLooseContain(unref(input).booklist, status.value) : ssrLooseEqual(unref(input).booklist, status.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(status.label)}</option>`);
            });
            _push2(`<!--]--></select></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-468bb075${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Title" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).book_title)} placeholder="Title" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-468bb075${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-468bb075${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Author" }, null, _parent2, _scopeId));
            _push2(`<input id="text" type="text"${ssrRenderAttr("value", unref(input).book_author)} placeholder="Author" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-468bb075${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-468bb075${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Notes" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Book notes" class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-468bb075${_scopeId}>${ssrInterpolate(unref(input).notes)}</textarea></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-468bb075${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Start" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UInputDate, {
              modelValue: unref(date),
              "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : date = $event,
              icon: "i-lucide-calendar"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_baseButtonSubmit, {
              text: "Save",
              isLoading: isLoading.value
            }, null, _parent2, _scopeId));
            _push2(`</form>`);
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
                  createVNode(_component_baseLabel, { text: "Save for future reads" }),
                  withDirectives(createVNode("select", {
                    id: "status-select",
                    "onUpdate:modelValue": ($event) => unref(input).booklist = $event,
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: "",
                      hidden: ""
                    }, "Select"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selection_save), (status) => {
                      return openBlock(), createBlock("option", {
                        value: status.value,
                        key: status.label
                      }, toDisplayString(status.label), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(input).booklist]
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
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Start" }),
                  createVNode(_component_UInputDate, {
                    modelValue: unref(date),
                    "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : date = $event,
                    icon: "i-lucide-calendar"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])), [
                  [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
                ]),
                createVNode(_component_baseButtonSubmit, {
                  text: "Save",
                  isLoading: isLoading.value
                }, null, 8, ["isLoading"])
              ], 32)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Add Book",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:book-4-spark-rounded"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Add Book",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:book-4-spark-rounded"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerBook.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-468bb075"]]), { __name: "AppTrackerBook" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TrackerGratitude",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useNuxtData("gratitudes");
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const open = ref(false);
    const input = reactive({
      gratitude: ""
    });
    async function log() {
      isLoading.value = true;
      $fetch(`/api/user/gratitudes/gratitudes`, {
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
      const _component_nuxt_link = __nuxt_component_1$1$1;
      const _component_baseCard = __nuxt_component_1$2;
      const _component_UDrawer = _sfc_main$6;
      const _component_UButton = _sfc_main$9;
      const _component_baseLabel = __nuxt_component_0$2;
      const _component_baseButtonSubmit = __nuxt_component_2$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-cards"><!--[-->`);
      ssrRenderList(unref(data).reverse(), (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-col justify-center w-full items-center",
          to: `/dashboard/mind/${[item._id]}/gratitudes`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCard, {
                text: item.description,
                icon: "material-symbols:bolt-outline-rounded",
                iconNav: "material-symbols:arrow-forward-ios-rounded"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCard, {
                  text: item.description,
                  icon: "material-symbols:bolt-outline-rounded",
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
        title: "Log a new gratitude",
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Description" }, null, _parent2, _scopeId));
            _push2(`<textarea id="text" type="text" placeholder="Gratitude" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(unref(input).gratitude)}</textarea></div><div class="flex flex-col gap-8 pb-4"${_scopeId}>`);
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
                  createVNode(_component_baseLabel, { text: "Description" }),
                  withDirectives(createVNode("textarea", {
                    id: "text",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(input).gratitude = $event,
                    placeholder: "Gratitude",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(input).gratitude]
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
              label: "Add Gratitude",
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "material-symbols:bolt-rounded"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Add Gratitude",
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "material-symbols:bolt-rounded"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/TrackerGratitude.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AppTrackerGratitude" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: data_setting } = useNuxtData("setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appTrackerBook = __nuxt_component_1;
      const _component_appTrackerGratitude = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-categories" }, _attrs))}>`);
      if (unref(data_setting).bookSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Books" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerBook, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data_setting).gratitudeSetting.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_baseHeader, { text: "Gratitudes" }, null, _parent));
        _push(ssrRenderComponent(_component_appTrackerGratitude, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/mind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CHefbCEd.mjs.map
