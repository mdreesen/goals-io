import { f as __nuxt_component_0$3 } from './server.mjs';
import { i as inputVarient } from './varients-BkFSZmK0.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, unref, withDirectives, createBlock, openBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ButtonCancel",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true,
      default: "Delete"
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _directive_motion = resolveDirective("motion");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.path,
        class: "flex items-center text-2xl font-extrabold h-10"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrRenderAttrs(mergeProps({
              type: "submit",
              disabled: __props.isLoading,
              class: `${__props.isLoading ? "bg-linear-to-r from-gray-500 to-gray-600" : "bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`
            }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() })))}${_scopeId}>${ssrInterpolate(__props.isLoading ? "Deleting..." : __props.text)}</button>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("button", {
                type: "submit",
                disabled: __props.isLoading,
                class: `${__props.isLoading ? "bg-linear-to-r from-gray-500 to-gray-600" : "bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`
              }, [
                createTextVNode(toDisplayString(__props.isLoading ? "Deleting..." : __props.text), 1)
              ], 10, ["disabled"])), [
                [_directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonCancel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "BaseButtonCancel" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonDelete",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true,
      default: "Delete"
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "submit",
        disabled: __props.isLoading,
        class: `${__props.isLoading ? "bg-gradient-to-r from-gray-500 to-gray-600" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() })))}>${ssrInterpolate(__props.isLoading ? "Deleting..." : __props.text)}</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonDelete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "BaseButtonDelete" });

export { __nuxt_component_3 as _, __nuxt_component_4 as a };
//# sourceMappingURL=ButtonDelete-UahJPsNh.mjs.map
