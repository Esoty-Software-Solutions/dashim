<script setup lang="ts">
import { onMounted, watch, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { vMaska } from "maska";

import { mdiCalendar } from "@mdi/js";
import { useDate } from "vuetify";

import useEditInsurancePolicyStore from "../stores/editInsurancePolicyStore";
let store = useEditInsurancePolicyStore();

const props = defineProps(["dialog", "insurancePolicy"]);
//
const { t } = useI18n();
const emit = defineEmits(["update-dialog", "closeDialiog"]);

const required = [(value) => !!value || "Required."];

// date **********************
// BalanceResetDate
const date = useDate();
const DateMask = { mask: "##/##/####" };
const BalanceResetDateInputDate = ref("");
const BalanceResetDateDatePickerDate = ref(
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
);
watch(BalanceResetDateDatePickerDate, (value) => {
  BalanceResetDateInputDate.value = date.format(value, "keyboardDate");
});
const BalanceResetDateFormatted = computed(() =>
  date.addDays(date.format(BalanceResetDateInputDate.value, "fullDateTime"), 1),
);

watch(BalanceResetDateFormatted, (value) => {
  store.insurancePolicy.BalanceResetDate = value;
  store.sentInsurancePolicy.BalanceResetDate = value;
});
function BalanceResetDateUpdatePickerDate() {
  BalanceResetDateDatePickerDate.value = BalanceResetDateFormatted.value;
}

// *******
// issueDate
const issueDateInputDate = ref("");
const issueDatePickerDate = ref(
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
);
watch(issueDatePickerDate, (value) => {
  issueDateInputDate.value = date.format(value, "keyboardDate");
});
const issueDateFormatted = computed(() =>
  date.addDays(date.format(issueDateInputDate.value, "fullDateTime"), 1),
);

watch(issueDateFormatted, (value) => {
  store.insurancePolicy.issueDate = value;
  store.sentInsurancePolicy.issueDate = value;
});
function issueDateUpdatePickerDate() {
  issueDatePickerDate.value = issueDateFormatted.value;
}

// renewalDate
const renewalDateInputDate = ref("");
const renewalDatePickerDate = ref(
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
);
watch(renewalDatePickerDate, (value) => {
  renewalDateInputDate.value = date.format(value, "keyboardDate");
});
const renewalDateFormatted = computed(() =>
  date.addDays(date.format(renewalDateInputDate.value, "fullDateTime"), 1),
);

watch(renewalDateFormatted, (value) => {
  store.insurancePolicy.renewalDate = value;
  store.sentInsurancePolicy.renewalDate = value;
});
function renewalDateUpdatePickerDate() {
  renewalDatePickerDate.value = renewalDateFormatted.value;
}
//   end of date **********************
async function updateInsurancePolicy() {
  try {
    await store
      .updateInsurancePolicy()
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
function updateField(value: string | number, name: string) {
  store.sentInsurancePolicy[name] = value;
}
const updatedFieldsEmpty = computed(() => {
  return Object.keys(store.sentInsurancePolicy).length > 0;
});
function closeEditDialiog() {
  store.$reset();
  emit("update-dialog");
}
onMounted(async () => {
  try {
    await store.triggerInstitutionsFetch();
    store.insurancePolicy = props.insurancePolicy;
    BalanceResetDateInputDate.value = date.format(
      props.insurancePolicy.BalanceResetDate,
      "keyboardDate",
    );
    issueDateInputDate.value = date.format(
      props.insurancePolicy.issueDate,
      "keyboardDate",
    );
    renewalDateInputDate.value = date.format(
      props.insurancePolicy.renewalDate,
      "keyboardDate",
    );
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
        ref="InsurancePolicyform"
        v-model="store.valid"
        @submit.prevent="updateInsurancePolicy"
      >
        <VCardTitle class="pa-5">
          <span class="text-h5"
            >{{ t("institution.insurancePolicies.editInsurancePolicy") }}
          </span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VRow>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.insurancePolicy.name"
                  :rules="required"
                  :label="$t('common.name')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'name')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.insurancePolicy.institutionId"
                  :label="$t('common.institution')"
                  variant="outlined"
                  :items="store.institutions"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                  @update:model-value="updateField($event, 'institutionId')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model.number="store.insurancePolicy.Accumulatedlimit"
                  type="number"
                  :rules="required"
                  :label="$t('common.Accumulatedlimit')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'Accumulatedlimit')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <vTextField
                  v-model="BalanceResetDateInputDate"
                  v-maska:[DateMask]
                  :rules="required"
                  :label="$t('common.BalanceResetDate')"
                  variant="outlined"
                  color="primary"
                  maxlength="10"
                >
                  <template #append>
                    <VIcon
                      start
                      :icon="mdiCalendar"
                      @click="BalanceResetDateUpdatePickerDate"
                    />
                    <VMenu :close-on-content-click="false" activator="parent">
                      <VList>
                        <VListItem>
                          <vDatePicker
                            v-model="BalanceResetDateDatePickerDate"
                            :title="$t('common.BalanceResetDate')"
                            hide-header
                            hide-weekdays
                          />
                        </VListItem>
                      </VList>
                    </VMenu>
                  </template>
                </vTextField>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <vTextField
                  v-model="issueDateInputDate"
                  v-maska:[DateMask]
                  :rules="required"
                  :label="$t('common.issueDate')"
                  variant="outlined"
                  color="primary"
                  maxlength="10"
                >
                  <template #append>
                    <VIcon
                      start
                      :icon="mdiCalendar"
                      @click="issueDateUpdatePickerDate"
                    />
                    <VMenu :close-on-content-click="false" activator="parent">
                      <VList>
                        <VListItem>
                          <vDatePicker
                            v-model="issueDatePickerDate"
                            :title="$t('common.issueDate')"
                            hide-header
                            hide-weekdays
                          />
                        </VListItem>
                      </VList>
                    </VMenu>
                  </template>
                </vTextField>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <vTextField
                  v-model="renewalDateInputDate"
                  v-maska:[DateMask]
                  :rules="required"
                  :label="$t('common.renewalDate')"
                  variant="outlined"
                  color="primary"
                  maxlength="10"
                >
                  <template #append>
                    <VIcon
                      start
                      :icon="mdiCalendar"
                      @click="renewalDateUpdatePickerDate"
                    />
                    <VMenu :close-on-content-click="false" activator="parent">
                      <VList>
                        <VListItem>
                          <vDatePicker
                            v-model="BalanceResetDateDatePickerDate"
                            :title="$t('common.renewalDate')"
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
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" variant="plain" @click="closeEditDialiog">
            {{ t("components.close") }}
          </VBtn>
          <VBtn
            :disable="!updatedFieldsEmpty"
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
