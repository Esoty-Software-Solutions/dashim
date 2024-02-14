<script setup lang="ts">
import { ref } from "vue";

import DataFilterBase from "@/modules/filter/components/DataFilterBase.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

const myTable = ref<HTMLTableElement | null>(null);
const customFilterValue = ref<string>("");

const { FilterComponent, handles } = useDataFilters({
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
    table: text({
      contentBorder: true,
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
    <FilterComponent>
      <template #filter.table="{ baseProps, wrapperClass }">
        <DataFilterBase v-bind="baseProps" content-border>
          <VTable
            ref="myTable"
            hover
            :class="[wrapperClass]"
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
    </FilterComponent>

    <VCardText>
      <VCardItem>
        Table Text Filter: <strong>{{ customFilterValue }}</strong
        >. Enabled?:
        {{ handles?.table.enabled }}
      </VCardItem>
    </VCardText>
  </VContainer>
</template>
