import { _ as __nuxt_component_0$1 } from './nuxt-link-oFe5kTnY.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const navRef = ref();
    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };
    const navVariants = {
      initial: { y: -100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
          duration: 0.5
        }
      }
    };
    const linkVariants = {
      initial: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    };
    const mobileMenuVariants = {
      closed: { x: "100%" },
      open: { x: "0%", transition: { type: "spring", stiffness: 200, damping: 25, staggerChildren: 0.1, delayChildren: 0.2 } }
    };
    const mobileLinkVariants = {
      closed: { opacity: 0, x: 50 },
      open: { opacity: 1, x: 0 }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_motion_variants = resolveDirective("motion-variants");
      const _directive_motion = resolveDirective("motion");
      _push(`<!--[--><nav class="bg-gray-900 border-b border-gray-700 p-4 relative z-50"><div${ssrRenderAttrs(mergeProps({
        ref_key: "navRef",
        ref: navRef,
        class: "container mx-auto flex items-center justify-between"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, navVariants), ssrGetDirectiveProps(_ctx, _directive_motion, navVariants.visible)))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-3xl font-extrabold text-blue-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ascend `);
          } else {
            return [
              createTextVNode(" Ascend ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/dashboard",
        class: "text-gray-300 hover:text-white transition-colors duration-300"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, linkVariants), ssrGetDirectiveProps(_ctx, _directive_motion, linkVariants.visible)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/fasting",
        class: "text-gray-300 hover:text-white transition-colors duration-300"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, linkVariants), ssrGetDirectiveProps(_ctx, _directive_motion, linkVariants.visible)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Fasting `);
          } else {
            return [
              createTextVNode(" Fasting ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/workouts",
        class: "text-gray-300 hover:text-white transition-colors duration-300"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, linkVariants), ssrGetDirectiveProps(_ctx, _directive_motion, linkVariants.visible)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Workouts `);
          } else {
            return [
              createTextVNode(" Workouts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/profile",
        class: "text-gray-300 hover:text-white transition-colors duration-300"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, linkVariants), ssrGetDirectiveProps(_ctx, _directive_motion, linkVariants.visible)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden text-gray-300 focus:outline-none"><svg class="${ssrRenderClass([{ "hidden": isOpen.value, "block": !isOpen.value }, "w-8 h-8 transition-transform duration-300 transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg><svg class="${ssrRenderClass([{ "block": isOpen.value, "hidden": !isOpen.value }, "w-8 h-8 transition-transform duration-300 transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></nav><div class="${ssrRenderClass([{ "translate-x-0": isOpen.value, "translate-x-full": !isOpen.value }, "fixed inset-0 top-[73px] bg-gray-800 bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden z-40 p-4"])}"><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center space-y-6 pt-10" }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, mobileMenuVariants), ssrGetDirectiveProps(_ctx, _directive_motion, isOpen.value ? "open" : "closed")))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/dashboard",
        class: "text-gray-300 text-3xl hover:text-white transition-colors duration-300",
        onClick: toggleMenu
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, mobileLinkVariants)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/fasting",
        class: "text-gray-300 text-3xl hover:text-white transition-colors duration-300",
        onClick: toggleMenu
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, mobileLinkVariants)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Fasting `);
          } else {
            return [
              createTextVNode(" Fasting ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/workouts",
        class: "text-gray-300 text-3xl hover:text-white transition-colors duration-300",
        onClick: toggleMenu
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, mobileLinkVariants)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Workouts `);
          } else {
            return [
              createTextVNode(" Workouts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/profile",
        class: "text-gray-300 text-3xl hover:text-white transition-colors duration-300",
        onClick: toggleMenu
      }, ssrGetDirectiveProps(_ctx, _directive_motion_variants, mobileLinkVariants)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AppNavBar" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_appNavBar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_appNavBar, null, null, _parent));
  _push(`<h1>Welcome to the Dashboard page</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BkLXvYU2.mjs.map
