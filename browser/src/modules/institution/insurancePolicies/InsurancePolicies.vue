<script setup lang="ts">
import { ref, toRefs, watch, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiClose, mdiDelete, mdiPencil } from "@mdi/js";

import useInsurancePoliciesStore from "../stores/insurancePoliciesStore";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, {
  text,
  asyncSelect,
} from "@/modules/filter/composables/dataFilter";
import { client, type RouterInput } from "@/queries";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionsInsurancePoliciesPage",
});
const { t } = useI18n();
const store = toRefs(useInsurancePoliciesStore());
// console.log(store.binding.value.items);
let selected = ref([""]);
let selectedCount = ref(0);
const deleteDialog = ref(false);

const CreateInsurancePolicyModel = defineAsyncComponent(
  () =>
    import("@/modules/institution/components/CreateInsurancePolicyModel.vue"),
);
const EditInsurancePolicyModel = defineAsyncComponent(
  () => import("@/modules/institution/components/EditInsurancePolicyModel.vue"),
);

// filters
// async filter
type InstitutionInput = Exclude<
  RouterInput["crud"]["institution"]["findMany"],
  void
>;
const institutionSelect = asyncSelect(
  {
    value: store.selectedInstitution,
    enabled: store.selectedInstitutionEnabled,
    props: () => ({
      label: t("common.institution"),
      itemValue: "id",
      itemTitle: "name",
      clearable: true,
      // multiple: true,
      // returnObject: true,
    }),
  },
  {
    immediate: true,
    input: () => ({}),
    async onFetch(input: InstitutionInput) {
      const res = await client.crud.institution.findMany.query(input);
      return res?.data ?? [];
    },
  },
);
const { FilterComponent } = useDataFilters({
  sheetProps: {
    elevation: 0,
  },
  filter: {
    institution: institutionSelect,
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
  // selected.value = store.binding.value.items
  // selected.value
  console.log(selected.value);
  selectedCount.value = selected.value.length;
}
function refresh() {
  store.triggerFetch.value();
}
function selectAll() {
  selected.value = store.binding.value.items.map((item) => item.id);
  selectedCount.value = store.binding.value.itemsLength;

  console.log(selected.value);
}
function paginated() {
  console.log("paginated");

  selected.value = [];
  selectedCount.value = 0;
}
const drawer = ref(false);
const selectedItem = ref({});

function editItem(item) {
  store.editDialog.value = !store.editDialog.value;
  store.editedItem = item;
}
function deleteItem(item) {
  deleteDialog.value = true;
}
function openCreateInsurancePolicyDialog(item) {
  store.dialog.value = !store.dialog.value;
}
function closeDialiog(dialogType) {
  if (dialogType == "add") {
    store.dialog.value = false;
  }
  if (dialogType == "edit") {
    store.editDialog.value = false;
  }
  store.triggerFetch.value();
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
    title: t("common.Accumulatedlimit"),
    key: "Accumulatedlimit",
    sortable: false,
    align: "center",
  },
  {
    title: t("common.renewalDate"),
    key: "renewalDate",
    sortable: false,
    align: "center",
  },
  {
    title: t("common.BalanceResetDate"),
    key: "BalanceResetDate",
    sortable: false,
    align: "center",
  },
  {
    title: t("common.serviceEntryTimeWindow"),
    key: "serviceEntryTimeWindow",
    sortable: false,
    align: "center",
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
  <CreateInsurancePolicyModel
    v-if="store.dialog.value"
    :dialog="store.dialog.value"
    @update-dialog="closeDialiog('add')"
  />
  <EditInsurancePolicyModel
    v-if="store.editDialog.value"
    :dialog="store.editDialog.value"
    :insurance-policy="store.editedItem"
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
        <VBtn @click="selectAll">{{ t("institution.actions.selectAll") }}</VBtn>
        <VBtn @click="refresh">{{ t("institution.actions.refresh") }}</VBtn>
        <VSpacer />
        <VBtn
          color="primary"
          variant="plain"
          @click="openCreateInsurancePolicyDialog"
        >
          <span>{{
            t("institution.insurancePolicies.newInsurancePolicy")
          }}</span>
          <VIcon end :icon="mdiPlus" />
        </VBtn>
      </VCardActions>
    </template>
    <template #table>
      <VDataTableServer
        v-model="selected"
        :item-value="(item) => item.id"
        show-select
        :headers="headers"
        v-bind="store.binding.value"
        @input="onSelected($event)"
        @update:page="paginated"
        @update:items-per-page="paginated"
        @click:row="
          (event, row) => {
            console.log(event);

            // drawer = true;
            selectedItem.value = row.item;
          }
        "
      >
        <!-- local date "sv-SE" for 2024-02-02 fromat -->
        <template #item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleDateString("zh-CN") }}
        </template>
        <template #item.updatedAt="{ item }">
          {{ new Date(item.updatedAt).toLocaleDateString("zh-CN") }}
        </template>
        <template #item.renewalDate="{ item }">
          {{ new Date(item.renewalDate).toLocaleDateString("zh-CN") }}
        </template>
        <template #item.BalanceResetDate="{ item }">
          {{ new Date(item.BalanceResetDate).toLocaleDateString("zh-CN") }}
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
            @click.stop="editItem(item)"
          />
          <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiDelete"
            @click.stop="deleteItem(item)"
          />
        </template>
      </VDataTableServer>
      <VNavigationDrawer v-model="drawer" location="right">
        <VList>
          <VListItem class="d-flex flex-row-reverse">
            <!-- <VIcon :icon="mdiClose" /> -->

            <VBtn variant="flat" :icon="mdiClose" @click="drawer = false" />
          </VListItem>

          <VListItem title="Navigation drawer">
            {{ selectedItem }}
          </VListItem>
        </VList>
      </VNavigationDrawer>
    </template>
  </DataPageBase>
</template>
