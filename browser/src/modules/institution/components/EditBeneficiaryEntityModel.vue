<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

// import { createId } from "@paralleldrive/cuid2";

import { mdiPlus } from "@mdi/js";

import useEditBeneficiariesStore from "../stores/editBeneficiaryEntityStore";

// import AddBeneficiaryForm from "./AddBeneficiaryForm.vue";

const props = defineProps(["dialog"]);

const { t } = useI18n();
let store = useEditBeneficiariesStore();
// function addBeneficiary(beneficiary: object | undefined, mounted: boolean) {
//   console.log(beneficiary);

//   // if (beneficiary && mounted) {
//   //   let relationshipId = store.relations.find(
//   //     (relation) => relation.name == "self",
//   //   );
//   //   if (store.beneficiary.beneficiaries.length < 1) {
//   //     store.beneficiary.beneficiaries.push({
//   //       relationshipId: relationshipId ? relationshipId.id : undefined,
//   //     });
//   //   }
//   // } else {
//   //   store.beneficiary.beneficiaries.push({
//   //     id: createId(),
//   //   });
//   // }
// }
const emit = defineEmits(["update-dialog", "closeDialiog"]);
function getInsurancePolicies() {
  store.beneficiary.insurancePolicyId = "";
  store.getInsurancePolicies();
}
const required = [(value) => !!value || "Required."];
onMounted(async () => {
  try {
    await store.getInstitutions();
    await store.getRelations();
    await store.getGenders();
    await store.getCities();
    addBeneficiary({}, true);
  } catch (error) {
    console.log(error);
  }
});
async function updateSubscriber() {
  try {
    await store
      .updateSubscriber()
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
    // emit("update-dialog");
    console.log(error);
  }
}
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
        ref="beneficiaryform"
        v-model="store.valid"
        @submit.prevent="updateSubscriber"
      >
        <VCard-title class="pa-5">
          <span class="text-h5">{{
            t("institution.beneficiaries.newBeneficiary")
          }}</span>
        </VCard-title>
        <VCard-text>
          {{ store.valid }}
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
              <!-- {{ store.beneficiary }} -->
              <!-- <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="store.beneficiary.id"
                :label="$t('common.id')"
                variant="outlined"
                required
              />
            </VCol> -->
              <!-- <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="store.beneficiary."
                :label="$t('common.insurancePolicyId')"
                variant="outlined"
                required
              />
            </VCol> -->
              <!-- <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="store.beneficiary.insurancePolicyId"
                :label="$t('common.insurancePolicyId')"
                variant="outlined"
                required
              />
            </VCol> -->
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.selectedInstitutionId"
                  :label="$t('common.institution')"
                  variant="outlined"
                  :items="store.institutions"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                  @update:model-value="getInsurancePolicies"
                />
              </VCol>
              <VCol v-if="store.selectedInstitutionId" cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.beneficiary.insurancePolicyId"
                  :label="$t('common.insurancePolicy')"
                  variant="outlined"
                  :items="store.insurancePolicies"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                >
                  <!-- :title="$t('common.insurancePolicyId')" -->
                  <!-- <template #prepend-item>
                  <v-list-item isActive title="policy" />
                </template> -->
                </VSelect>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.beneficiary.cityId"
                  :label="$t('common.city')"
                  variant="outlined"
                  :items="store.cities"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                />
              </VCol>
              <!-- <VCol sm="12 pt-0">
                <VBtn
                  color="primary"
                  variant="plain"
                  @click="addBeneficiary({}, false)"
                >
                  <span>{{
                    t("institution.beneficiaries.addbeneficiary")
                  }}</span>
                  <VIcon end :icon="mdiPlus" />
                </VBtn>
              </VCol> -->
            </VRow>
          </VContainer>
          <small>*indicates required field</small>
          <!-- <AddBeneficiaryForm :beneficiary="ben" v-for="ben in store.beneficiary.beneficiaries" :key="ben.id"> -->
          <!-- <div v-for="(ben, i) in store.beneficiary.beneficiaries" :key="ben.id">
            <AddBeneficiaryForm
              v-model:beneficiary="store.beneficiary.beneficiaries[i]"
            >
              {{ ben }}
            </AddBeneficiaryForm>
          </div> -->
        </VCard-text>
        <VCard-actions>
          <VSpacer />
          <VBtn color="primary" variant="plain" @click="emit('update-dialog')">
            Close
          </VBtn>
          <VBtn type="submit" color="primary" variant="plain"> Save </VBtn>
        </VCard-actions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
