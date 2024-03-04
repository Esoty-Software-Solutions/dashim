<script setup lang="ts">
import { ref, toRefs, computed, watch, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiPencil, mdiDelete } from "@mdi/js";

import useBeneficiariesStore from "../stores/beneficiariesStore";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionsBeneficiariesPage",
});
const CreateBeneficiaryModel = defineAsyncComponent(
  () => import("@/modules/institution/components/CreateBeneficiaryModel.vue"),
);
const EditBeneficiaryModel = defineAsyncComponent(
  () => import("@/modules/institution/components/EditBeneficiaryModel.vue"),
);
const { t } = useI18n();
const store = toRefs(useBeneficiariesStore());
// console.log(store.binding.value.items);
let selected = ref([""]);
let selectedCount = ref(0);
const benefeciaryTableList = ref(null);
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
function onSelected($event) {
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
function paginated() {
  console.log("paginated");

  // benefeciaryTableList
  selected.value = [];
  selectedCount.value = 0;
}
function openACreateBeneficiaryDialog() {
  store.dialog.value = !store.dialog.value;
}
function closeDialiog(dialogType) {
  if (dialogType == "add") {
    store.dialog.value = false;
  }
  if (dialogType == "edit") {
    store.editDialog.value = false;
  }
}
function editItem(item) {
  store.editDialog.value = !store.editDialog.value;
  store.editedItem = item;
}
function deleteItem(item) {
  deleteDialog.value = true;
}
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
    width: "200",
    align: "center",
  },
]);
</script>

<template>
  <CreateBeneficiaryModel
    v-if="store.dialog.value"
    :dialog="store.dialog.value"
    @update-dialog="closeDialiog('add')"
  />
  <EditBeneficiaryModel
    v-if="store.editDialog.value"
    :dialog="store.editDialog.value"
    :beneficiary="store.editedItem"
    @update-dialog="closeDialiog('edit')"
  />
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>
    <template #actions>
      <VCardActions>
        {{ selectedCount }}
        <!-- {{ selected.length }} {{ store.binding.value.itemsLength }} -->
        <VBtn @click="selectAll">Select All</VBtn>
        <VBtn @click="refresh">refresh</VBtn>
        <VSpacer />
        <!-- @click="openACreateBeneficiaryDialog" -->
        <VBtn color="primary" variant="plain">
          <span>{{ t("institution.beneficiaries.newbeneficiary") }}</span>
          <VIcon end :icon="mdiPlus" />
        </VBtn>
      </VCardActions>
    </template>
    <template #table>
      <VDataTableServer
        ref="benefeciaryTableList"
        v-model="selected"
        :item-value="(item) => item.id"
        show-select
        :headers="headers"
        v-bind="store.binding.value"
        @input="onSelected($event)"
        @update:page="paginated"
        @update:items-per-page="paginated"
      >
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
        <template #item.actions="{ item }">
          <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiPencil"
            @click="editItem(item)"
          />
          <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiDelete"
            @click="deleteItem(item)"
          />
        </template>
      </VDataTableServer>
    </template>
  </DataPageBase>
</template>
