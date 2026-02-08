import { _ as __nuxt_component_0$4 } from './server.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
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
//# sourceMappingURL=Card-C3aSdDCm.mjs.map
