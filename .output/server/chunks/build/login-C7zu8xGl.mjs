import { f as formVarient, c as containerVarient, i as inputVarient, _ as __nuxt_component_0 } from './Label-CdSFOlb_.mjs';
import { _ as _sfc_main$1 } from './Drawer-DPU8VbYy.mjs';
import { a as useUserSession, i as useMotion, d as _sfc_main$8, _ as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_2 } from './ButtonSubmit-Cnujo8hl.mjs';
import { defineComponent, ref, reactive, resolveDirective, mergeProps, unref, withCtx, createVNode, withModifiers, withDirectives, createBlock, openBlock, vModelText, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useToast } from './useToast-DbWOdwrP.mjs';
import 'reka-ui';
import 'vaul-vue';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const isLoading = ref(false);
    let errorMessage = ref("");
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    const credentials = reactive({
      email: "",
      password: ""
    });
    const input = reactive({
      email: "",
      question: ""
    });
    async function forgotpassword() {
      isLoading.value = true;
      $fetch(`/api/authentication/forgot`, {
        method: "POST",
        body: {
          ...input
        }
      }).then(async () => {
        await refreshSession();
        isLoading.value = false;
        toast.success("Email sent", "Check you email and don't forget checking spam folder!");
      }).catch(async (error) => {
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
    }
    useMotion(formRef, { ...formVarient() });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseLabel = __nuxt_component_0;
      const _component_UDrawer = _sfc_main$1;
      const _component_UButton = _sfc_main$8;
      const _component_baseButtonSubmit = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen items-center justify-center bg-gray-950 p-4 overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 bg-linear-to-br from-gray-950 via-gray-800 to-purple-950 opacity-70"></div><section class="flex flex-col items-center gap-8"><div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(containerVarient)() })))}><h1 class="flex flex-col text-4xl sm:text-6xl font-extrabold text-white leading-tight"><span>Welcome to</span><span class="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400"> ASCΞND </span></h1><p class="mt-2 text-lg sm:text-xl text-gray-400">Log in to unlock your journey.</p></div><div class="relative z-20 w-full max-w-sm rounded-3xl border border-gray-700 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-md space-y-6 transform transition-all duration-300">`);
      if (unref(errorMessage)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-center py-2 px-4 rounded-lg", "bg-red-600/30 text-red-400"]
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}>`);
      _push(ssrRenderComponent(_component_baseLabel, { text: "Email" }, null, _parent));
      _push(`<input id="email" type="email"${ssrRenderAttr("value", credentials.email)} placeholder="Email" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}>`);
      _push(ssrRenderComponent(_component_baseLabel, { text: "Password" }, null, _parent));
      _push(`<input id="password" type="password"${ssrRenderAttr("value", credentials.password)} placeholder="Password" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full max-w-sm mx-auto font-sans" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}><div class="w-full relative flex justify-end">`);
      _push(ssrRenderComponent(_component_UDrawer, {
        title: "Reset your password",
        overlay: false
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Email" }, null, _parent2, _scopeId));
            _push2(`<input id="email" type="email"${ssrRenderAttr("value", input.email)} placeholder="Email" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseLabel, { text: "Question" }, null, _parent2, _scopeId));
            _push2(`<input id="question" type="text"${ssrRenderAttr("value", input.question)} placeholder="What is 4 + 3" required class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div class="flex flex-col gap-8 pb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseButtonSubmit, {
              text: "Reset",
              isLoading: isLoading.value,
              isLoadingText: "Submitting..."
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(forgotpassword, ["prevent"]),
                class: "space-y-6"
              }, [
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Email" }),
                  withDirectives(createVNode("input", {
                    id: "email",
                    type: "email",
                    "onUpdate:modelValue": ($event) => input.email = $event,
                    placeholder: "Email",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, input.email]
                  ])
                ])), [
                  [_directive_motion, { ...unref(inputVarient)() }]
                ]),
                withDirectives((openBlock(), createBlock("div", null, [
                  createVNode(_component_baseLabel, { text: "Question" }),
                  withDirectives(createVNode("input", {
                    id: "question",
                    type: "text",
                    "onUpdate:modelValue": ($event) => input.question = $event,
                    placeholder: "What is 4 + 3",
                    required: "",
                    class: "w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, input.question]
                  ])
                ])), [
                  [_directive_motion, { ...unref(inputVarient)() }]
                ]),
                createVNode("div", { class: "flex flex-col gap-8 pb-4" }, [
                  createVNode(_component_baseButtonSubmit, {
                    text: "Reset",
                    isLoading: isLoading.value,
                    isLoadingText: "Submitting..."
                  }, null, 8, ["isLoading"])
                ])
              ], 32)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Forgot password",
              color: "neutral",
              variant: "subtle"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Forgot password",
                color: "neutral",
                variant: "subtle"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() }))}><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="${ssrRenderClass(`${isLoading.value ? "bg-linear-to-r from-gray-500 to-gray-600" : "bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`)}">${ssrInterpolate(isLoading.value ? "Logging In..." : "Log In")}</button></div></form><div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center py-4" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}><div class="absolute w-full border-t border-gray-700"></div><span class="relative z-10 bg-gray-800/80 backdrop-blur-md px-4 text-gray-400 text-sm">OR</span></div><div${ssrRenderAttrs(mergeProps({ class: "text-center" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...unref(inputVarient)() })))}><p class="text-gray-400 text-sm"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "text-blue-400 hover:underline transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign up`);
          } else {
            return [
              createTextVNode("Sign up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(authentication)/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-C7zu8xGl.mjs.map
