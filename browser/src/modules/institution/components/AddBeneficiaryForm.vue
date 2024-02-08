<script setup lang="ts">
const props = defineProps(["beneficiary"]);
import { computed, defineModel, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { mdiDelete } from "@mdi/js";
import { useDate } from "vuetify";

import usecreateBeneficiariesStore from "../stores/createBeneficiariesStore";

import { client } from "@/queries";
const dateMenu = ref(false);

// type BeneficiaryCrudResponse = Parameters<
//   typeof client.crud.beneficiary.createOne.mutate
// >[0];
type BeneficiaryInput = Parameters<
  typeof client.procedure.CreateSubscriber.mutate
>[0]["beneficiaries"][0];

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
const dateFormatted = computed(() =>
  date.format(beneficiaryModel.value.birthDate, "shortDate"),
);

// const dateFormatted = date.format(
//   beneficiaryModel.value.birthDate,
//   "shortDate",
// );

watch(beneficiaryModel.birthDate, (value) => {
  console.log(value);

  // dateFormatted.value = date.format(value, "shortDate");
});
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
              variant="outlined"
              :label="$t('common.LastName')"
              required
            />
          </VCol>
          <VCol cols="12" sm="6" md="4">
            <VSelect
              v-model="beneficiaryModel.relationshipId"
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
              :label="$t('common.genders')"
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
            {{ beneficiaryModel.birthDate }}
            {{ dateFormatted }}
            <vTextField
              v-mask="'##/##/####'"
              :model-value="dateFormatted"
              variant="outlined"
              color="primary"
              maxlength="10"
            >
              <VMenu activator="parent">
                <VList>
                  <VListItem>
                    <vDatePicker
                      v-model="beneficiaryModel.birthDate"
                      :title="$t('common.birthDate')"
                      hide-header
                      hide-weekdays
                    />
                  </VListItem>
                </VList>
              </VMenu>
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
      <small>*indicates required field</small>
    </VCard-text>
  </VCard>
</template>
<style scoped></style>
