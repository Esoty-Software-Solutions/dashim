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
  mergeProps,
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

  const FilterComponent = defineComponent({
    slots: Object as SlotsType<{
      [Property in FilterName as `filter.${Property}`]: {
        filterName: Property;
      };
    }>,

    emits: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      collapse: (value: boolean) => {
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
        Object.values(toValue(options.filter)).filter((filter) =>
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

      // render filters
      const globalDisplay = toValue(options?.display);

      const filterInjections: {
        [Property in FilterName]?: DataFilterInjection;
      } = {};

      watch(
        () => toValue(options.filter),
        (filters) => {
          for (const filterKey in filters) {
            const filter = filters[filterKey];
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

            filterInjections[filterKey] = {
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
        },
        { immediate: true, deep: false },
      );

      function filtersToNodes(filterKeys: FilterName[]) {
        const filtersRaw: TFilter = options.filter;
        const filtersRenderMap = {} as unknown as {
          [key in FilterName]: VNode;
        };
        for (const filterKey of filterKeys) {
          const filterDefinition = filtersRaw[filterKey];

          const baseStaticProps = {
            class: [
              computeDisplayClasses(globalDisplay, filterDefinition.display),
            ],

            [`data-filter-name`]: filterKey,
          };

          const nodeProps = {
            class: ["flex-grow-1"],
          };

          let filterNode: VNode = h("div");
          const injection = filterInjections[filterKey]!;

          if (filterDefinition.type === "text") {
            filterNode = renderText(filterDefinition, injection, nodeProps);
          } else if (filterDefinition.type === "select") {
            filterNode = renderSelect(filterDefinition, injection, nodeProps);
          }
          // render other types of filters

          // Wrap the rendered filter in a DataFilterBase
          const baseProps = {
            enabled: injection.enabled.value,
            "onUpdate:enabled": (newValue: boolean) => {
              injection.setEnabled(newValue);
            },

            focused: injection.focused.value,
          };

          filtersRenderMap[filterKey] = h(
            DataFilterBase,
            mergeProps(baseProps, baseStaticProps),
            () => filterNode,
          );
        }

        const filtersVNodes: VNode[] = [];

        for (const filterKey in filtersRenderMap) {
          const filterSlotFunction = slots?.[`filter.${filterKey}`];

          let renderFn = null;
          if (filterSlotFunction) {
            renderFn = h(
              "div",
              // @ts-expect-error
              filterSlotFunction({
                filterName: filterKey,
              }),
            );
          } else {
            const filterNode = filtersRenderMap[filterKey];
            renderFn = filterNode;
          }

          filtersVNodes.push(renderFn);
        }

        return filtersVNodes;
      }

      function renderFilters() {
        const filtersRaw = toValue(options.filter);

        let nodes: VNode[] = [];
        if (collapsable.value) {
          const permanentFilters = Object.entries(filtersRaw)
            .filter(([key, definition]) => !toValue(definition.collapsable))
            .map(([key]) => key) as FilterName[];
          nodes = filtersToNodes(permanentFilters);
        } else {
          nodes = filtersToNodes(Object.keys(filtersRaw) as FilterName[]);
        }

        return h(VCardItem, { class: ["flex-row pa-1"] }, () =>
          h(VRow, { dense: true, class: ["mx-2 py-1 "] }, () => nodes),
        );
      }

      function renderCollapsableFilters() {
        if (!collapsable.value) {
          return undefined;
        }

        const filtersRaw = toValue(options.filter);
        const collapsableKey = Object.entries(filtersRaw)
          .filter(([key, definition]) => toValue(definition.collapsable))
          .map(([key]) => key) as FilterName[];

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
                () => filtersToNodes(collapsableKey),
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
                    renderCollapsableFilters(),
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
