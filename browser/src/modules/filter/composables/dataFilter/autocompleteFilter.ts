/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ref,
  h,
  isRef,
  mergeProps,
  toValue,
  type UnwrapRef,
  type MaybeRefOrGetter,
  type VNode,
} from "vue";

import { VAutocomplete } from "vuetify/components";

import {
  makeAsyncFilter,
  type MakeAsyncFilterOptions,
} from "./helpers/makeAsyncFilter";

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

/**************
 ** async variant
 **********************/

interface AsyncAutocompleteOptions<TInput, TOutput extends readonly any[]>
  extends Omit<MakeAsyncFilterOptions<TInput, TOutput>, "input"> {
  input: (search: any) => TInput;
}

export function asyncAutocomplete<
  T extends readonly any[],
  ReturnObject extends boolean = false,
  Multiple extends boolean = false,
  TFetchInput = any,
>(
  config: Prettify<MakeAutocompleteConfig<T, ReturnObject, Multiple>>,
  asyncOptions: AsyncAutocompleteOptions<TFetchInput, T>,
): AutocompleteDataFilter {
  const items = ref<T>([] as unknown as T);

  const search = ref<any>(null);
  function autocompleteInput() {
    return asyncOptions.input(search.value);
  }

  const { isLoading } = makeAsyncFilter({
    ...asyncOptions,
    input: () => autocompleteInput(),
    onResult(output) {
      items.value = output as UnwrapRef<T>;
    },
  });

  return autocomplete({
    ...config,
    props: () =>
      mergeProps(toValue(config.props) ?? {}, {
        items: items.value,
        loading: isLoading.value,

        search: search.value,
        "onUpdate:search": (val: any) => (search.value = val),
      }),
  });
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
