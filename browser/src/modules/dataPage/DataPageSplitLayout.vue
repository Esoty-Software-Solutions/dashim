<script setup lang="ts">
import { VCol } from "vuetify/components";

// slots
defineSlots<{
  filters?: () => any;
  actions?: () => any;
  table?: () => any;
  stats?: () => any;
}>();
</script>

<template>
  <VContainer
    ref="container"
    v-bind="$attrs"
    fluid
    class="d-flex px-2 py-1 ga-1 flex-column h-100"
  >
    <VDefaultsProvider
      :defaults="{
        VSheet: {
          elevation: 1,
        },
        VDataTableServer: {
          class: ['elevation-1'],
        },
        VCol: {
          class: ['m-1'],
        },
      }"
    >
      <VRow>
        <VCol cols="4">
          <!-- <VSheet v-if="$slots.filters != null">
            <slot name="filters" />
          </VSheet>

          <VSheet v-if="$slots.actions != null">
            <slot name="actions" />
          </VSheet> -->

          <VDefaultsProvider
            :defaults="{
              VDataTableServer: {
                style: 'flex: 1 1 0; min-height: 0;',
                // fixedHeader: true,
                // fixedFooter: true,
                hover: true,
                color: 'primary',
              },
            }"
          >
            <slot name="table" />
          </VDefaultsProvider>

          <!--  -->

          <VSheet v-if="$slots.stats != null" class="mb-1">
            <slot name="stats" />
          </VSheet>
        </VCol>
        <VCol>
          <VSheet v-if="$slots.filters != null">
            <slot name="filters" />
          </VSheet>

          <VSheet v-if="$slots.actions != null">
            <slot name="actions" />
          </VSheet>

          <VDefaultsProvider
            :defaults="{
              VDataTableServer: {
                style: 'flex: 1 1 0; min-height: 0;',
                // fixedHeader: true,
                // fixedFooter: true,
                hover: true,
                color: 'primary',
              },
            }"
          >
            <slot name="table" />
          </VDefaultsProvider>
        </VCol>
      </VRow>
    </VDefaultsProvider>
  </VContainer>
</template>
