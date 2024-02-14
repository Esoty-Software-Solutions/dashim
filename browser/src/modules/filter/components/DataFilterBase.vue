<script setup lang="ts">
import { computed } from "vue";

import { useDefaults } from "vuetify";

const vuetifyDefaultProps = useDefaults(undefined, "DataFilterBase");

const props = defineProps<{
  label?: string;
  enabled?: boolean;

  focused?: boolean;

  contentBorder?: boolean;
}>();

const emit = defineEmits<{
  "update:enabled": [value: boolean];
}>();

const classBinding = computed(() => {
  return [
    {
      "d-data-filter-base--bordered-content": props.contentBorder,
      "v-field--focused": props.focused,
      "v-field--active": props.contentBorder,
    },

    `d-data-filter-base--density-${vuetifyDefaultProps.density}`,
    props.enabled
      ? "d-data-filter-base--enabled"
      : "d-data-filter-base--disabled",
  ];
});
</script>

<template>
  <div>
    <div class="d-data-filter-base d-flex" :class="classBinding">
      <VSheet
        elevation="0"
        class="d-data-filter-base__toggle flex-shrink-0 rounded-s text-primary"
        :color="enabled ? 'primary' : undefined"
        style="cursor: pointer"
        @click="emit('update:enabled', !enabled)"
      />

      <div
        style="min-width: 0"
        class="d-data-filter-base__content d-data-filter-base__input flex-grow-1"
        :class="contentBorder ? 'rounded-e' : undefined"
      >
        <slot />
      </div>

      <!-- outline region (inspired/copied from vuetify VField) -->
      <div class="d-data-filter-base__outline text-primary">
        <div class="d-data-filter-base__outline__start" />
        <div class="d-data-filter-base__outline__notch">
          <slot name="label" :enabled="props.enabled" :focused="focused">
            <VFieldLabel v-if="label" floating>
              {{ label }}
            </VFieldLabel>
          </slot>
        </div>

        <div class="d-data-filter-base__outline__end" />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@use 'sass:selector'
@use 'vuetify/_settings' as *
@use 'vuetify/_tools'

$toggle-area-width: $field-control-affixed-padding
$outline-start-width: $toggle-area-width + 8px

.d-data-filter-base
  --v-field-border-width: #{$field-border-width}
  --v-field-border-opacity: #{$field-outline-opacity}

  --v-field-padding-start: #{$field-control-padding-start}
  --v-field-padding-end: #{$field-control-padding-end}
  --v-field-padding-top: #{$field-control-padding-top}
  --v-field-padding-bottom: #{$field-control-padding-bottom}
  // --v-field-input-padding-top: #{$field-input-padding-top}
  --v-field-input-padding-top: 0px
  --v-field-input-padding-bottom: #{$field-input-padding-bottom}

  @at-root
    @include tools.density('d-data-filter-base', $input-density) using ($modifier)
      --v-input-control-height: #{$input-control-height + $modifier}
      --v-input-padding-top: #{16px + $modifier * .5}

  border-radius: $field-border-radius
  contain: layout
  position: relative

  &__content
    display: flex
    align-items: center

  // .d-data-filter-base__input
  &__input
    align-items: center
    color: inherit
    column-gap: 2px
    opacity: var(--v-high-emphasis-opacity)
    min-height: $field-input-min-height
    min-width: 0


  @at-root
    @media (hover: hover)
      #{selector.append('.d-data-filter-base:hover', &)}
        --v-field-border-opacity: var(--v-high-emphasis-opacity)


    #{selector.append('.v-field--focused', &)}
      --v-field-border-opacity: 1

    #{selector.append('.v-field--focused', &)}
      --v-field-border-width: #{$field-focused-border-width}

  &__toggle
    width: $toggle-area-width
    position: relative
    cursor: pointer

    &::before
      content: ''
      position: absolute
      inset: 0
      border-radius: inherit
      border-width: var(--v-field-border-width)
      opacity:  var(--v-field-border-opacity)
      border-style: solid
      transition: opacity $field-subtle-transition-timing

      .v-locale--is-ltr &
        border-right-style: none

      .v-locale--is-rtl &
        border-left-style: none

.d-data-filter-base.d-data-filter-base--bordered-content
  // region OUTLINE
  &  .d-data-filter-base__outline
    align-items: stretch
    contain: layout
    display: flex
    bottom: 0
    left: 0
    pointer-events: none
    position: absolute
    right: 0
    top: 0
    border-radius: inherit
    box-sizing: border-box

    &__start,
    &__notch::before,
    &__notch::after,
    &__end
      border: 0 solid currentColor
      opacity: var(--v-field-border-opacity)
      transition: opacity $field-subtle-transition-timing

    &__start
      flex: 0 0 $outline-start-width
      border-top-width: var(--v-field-border-width)
      border-bottom-width: var(--v-field-border-width)
      border-inline-start-width: var(--v-field-border-width)
      border-start-start-radius: inherit
      border-start-end-radius: 0
      border-end-end-radius: 0
      border-end-start-radius: inherit

      @at-root
        #{selector.append('.v-field--rounded', &)},
        #{selector.append('[class^="rounded-"]', &)},
        #{selector.append('[class*=" rounded-"]', &)}
          flex-basis: calc(var(--v-input-control-height) / 2 + 2px)

    &__notch
      // flex: none
      position: relative
      max-width: calc(100% - $field-control-affixed-padding)

      &::before,
      &::after
        opacity: var(--v-field-border-opacity)
        transition: opacity $field-subtle-transition-timing

        position: absolute
        content: ''
        top: 0
        left: 0
        width: 100%
        height: 100%

      &::before
        border-width: var(--v-field-border-width) 0 0

      &::after
        bottom: 0
        border-width: 0 0 var(--v-field-border-width)

      @at-root #{selector.append('.v-field--active', &)}
        &::before
          opacity: 0

    &__end
      flex: 1
      border-top-width: var(--v-field-border-width)
      border-bottom-width: var(--v-field-border-width)
      border-inline-end-width: var(--v-field-border-width)
      border-start-start-radius: 0
      border-start-end-radius: inherit
      border-end-end-radius: inherit
      border-end-start-radius: 0

    // region LABEL
    &  .v-label.v-field-label
      contain: layout paint
      display: block
      margin-inline-start: calc(var(--v-field-padding-start))
      margin-inline-end: var(--v-field-padding-end)
      max-width: calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end))
      pointer-events: none
      position: absolute
      top: var(--v-input-padding-top)
      transform-origin: left center
      transition: $field-transition-timing
      transition-property: opacity, transform
      z-index: 1

      @at-root
        #{selector.append('.v-field--center-affix', &)}
          top: 50%
          transform: translateY(-50%)

        #{selector.append('.v-field--active', &)}
          visibility: hidden

        #{selector.append('.v-field--focused ', &)}
          opacity: 1

      &--floating
        --v-field-label-scale: #{$field-label-floating-scale}em
        font-size: var(--v-field-label-scale)
        visibility: hidden
        max-width: 100%
        transform: translateY(-50%)
        transform-origin: center
        position: static
        margin: 0 8px

        @at-root
          #{selector.append('.v-field--center-affix', &)}
            transform: none

          #{selector.append('.v-field--active', &)}
            visibility: unset

      // end region
  // end region
  & .d-data-filter-base__toggle
    &::before
      .v-locale--is-ltr &
        border-style: none solid none none

      .v-locale--is-rtl &
        border-style: none none none solid


// Remove the border adjacent to the toggle area
.d-data-filter-base
  &__content  .v-field

    .v-locale--is-ltr &
      border-bottom-left-radius: 0
      border-top-left-radius: 0


    .v-locale--is-rtl &
      border-bottom-right-radius: 0
      border-top-right-radius: 0
</style>
