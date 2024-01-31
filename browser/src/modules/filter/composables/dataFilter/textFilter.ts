import type { VNode, MaybeRefOrGetter } from "vue";
import { defineAsyncComponent, h, mergeProps, toValue, isRef } from "vue";

import type { VTextField as VTextFieldType } from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";
import type { Prettify } from "@/utils";

const VTextField = defineAsyncComponent(
  async () => (await import("vuetify/components/VTextField")).VTextField,
);

export interface TextDataFilter extends DataFilterBase {
  type: "text";

  value?: MaybeRefOrGetter<string>;

  props?: MaybeRefOrGetter<InstanceType<typeof VTextFieldType>["$props"]>;
}

export function text(
  config: Prettify<Omit<TextDataFilter, "type">>,
): TextDataFilter {
  return {
    type: "text",
    ...config,
  };
}

export function render(
  definition: TextDataFilter,
  injection: DataFilterInjection,
  props?: Record<string, any>,
): VNode {
  const modelProps = {
    modelValue: toValue(definition.value),
    "onUpdate:modelValue": (newValue: string) => {
      if (isRef(definition.value)) {
        definition.value.value = newValue;
      }
      injection.update(newValue);
    },

    "onUpdate:focused": (value: boolean) => {
      injection.setFocus(value);
    },
  };

  const nodeProps = mergeProps(
    toValue(definition.props) ?? {},
    modelProps,
    props ?? {},
  );
  return h(VTextField, nodeProps);
}
