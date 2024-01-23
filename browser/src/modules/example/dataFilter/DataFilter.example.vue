<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { ref, watch } from "vue";

import DataFilterBase from "@/modules/filter/components/DataFilterBase.vue";
import useDataFilters, {
  select,
  text,
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

      props: {
        label: "Single City (enableOnFocus = false)",
        items: cityItems,
      },
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
        md: 12,
      },
    }),
  },
});

/* ***
 * Filter Group 2
 * ********* */

const myTable = ref<HTMLTableElement | null>(null);
const customFilterValue = ref<string>("");
const tableHovered = useElementHover(myTable);

const { FilterComponent: FilterComponent2, handles } = useDataFilters({
  // default display spec
  // overridable on field-level
  display: {
    sm: 6,
    md: 3,
  },

  // update style to be borderd
  sheetProps: {
    border: true,
  },

  filter: {
    exx: text({
      props: {
        label: "Width percentage example",
        placeholder: "First name filter example",
      },

      // override display at filter-level
      display: {
        sm: 4,
        md: 8,
      },

      value: lastName,
    }),

    table: text({
      value: customFilterValue,
      display: {
        md: 12,
      },
      props: {
        label: "Advanced search",
        placeholder: "This is a search placeholder",
      },
    }),
  },
});

watch(tableHovered, (value) =>
  value ? handles.value?.table.hoverIn() : handles.value?.table.hoverOut(),
);

function onTableClicked(event: PointerEvent) {
  if (event.target instanceof HTMLTableCellElement) {
    customFilterValue.value = event.target.textContent ?? "";
    // calling this update function is mandatory
    // this is considered as if the user interaction
    // updating the value ref is considered programmtic update and does not
    // trigger enable state changes
    handles.value?.table.update(event.target.textContent);
  }
}
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

    <FilterComponent2>
      <template #filter.table="{ focused, hovered, baseProps, wrapperClass }">
        <DataFilterBase v-bind="baseProps">
          <VTable
            ref="myTable"
            hover
            :class="[wrapperClass]"
            style="border: rgba(var(--v-theme-primary), 0.38) 0.8px solid"
            :style="{
              borderWidth: focused.value ? '2px' : '1px',
              borderColor: hovered.value
                ? 'rgba(var(--v-theme-primary), 1)'
                : 'rgba(var(--v-theme-primary), 0.38)',
            }"
            @click="onTableClicked"
          >
            <thead>
              <tr>
                <th>Col1</th>
                <th>Col2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First</td>
                <td>First</td>
              </tr>
              <tr>
                <td>Second</td>
                <td>Second</td>
              </tr>
            </tbody>
          </VTable>
        </DataFilterBase>
      </template>

      <template #append>
        Click on any cell of the table to set the filter value to its content
        <VSpacer />

        <VBtn>Optional append slot used</VBtn>
      </template>
    </FilterComponent2>

    <VCardText>
      <VCardItem>
        Table Text Filter: {{ customFilterValue }}. Enabled?:
        {{ handles?.table.enabled }}
      </VCardItem>
    </VCardText>
  </VContainer>
</template>
