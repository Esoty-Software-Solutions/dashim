<script setup lang="ts">
const props = defineProps(["beneficiary"]);
import { computed, defineModel, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { vMaska } from "maska";

import { mdiCalendar } from "@mdi/js";
import { useDate } from "vuetify";

import usecreateBeneficiariesStore from "../stores/createBeneficiariesStore";

import { client } from "@/queries";

const dateMenu = ref(false);

// type BeneficiaryCrudResponse = Parameters<
//   typeof client.crud.beneficiary.createOne.mutate
// >[0];
type BeneficiaryInput = Parameters<
  typeof client.procedure.createBeneficiaryEntity.mutate
>[0]["data"]["beneficiaries"][0];

const { t } = useI18n();
const store = usecreateBeneficiariesStore();
store.getInstitutions();
function removeBeneficiary() {
  store.subscriber.beneficiaries = store.subscriber.beneficiaries.filter(
    (ben) => ben.id != props.beneficiary.id,
  );
}
const beneficiaryModel = defineModel<BeneficiaryInput>("beneficiary", {
  default: {
    id: "",
    birthDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
    // birthDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //   .toISOString()
    //   .substr(0, 10),
  },
});
const date = useDate();
// const dateFormatted = computed(() =>
//   date.format(beneficiaryModel.value.birthDate, "keyboardDate"),
// );
const inputDate = ref("");
const datePickerDate = ref(
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
);

// const dateFormatted = computed({
//   get: () => date.format(beneficiaryModel.value.birthDate, "keyboardDate"),
// });
// const dateFormatted = date.format(
//   beneficiaryModel.value.birthDate,
//   "shortDate",
// );

watch(datePickerDate, (value) => {
  inputDate.value = date.format(value, "keyboardDate");
  // beneficiaryModel.value.birthDate = date.format(value, "keyboardDate");
  // dateFormatted.value = date.format(value, "shortDate");
});
const dateFormatted = computed(() =>
  date.addDays(date.format(inputDate.value, "fullDateTime"), 1),
);
watch(dateFormatted, (value) => {
  beneficiaryModel.value.birthDate = value;
});
const DateMask = { mask: "##/##/####" };
const required = [(value) => !!value || "Required."];
const rules = [
  (value) => !!value || "Required.",
  (value) => (value && value.length >= 3) || "Min 3 characters",
];
const DateRules = [
  (value) => !!value || "Required.",
  (value) => (value && value.length >= 3) || "Min 3 characters",
];
</script>

<template>
  <VCard>
    <VCard-actions>
      <VSpacer />
      <!-- {{ props.beneficiary }} -->

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
      <!-- <v-form ref="beneficiaryform" v-model="valid"> -->
      <VContainer>
        <VRow>
          <!-- <VCol cols="12" sm="6" md="4">
              <VText-field
                v-model="beneficiaryModel.id"
                :label="$t('common.id')"
                variant="outlined"
                required
              />
            </VCol> -->
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.firstName"
              :rules="required"
              :label="$t('common.firstName')"
              variant="outlined"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.secondName"
              :rules="required"
              :label="$t('common.secondName')"
              variant="outlined"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.thirdName"
              :rules="required"
              :label="$t('common.thirdName')"
              variant="outlined"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VText-field
              v-model="beneficiaryModel.lastName"
              :rules="required"
              variant="outlined"
              :label="$t('common.lastName')"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VSelect
              v-model="beneficiaryModel.relationshipId"
              :rules="required"
              :label="$t('common.relationship')"
              variant="outlined"
              :items="store.relations"
              item-title="name"
              item-value="id"
              required
            >
              <!-- :title="$t('common.insurancePolicyId')" -->
              <!-- <template #prepend-item>
                  <v-list-item isActive title="policy" />
                </template> -->
            </VSelect>
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VSelect
              v-model="beneficiaryModel.genderId"
              :rules="required"
              :label="$t('common.gender')"
              variant="outlined"
              :items="store.genders"
              item-title="name"
              item-value="id"
              required
            >
              <!-- :title="$t('common.insurancePolicyId')" -->
              <!-- <template #prepend-item>
                  <v-list-item isActive title="policy" />
                </template> -->
            </VSelect>
          </VCol>
          <VCol cols="12" sm="6" md="4">
            beneficiaryModel.birthDate {{ beneficiaryModel.birthDate }} ***
            inputDate {{ inputDate }} *** dateFormatted
            {{ dateFormatted }} datePickerDate {{ datePickerDate }}
            <!-- {{ dateFormatted }} -->
            <vTextField
              v-model="inputDate"
              v-maska:[DateMask]
              :rules="required"
              variant="outlined"
              color="primary"
              maxlength="10"
            >
              <template #append>
                <VIcon start :icon="mdiCalendar" />
                <VMenu :close-on-content-click="false" activator="parent">
                  <VList>
                    <VListItem>
                      <vDatePicker
                        v-model="datePickerDate"
                        :title="$t('common.birthDate')"
                        hide-header
                        hide-weekdays
                      />
                    </VListItem>
                  </VList>
                </VMenu>
              </template>
            </vTextField>
            <!-- <VMenu
              v-model="dateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              max-width="290px"
              min-width="auto"
            >
              <template #activator="{ dateMenu, props }">
                <vTextField
                  v-model="dateFormatted"
                  label="Date"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon=""
                  v-bind="props"
                  @blur="dateFormatted"
                  v-on="dateMenu"
                  @keydown.tab="dateMenu = false"
                />
              </template>
            </VMenu>
            <vDatePicker
              :title="$t('common.birthDate')"
              v-model="beneficiaryModel.birthDate"
            /> -->
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
      <!-- </v-form> -->
      <small>*indicates required field</small>
    </VCard-text>
  </VCard>
</template>
<style scoped></style>
