import { i as inputVarient } from './varients-BkFSZmK0.mjs';
import { defineComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonSubmit",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true,
      default: "Save"
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isLoadingText: {
      type: String,
      default: "Saving..."
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "submit",
        disabled: __props.isLoading,
        class: `${__props.isLoading ? "bg-linear-to-r from-gray-500 to-gray-600" : "bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() })))}>${ssrInterpolate(__props.isLoading ? props.isLoadingText : __props.text)}</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonSubmit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "BaseButtonSubmit" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=ButtonSubmit-CrJNqEUh.mjs.map
