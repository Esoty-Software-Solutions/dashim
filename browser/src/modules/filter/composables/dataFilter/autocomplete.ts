/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  h,
  mergeProps,
  type VNode,
  type Ref,
  type MaybeRefOrGetter,
  toValue,
} from "vue";
import { isRef } from "vue";

import { VAutocomplete } from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";
import type { Prettify } from "@/utils";

type ItemType<T> = T extends readonly (infer U)[] ? U : never;
type Primitive = string | number | boolean | symbol;
type Val<T, ReturnObject extends boolean> = [T] extends [Primitive]
  ? T
  : ReturnObject extends true
    ? T
    : any;
type Value<
  T,
  ReturnObject extends boolean,
  Multiple extends boolean,
> = Multiple extends true
  ? readonly Val<T, ReturnObject>[]
  : Val<T, ReturnObject> | null;

export interface AutocompleteDataFilter<TValue = any> extends DataFilterBase {
  type: "autocomplete";

  props: InstanceType<typeof VAutocomplete>["$props"];

  value?: MaybeRefOrGetter<TValue>;
}

type VSelectGenericProps = InstanceType<typeof VAutocomplete<any>>["$props"];

export function autocomplete<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
>(
  config: Omit<AutocompleteDataFilter, "type" | "value" | "props"> & {
    props?: Prettify<
      InstanceType<
        typeof VAutocomplete<T, ItemType<T>, ReturnObject, Multiple>
      >["$props"] &
        Omit<
          InstanceType<typeof VAutocomplete>["$props"],
          keyof VSelectGenericProps
        >
    >;
  } & {
    value?: MaybeRefOrGetter<Value<ItemType<T>, ReturnObject, Multiple>>;
  },
): AutocompleteDataFilter<Value<ItemType<T>, ReturnObject, Multiple>> {
  // @ts-expect-error
  return {
    type: "autocomplete",
    ...config,
  };
}

export function render(
  definition: AutocompleteDataFilter,
  injection: DataFilterInjection,
  additionalProps?: Record<string, any>,
): VNode {
  const modelProps = {
    modelValue: toValue(definition.value),
    "onUpdate:modelValue": (newValue: any) => {
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
    definition.props ?? {},
    modelProps,
    additionalProps ?? {},
  );
  return h(VAutocomplete, nodeProps);
}
