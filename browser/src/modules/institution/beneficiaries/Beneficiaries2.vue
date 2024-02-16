<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus } from "@mdi/js";

import useBeneficiariesStore from "../stores/beneficiariesStore2";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";
import CreateBeneficiariesModel from "@/modules/institution/components/CreateBeneficiariesModel.vue";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionsBeneficiariesPage",
});
const { t } = useI18n();
const store = toRefs(useBeneficiariesStore());
// console.log(store.items.value);
let selected = ref([""]);
let selectedCount = ref(0);
let expanded = ref([]);

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

watch(
  () => ({ ...store.binding.value }),
  () => {
    console.log("items updated");
    selected.value = [];
    selectedCount.value = 0;
  },
);
// actions
function onSelected() {
  // benefeciaryTableList
  // selected.value = store.binding.value.items
  // selected.value
  console.log(selected.value);
  selectedCount.value = selected.value.length;
}
function refresh() {
  store.triggerFetch.value();
}
function selectAll() {
  // benefeciaryTableList
  selected.value = store.binding.value.items.map((item) => item.id);
  selectedCount.value = store.binding.value.itemsLength;

  console.log(selected.value);
}
function openACreateBeneficiaryDialog() {
  store.dialog.value = !store.dialog.value;
}
function paginated() {
  console.log("paginated");

  // benefeciaryTableList
  selected.value = [];
  selectedCount.value = 0;
}
function closeDialiog() {
  store.dialog.value = false;
}

// table headers
const headers = ref<TableHeader[]>([
  { text: "", value: "data-table-expand", width: "2.7rem" },
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
  // {
  //   title: t("common.birthDate"),
  //   key: "birthDate",
  //   sortable: false,
  //   width: "2.7rem",
  // },
  // {
  //   title: t("common.genderId"),
  //   key: "genderId",
  //   sortable: false,
  //   width: "2.7rem",
  // },
  // {
  //   title: t("common.relationshipId"),
  //   key: "relationshipId",
  //   sortable: false,
  //   width: "2.7rem",
  // },
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
    title: t("common.city"),
    key: "city",
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
  <CreateBeneficiariesModel
    :dialog="store.dialog.value"
    @update-dialog="closeDialiog"
  />
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>
    <template #actions>
      <VCardActions>
        {{ selectedCount }}
        <!-- {{ selected.length }} {{ store.binding.value.itemsLength }} -->
        <VBtn @click="selectAll">Select All 2</VBtn>
        <VBtn @click="refresh">refresh</VBtn>
        <VSpacer />
        <VBtn
          color="primary"
          variant="plain"
          @click="openACreateBeneficiaryDialog"
        >
          <span>{{ t("institution.beneficiaries.newBeneficiary") }}</span>
          <VIcon end :icon="mdiPlus" />
        </VBtn>
      </VCardActions>
    </template>
    <template #table>
      <VDataTableServer
        v-model="selected"
        v-bind="store.binding.value"
        v-model:expanded="expanded"
        :item-value="(item) => item.id"
        show-select
        :headers="headers"
        @input="onSelected"
        @update:page="paginated"
        @update:items-per-page="paginated"
      >
        <!-- // item.beneficiaries
            //   .filter(
            //     (beneficiary) =>
            //       beneficiary.relationshipId == "xj7v171tl8bcd2co7g7k2kwq",
            //   )
            //   .map((b) => b.firstName)[0] -->
        <template #item.name="{ item }">
          {{ item.beneficiaries[0]?.firstName }}

          <!-- {{ item.firstName }} {{ item.secondName }} {{ item.thirdName }}
          {{ item.lastName }} -->
        </template>
        <template #expanded-row="{ columns, item }">
          <td :colspan="columns.length">
            <v-table
              density="compact"
              class="emdedded-table"
              :colspan="columns.length"
            >
              <thead>
                <tr>
                  <th class="text-left thembedded-table">
                    {{ t("common.name") }}
                  </th>
                  <th class="text-left">{{ t("common.birthDate") }}</th>
                  <th class="text-left">{{ t("common.relationshipId") }}</th>
                  <th class="text-left">{{ t("common.creationDate") }}</th>
                  <th class="text-left">{{ t("common.updatedAt") }}</th>
                  <th class="text-left">{{ t("common.status") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="beneficiary in item.beneficiaries"
                  :key="beneficiary.id"
                >
                  <td>
                    {{ beneficiary.firstName }} {{ beneficiary.lastName }}
                  </td>
                  <td>
                    {{ new Date(beneficiary.birthDate).toLocaleDateString() }}
                  </td>
                  <td>{{ beneficiary.relationshipId }}</td>
                  <td>
                    {{ new Date(beneficiary.createdAt).toLocaleDateString() }}
                  </td>
                  <td>
                    {{ new Date(beneficiary.updatedAt).toLocaleDateString() }}
                  </td>

                  <td>
                    <VChip :color="beneficiary.isActive ? 'primary' : 'error'">
                      {{ beneficiary.isActive ? "Active" : "Inactive" }}
                    </VChip>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <VDivider />
          </td>
        </template>
        <template #item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleDateString() }}
        </template>
        <template #item.updatedAt="{ item }">
          {{ new Date(item.updatedAt).toLocaleDateString() }}
        </template>
        <template #item.city="{ item }">
          {{ item.city?.name }}
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
