/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  defineAsyncComponent,
  h,
  mergeProps,
  type VNode,
  type Ref,
  type MaybeRefOrGetter,
  toValue,
} from "vue";
import { isRef } from "vue";

import type { VSelect as VSelectType } from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";

const VSelect = defineAsyncComponent(
  async () => (await import("vuetify/components/VSelect")).VSelect,
);

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

export interface SelectDataFilter<TValue = any> extends DataFilterBase {
  type: "select";

  props: InstanceType<typeof VSelectType>["$props"];

  value?: MaybeRefOrGetter<TValue>;
}

type VSelectGenericProps = InstanceType<typeof VSelectType<any>>["$props"];

export function select<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
>(
  config: Omit<SelectDataFilter, "type" | "value" | "props"> & {
    props?: InstanceType<
      typeof VSelectType<T, ItemType<T>, ReturnObject, Multiple>
    >["$props"] &
      Omit<
        InstanceType<typeof VSelectType>["$props"],
        keyof VSelectGenericProps
      >;
  } & {
    value?: MaybeRefOrGetter<Value<ItemType<T>, ReturnObject, Multiple>>;
  },
): SelectDataFilter<Value<ItemType<T>, ReturnObject, Multiple>> {
  // @ts-expect-error
  return {
    type: "select",
    ...config,
  };
}

export function render(
  definition: SelectDataFilter,
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
  return h(VSelect, nodeProps);
}
