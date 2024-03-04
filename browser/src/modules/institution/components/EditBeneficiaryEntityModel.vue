<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

// import { createId } from "@paralleldrive/cuid2";

import { mdiPlus } from "@mdi/js";

import useEditBeneficiariesStore from "../stores/editBeneficiaryEntityStore";

// import AddBeneficiaryForm from "./AddBeneficiaryForm.vue";

const props = defineProps(["dialog", "beneficiaryEntity"]);

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
const selfBeneficiary = ref(
  props.beneficiaryEntity.beneficiaries.find(
    ({ relationship }) => relationship.name === "self",
  ),
);
function getInsurancePolicies(value) {
  store.selectedInstitutionId = value;
  // store.beneficiary.insurancePolicyId = "";
  store.getInsurancePolicies();
}
const required = [(value) => !!value || "Required."];
const cities = ref<any>([]);
onMounted(async () => {
  try {
    store.beneficiary = props.beneficiaryEntity;
    if (props.beneficiaryEntity.city) {
      store.beneficiary.cityId = props.beneficiaryEntity.city.id;
    }
    await store.getInstitutions();
    await store.getCities();
    cities.value = store.cities;
    await store.getBeneficiaryInsurancePolicy();
    store.selectedInstitutionId = store.insurancePolicy[0].institutionId;
    await store.getInsurancePolicies();
    await store.getInstitution();

    // addBeneficiary({}, true);
  } catch (error) {
    console.log(error);
  }
});
function closeEditDialiog() {
  store.$reset();
  emit("update-dialog");
}
function updateField(value: string | number, name: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  store.sentBeneficiary[name] = value;
}
async function updateBeneficiary() {
  try {
    await store
      .updateBeneficiary()
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
        @submit.prevent="updateBeneficiary"
      >
        <VCard-title class="pa-5">
          <span class="text-h5"
            >{{ t("institution.beneficiaries.editBeneficiary") }}
            {{ selfBeneficiary.firstName }} {{ selfBeneficiary.lastName }}
          </span>
        </VCard-title>
        <VCard-text>
          <VContainer>
            <VRow>
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.institution[0]"
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
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.insurancePolicy[0]"
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
                <VSelect
                  v-model="store.beneficiary.cityId"
                  :label="$t('common.city')"
                  variant="outlined"
                  :items="store.cities"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                  @update:model-value="updateField($event, 'cityId')"
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
          <VBtn color="primary" variant="plain" @click="closeEditDialiog">
            Close
          </VBtn>
          <VBtn type="submit" color="primary" variant="plain"> Save </VBtn>
        </VCard-actions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
