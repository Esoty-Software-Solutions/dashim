<script setup lang="ts">
import { ref, toRefs, computed, watch, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus } from "@mdi/js";

import useNetworkStore from "../stores/networkStore";

import DataPageBase from "@/modules/dataPage/DataPageSplitLayout.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionsNetworkPage",
});
const { t } = useI18n();
const store = toRefs(useNetworkStore());
// console.log(store.binding.value.items);
let selected = ref([""]);
let selectedCount = ref(0);
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
const { FilterComponent: instituteFilter } = useDataFilters({
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
  () => ({ ...store.medicalCenterBinding.value }),
  () => {
    console.log("items updated");
    selected.value = [];
    selectedCount.value = 0;
  },
);
watchEffect(
  () =>
    (store.insurancePolicyMedicalCenterIds.value =
      store.insurancePolicyMedicalCenterItems.value.map(
        (item) => item.medicalCenterId,
      )),
);
// actions
function onSelected($event) {
  // selected.value = store.binding.value.items
  // selected.value
  console.log(selected.value);
  selectedCount.value = selected.value.length;
}
function refresh() {
  store.medicalCenterTriggerFetch.value();
}
function selectAll() {
  selected.value = store.medicalCenterBinding.value.items.map(
    (item) => item.id,
  );
  selectedCount.value = store.medicalCenterBinding.value.itemsLength;

  console.log(selected.value);
}
// function handleClick(event, row) {
//   store.selectedInstitutionId.value = row.item.id;
//   // console.log("Clicked item: ", row.item.id);
// }

// table headers
const institutionHeaders = ref<TableHeader[]>([
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
]);
const insurancePoliciesHeaders = ref<TableHeader[]>([
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
]);
const headers = ref<TableHeader[]>([
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
  {
    title: t("common.actions"),
    key: "actions",
    sortable: false,
    width: "1rem",
    align: "center",
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
]);
</script>

<template>
  <VContainer
    ref="container"
    v-bind="$attrs"
    fluid
    class="d-flex px-2 py-1 ga-1 flex-column h-100"
  >
    <VDefaultsProvider
      :defaults="{
        VSheet: {
          elevation: 1,
        },
        VDataTableServer: {
          class: ['elevation-1'],
        },
        VCol: {
          class: ['m-1'],
        },
      }"
    >
      <VRow>
        <VCol cols="4">
          <VDefaultsProvider
            :defaults="{
              VDataTableServer: {
                class: ['mt-1'],
                style: 'flex: 1 1 0; min-height: 0;',
                fixedHeader: true,
                fixedFooter: true,
                hover: true,
                color: 'primary',
              },
            }"
          >
            <!-- institutions  table -->

            <VDataTableServer
              :item-value="(item) => item.id"
              :headers="institutionHeaders"
              v-bind="store.institutionBinding.value"
              @click:row="
                (event, row) => {
                  store.selectedInstitutionId.value = row.item.id;
                }
              "
            >
              <template #item.name="{ item }">
                <tr
                  :class="{
                    'text-primary':
                      item.id == store.selectedInstitutionId.value,
                  }"
                >
                  <td>{{ item.name }}</td>
                </tr>
              </template>
              <template #bottom />
            </VDataTableServer>
            <!-- insurance policies table -->
            <VDataTableServer
              v-if="store.selectedInstitutionId.value"
              :item-value="(item) => item.id"
              :headers="insurancePoliciesHeaders"
              v-bind="store.insurancePoliciesBinding.value"
              @click:row="
                (event, row) => {
                  store.selectedInsurancePolicyId.value = row.item.id;
                }
              "
            >
              <template #item.name="{ item }">
                <tr
                  :class="{
                    'text-primary':
                      item.id == store.selectedInsurancePolicyId.value,
                  }"
                >
                  <td>{{ item.name }}</td>
                </tr>
              </template>
              <template #bottom />
            </VDataTableServer>
          </VDefaultsProvider> </VCol
        ><VCol>
          <VSheet>
            <instituteFilter />
          </VSheet>
          <VSheet class="my-1">
            <VCardActions>
              {{ selectedCount }}
              <VBtn @click="selectAll">Select All</VBtn>
              <VBtn @click="refresh">refresh</VBtn>
              <VSpacer />
              <VBtn color="primary" variant="plain">
                <span>{{ t("institution.network.newMedicalCenter") }}</span>
                <VIcon end :icon="mdiPlus" />
              </VBtn>
            </VCardActions>
          </VSheet>
          <VDataTableServer
            v-model="selected"
            show-select
            :item-value="(item) => item.id"
            :headers="headers"
            v-bind="store.medicalCenterBinding.value"
            @input="onSelected($event)"
          >
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
            <!-- <template #item.name="{ item }">
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
        </template> -->
          </VDataTableServer>
        </VCol>
      </VRow>
    </VDefaultsProvider>
  </VContainer>
</template>
