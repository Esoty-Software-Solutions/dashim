<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { computed, ref } from "vue";

const props = defineProps<{
  label?: string;
  enabled?: boolean;

  active?: boolean;
  focused?: boolean;
}>();

const emit = defineEmits<{
  "update:enabled": [value: boolean];
}>();

const hoverEl = ref<HTMLDivElement | null>(null);
const hovered = useElementHover(hoverEl);

const classBinding = computed(() => {
  return [
    {
      "d-data-filter-input--focused": props.focused,
      "d-data-filter-input--hovered": hovered.value,
    },
    props.enabled
      ? "d-data-filter-input--enabled"
      : "d-data-filter-input--disabled",
  ];
});
</script>

<template>
  <VInput :class="classBinding" class="d-data-filter-input">
    <template #prepend>
      <VSheet
        width="12"
        height="100%"
        elevation="0"
        class="d-data-filter-input__toggle flex-shrink-0 rounded-s"
        :color="enabled ? 'primary' : undefined"
        @click="emit('update:enabled', !enabled)"
      />
    </template>
    <VField
      ref="hoverEl"
      :label="label"
      color="primary"
      dirty
      :focused="focused"
      variant="outlined"
    >
      <!-- label -->
      <template v-if="$slots.label" #label="binding">
        <slot
          name="label"
          v-bind="binding"
          :enabled="props.enabled"
          :focused="focused"
          :hovered="hovered"
        />
      </template>

      <!-- input area -->
      <template #default>
        <slot name="default" />
      </template>
    </VField>
  </VInput>
</template>

<style>
.d-data-filter-input.v-input--horizontal .v-input__prepend {
  margin-inline: 0 !important;
  margin-block: 0 !important;
}

/*
 * Remove the border radius adjacent to the toggle area
 */
.d-data-filter-input .v-field.v-locale--is-ltr {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.d-data-filter-input .v-field.v-locale--is-rtl {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
</style>

<!--  -->
<style scoped lang="scss">
@use "vuetify/_settings";

.d-data-filter-input__toggle {
  cursor: pointer;
  transition: settings.$field-transition-timing;
  transition-property: border-color;
}
.d-data-filter-input--disabled .d-data-filter-input__toggle {
  border: rgba(var(--v-theme-primary), settings.$field-outline-opacity) solid
    settings.$field-border-width;
}

// TODO: make use of vuetify's border width and opacity instead of hardcoding

.d-data-filter-input--hovered .d-data-filter-input__toggle {
  border-color: rgba(var(--v-theme-primary), 1);
}

.d-data-filter-input.v-locale--is-ltr .d-data-filter-input__toggle {
  border-right-style: none;
}

.d-data-filter-input.v-locale--is-rtl .d-data-filter-input__toggle {
  border-left-style: none;
}
</style>

<style>
/* Users of this component should have this class for proper sizing*/
.d-data-filter-input__input {
  align-items: center;
  color: inherit;
  column-gap: 2px;
  letter-spacing: 0.009375em;
  opacity: var(--v-high-emphasis-opacity);
  min-height: max(
    var(--v-input-control-height, 56px),
    1.5rem + var(--v-field-input-padding-top) +
      var(--v-field-input-padding-bottom)
  );
  min-width: 0;
}
</style>
