<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { computed, ref } from "vue";

const props = defineProps<{
  enabled?: boolean;

  focused?: boolean;

  contentBorder?: boolean;
}>();

const emit = defineEmits<{
  "update:enabled": [value: boolean];
}>();

const hoverEl = ref<HTMLDivElement | null>(null);
const hovered = useElementHover(hoverEl);

const classBinding = computed(() => {
  return [
    {
      "d-data-filter-base--focused": props.focused,
      "d-data-filter-base--hovered": hovered.value,
      "d-data-filter-base--bordered-content": props.contentBorder,
    },
    props.enabled
      ? "d-data-filter-base--enabled"
      : "d-data-filter-base--disabled",
  ];
});
</script>

<template>
  <div class="d-flex d-data-filter-base" :class="classBinding">
    <VSheet
      width="12"
      elevation="0"
      class="d-data-filter-base__toggle h-100 flex-shrink-0 rounded-s"
      :color="enabled ? 'primary' : undefined"
      style="cursor: pointer"
      @click="emit('update:enabled', !enabled)"
    />

    <div
      ref="hoverEl"
      style="max-width: 100%"
      class="d-data-filter-base__content flex-grow-1"
      :class="contentBorder ? 'rounded-e' : undefined"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "vuetify/_settings";

.d-data-filter-base__toggle {
  cursor: pointer;
}
.d-data-filter-base--disabled .d-data-filter-base__toggle,
.d-data-filter-base--bordered-content .d-data-filter-base__content {
  border: rgba(var(--v-theme-primary), 0.38) solid 1px;
}

// TODO: make use of vuetify's border width and opacity instead of hardcoding

.d-data-filter-base--hovered .d-data-filter-base__toggle,
// eslint-disable-next-line prettier/prettier
.d-data-filter-base--hovered.d-data-filter-base--bordered-content .d-data-filter-base__content {
  border-color: rgba(var(--v-theme-primary), 1);
}

.d-data-filter-base--focused .d-data-filter-base__toggle,
// eslint-disable-next-line prettier/prettier
.d-data-filter-base--focused.d-data-filter-base--bordered-content .d-data-filter-base__content {
  border-color: rgba(var(--v-theme-primary), 1);
  border-width: 2px;
}
</style>
<style>
/*
 * Remove the border adjacent to the toggle area
 */
.v-locale--is-ltr .d-data-filter-base .v-field {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.v-locale--is-rtl .d-data-filter-base .v-field {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.v-locale--is-ltr .d-data-filter-base__toggle {
  border-right-style: none;
}

.v-locale--is-rtl .d-data-filter-base__toggle {
  border-left-style: none;
}
</style>
