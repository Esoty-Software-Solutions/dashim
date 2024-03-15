<script setup lang="ts">
import { onMounted, ref, watch, toRefs } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiMinus } from "@mdi/js";

import useAddMedicalCenterStore from "../stores/addMedicalCenterStore";

import type { TableHeader } from "@/modules/shared/interfaces";

let store = useAddMedicalCenterStore();
const { selected } = toRefs(store);
const props = defineProps([
  "dialog",
  "insurancePolicyId",
  "alreadyAddedCenters",
]);
//

const { t } = useI18n();
const emit = defineEmits([
  "update-dialog",
  "closeDialiog",
  "insurancePolicyMedicalCenterTriggerFetch",
]);

onMounted(async () => {
  try {
    store.insurancePolicyId = props.insurancePolicyId;
    store.alreadyAddedCenters = props.alreadyAddedCenters;
    store.getMedicalCenters(props.alreadyAddedCenters);
    // await store.triggerMedicalCentersFetch();
  } catch (error) {
    console.log(error);
  }
});
watch(store.alreadyAddedCenters, async () => {
  await store.triggerMedicalCentersFetch();
});
async function addMedicalCenter() {
  try {
    const res = await store.addMedicalCenter(props.insurancePolicyId);

    console.log("res____________________", res);
    emit("insurancePolicyMedicalCenterTriggerFetch");
    emit("update-dialog");

    selected.value = [];
    store.$reset();

    // .then((res) => {

    //   console.log(res);
    // })
    // .catch((err) => {
    //   selected.value = [];
    //   console.log("catch error", err);
    // });
  } catch (error) {
    selected.value = [];
    console.log("error", error);
  }
}
const headers = ref<TableHeader[]>([
  {
    title: `${t("common.medicalCenter")}  ${t("common.name")}`,
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
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
  <VDialog
    scrollable
    :model-value="props.dialog"
    persistent
    width="1024"
    @update:model-value="emit('update-dialog')"
  >
    <VCard>
      <VCardTitle class="pa-5">
        <span class="text-h5"
          >{{ t("institution.network.addMedicalCenter") }}
        </span>
      </VCardTitle>
      <VContainer>
        <VDataTableServer
          v-model="store.selected"
          style="height: 600px"
          :fixed-footer="true"
          :fixed-header="true"
          :item-value="(item) => item.id"
          :headers="headers"
          show-select
          :items="store.medicalCenters"
          :items-per-page="store.medicalCenters.length"
          :items-length="store.medicalCenters.length"
        >
          <template #item.isActive="{ item }">
            <VChip :color="item.isActive ? 'primary' : 'error'">
              {{ item.isActive ? "Active" : "Inactive" }}
            </VChip>
          </template>
          <template #bottom
        /></VDataTableServer>
      </VContainer>

      <VCardActions>
        <VSpacer />
        <VBtn color="primary" variant="plain" @click="emit('update-dialog')">
          {{ t("components.close") }}
        </VBtn>
        <VBtn color="primary" variant="plain" @click="addMedicalCenter">
          {{ t("components.save") }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
