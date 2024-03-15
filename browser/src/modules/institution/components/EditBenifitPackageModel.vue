<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiMinus } from "@mdi/js";

import useEditBenefitPackageStore from "../stores/editBenefitPackageStore";

let store = useEditBenefitPackageStore();

const props = defineProps(["dialog", "benefitPackage"]);
//
const { t } = useI18n();
const emit = defineEmits(["update-dialog", "closeDialiog"]);

const required = [(value) => !!value || "Required."];

async function updateBenefitPackage() {
  try {
    await store
      .updateBenefitPackage()
      .then((res) => {
        if (res && res.id) {
          console.log(res);
          emit("update-dialog");

          store.$reset();
        }
        console.log(res);
      })
      .catch((err) => {
        console.log("catch error", err);
      });
  } catch (error) {
    console.log(error);
  }
}
function updateField(value: string | number, name: string, index: string) {
  if (parseInt(index) >= 0) {
    if (store.benefitPackage[name]) {
      store.sentBenefitPackage[name] = [...store.benefitPackage[name]];
      store.sentBenefitPackage[name][index] = value;
    } else {
      store.sentBenefitPackage[name] = [];
      store.sentBenefitPackage[name][index] = value;
    }
  } else {
    store.sentBenefitPackage[name] = value;
  }
}
const updatedFieldsEmpty = computed(() => {
  return Object.keys(store.sentBenefitPackage).length > 0;
});
function closeEditDialiog() {
  console.log("closed");
  store.$reset();
  emit("update-dialog");
}
onMounted(async () => {
  try {
    store.benefitPackage = props.benefitPackage;
    await store.triggerinsurancePoliciesFetch();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <VDialog
    :model-value="props.dialog"
    persistent
    width="1024"
    @update:model-value="emit('update-dialog')"
  >
    <VCard>
      <v-form
        ref="BenefitPackageform"
        v-model="store.valid"
        @submit.prevent="updateBenefitPackage"
      >
        <VCardTitle class="pa-5">
          <span class="text-h5"
            >{{ t("institution.benefitPackages.editBenefitPackage") }}
          </span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VRow>
              <VCol cols="12" sm="6" md="6">
                <VTextField
                  v-model="store.benefitPackage.name"
                  :rules="required"
                  :label="$t('common.name')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'name')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="6">
                <VSelect
                  v-model="store.benefitPackage.insurancePolicyId"
                  :label="$t('common.insurancePolicy')"
                  variant="outlined"
                  :items="store.insurancePolicies"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                  @update:model-value="updateField($event, 'insurancePolicyId')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VListItem class="px-1 pb-4">
                  <template #append>
                    <VBtn
                      color="primary"
                      variant="text"
                      icon
                      @click="store.benefitPackage.threashold.push(0)"
                    >
                      <VIcon :icon="mdiPlus" />
                    </VBtn>
                  </template>
                  <VListItemTitle class="text-h6">{{
                    t("common.threashold")
                  }}</VListItemTitle>
                </VListItem>
                <VTextField
                  v-for="(value, index) of store.benefitPackage.threashold"
                  :key="index"
                  v-model.number="store.benefitPackage.threashold[index]"
                  :append-icon="mdiMinus"
                  type="number"
                  :rules="required"
                  :label="$t('common.threashold')"
                  variant="outlined"
                  required
                  class="py-1"
                  @update:model-value="updateField($event, 'threashold', index)"
                  @click:append="
                    store.benefitPackage.threashold.splice(index, 1)
                  "
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VListItem class="px-1 pb-4">
                  <template #append>
                    <VBtn
                      color="primary"
                      variant="text"
                      icon
                      @click="store.benefitPackage.copayDistrubtion.push(0)"
                    >
                      <VIcon :icon="mdiPlus" />
                    </VBtn>
                  </template>
                  <VListItemTitle class="text-h6">{{
                    t("common.copayDistrubtion")
                  }}</VListItemTitle>
                </VListItem>
                <VTextField
                  v-for="(value, index) of store.benefitPackage
                    .copayDistrubtion"
                  :key="index"
                  v-model.number="store.benefitPackage.copayDistrubtion[index]"
                  :append-icon="mdiMinus"
                  type="number"
                  :rules="required"
                  :label="$t('common.copayDistrubtion')"
                  variant="outlined"
                  required
                  class="py-1"
                  @update:model-value="
                    updateField($event, 'copayDistrubtion', index)
                  "
                  @click:append="
                    store.benefitPackage.copayDistrubtion.splice(index, 1)
                  "
                />
              </VCol>
            </VRow>
          </VContainer>
          <small>*indicates required field</small>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" variant="plain" @click="closeEditDialiog">
            {{ t("components.close") }}
          </VBtn>
          <VBtn
            :disabled="!updatedFieldsEmpty"
            type="submit"
            color="primary"
            variant="plain"
          >
            {{ t("components.save") }}
          </VBtn>
        </VCardActions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
