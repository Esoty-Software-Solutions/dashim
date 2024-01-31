import type { MaybeRefOrGetter } from "vue";

import type { DisplayBreakpoint } from "vuetify";

export type DataFiltersDisplay = Partial<
  Record<DisplayBreakpoint, number | string>
>;

export interface DataFilterBase {
  /**
   * Per-filter display config. Overrides the global config
   */
  display?: DataFiltersDisplay;

  collapsable?: MaybeRefOrGetter<boolean>;

  /**
   * Displays a label for filters that do not have a label by design (Chips or toggles)
   */
  label?: MaybeRefOrGetter<string>;

  /**
   * Enable if the border around the filter "content" other than the toggle area should be handled internally
   */
  contentBorder?: boolean;

  enabled?: MaybeRefOrGetter<boolean>;

  /**
   * @default true
   */
  enableOnFocus?: MaybeRefOrGetter<boolean>;
}

export interface DataFilterInjection {
  /**
   * Update value
   */
  update: (...args: any[]) => void;

  /**
   *
   */
  enabled: Ref<boolean>;
  setEnabled: (value: boolean) => void;

  focused: Ref<boolean>;
  setFocus(value?: boolean): void;

  /**
   *
   */
  hovered: Ref<boolean>;
  hoverIn(): void;

  hoverOut(): void;
}
