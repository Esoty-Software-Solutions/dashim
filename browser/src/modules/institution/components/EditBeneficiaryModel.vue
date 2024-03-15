<script setup lang="ts">
import { onMounted, watch, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { vMaska } from "maska";

import { mdiCalendar } from "@mdi/js";
import { useDate } from "vuetify";

import useEditBeneficiaryStore from "../stores/editBeneficiaryStore";
let store = useEditBeneficiaryStore();

const props = defineProps(["dialog", "beneficiary"]);
//

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
  store.sentBeneficiary.birthDate = value;
});
const dateFormatted = computed(() =>
  date.addDays(date.format(inputDate.value, "fullDateTime"), 1),
);

watch(dateFormatted, (value) => {
  store.beneficiary.birthDate = value;
  store.sentBeneficiary.birthDate = value;
});
function updatePickerDate() {
  datePickerDate.value = dateFormatted.value;
}
//   end of date **********************
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
    // emit("update-add-beneficiary-dialog");
    console.log(error);
  }
}
function updateField(value: string | number, name: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  store.sentBeneficiary[name] = value;
}
const updatedFieldsEmpty = computed(() => {
  return Object.keys(store.sentBeneficiary).length > 0;
});
function closeEditDialiog() {
  store.$reset();
  emit("update-dialog");
}
onMounted(async () => {
  try {
    store.beneficiary = props.beneficiary;
    if (props.beneficiary.gender) {
      store.beneficiary.genderId = props.beneficiary?.gender?.id;
    }
    if (props.beneficiary.relationship) {
      store.beneficiary.relationshipId = props.beneficiary?.relationship?.id;
    }
    inputDate.value = date.format(props.beneficiary.birthDate, "keyboardDate");
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
        @submit.prevent="updateBeneficiary"
      >
        <VCard-title class="pa-5">
          <span class="text-h5"
            >{{ t("institution.beneficiaries.editbeneficiary") }}
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
                  @update:model-value="updateField($event, 'firstName')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.secondName"
                  :rules="required"
                  :label="$t('common.secondName')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'secondName')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.thirdName"
                  :rules="required"
                  :label="$t('common.thirdName')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'thirdName')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.lastName"
                  :rules="required"
                  variant="outlined"
                  :label="$t('common.lastName')"
                  required
                  @update:model-value="updateField($event, 'lastName')"
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
                  @update:model-value="updateField($event, 'genderId')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.beneficiary.nationality"
                  :rules="required"
                  variant="outlined"
                  :label="$t('common.nationality')"
                  required
                  @update:model-value="updateField($event, 'nationality')"
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
                  @update:model-value="updateField($event, 'relationshipId')"
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
        </VCard-actions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
