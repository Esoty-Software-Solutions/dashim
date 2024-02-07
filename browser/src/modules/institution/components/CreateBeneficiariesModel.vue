<script setup lang="ts">
const props = defineProps(["dialog"]);
import { toRefs, ref } from "vue";
import { useI18n } from "vue-i18n";

import usecreateBeneficiariesStore from "../stores/createBeneficiariesStore";

import { client } from "@/queries";

import AddBeneficiaryForm from "./AddBeneficiaryForm.vue";

// type createSubscriberProcedureInput = Parameters<
//   typeof client.procedure.CreateSubscriber.mutate
// >[0];

const { t } = useI18n();
let store = usecreateBeneficiariesStore();

function addBeneficiary() {
  console.log(store.subscriber);
  store.subscriber.beneficiaries.push({});
}
const emit = defineEmits(["update-dialog"]);
</script>

<template>
  <VDialog
    :model-value="props.dialog"
    persistent
    width="1024"
    @update:model-value="emit('update-dialog')"
  >
    <VCard>
      <VCard-title>
        <span class="text-h5">{{
          t("institution.beneficiaries.newbeneficiary")
        }}</span>
      </VCard-title>
      <VCard-text>
        <VContainer>
          <VRow>
            <!-- <VCol cols="12" sm="6" md="4">
              <FormKit
                type="text"
                name="name"
                id="name"
                :classes="{
                  outer: 'v-field__field v-field--variant-filled',
                  label: '',
                  inner:
                    '',
                  input:
                    'v-field__input .v-text-field .v-field',
                  help: 'text-xs text-gray-500',
                }"
              />
            </VCol> -->
            <!-- {{ store.subscriber }} -->
            <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="store.subscriber.id"
                :label="$t('common.id')"
                variant="outlined"
                required
              />
            </VCol>
            <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="store.subscriber.insurancePolicyId"
                :label="$t('common.insurancePolicyId')"
                variant="outlined"
                required
              />
            </VCol>
            <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="store.subscriber.insurancePolicyId"
                :label="$t('common.insurancePolicyId')"
                variant="outlined"
                required
              />
            </VCol>
            <VCol cols="12" sm="6" md="4">
              <VSelect
                v-model="store.selectedInstitution"
                :label="$t('common.institute')"
                variant="outlined"
                :items="store.institutions"
                item-title="name"
                item-value="id"
                required
              />
            </VCol>
          </VRow>
          <VBtn color="primary" variant="plain" @click="addBeneficiary">
            + add</VBtn
          >
        </VContainer>
        <small>*indicates required field</small>
        <!-- <AddBeneficiaryForm :beneficiary="ben" v-for="ben in store.subscriber.beneficiaries" :key="ben.id"> -->
        <div v-for="(ben, i) in store.subscriber.beneficiaries" :key="ben.id">
          <AddBeneficiaryForm
            v-model:beneficiary="store.subscriber.beneficiaries[i]"
          >
            {{ ben }}
          </AddBeneficiaryForm>
        </div>
      </VCard-text>
      <VCard-actions>
        <VSpacer />
        <VBtn color="primary" variant="plain" @click="emit('update-dialog')">
          Close
        </VBtn>
        <VBtn color="primary" variant="plain" @click="store.createSubscriber">
          Save
        </VBtn>
      </VCard-actions>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
