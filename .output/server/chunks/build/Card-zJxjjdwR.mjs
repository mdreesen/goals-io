import { _ as _sfc_main$1, a as __nuxt_component_2 } from './Icon-8aWUErQK.mjs';
import { defineComponent, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    color: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: "text-green-400"
    },
    icon: {
      type: String,
      default: ""
    },
    iconNav: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_baseIcon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        variant: "subtle",
        class: `w-full flex justify-between max-w-lg px-5 divide-none ${props.color && props.color}`
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-col justify-center items-center"${_scopeId}>`);
            if (props.icon) {
              _push2(ssrRenderComponent(_component_baseIcon, {
                iconName: props.icon,
                styles: props.iconColor
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-col justify-center items-center" }, [
                props.icon ? (openBlock(), createBlock(_component_baseIcon, {
                  key: 0,
                  iconName: props.icon,
                  styles: props.iconColor
                }, null, 8, ["iconName", "styles"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-col justify-center items-center opacity-40"${_scopeId}>`);
            if (props.iconNav) {
              _push2(ssrRenderComponent(_component_baseIcon, {
                iconName: props.iconNav
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-col justify-center items-center opacity-40" }, [
                props.iconNav ? (openBlock(), createBlock(_component_baseIcon, {
                  key: 0,
                  iconName: props.iconNav
                }, null, 8, ["iconName"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.label) {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center font-extrabold"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.label)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.text) {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center font-light"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.text)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.date) {
              _push2(`<div${_scopeId}><div class="flex flex-col justify-center items-center font-light"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.date)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.label ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-extrabold" }, [
                  createVNode("p", null, toDisplayString(__props.label), 1)
                ])
              ])) : createCommentVNode("", true),
              __props.text ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-light" }, [
                  createVNode("p", null, toDisplayString(__props.text), 1)
                ])
              ])) : createCommentVNode("", true),
              __props.date ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode("div", { class: "flex flex-col justify-center items-center font-light" }, [
                  createVNode("p", null, toDisplayString(__props.date), 1)
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BaseCard" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Card-zJxjjdwR.mjs.map
