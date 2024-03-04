<script setup lang="ts">
import { ref, toRefs, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiDelete, mdiPencil } from "@mdi/js";

import useListStore from "../stores/storeList";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, { text } from "@/modules/filter/composables/dataFilter";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionListPage",
});

const { t } = useI18n();

const store = toRefs(useListStore());
const deleteDialog = ref(false);
const CreateInstitutionModel = defineAsyncComponent(
  () => import("@/modules/institution/components/CreateInstitutionModel.vue"),
);
const EditInstitutionModel = defineAsyncComponent(
  () => import("@/modules/institution/components/EditInstitutionModel.vue"),
);
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

function closeDelete() {
  store.triggerFetch.value();
  deleteDialog.value = false;
  // nextTick(() => {
  //   editedItem.value = Object.assign({}, defaultItem.value)
  //   editedIndex.value = -1
  // })
}
function editItem(item) {
  store.editDialog.value = !store.editDialog.value;
  store.editedItem = item;
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
function openCreateInstitutionDialog(item) {
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
function refresh() {
  store.triggerFetch.value();
}
async function deleteItemConfirm(item: string) {
  await store.deleteInstitution.value(item);
  store.triggerFetch.value();
  console.log(item);

  closeDelete();
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
  <CreateInstitutionModel
    v-if="store.dialog.value"
    :dialog="store.dialog.value"
    @update-dialog="closeDialiog('add')"
  />
  <EditInstitutionModel
    v-if="store.editDialog.value"
    :dialog="store.editDialog.value"
    :institution="store.editedItem"
    @update-dialog="closeDialiog('edit')"
  />
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>

    <template #actions>
      <VCardActions>
        <VBtn @click="refresh">Refresh </VBtn>

        <VSpacer />
        <VBtn
          color="primary"
          variant="plain"
          @click="openCreateInstitutionDialog"
        >
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

        <template #item.actions="{ item }">
          <!-- <VIcon :icon="mdiPlus" /> -->
          <!-- <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiPlus"
            @click="openAddInstitutionDialog(item)"
          /> -->
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
            @click="deleteItem(item.id)"
          />
        </template>
      </VDataTableServer>
    </template>
  </DataPageBase>
  <VDialog v-model="deleteDialog" max-width="500px">
    <VCard>
      <VCardTitle class="text-h5"
        >Are you sure you want to delete this item?</VCardTitle
      >
      <VCardActions>
        <VSpacer />
        <VBtn color="primary" variant="text" @click="closeDelete">Cancel</VBtn>
        <VBtn color="red" variant="text" @click="deleteItemConfirm">OK</VBtn>
        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
