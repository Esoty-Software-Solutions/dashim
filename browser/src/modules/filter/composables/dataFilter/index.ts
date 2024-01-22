import {
  defineComponent,
  h,
  ref,
  toValue,
  type VNode,
  type MaybeRefOrGetter,
  type SlotsType,
  computed,
  watch,
  isRef,
} from "vue";

import { mdiChevronDown } from "@mdi/js";
import {
  VRow,
  VCard,
  VExpandTransition,
  VBtn,
  VIcon,
  VCardItem,
  VDefaultsProvider,
} from "vuetify/components";

import DataFilterBase from "../../components/DataFilterBase.vue";

import { render as renderSelect, type SelectDataFilter } from "./selectFilter";
export { select } from "./selectFilter";
import { render as renderText, type TextDataFilter } from "./textFilter";
export { text } from "./textFilter";

import type { DataFiltersDisplay, DataFilterInjection } from "./types";

/*
 * Filter Types
 *
 * text filter
 * date
 * date range
 * number range
 * select (single/multiple)
 * auto complete (single)
 * auto complete (multiple)
 * toggle buttons
 * toggle switch
 * chip group (single/many)
 */

type DataFilter = TextDataFilter | SelectDataFilter;

interface UseDataFiltersOptions<TFilter extends Record<string, DataFilter>> {
  filter: TFilter;

  /**
   * Whether to collapse the collapsable section of the filters (if it exists)
   */
  collapse?: MaybeRefOrGetter<boolean>;

  /**
   * Default display config, can be overridden at filter-level using filters "display" property
   */
  display?: MaybeRefOrGetter<DataFiltersDisplay>;
}

export default function useDataFilters<
  TFilter extends Record<string, DataFilter>,
>(options: UseDataFiltersOptions<TFilter>) {
  /**
   * This is required as in fact, surprisingly, typescript adds other valid key types to the mix
   * even though it is defined as string in `Record<string,...` and symbol does not play well
   *
   * @see https://stackoverflow.com/a/72150495/10402951
   */
  type FilterName = Extract<keyof TFilter, string>;

  function useFiltersInjections(emit: (event: string, ...args: any[]) => void) {
    const injections: {
      [Property in FilterName]?: DataFilterInjection;
    } = {};

    for (const filterKey in options.filter) {
      const filter = options.filter[filterKey];
      const focusedRef = ref(false);
      const hoveredRef = ref(false);

      const internalEnabledPersis = ref(false);
      watch(
        () => toValue(filter.enabled),
        (newValue) => {
          internalEnabledPersis.value = newValue ?? false;
        },
        {
          immediate: true,
        },
      );
      const internalEnabled = computed({
        set(value: boolean) {
          internalEnabledPersis.value = value;

          if (isRef(filter.enabled)) {
            filter.enabled = value;
          }
        },
        get() {
          return internalEnabledPersis.value;
        },
      });

      injections[filterKey] = {
        update(...value: any[]) {
          internalEnabled.value = true;

          emit("update:value", filterKey, ...value);
        },

        enabled: internalEnabled,
        setEnabled(value) {
          internalEnabled.value = value;
          emit("update:enabled", filterKey, value);
        },

        focused: focusedRef,
        setFocus(value) {
          focusedRef.value = value ?? true;

          // enable filter on hover
          if (value) {
            internalEnabled.value = true;
          }
        },

        hovered: hoveredRef,
        hoverIn() {
          hoveredRef.value = true;
        },

        hoverOut() {
          hoveredRef.value = true;
        },
      };
    }

    return injections;
  }

  const FilterComponent = defineComponent({
    slots: Object as SlotsType<{
      [Property in FilterName as `filter.${Property}`]: {
        filterName: Property;
      };
    }>,

    emits: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      collapse(value: boolean) {
        return true;
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      "update:value"(filter: FilterName, ...value: any[]) {
        return true;
      },

      "update:enabled"(filter: FilterName, value: boolean) {
        return true;
      },
    },

    setup(props, { slots, emit }) {
      const collapsableFilters = computed(() =>
        Object.values(options.filter).filter((filter) =>
          toValue(filter.collapsable),
        ),
      );

      /**
       * Whether there are collapsable filters or not
       */
      const collapsable = computed(
        (): boolean => collapsableFilters.value.length >= 1,
      );

      const internalCollapsePersis = ref(false);
      watch(
        () => toValue(options.collapse),
        (newValue) => {
          internalCollapsePersis.value = newValue ?? false;
        },
        {
          immediate: true,
        },
      );
      const internalCollapse = computed({
        set(value: boolean) {
          emit("collapse", value);
          internalCollapsePersis.value = value;

          if (isRef(options.collapse)) {
            options.collapse.value = value;
          }
        },
        get() {
          return collapsable.value && internalCollapsePersis.value;
        },
      });

      // collapsable filters
      const collapsableRowClasses = computed(() => {
        const classList = [];
        if (!internalCollapse.value) {
          classList.push("filter-toolbar-expanded");
        }
        return classList;
      });

      const filterInjections = useFiltersInjections(
        emit as unknown as (event: string, ...args: any[]) => void,
      );
      function filterToNode(key: FilterName, definition: DataFilter): VNode {
        // executed in render context
        const globalDisplay = toValue(options?.display);

        // props passed down to filter node
        const nodeProps = {
          class: ["flex-grow-1"],
        };

        let filterNode: VNode = h("div");
        const injection = filterInjections[key]!;

        if (definition.type === "text") {
          filterNode = renderText(definition, injection, nodeProps);
        } else if (definition.type === "select") {
          filterNode = renderSelect(definition, injection, nodeProps);
        }
        // TODO: render other types of filters

        const filterSlotFunction = slots?.[`filter.${key}`];

        if (filterSlotFunction) {
          return h(
            "div",
            // @ts-expect-error
            filterSlotFunction({
              filterName: key,
            }),
          );
        } else {
          // Wrap the rendered filter in a DataFilterBase
          const baseProps = {
            enabled: injection.enabled.value,
            "onUpdate:enabled": (newValue: boolean) => {
              injection.setEnabled(newValue);
            },

            focused: injection.focused.value,

            class: [computeDisplayClasses(globalDisplay, definition.display)],

            [`data-filter-name`]: key,
          };

          return h(DataFilterBase, baseProps, () => filterNode);
        }
      }

      function renderFilters() {
        // executed in render context
        const filtersRaw = options.filter;

        let nodes: VNode[] = [];
        if (collapsable.value) {
          nodes = Object.entries(filtersRaw)
            .filter(([key, definition]) => !toValue(definition.collapsable))
            .map(([key, definition]) =>
              filterToNode(key as FilterName, definition),
            );
        } else {
          nodes = Object.entries(filtersRaw).map(([key, definition]) =>
            filterToNode(key as FilterName, definition),
          );
        }

        return h(VCardItem, { class: ["flex-row pa-1"] }, () =>
          h(VRow, { dense: true, class: ["mx-2 py-1 "] }, () => nodes),
        );
      }

      function renderCollapsableArea() {
        if (!collapsable.value) {
          return undefined;
        }

        const filtersRaw = options.filter;
        const nodes = Object.entries(filtersRaw)
          .filter(([key, definition]) => toValue(definition.collapsable))
          .map(([key, definition]) =>
            filterToNode(key as FilterName, definition),
          );

        return h(VCardItem, { class: "pa-1" }, () => [
          h(
            VExpandTransition,
            // v-show replacement
            {
              style: {
                display: internalCollapse.value ? "none" : undefined,
              },
            },
            () =>
              h(
                VRow,
                {
                  dense: true,
                  class: ["mx-2 py-2", collapsableRowClasses.value],
                },
                () => nodes,
              ),
          ),
        ]);
      }

      return () => {
        return h("div", null, [
          // toolbar
          h(
            VCard,
            {
              color: "surface",
              density: "compact",
              class: "d-flex",
            },
            () => [
              h("h2", { class: "ms-2 pa-2 text-h6" }, "Filter"),

              h(
                "div",
                { class: "flex-grow-1" },
                h(
                  VDefaultsProvider,
                  {
                    defaults: {
                      global: {
                        hideDetails: true,
                        baseColor: "primary",
                        variant: "outlined",
                      },
                    },
                  },
                  () => [
                    renderFilters(),

                    // collapsable filters
                    renderCollapsableArea(),
                  ],
                ),
              ),

              // collapse button
              collapsable.value
                ? h(
                    VBtn,
                    {
                      icon: true,
                      variant: "plain",
                      class: ["me-2 mt-4"],
                      onClick: () =>
                        (internalCollapse.value = !internalCollapse.value),
                    },
                    () => [
                      h(VIcon, {
                        style: {
                          transform: !internalCollapse.value
                            ? "rotateX(180deg)"
                            : "",
                        },
                        icon: mdiChevronDown,
                      }),
                    ],
                  )
                : undefined,
            ],
          ),
        ]);
      };
    },
  });

  return {
    FilterComponent,
  };
}

function computeDisplayClasses(
  globalConfig?: DataFilter["display"],
  filterConfig?: DataFilter["display"],
): string[] {
  const defaultClasses = ["v-col-12 v-col-md-3"];

  function configToClasses(config: DataFilter["display"]): string[] {
    const classes: string[] = [];

    for (const key in config) {
      const breakpointClass =
        // @ts-expect-error
        key === "xs" ? `v-col-${config[key]}` : `v-col-${key}-${config[key]}`;
      classes.push(breakpointClass);
    }

    return classes;
  }

  if (filterConfig != null) {
    return configToClasses(filterConfig);
  }

  if (globalConfig != null) {
    return configToClasses(globalConfig);
  }

  return defaultClasses;
}
