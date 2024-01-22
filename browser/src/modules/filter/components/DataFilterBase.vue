<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { ref } from "vue";

const props = defineProps<{
  enabled?: boolean;

  focused?: boolean;
}>();

const emit = defineEmits<{
  "update:enabled": [value: boolean];
}>();

const hoverEl = ref<HTMLDivElement | null>(null);
const hovered = useElementHover(hoverEl);
</script>

<template>
  <div
    class="d-flex d-data-filter-base"
    :class="[
      focused ? 'd-data-filter-base--focused' : undefined,
      enabled ? 'd-data-filter-base--enabled' : 'd-data-filter-base--disabled',
      hovered ? 'd-data-filter-base--hovered' : undefined,
    ]"
  >
    <VSheet
      width="12"
      class="d-data-base-filter__toggle h-100 rounded-s"
      :color="enabled ? 'primary' : undefined"
      style="cursor: pointer"
      @click="emit('update:enabled', !enabled)"
    />

    <div ref="hoverEl" class="flex-grow-1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "vuetify/_settings";

.d-data-base-filter__toggle {
  cursor: pointer;
}
.d-data-filter-base--disabled .d-data-base-filter__toggle {
  border: rgba(var(--v-theme-primary), 0.38) solid 1px;
}

// TODO: make use of vuetify's border width and opacity instead of hardcoding

.d-data-filter-base--hovered .d-data-base-filter__toggle {
  border-color: rgba(var(--v-theme-primary), 1);
}

.d-data-filter-base--focused .d-data-base-filter__toggle {
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

.v-locale--is-ltr .d-data-base-filter__toggle {
  border-right-style: none;
}

.v-locale--is-rtl .d-data-base-filter__toggle {
  border-left-style: none;
}
</style>
