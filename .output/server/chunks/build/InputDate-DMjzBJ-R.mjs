import { useSlots, computed, ref, unref, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, mergeProps, renderSlot, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits } from 'reka-ui';
import { DateRangeField, DateField } from 'reka-ui/namespaced';
import { c as createReusableTemplate } from './index-CN17wm4s.mjs';
import { f as useAppConfig, o as reactiveOmit, k as useFormField, p as useFieldGroup, q as useComponentIcons, t as tv, l as _sfc_main$e, s as _sfc_main$b } from './server.mjs';

const theme = {
  "slots": {
    "base": [
      "group relative inline-flex items-center rounded-md select-none",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "segment": [
      "rounded text-center outline-hidden data-placeholder:text-dimmed data-[segment=literal]:text-muted data-invalid:text-error data-disabled:cursor-not-allowed data-disabled:opacity-75",
      "transition-colors"
    ],
    "separatorIcon": "shrink-0 size-4 text-muted"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "size": {
      "xs": {
        "base": [
          "px-2 py-1 text-xs gap-1",
          "gap-0.25"
        ],
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "data-[segment=day]:w-6 data-[segment=month]:w-6 data-[segment=year]:w-9"
      },
      "sm": {
        "base": [
          "px-2.5 py-1.5 text-xs gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "data-[segment=day]:w-6 data-[segment=month]:w-6 data-[segment=year]:w-9"
      },
      "md": {
        "base": [
          "px-2.5 py-1.5 text-sm gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "data-[segment=day]:w-7 data-[segment=month]:w-7 data-[segment=year]:w-11"
      },
      "lg": {
        "base": [
          "px-3 py-2 text-sm gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "data-[segment=day]:w-7 data-[segment=month]:w-7 data-[segment=year]:w-11"
      },
      "xl": {
        "base": [
          "px-3 py-2 text-base gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "segment": "data-[segment=day]:w-8 data-[segment=month]:w-8 data-[segment=year]:w-13"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "variant": "outline",
      "class": {
        "segment": "focus:bg-elevated"
      }
    },
    {
      "variant": "soft",
      "class": {
        "segment": "focus:bg-accented/50 group-hover:focus:bg-accented"
      }
    },
    {
      "variant": "subtle",
      "class": {
        "segment": "focus:bg-accented"
      }
    },
    {
      "variant": "ghost",
      "class": {
        "segment": "focus:bg-elevated group-hover:focus:bg-accented"
      }
    },
    {
      "variant": "none",
      "class": {
        "segment": "focus:bg-elevated"
      }
    },
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInputDate",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    separatorIcon: { type: null, required: false },
    range: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    defaultPlaceholder: { type: null, required: false },
    placeholder: { type: null, required: false },
    hourCycle: { type: null, required: false },
    step: { type: Object, required: false },
    granularity: { type: String, required: false },
    hideTimeZone: { type: Boolean, required: false },
    maxValue: { type: null, required: false },
    minValue: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    isDateUnavailable: { type: Function, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "update:placeholder"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactiveOmit(props, "id", "name", "range", "modelValue", "defaultValue", "color", "variant", "size", "highlight", "disabled", "autofocus", "autofocusDelay", "icon", "avatar", "leading", "leadingIcon", "trailing", "trailingIcon", "loading", "loadingIcon", "separatorIcon", "class", "ui"), emits);
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const [DefineSegmentsTemplate, ReuseSegmentsTemplate] = createReusableTemplate();
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.inputDate || {} })({
      color: color.value,
      variant: props.variant,
      size: inputSize.value,
      highlight: highlight.value,
      loading: props.loading,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputsRef = ref([]);
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function onFocus(event) {
      emitFormFocus();
      emits("focus", event);
    }
    const DateField$1 = computed(() => props.range ? DateRangeField : DateField);
    __expose({
      inputsRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineSegmentsTemplate), null, {
        default: withCtx(({ segments, type }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(segments, (segment, index) => {
              _push2(ssrRenderComponent(unref(DateField$1).Input, {
                key: `${segment.part}-${index}`,
                ref_for: true,
                ref: (el) => inputsRef.value[index] = el,
                type,
                part: segment.part,
                "data-slot": "segment",
                class: ui.value.segment({ class: props.ui?.segment }),
                "data-segment": segment.part
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(segment.value.trim())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(segment.value.trim()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(segments, (segment, index) => {
                return openBlock(), createBlock(unref(DateField$1).Input, {
                  key: `${segment.part}-${index}`,
                  ref_for: true,
                  ref: (el) => inputsRef.value[index] = el,
                  type,
                  part: segment.part,
                  "data-slot": "segment",
                  class: ui.value.segment({ class: props.ui?.segment }),
                  "data-segment": segment.part
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(segment.value.trim()), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "part", "class", "data-segment"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(DateField$1).Root, mergeProps({ ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
        id: unref(id),
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": "base",
        class: ui.value.base({ class: [props.ui?.base, props.class] }),
        "onUpdate:modelValue": onUpdate,
        onBlur,
        onFocus
      }), {
        default: withCtx(({ segments }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (Array.isArray(segments)) {
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), { segments }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), {
                segments: segments.start,
                type: "start"
              }, null, _parent2, _scopeId));
              ssrRenderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: __props.separatorIcon || unref(appConfig).ui.icons.minus,
                  "data-slot": "separatorIcon",
                  class: ui.value.separatorIcon({ class: props.ui?.separatorIcon })
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), {
                segments: segments.end,
                type: "end"
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Array.isArray(segments) ? (openBlock(), createBlock(unref(ReuseSegmentsTemplate), {
                key: 0,
                segments
              }, null, 8, ["segments"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(unref(ReuseSegmentsTemplate), {
                  segments: segments.start,
                  type: "start"
                }, null, 8, ["segments"]),
                renderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => [
                  createVNode(_sfc_main$e, {
                    name: __props.separatorIcon || unref(appConfig).ui.icons.minus,
                    "data-slot": "separatorIcon",
                    class: ui.value.separatorIcon({ class: props.ui?.separatorIcon })
                  }, null, 8, ["name", "class"])
                ]),
                createVNode(unref(ReuseSegmentsTemplate), {
                  segments: segments.end,
                  type: "end"
                }, null, 8, ["segments"])
              ], 64)),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 2,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 3,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputDate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=InputDate-DMjzBJ-R.mjs.map
