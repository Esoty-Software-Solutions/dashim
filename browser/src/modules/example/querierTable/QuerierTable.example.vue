<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { ref, toRefs, computed } from "vue";

import { useLayout, useDisplay } from "vuetify";
import { VCard, VContainer } from "vuetify/components";
import { VDataTableServer } from "vuetify/components/VDataTable";

import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import useStore from "./querierTableExampleStore";

const store = toRefs(useStore());

// filters
const { FilterComponent } = useDataFilters({
  filter: {
    id: text({
      value: store.idSearch,
      enabled: store.idEnabled,
      props: {
        label: "Search by id",
      },
    }),
  },
});

type VDataTableHeaders = VDataTableServer["$props"]["headers"];

const headers: VDataTableHeaders = [
  {
    title: "Dalil ID",
    sortable: true,
    key: "id",
    width: "10rem",
    cellProps: () => ({
      style: "max-width: 10rem",
    }),
  },
  {
    title: "Name",
    key: "fullName",
    width: "16%",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
  {
    title: "Relationship",
    key: "relationshipId",
    sortable: false,
    width: "4rem",
  },
  {
    title: "Creation Date",
    key: "createdAt",
    sortable: false,
    width: "2.4rem",
  },
  {
    title: "G.",
    key: "gender",
    sortable: false,
    width: "1rem",
    align: "center",
    headerProps: () => ({ title: "Gender" }),
  },
  {
    title: "Status",
    key: "isActive",
    sortable: false,
    align: "center",
    width: "0.5rem",
  },
];

// sizing & layout (see notice in template )
const container = ref<InstanceType<typeof VContainer> | null>(null);
const containerSize = useElementSize(container);

const { mainRect } = useLayout();
const { height } = useDisplay();
const availableSpace = computed(() => {
  return height.value - mainRect.value.top - mainRect.value.bottom;
});
</script>

<template>
  <VContainer
    ref="container"
    class="pa-0 d-flex justify-stretch align-stretch ga-2 flex-column"
    :style="{
      height: `${availableSpace}px`,
    }"
  >
    <!-- NOTICE: intention, no layout component is used.
      This example is focused on data table solely
      
      TODO: Another full-fledged "DataPage" example is to be created with proper layout 
     -->

    <FilterComponent />

    <VDataTableServer
      v-bind="store.binding.value"
      hover
      fixed-header
      fixed-footer
      :headers="headers"
      :items-per-page-options="[10, 12, 15, 25, 30, 50]"
      style="flex: 1 20px; overflow-y: auto"
      item-value="id"
      density="compact"
      color="primary"
    >
      <template #item.isActive="{ item }">
        <VChip :color="item.isActive ? 'primary' : 'error'">
          {{ item.isActive ? "Active" : "Inactive" }}
        </VChip>
      </template>
    </VDataTableServer>
  </VContainer>
</template>
