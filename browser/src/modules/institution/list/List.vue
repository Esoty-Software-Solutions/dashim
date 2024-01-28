<script setup lang="ts">
import { ref, toRefs, computed } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus } from "@mdi/js";

import useListStore from "../stores/storeList";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionListPage",
});

const { t } = useI18n();

const store = toRefs(useListStore());

/* ****
 *  filters
 * ********** */
const { FilterComponent } = useDataFilters({
  sheetProps: {
    elevation: 0,
  },
  filter: {
    name: text({
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
    title: t("common.creationDate"),
    key: "createdAt",
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
        <VBtn> Action 1 </VBtn>

        <VSpacer />
        <VBtn color="primary" variant="plain">
          <span>{{ t("institution.list.newInstitution") }}</span>
          <VIcon end :icon="mdiPlus" />
        </VBtn>
      </VCardActions>
    </template>

    <template #table>
      <VDataTableServer :headers="headers" v-bind="store.binding.value">
        <template #item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleDateString() }}
        </template>
        <template #item.isActive="{ item }">
          <VChip :color="item.isActive ? 'primary' : 'error'">
            {{ item.isActive ? "Active" : "Inactive" }}
          </VChip>
        </template>

        <template #item.actions>
          <VIcon :icon="mdiPlus" />
        </template>
      </VDataTableServer>
    </template>
  </DataPageBase>
</template>
