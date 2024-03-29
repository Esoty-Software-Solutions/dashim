<script setup lang="ts">
import {
  ref,
  toRefs,
  computed,
  watch,
  watchEffect,
  unref,
  defineAsyncComponent,
} from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiClose, mdiDelete, mdiPencil } from "@mdi/js";

import useNetworkStore from "../stores/networkStore";

import DataPageBase from "@/modules/dataPage/DataPageSplitLayout.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import type { TableHeader } from "@/modules/shared/interfaces";

const AddMedicalCenterModel = defineAsyncComponent(
  () => import("@/modules/institution/components/AddMedicalCenterModel.vue"),
);
defineOptions({
  name: "InstitutionsNetworkPage",
});
const { t } = useI18n();
const store = toRefs(useNetworkStore());
const getInsurancePoliciesUnRef = unref(store.getInsurancePolicies);
// console.log(store.binding.value.items);
let selected = ref([""]);
let selectedCount = ref(0);
const deleteDialog = ref(false);

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
watchEffect(() => getInsurancePoliciesUnRef(store.selectedInstitutionId.value));
// actions
function onSelected($event) {
  console.log($event);

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
function openAddMedicalCenterDialog(item) {
  store.dialog.value = !store.dialog.value;
}
function closeDialiog() {
  console.log("closing dialog");

  store.dialog.value = false;
}
// function handleClick(event, row) {
//   store.selectedInstitutionId.value = row.item.id;
//   // console.log("Clicked item: ", row.item.id);
// }
function editItem(item) {
  console.log(item);
}
function deleteItem(id) {
  if (id && typeof id == "string") {
    store.deletedItems.value.push(id);
  }
  if (id && typeof id == "object") {
    store.deletedItems.value.push(...id);
  }
  deleteDialog.value = true;
}
async function deleteItemConfirm(item) {
  await store.deleteMedicalCenter.value();
  await store.insurancePolicyMedicalCenterTriggerFetch.value();
  closeDelete();
}
function closeDelete() {
  deleteDialog.value = false;
  store.deletedItems.value = [];
  // nextTick(() => {
  //   editedItem.value = Object.assign({}, defaultItem.value)
  //   editedIndex.value = -1
  // })
}
function insurancePolicyMedicalCenterTriggerFetch() {
  console.log("update policyId");

  store.insurancePolicyMedicalCenterTriggerFetch.value();
}
const selectedLength = computed(() => {
  return selected.value.length;
});
// table headers
const institutionHeaders = ref<TableHeader[]>([
  {
    title: `${t("common.institution")}  ${t("common.name")}`,
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
]);
const insurancePoliciesHeaders = ref<TableHeader[]>([
  {
    title: `${t("common.insurancePolicy")}  ${t("common.name")}`,
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
]);
const headers = ref<TableHeader[]>([
  {
    title: `${t("common.medicalCenter")}  ${t("common.name")}`,
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
    width: "150",
    align: "center",
  },
]);
// onMounted(() => {
//   store.value.getInstitutions();
// });
</script>

<template>
  <AddMedicalCenterModel
    v-if="store.dialog.value"
    :dialog="store.dialog.value"
    :insurance-policy-id="store.selectedInsurancePolicyId"
    :already-added-centers="store.insurancePolicyMedicalCenterIds"
    @update-dialog="closeDialiog"
    @insurance-policy-medical-center-trigger-fetch="
      insurancePolicyMedicalCenterTriggerFetch
    "
  />
  <VContainer
    ref="container"
    v-bind="$attrs"
    fluid
    class="d-flex px-1 py-1 ga-1 flex-column h-100"
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
      <VRow class="grow">
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
            VDataTable: {
              class: ['mt-1'],
              style: 'flex: 1 1 0; min-height: 0;',
              fixedHeader: true,
              fixedFooter: true,
              hover: true,
              color: 'primary',
            },
          }"
        >
          <VCol class="py-0" cols="12" md="6" lg="4">
            <!-- institutions  table -->
            <VContainer
              ref="container"
              v-bind="$attrs"
              fluid
              class="d-flex py-1 px-0 ga-1 flex-column h-50"
            >
              <VDataTable
                :items-per-page="store.institutions.value.length"
                :fixed-footer="true"
                :fixed-header="true"
                :headers="institutionHeaders"
                :items="store.institutions.value"
                :item-value="(item) => item.id"
                @click:row="
                  (event, row) => {
                    store.selectedInstitutionId.value = row.item.id;
                    store.insurancePolicyMedicalCenterIds.value = [];
                    store.selectedInsurancePolicyId.value = '';
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
                    <td style="border-right: none">{{ item.name }}</td>
                  </tr>
                </template>
                <template #bottom
              /></VDataTable>
            </VContainer>
            <VContainer
              ref="container"
              v-bind="$attrs"
              fluid
              class="d-flex py-1 px-0 ga-1 flex-column h-50"
            >
              <VDataTable
                v-if="store.selectedInstitutionId.value"
                :fixed-footer="true"
                :fixed-header="true"
                :item-value="(item) => item.id"
                :headers="insurancePoliciesHeaders"
                :items="store.insurancePolicies.value"
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
                    <td style="border-right: none">{{ item.name }}</td>
                  </tr>
                </template>
                <template #bottom
              /></VDataTable>
            </VContainer>
          </VCol>
          <VCol class="py-0">
            <VContainer
              ref="container"
              v-bind="$attrs"
              fluid
              class="d-flex py-1 px-0 ga-1 flex-column h-100"
            >
              <VSheet class="mt-1">
                <instituteFilter />
              </VSheet>
              <VSheet class="mb-0">
                <VCardActions>
                  {{ selectedCount }}
                  <VBtn @click="selectAll">{{ t("actions.selectAll") }}</VBtn>
                  <VBtn @click="refresh">{{ t("actions.refresh") }}</VBtn>
                  <VBtn
                    v-if="selectedLength"
                    color="red"
                    @click="deleteItem(selected)"
                    >{{ t("actions.deleteAll") }}</VBtn
                  >
                  <VSpacer />
                  <VBtn
                    v-if="store.selectedInsurancePolicyId.value"
                    color="primary"
                    variant="plain"
                    @click="openAddMedicalCenterDialog"
                  >
                    <span>{{ t("institution.network.newMedicalCenter") }}</span>
                    <VIcon end :icon="mdiPlus" />
                  </VBtn>
                </VCardActions>
              </VSheet>
              <VDataTableServer
                v-model="selected"
                class="mt-0"
                :fixed-footer="true"
                :fixed-header="true"
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

                <template #item.actions="{ item }">
                  <!-- <VIcon
                    class="mx-1"
                    color="primary"
                    :icon="mdiPencil"
                    @click.stop="editItem(item)"
                  /> -->
                  <VIcon
                    v-if="store.selectedInsurancePolicyId.value"
                    class="mx-1"
                    color="primary"
                    :icon="mdiDelete"
                    @click.stop="deleteItem(item.id)"
                  />
                </template>
              </VDataTableServer>
            </VContainer>
            <VSheet class="mb-1" />
          </VCol>
        </VDefaultsProvider>
      </VRow>
    </VDefaultsProvider>
  </VContainer>
  <VDialog v-model="deleteDialog" max-width="500px">
    <VCard>
      <VCardTitle class="text-h5"
        >{{ t("components.deleteConfirmation") }}
      </VCardTitle>
      <VCardActions>
        <VSpacer />
        <VBtn color="primary" variant="text" @click="closeDelete">{{
          t("components.cancel")
        }}</VBtn>
        <VBtn color="red" variant="text" @click="deleteItemConfirm">{{
          t("components.ok")
        }}</VBtn>
        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
