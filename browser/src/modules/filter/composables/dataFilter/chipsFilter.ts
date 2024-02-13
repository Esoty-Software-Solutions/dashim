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

import type {
  VChip as VChipType,
  VChipGroup as VChipGroupType,
} from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";
import type { Prettify } from "@/utils";

const VChip = defineAsyncComponent(
  async () => (await import("vuetify/components/VChip")).VChip,
);

const VChipGroup = defineAsyncComponent(
  async () => (await import("vuetify/components/VChipGroup")).VChipGroup,
);

type VChipGroupGenericProps<T = any> = keyof InstanceType<
  typeof VChipGroupType<T>
>["$props"];

type InternalChipGroupProps<T> =
  // Overwrite generic-less props with generic-tied ones
  // prettier-ignore
  InstanceType< typeof VChipGroupType<T> >["$props"] 
  & Omit<InstanceType<typeof VChipGroupType>["$props"], VChipGroupGenericProps<T>>;

type ItemType<T> = T extends readonly (infer U)[]
  ? NonNullable<U>
  : NonNullable<T>;

export interface ChipsDataFilterItem<TItemValue> {
  title?: string;
  value: TItemValue;
  /**
   * Allows passing per-item props to the internal {@link VChip} components
   */
  chipProps?: InstanceType<typeof VChipType>["$props"];
}

export interface ChipsDataFilter<TGroupValue = any> extends DataFilterBase {
  type: "chips";

  /**
   * props to be passed down to`VChipGroup`.
   */
  props?: MaybeRefOrGetter<InternalChipGroupProps<TGroupValue>>;

  /**
   * Shared `VChip` props, useful for props that are not available on `VChipGroup`
   */
  chipProps?: MaybeRefOrGetter<InstanceType<typeof VChipType>["$props"]>;

  items?: MaybeRefOrGetter<ChipsDataFilterItem<ItemType<TGroupValue>>[]>;

  value?: MaybeRefOrGetter<TGroupValue>;

  contentBorder: true;
}

type MakeChipsConfig<T> =
  // omit these keys to be replaced with generic-tied ones
  Omit<ChipsDataFilter<T>, "type" | "value" | "props" | "contentBorder"> & {
    props?: MaybeRefOrGetter<InternalChipGroupProps<T>>;
  } & {
    value?: MaybeRefOrGetter<T>;
  };

export function chips<T>(
  config: Prettify<MakeChipsConfig<T>>,
): ChipsDataFilter {
  return {
    ...config,
    type: "chips",
    contentBorder: true,
  };
}

export function render(
  definition: ChipsDataFilter,
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
  };

  const nodeProps = mergeProps(
    toValue(definition.props) ?? {},
    {
      class: "d-data-filter-input__input px-0",
    },
    modelProps,
    additionalProps ?? {},
  );

  const childChips = toValue(definition.items ?? []).map((itemDef) => {
    const chipProps = mergeProps(
      toValue(definition.chipProps) ?? {},
      itemDef.chipProps ?? {},
      {
        value: itemDef.value,
      },
    );

    return h(VChip, chipProps, () => itemDef.title ?? itemDef.value);
  });

  return h(VChipGroup, nodeProps, () => childChips);
}
