<script setup lang="ts">
import { onMounted, watch, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { vMaska } from "maska";

import { mdiCalendar } from "@mdi/js";
import { useDate } from "vuetify";

import usecreateInstitutionStore from "../stores/editInstitutionStore";

let store = usecreateInstitutionStore();

const props = defineProps(["dialog", "institution"]);
//
const { t } = useI18n();
const emit = defineEmits(["update-dialog", "closeDialiog"]);

const required = [(value) => !!value || "Required."];

//   end of date **********************
async function createInstitution() {
  try {
    await store
      .updateInstitution()
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
    // emit("update-add-Institution-dialog");
    console.log(error);
  }
}
function updateField(value: string | number, name: string) {
  store.sentInstitution[name] = value;
  console.log(store.sentInstitution);
}
const updatedFieldsEmpty = computed(() => {
  return Object.keys(store.sentInstitution).length > 0;
});
function closeEditDialiog() {
  store.$reset();
  emit("update-dialog");
}
onMounted(async () => {
  try {
    await store.triggerCitiesFetch();
    store.institution = props.institution;
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
        ref="EditInstitutionform"
        v-model="store.valid"
        @submit.prevent="createInstitution"
      >
        <VCardTitle class="pa-5">
          <span class="text-h5"
            >{{ t("institution.list.newInstitution") }}
          </span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VRow>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.name"
                  :rules="required"
                  :label="$t('common.name')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'name')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.institution.cityId"
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
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.code"
                  :rules="required"
                  :label="$t('common.code')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'code')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.facebookLink"
                  :rules="required"
                  :label="$t('common.facebookLink')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'facebookLink')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.googleMapsLink"
                  :rules="required"
                  :label="$t('common.googleMapsLink')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'googleMapsLink')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.instagramLink"
                  :rules="required"
                  :label="$t('common.instagramLink')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'instagramLink')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.twitterLink"
                  :rules="required"
                  :label="$t('common.twitterLink')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'twitterLink')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.website"
                  :rules="required"
                  :label="$t('common.website')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'website')"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.institution.address"
                  :rules="required"
                  :label="$t('common.address')"
                  variant="outlined"
                  required
                  @update:model-value="updateField($event, 'address')"
                />
              </VCol>
            </VRow>
          </VContainer>
          <small>*indicates required field</small>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" variant="plain" @click="closeEditDialiog">
            Close
          </VBtn>
          <VBtn
            :disabled="!updatedFieldsEmpty"
            type="submit"
            color="primary"
            variant="plain"
          >
            Save
          </VBtn>
        </VCardActions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
