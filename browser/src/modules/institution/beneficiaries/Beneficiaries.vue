<script setup lang="ts">
import { ref, toRefs, computed } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus } from "@mdi/js";

import useBeneficiariesStore from "../stores/beneficiariesStore";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionsBeneficiariesPage",
});
const { t } = useI18n();
const store = toRefs(useBeneficiariesStore());
// console.log(store.binding.value.items);
const { FilterComponent } = useDataFilters({
  sheetProps: {
    elevation: 0,
  },
  filter: {
    firstName: text({
      value: store.nameFilter,
      enabled: store.nameFilterEnabled,
      enableOnFocus: false,
      props: {
        label: "Name",
      },
      display: {
        md: 8,
      },
    }),
  },
});

// table headers
const headers = ref<TableHeader[]>([
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
  {
    title: t("common.birthDate"),
    key: "birthDate",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.genderId"),
    key: "genderId",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.relationshipId"),
    key: "relationshipId",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.creationDate"),
    key: "createdAt",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.updatedAt"),
    key: "updatedAt",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.status"),
    key: "isActive",
    sortable: false,
    align: "center",
    width: "0.5rem",
  },
  {
    title: t("common.actions"),
    key: "actions",
    sortable: false,
    width: "1rem",
    align: "center",
  },
]);
</script>

<template>
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>
    <template #actions>
      <VCardActions>
        <VBtn>Action 1</VBtn>
      </VCardActions>
    </template>
    <template #table>
      <VDataTableServer :headers="headers" v-bind="store.binding.value">
        <template #item.name="{ item }">
          {{ item.firstName }} {{ item.secondName }} {{ item.thirdName }}
          {{ item.lastName }}
        </template>
        <template #item.birthDate="{ item }">
          {{ new Date(item.birthDate).toLocaleDateString() }}
        </template>
        <template #item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleDateString() }}
        </template>
        <template #item.updatedAt="{ item }">
          {{ new Date(item.updatedAt).toLocaleDateString() }}
        </template>
        <template #item.isActive="{ item }">
          <VChip :color="item.isActive ? 'primary' : 'error'">
            {{ item.isActive ? "Active" : "Inactive" }}
          </VChip>
        </template>
      </VDataTableServer>
    </template>
  </DataPageBase>
</template>
