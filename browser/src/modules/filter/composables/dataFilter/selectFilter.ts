/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  defineAsyncComponent,
  h,
  mergeProps,
  type VNode,
  type MaybeRefOrGetter,
  toValue,
} from "vue";
import { isRef } from "vue";

import type { VSelect as VSelectType } from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";
import type { Prettify } from "@/utils";

const VSelect = defineAsyncComponent(
  async () => (await import("vuetify/components/VSelect")).VSelect,
);

/*
 * Types from borrowed from Vuetify
 */
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
/* ***** */

type VSelectGenericProps = keyof InstanceType<
  typeof VSelectType<any>
>["$props"];

// props with proper generic tied to the generics of the invoked
// maker function "make"
type InternalSelectProps<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
> =
  // Overwrite generic-less props with generic-tied ones
  // prettier-ignore
  InstanceType< typeof VSelectType<T, ItemType<T>, ReturnObject, Multiple> >["$props"] 
  & Omit<InstanceType<typeof VSelectType>["$props"], VSelectGenericProps>;

export interface SelectDataFilter<
  T extends readonly any[] = any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
> extends DataFilterBase {
  type: "select";

  props?: MaybeRefOrGetter<InternalSelectProps<T, ReturnObject, Multiple>>;

  value?: MaybeRefOrGetter<Value<ItemType<T>, ReturnObject, Multiple>>;
}

type MakeSelectConfig<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
> =
  // omit these keys to be replaced with generic-tied ones
  Omit<
    SelectDataFilter<T, ReturnObject, Multiple>,
    "type" | "value" | "props"
  > & {
    props?: MaybeRefOrGetter<InternalSelectProps<T, ReturnObject, Multiple>>;
  } & {
    value?: MaybeRefOrGetter<Value<ItemType<T>, ReturnObject, Multiple>>;
  };

export function select<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
>(
  config: Prettify<MakeSelectConfig<T, ReturnObject, Multiple>>,
): SelectDataFilter {
  // **NOTICE** This error is negligible, it allows us to avoid
  // Generic Parameters bubbling up
  // @ts-expect-error
  return {
    ...config,
    type: "select",
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
    toValue(definition.props) ?? {},
    modelProps,
    additionalProps ?? {},
  );
  return h(VSelect, nodeProps);
}
