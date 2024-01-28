<script setup lang="ts">
import { ref } from "vue";

import { VDataTableServer } from "vuetify/components";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, {
  select,
  text,
} from "@/modules/filter/composables/dataFilter";

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
    key: "name",
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
    title: "Work ID",
    key: "workId",
    width: "10rem",
    cellProps: () => ({
      style: "max-width: 10rem",
    }),
  },
  {
    title: "Institute",
    key: "institute",
    sortable: false,
    width: "15%",
    align: "end",
  },
  {
    title: "Age",
    key: "age",
    sortable: false,
    width: "2.4rem",
    align: "center",
  },
];

const items = ref<any[]>([]);

for (let i = 0; i < 200; i++) {
  items.value.push({
    id: Math.ceil(Math.random() * 2),
    name: "John Doh",
  });
}

const firstName = ref("This is the first name");

const filterItems = [
  {
    id: 1,
    value: "This one",
  },
  {
    id: 2,
    value: "This two",
  },
];

const myChoice = ref();

const { FilterComponent } = useDataFilters({
  filter: {
    firstName: text({
      enabled: true,
      value: firstName,
      props: {
        label: "First Name",
      },
    }),
    city: select({
      value: myChoice,
      enabled: true,
      props: {
        label: "City",
        items: filterItems,
        itemValue: "id",
        itemTitle: "value",
        returnObject: true,
      },
    }),
  },
});
</script>

<template>
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>

    <template #actions>
      <VCardActions>
        <VBtn variant="plain">
          <span>Action 1</span>
        </VBtn>
      </VCardActions>
    </template>

    <template #table>
      <VDataTableServer
        :items-length="200"
        :headers="headers"
        :items-per-page-options="[10, 12, 15, 25, 30, 50]"
        :items="items"
        item-value="id"
        density="compact"
      />
    </template>

    <template #stats>
      <VCardText class="py-1"> Key: Value </VCardText>
    </template>
  </DataPageBase>
</template>
