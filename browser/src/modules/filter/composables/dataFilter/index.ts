import {
  defineComponent,
  h,
  ref,
  mergeProps,
  shallowRef,
  toValue,
  type VNode,
  type MaybeRefOrGetter,
  type SlotsType,
  computed,
  readonly,
} from "vue";

import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import {
  VRow,
  VCardActions,
  VExpandTransition,
  VBtn,
  VIcon,
  VCardItem,
  VDefaultsProvider,
  VBadge,
  VSheet,
} from "vuetify/components";

import DataFilterBase from "../../components/DataFilterBase.vue";

import useProxiedRefOrGetter from "@/modules/shared/composables/proxiedRefOrGetter";

import { render as renderSelect, type SelectDataFilter } from "./selectFilter";
export { select } from "./selectFilter";
import { render as renderText, type TextDataFilter } from "./textFilter";
export { text } from "./textFilter";

import type { DataFiltersDisplay, DataFilterInjection } from "./types";
import type { Merge } from "@/utils";

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

type Icon = (typeof VIcon)["$props"]["icon"];

interface UseDataFiltersOptions<TFilter extends Record<string, DataFilter>> {
  filter: TFilter;

  title?: MaybeRefOrGetter<string>;

  sheetProps?: MaybeRefOrGetter<InstanceType<typeof VSheet>["$props"]>;

  collapsableIcon?: MaybeRefOrGetter<Icon>;
  collapsableActiveClass?: MaybeRefOrGetter<any>;
  /**
   * Icon to display when not-collapsed
   */
  collapsableActiveIcon?: MaybeRefOrGetter<Icon>;

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
    // @ts-expect-error
    const injections: {
      [Property in FilterName]: DataFilterInjection;
    } = {};

    for (const filterKey in options.filter) {
      const definition = options.filter[filterKey];
      const focusedRef = ref(false);
      const hoveredRef = ref(false);

      const enabled = useProxiedRefOrGetter(definition.enabled, false);

      injections[filterKey] = {
        update(...value: any[]) {
          enabled.value = true;

          emit("update:value", filterKey, ...value);
        },

        enabled,
        setEnabled(value) {
          enabled.value = value;
          emit("update:enabled", filterKey, value);
        },

        focused: focusedRef,
        setFocus(value) {
          focusedRef.value = value ?? true;

          // enable filter on hover (if option is set so)
          const enableOnFocus = toValue(definition.enableOnFocus) ?? true;
          if (enableOnFocus && value) {
            enabled.value = true;
          }
        },

        hovered: hoveredRef,
        hoverIn() {
          hoveredRef.value = true;
        },

        hoverOut() {
          hoveredRef.value = false;
        },
      };
    }

    return injections;
  }

  type NamedSlots = {
    [Property in FilterName as `filter.${Property}`]: Merge<
      {
        filterName: Property;
        /**
         * Ready-baked props to be passed to `DataFilterBase` component
         */
        baseProps: Record<string, any>;

        /**
         * Classes to be applied for proper sizing and fitting of wrapper
         */
        wrapperClass: any;
      },
      {
        [InjectKey in keyof DataFilterInjection]: DataFilterInjection[InjectKey];
      }
    >;
  };

  type SingleSlots = {
    append?: {};
  };

  type FilterSlots = SlotsType<Merge<NamedSlots, SingleSlots>>;

  const injections = shallowRef<ReturnType<typeof useFiltersInjections> | null>(
    null,
  );
  const FilterComponent = defineComponent({
    slots: Object as FilterSlots,

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
      const filterInjections = useFiltersInjections(
        emit as unknown as (event: string, ...args: any[]) => void,
      );
      injections.value = filterInjections;

      const collapsableFilters = computed(() => {
        const collapsibles: { [key in FilterName]?: DataFilter } = {};
        for (const key in options.filter) {
          const filter = options.filter[key];
          if (toValue(filter.collapsable)) {
            collapsibles[key] = filter;
          }
        }
        return collapsibles;
      });

      const enabledCollapsableFilter = computed(() =>
        Object.keys(collapsableFilters.value).some(
          (filterKey) => filterInjections[filterKey]?.enabled?.value,
        ),
      );

      /**
       * Whether there are collapsable filters or not
       */
      const collapsable = computed(
        (): boolean => Object.keys(collapsableFilters.value).length >= 1,
      );

      const internalCollapse = useProxiedRefOrGetter(
        options.collapse,
        false,
        (value) => emit("collapse", value ?? false),
      );

      // collapsable filters
      const collapsableRowClasses = computed(() => {
        const classList = [];
        if (collapsable.value && !internalCollapse.value) {
          classList.push("filter-toolbar-expanded");
        }
        return classList;
      });

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
        } // TODO: render other types of filters

        const baseProps = {
          enabled: toValue(injection.enabled),
          "onUpdate:enabled": (newValue: boolean) => {
            injection.setEnabled(newValue);
          },
          focused: toValue(injection.focused),

          class: [computeDisplayClasses(globalDisplay, definition.display)],
          [`data-filter-name`]: key,
        };
        const filterNamedSlot = slots?.[`filter.${key as FilterName}`];

        if (filterNamedSlot) {
          // @ts-expect-error
          return filterNamedSlot({
            filterName: key,

            wrapperClass: baseProps.class,
            baseProps,
            ...injection,
          });
        } else {
          // Wrap the rendered filter in a DataFilterBase

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
          h(VRow, { dense: true, class: ["mx-2 my-0 py-1 "] }, () => nodes),
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
                  class: ["mx-2 my-0 py-2", collapsableRowClasses.value],
                },
                () => nodes,
              ),
          ),
        ]);
      }

      function collapsableButton(): VNode | undefined {
        // executed in render context
        if (!collapsable.value) {
          return;
        }

        /* eslint-disable @typescript-eslint/no-unsafe-assignment */
        const providedActive = toValue(options.collapsableActiveIcon);
        const providedInactive = toValue(options.collapsableIcon);
        let icon = providedInactive ?? mdiChevronDown;
        if (!internalCollapse.value) {
          // active state

          if (providedActive) {
            icon = providedActive;
          } else if (providedInactive) {
            icon = providedInactive;
          } else {
            icon = mdiChevronUp;
          }
        }
        /* eslint-disable @typescript-eslint/no-unsafe-assignment */

        return h(
          VBtn,
          {
            icon: true,
            variant: "plain",
            class: ["me-2 mt-4"],
            onClick: () => (internalCollapse.value = !internalCollapse.value),
          },
          () => [
            // show badge when collapsable filters are there
            h(
              VBadge,
              {
                color: "primary",
                dot: true,
                modelValue: enabledCollapsableFilter.value,
              },
              () =>
                h(VIcon, {
                  icon,
                }),
            ),
          ],
        );
      }

      function appendSlot(): VNode | undefined {
        if (slots.append) {
          return h(
            VCardActions,
            { "data-filter-append": true, class: "data-filter__append" },
            // @ts-expect-error
            () => slots.append(),
          );
        }
      }

      return () => {
        const title = toValue(options.title);
        return h(
          VSheet,
          mergeProps(
            {
              color: "surface",
              density: "compact",
              class: ["d-data-filter"],
              tag: "section",
            },
            toValue(options.sheetProps) ?? {},
          ),
          () => [
            // content (title + filters + collapsable area + button)
            h("div", { class: "data-filter__content d-flex" }, [
              // title
              title
                ? h("h2", { class: "ms-2 pa-2 text-h6" }, title)
                : undefined,

              // filter bay (in the center)
              h(
                "div",
                { flat: true, class: "flex-grow-1" },
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
              collapsableButton(),
            ]),

            // append slots
            appendSlot(),
          ],
        );
      };
    },
  });

  return {
    FilterComponent,

    handles: readonly(injections),
  };
}

function computeDisplayClasses(
  globalConfig?: DataFilter["display"],
  filterConfig?: DataFilter["display"],
): string[] {
  const defaultClasses = ["v-col-12 v-col-sm-6 v-col-md-3"];

  function configToClasses(config: DataFilter["display"]): string[] {
    const classes: string[] = [];

    for (const key in config) {
      // @ts-expect-error
      const value = config[key];
      const classSuffix = value === 0 ? "" : `-${value}`;

      const breakpointClass =
        key === "xs" ? `v-col${classSuffix}` : `v-col-${key}${classSuffix}`;
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
