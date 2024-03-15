<script setup lang="ts">
import { onMounted, watch, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { vMaska } from "maska";

import { mdiCalendar } from "@mdi/js";
import { useDate } from "vuetify";

import usecreateBeneficiaryStore from "../stores/createBeneficiaryStore";
let store = usecreateBeneficiaryStore();

const props = defineProps(["dialog", "beneficiaryEntity"]);
//
const selfBeneficiary = ref(
  props.beneficiaryEntity.beneficiaries.find(
    ({ relationship }) => relationship.name === "self",
  ),
);
const { t } = useI18n();
const emit = defineEmits(["update-dialog", "closeAddBeneficiaryDialiog"]);

const required = [(value) => !!value || "Required."];

// date **********************8
const date = useDate();
const DateMask = { mask: "##/##/####" };
const inputDate = ref("");
const datePickerDate = ref(
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
);
watch(datePickerDate, (value) => {
  inputDate.value = date.format(value, "keyboardDate");
});
const dateFormatted = computed(() =>
  date.addDays(date.format(inputDate.value, "fullDateTime"), 1),
);

watch(dateFormatted, (value) => {
  store.beneficiary.birthDate = value;
});
function updatePickerDate() {
  datePickerDate.value = dateFormatted.value;
}
//   end of date **********************
async function createBeneficiary() {
  try {
    store.beneficiary.beneficiaryEntityId = props.beneficiaryEntity.id;
    await store
      .createBeneficiary()
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
    // emit("update-add-beneficiary-dialog");
    console.log(error);
  }
}
onMounted(async () => {
  try {
    await store.triggerRelationshipsFetch();
    await store.triggerGendersFetch();
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
        ref="beneficiaryform"
        v-model="store.valid"
        @submit.prevent="createBeneficiary"
      >
        <VCard-title class="pa-5">
          <span class="text-h5"
            >{{ t("institution.beneficiaries.addbeneficiary") }}
            {{ selfBeneficiary.firstName }} {{ selfBeneficiary.lastName }}
          </span>
        </VCard-title>
        <VCard-text>
          <VContainer>
            <!-- {{ store.beneficiary }} -->
            <!-- {{ beneficiaryEntity }} -->
            <VRow>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.firstName"
                  :rules="required"
                  :label="$t('common.firstName')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.secondName"
                  :rules="required"
                  :label="$t('common.secondName')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.thirdName"
                  :rules="required"
                  :label="$t('common.thirdName')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.lastName"
                  :rules="required"
                  variant="outlined"
                  :label="$t('common.lastName')"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.beneficiary.genderId"
                  :label="$t('common.gender')"
                  variant="outlined"
                  :items="store.genders"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.nationality"
                  :rules="required"
                  variant="outlined"
                  :label="$t('common.nationality')"
                  required
                />
              </VCol>

              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.beneficiary.relationshipId"
                  :label="$t('common.relationship')"
                  variant="outlined"
                  :items="store.relationships"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <vTextField
                  v-model="inputDate"
                  v-maska:[DateMask]
                  :rules="required"
                  variant="outlined"
                  color="primary"
                  maxlength="10"
                >
                  <template #append>
                    <VIcon
                      start
                      :icon="mdiCalendar"
                      @click="updatePickerDate"
                    />
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
              </VCol>
            </VRow>
          </VContainer>
          <small>*indicates required field</small>
        </VCard-text>
        <VCard-actions>
          <VSpacer />
          <VBtn color="primary" variant="plain" @click="emit('update-dialog')">
            {{ t("components.close") }}
          </VBtn>
          <VBtn type="submit" color="primary" variant="plain">
            {{ t("components.save") }}
          </VBtn>
        </VCard-actions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
