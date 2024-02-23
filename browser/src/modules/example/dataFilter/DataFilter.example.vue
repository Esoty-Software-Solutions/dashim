<script setup lang="ts">
import { ref } from "vue";

import useDataFilters, {
  select,
  text,
  chips,
  range,
  type ChipsDataFilterItem,
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
// can pass various options to `enabled` to have programtic control over it
// or can be omitted and utilize "handles" of the composables

const firstNameEnabled = ref(true);
const firstName = ref("");

const lastNameEnabled = ref(true);
const lastName = ref("");

const citySingleCollapsable = ref(false);

const { FilterComponent, handles: handles1 } = useDataFilters({
  filter: {
    firstName: text({
      value: firstName,
      enabled: firstNameEnabled,
      // **IMPORTANT__ props is not reactive
      // must use a getter or a ref for reactive props
      props: {
        label: "First name",
        placeholder: "(e.g. John Dou)",
      },
    }),

    cityMultiple: select({
      value: cityMulti,

      enabled: cityMultiEnabled,

      props: {
        label: "City Multi",
        baseColor: "primary",
        items: cityItems,
        multiple: true,

        // return object rather than key is possible
        returnObject: true,
      },

      display: {
        sm: 6,
        md: 0,
      },
    }),

    citySingle: select({
      value: citySingle,
      collapsable: citySingleCollapsable,
      enableOnFocus: false,

      // notice this filter does not have an enabled ref passed

      // notice the getter so that props are reactive
      props: () => ({
        label: "Single City (enableOnFocus = false)",
        items: cityItems,
      }),
      display: {
        md: 0,
      },
    }),

    lastName: text({
      value: lastName,

      enabled: lastNameEnabled,

      props: {
        label: "Last name",
        placeholder: "name here..",
      },

      collapsable: true,

      display: {
        md: 6,
      },
    }),
  },
});

/* ***
 * Filter Group 2
 * ********* */

const chipValue = ref<string | null>(null);

const chipOptions: ChipsDataFilterItem<string>[] = [];

for (let i = 0; i < 20; i++) {
  chipOptions.push({
    value: `id-${i}`,
    title: "Item NO." + i,

    // per-single chip props
    chipProps: {
      color: i === 2 ? "blue" : undefined,
    },
  });
}

const rangeValue = ref<[number, number]>([20, 60]);

const { FilterComponent: FilterComponent2 } = useDataFilters({
  filter: {
    ranger: range({
      value: rangeValue,
      props: () => ({
        strict: true,
        step: 1,

        min: 20,
      }),

      commonFieldProps: () => ({
        variant: "outlined",
      }),

      label: "Price (LYD)",

      display: {
        md: 12,
      },
    }),
    chips: chips({
      value: chipValue,
      items: chipOptions,

      label: "Chips Filter label",

      props: () => ({
        color: "primary",
        variant: "tonal",
      }),

      // generic props passed down to every chip
      chipProps: () => ({
        label: true,
      }),
    }),

    texty: text({
      props: () => ({
        label: "Vuetify label",
      }),
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

      <VCardItem>
        <p>Last name: {{ lastName }}</p>
      </VCardItem>

      <VCheckboxBtn
        v-model="citySingleCollapsable"
        inline
        label="Make city single collapsable"
      />
      <VCardActions>
        <VBtn variant="plain" @click="firstNameEnabled = !firstNameEnabled"
          >Toggle First Name</VBtn
        >
      </VCardActions>
    </VCard>

    <VDivider class="my-4" />

    <FilterComponent2 />
    <VCardText>
      <VCardItem> Selected Chip Value: {{ chipValue }}. </VCardItem>

      <br />

      {{ rangeValue }}
    </VCardText>
  </VContainer>
</template>
