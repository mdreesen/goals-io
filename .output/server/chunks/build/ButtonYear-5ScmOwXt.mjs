import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { ChevronDown } from 'lucide-vue-next';
import { u as useYear } from './index-BZTIqTOD.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
import './lazy-hydrated-component-B8_Q-rfU.mjs';
import './SectionHeader-FY2Kj4sD.mjs';
import '@unovis/ts';
import '@unovis/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonYear",
  __ssrInlineRender: true,
  props: {
    data: { type: Array, default: () => [] },
    modelValue: { type: Number },
    startYear: { type: Number, default: 2020 },
    endYear: { type: Number, default: (/* @__PURE__ */ new Date()).getFullYear() + 2 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useYear();
    let isOpen = ref(false);
    const containerRef = ref(null);
    ref(null);
    const useData = ref(props.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "relative inline-block text-left font-sans select-none z-10"
      }, _attrs))} data-v-4d078922><button class="${ssrRenderClass([{ "border-white/20": unref(isOpen) }, "group flex items-center gap-2 pl-4 pr-3 py-2 backdrop-blur-sm border rounded-full transition-all duration-300 hover:bg-zinc-800"])}" data-v-4d078922><span class="text-sm font-medium transition-colors tabular-nums" data-v-4d078922>${ssrInterpolate(unref(useYear)().year)}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["w-4 h-4 transition-transform duration-300", { "-rotate-180": unref(isOpen) }]
      }, null, _parent));
      _push(`</button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute top-full left-0 mt-2 w-32 max-h-60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col" data-v-4d078922><div class="overflow-y-auto scrollbar-hide py-1" data-v-4d078922><!--[-->`);
        ssrRenderList(useData.value, (year) => {
          _push(`<button${ssrRenderAttr("data-active", year === __props.modelValue)} class="${ssrRenderClass([year === __props.modelValue ? "text-white bg-white/5" : "text-zinc-500 hover:text-zinc-300", "w-full text-left px-4 py-2.5 text-sm transition-colors relative flex items-center justify-between group"])}" data-v-4d078922><span class="font-medium" data-v-4d078922>${ssrInterpolate(year)}</span>`);
          if (year === __props.modelValue) {
            _push(`<span class="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-v-4d078922></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonYear.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ButtonYear = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-4d078922"]]), { __name: "BaseButtonYear" });

export { ButtonYear as default };
//# sourceMappingURL=ButtonYear-5ScmOwXt.mjs.map
