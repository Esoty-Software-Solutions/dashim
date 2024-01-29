/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  h,
  isRef,
  mergeProps,
  toValue,
  type MaybeRefOrGetter,
  type VNode,
} from "vue";

import { VAutocomplete } from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";
import type { Prettify } from "@/utils";

/*
 * Types borrowed from Vuetify
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
/***********/

type VAutocompleteGenericProps = keyof InstanceType<
  typeof VAutocomplete<any>
>["$props"];

type InternalAutocompleteProps<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
> =
  // prettier-ignore
  InstanceType< typeof VAutocomplete<T, ItemType<T>, ReturnObject, Multiple> >["$props"] 
  & Omit<InstanceType<typeof VAutocomplete>["$props"], VAutocompleteGenericProps>;

export interface AutocompleteDataFilter<
  T extends readonly any[] = any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
> extends DataFilterBase {
  type: "autocomplete";

  props: MaybeRefOrGetter<InternalAutocompleteProps<T, ReturnObject, Multiple>>;

  value?: MaybeRefOrGetter<Value<ItemType<T>, ReturnObject, Multiple>>;
}

type MakeAutocompleteConfig<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
> =
  // omit these keys to be replaced with generic-tied ones
  Omit<AutocompleteDataFilter, "type" | "value" | "props"> & {
    props?: MaybeRefOrGetter<
      InternalAutocompleteProps<T, ReturnObject, Multiple>
    >;
  } & {
    value?: MaybeRefOrGetter<Value<ItemType<T>, ReturnObject, Multiple>>;
  };

export function autocomplete<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
>(
  config: Prettify<MakeAutocompleteConfig<T, ReturnObject, Multiple>>,
): AutocompleteDataFilter {
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
    toValue(definition.props) ?? {},
    modelProps,
    additionalProps ?? {},
  );
  return h(VAutocomplete, nodeProps);
}
