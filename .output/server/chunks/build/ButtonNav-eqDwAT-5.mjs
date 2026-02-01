import { d as _sfc_main$9, e as __nuxt_component_0$4 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ButtonDrawer",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true,
      default: "View All"
    },
    icon: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$9;
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        label: props.text,
        color: "neutral",
        variant: "subtle",
        "trailing-icon": props.icon,
        class: "w-50 justify-center"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "BaseButtonDrawer" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonNav",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true,
      default: "View All"
    },
    path: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_UButton = _sfc_main$9;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.path
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: props.text,
              color: "neutral",
              variant: "subtle",
              "trailing-icon": "",
              class: "w-50 justify-center"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: props.text,
                color: "neutral",
                variant: "subtle",
                "trailing-icon": "",
                class: "w-50 justify-center"
              }, null, 8, ["label"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "BaseButtonNav" });

export { __nuxt_component_3 as _, __nuxt_component_4 as a };
//# sourceMappingURL=ButtonNav-eqDwAT-5.mjs.map
