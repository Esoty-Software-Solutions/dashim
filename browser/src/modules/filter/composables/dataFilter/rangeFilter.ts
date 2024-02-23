/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useDebounceFn, syncRefs } from "@vueuse/core";
import {
  defineAsyncComponent,
  defineComponent,
  h,
  mergeProps,
  ref,
  computed,
  isRef,
  type VNode,
  type MaybeRefOrGetter,
  type PropType,
  toValue,
} from "vue";

import type {
  VRangeSlider as VRangeSliderType,
  VTextField as VTextFieldType,
} from "vuetify/components";

import type { DataFilterBase, DataFilterInjection } from "./types";

const VRangeSlider = defineAsyncComponent(
  async () => (await import("vuetify/components/VRangeSlider")).VRangeSlider,
);
const VTextField = defineAsyncComponent(
  async () => (await import("vuetify/components/VTextField")).VTextField,
);

export interface RangeDataFilter extends DataFilterBase {
  type: "range";

  /**
   * Props to be passed down to `VRangeSlider`
   */
  props?: MaybeRefOrGetter<VRangeSliderType["$props"]>;

  commonFieldProps?: MaybeRefOrGetter<
    Omit<VTextFieldType["$props"], "modelValue">
  >;
  minFieldProps?: MaybeRefOrGetter<VTextFieldType["$props"]>;
  maxFieldProps?: MaybeRefOrGetter<VTextFieldType["$props"]>;

  value?: MaybeRefOrGetter<[start: number, end: number]>;
  hideMinMax?: boolean;

  contentBorder: true;
}

type MakeSelectConfig = Omit<RangeDataFilter, "type" | "contentBorder">;

export function range(config: MakeSelectConfig): RangeDataFilter {
  return {
    ...config,
    contentBorder: true,
    type: "range",
  };
}

const DataFilterRange = defineComponent({
  name: "DataFilterRAnge",

  props: {
    /**
     * Props to be passed down directly to underlying vuetify's VRangeSlider
     */
    sliderProps: {
      type: Object,
      required: true,
    },

    modelValue: {
      type: Array as unknown as PropType<[number, number]>,
      required: true,
    },

    definition: {
      type: Object as PropType<RangeDataFilter>,
      required: true,
    },

    injection: {
      type: Object as PropType<DataFilterInjection>,
      default: () => ({}),
    },
  },

  emits: {
    "update:modelValue": function (value: [number, number]) {
      return true;
    },

    "update:focused": function (value: boolean) {
      return true;
    },
  },

  setup(props, ctx) {
    const maxVal = computed(() =>
      parseFloat((toValue(props.definition.props)?.max as string) ?? "100"),
    );

    const minVal = computed(() =>
      parseFloat((toValue(props.definition.props)?.min as string) ?? "0"),
    );

    const commonFieldProps = computed(() =>
      mergeProps(
        {
          type: "number",
          class: "flex-grow-0 flex-shrink-1",
          style: "min-width: 2rem; max-width: 5rem",
          variant: "plain",
          "onUpdate:focused": (value: boolean) => {
            ctx.emit("update:focused", value);
          },
        },
        toValue(props.definition.commonFieldProps) ?? {},
      ),
    );

    const internalModelValue = computed({
      get() {
        return props.modelValue;
      },
      set(value: [number, number]) {
        ctx.emit("update:modelValue", value);
      },
    });

    const rawCurrentMax = ref<number>(100);
    const currentMax = computed(() => internalModelValue.value[1]);
    syncRefs(currentMax, rawCurrentMax, { immediate: true });

    const rawCurrentMin = ref<number>(0);
    const currentMin = computed(() => internalModelValue.value[0]);
    syncRefs(currentMin, rawCurrentMin, { immediate: true, deep: true });

    const onMinFieldUpdate = useDebounceFn(function (value: string | null) {
      let newMin: number = parseFloat(value ?? "");
      if (!Number.isNaN(newMin)) {
        if (newMin > currentMax.value) {
          newMin = currentMax.value;
        }
        if (newMin < minVal.value) {
          newMin = minVal.value;
        }

        internalModelValue.value = [newMin, currentMax.value];
      }
      rawCurrentMin.value = currentMin.value;
    }, 500);

    const onMaxFieldUpdate = useDebounceFn(function (value: string | null) {
      let newMax = parseFloat(value ?? "");
      if (!Number.isNaN(newMax)) {
        if (newMax < currentMin.value) {
          newMax = currentMin.value;
        }
        if (newMax > maxVal.value) {
          newMax = maxVal.value;
        }
        internalModelValue.value = [currentMin.value, newMax];
      }

      rawCurrentMax.value = currentMax.value;
    }, 500);

    return () => {
      // input field logic
      const minField = h(
        VTextField,
        mergeProps(
          {
            min: minVal.value,
            max: currentMax.value,
            modelValue: rawCurrentMin.value,

            "onUpdate:modelValue": [
              (value: number) => (rawCurrentMin.value = value),
              onMinFieldUpdate,
            ],
          },
          commonFieldProps.value,
          toValue(props.definition.minFieldProps) ?? {},
        ),
      );

      const maxField = h(
        VTextField,
        mergeProps(
          {
            modelValue: rawCurrentMax.value,
            min: currentMin.value,
            max: maxVal.value,

            "onUpdate:modelValue": [
              (value: number) => (rawCurrentMax.value = value),
              onMaxFieldUpdate,
            ],
          },
          commonFieldProps.value,
          toValue(props.definition.maxFieldProps) ?? {},
        ),
      );

      const _sliderPros = mergeProps(
        {
          modelValue: internalModelValue.value,
          "onUpdate:modelValue": (value: [number, number]) =>
            (internalModelValue.value = value),

          "onUpdate:focused": (value: boolean) =>
            ctx.emit("update:focused", value),
        },
        props.sliderProps,
      );

      const children = !props.definition.hideMinMax
        ? {
            prepend: () => minField,

            append: () => maxField,
          }
        : {};

      return h(VRangeSlider, _sliderPros, children);
    };
  },
});

export function render(
  definition: RangeDataFilter,
  injection: DataFilterInjection,
  additionalProps?: Record<string, any>,
): VNode {
  // executed in render context

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

  const stylingProps = {
    class: ["d-data-filter-range", "px-2 py-1"],
  };
  const sliderProps = mergeProps(
    toValue(definition.props) ?? {},
    stylingProps,
    additionalProps ?? {},
  );

  // @ts-expect-error
  return h(DataFilterRange, {
    sliderProps,
    ...modelProps,

    definition,
    injection,
  });
}
