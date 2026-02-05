import { a as useNuxtData, e as __nuxt_component_0$4, k as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1$1, a as __nuxt_component_2 } from './Icon-BdU6WHaT.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-BNW_bqSB.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_baseIcon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-full h-68 max-w-lg divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex min-h-0 h-24 flex-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "relative z-10 h-full w-full object-contain drop-shadow-md",
              src: props.image,
              format: "webp",
              preload: "",
              loading: "eager",
              "fetch-priority": "high"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex min-h-0 h-24 flex-auto" }, [
                createVNode(_component_NuxtImg, {
                  class: "relative z-10 h-full w-full object-contain drop-shadow-md",
                  src: props.image,
                  format: "webp",
                  preload: "",
                  loading: "eager",
                  "fetch-priority": "high"
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/CardBook.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BaseCardBook" });
function iconsBook(str) {
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "books",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/user/books/all", { key: "all_books" }, "$sEF91dpb2R")), await __temp, __restore();
    const { data } = useNuxtData("all_books");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_baseCardBook = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-cards" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/dashboard/mind/${[item?._id]}/books`,
          class: "flex items-center justify-center w-full h-full text-2xl font-extrabold -x-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_baseCardBook, {
                kind: item?.kind_of_book,
                title: item?.book_title,
                author: item?.book_author,
                image: item?.book_image,
                date: { date: item?.book_start_date, date_two: item?.book_end_date },
                icon: unref(iconsBook)(item?.kind_of_book)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_baseCardBook, {
                  kind: item?.kind_of_book,
                  title: item?.book_title,
                  author: item?.book_author,
                  image: item?.book_image,
                  date: { date: item?.book_start_date, date_two: item?.book_end_date },
                  icon: unref(iconsBook)(item?.kind_of_book)
                }, null, 8, ["kind", "title", "author", "image", "date", "icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/mind/all/books.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=books-DSyQThnc.mjs.map
