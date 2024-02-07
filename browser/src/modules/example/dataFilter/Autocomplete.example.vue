<script setup lang="ts">
import { ref } from "vue";

import useDataFilters, {
  autocomplete,
} from "@/modules/filter/composables/dataFilter";

/* ***
 * Filter Group 1
 * ********* */
const cityItems = [
  {
    title: "City A",
    value: 1,
  },
  {
    title: "City B",
    value: 2,
  },
];

const cityMulti = ref([]);
const cityMultiEnabled = ref(false);

const citySingle = ref<number | null>(null);
const citySingleCollapsable = ref(false);

const { FilterComponent, handles: handles1 } = useDataFilters({
  filter: {
    citySingle: autocomplete({
      value: citySingle,

      props: () => ({
        label: "City",
        items: cityItems,
      }),

      collapsable: citySingleCollapsable,
    }),
    cityMultiple: autocomplete({
      value: cityMulti,

      enabled: cityMultiEnabled,

      props: {
        label: "City (MultiO",
        items: cityItems,
        multiple: true,
        clearable: true,

        // return object rather than key is possible
        returnObject: true,
      },

      display: {
        sm: 6,
        md: 0,
      },
    }),
  },
});
</script>

<template>
  <VContainer>
    <FilterComponent />

    <VCard class="mt-2">
      <VCardItem>
        <p>City: {{ cityMulti }} | {{ cityMultiEnabled }}</p>
      </VCardItem>

      <VCardItem>
        <p>
          City Single: {{ citySingle }} | {{ handles1?.citySingle.enabled }}
        </p>
      </VCardItem>

      <VCheckboxBtn
        v-model="citySingleCollapsable"
        inline
        label="Make city single collapsable"
      />
    </VCard>

    <VDivider class="my-4" />
  </VContainer>
</template>
