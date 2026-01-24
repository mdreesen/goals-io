import { y as makeDestructurable, z as camelize } from './server.mjs';
import { shallowRef, defineComponent } from 'vue';

// @__NO_SIDE_EFFECTS__
function createReusableTemplate(options = {}) {
  const { inheritAttrs = true } = options;
  const render = shallowRef();
  const define = defineComponent({ setup(_, { slots }) {
    return () => {
      render.value = slots.default;
    };
  } });
  const reuse = defineComponent({
    inheritAttrs,
    props: options.props,
    setup(props, { attrs, slots }) {
      return () => {
        var _render$value;
        if (!render.value && true) throw new Error("[VueUse] Failed to find the definition of reusable template");
        const vnode = (_render$value = render.value) === null || _render$value === void 0 ? void 0 : _render$value.call(render, {
          ...options.props == null ? keysToCamelKebabCase(attrs) : props,
          $slots: slots
        });
        return inheritAttrs && (vnode === null || vnode === void 0 ? void 0 : vnode.length) === 1 ? vnode[0] : vnode;
      };
    }
  });
  return makeDestructurable({
    define,
    reuse
  }, [define, reuse]);
}
function keysToCamelKebabCase(obj) {
  const newObj = {};
  for (const key in obj) newObj[camelize(key)] = obj[key];
  return newObj;
}

export { createReusableTemplate as c };
//# sourceMappingURL=index-CN17wm4s.mjs.map
