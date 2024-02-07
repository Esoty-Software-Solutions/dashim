<script setup lang="ts">
const props = defineProps(["beneficiary"]);
import { defineModel, ref } from "vue";
import { useI18n } from "vue-i18n";

import { mdiDelete } from "@mdi/js";

import usecreateBeneficiariesStore from "../stores/createBeneficiariesStore";
const { t } = useI18n();
const store = usecreateBeneficiariesStore();
store.getInstitutions();
function removeBeneficiary() {
  store.subscriber.beneficiaries = store.subscriber.beneficiaries.filter(
    (ben) => ben.name != props.beneficiary.name,
  );
}
const beneficiaryModel = defineModel<object>("beneficiary", {
  default: { name: "" },
});
</script>

<template>
  <VCard>
    <VCard-actions>
      <VSpacer />
      {{ props.beneficiary }}

      <VBtn icon color="red" @click="removeBeneficiary">
        x
        <!-- <VIcon :icon="mdiDelete" /> -->
      </VBtn>
    </VCard-actions>
    <VCard-title>
      <span class="text-h5">{{
        t("institution.beneficiaries.newbeneficiary")
      }}</span>
    </VCard-title>
    <VCard-text>
      <VContainer>
        <VRow>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.id"
              :label="$t('common.id')"
              variant="outlined"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.firstName"
              :label="$t('common.firstName')"
              variant="outlined"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.secondName"
              :label="$t('common.secondName')"
              variant="outlined"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.lastName"
              :label="$t('common.LastName')"
              variant="outlined"
              required
            />
          </VCol>
          <!-- <VCol cols="12" sm="6">
              <VSelect
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></VSelect>
            </VCol> -->
        </VRow>
      </VContainer>
      <small>*indicates required field</small>
    </VCard-text>
  </VCard>
</template>
<style scoped></style>
