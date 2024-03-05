<script setup lang="ts">
import { onMounted, watch, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { vMaska } from "maska";

import { mdiCalendar } from "@mdi/js";
import { useDate } from "vuetify";

import usecreateInstitutionStore from "../stores/createInstitutionStore";
let store = usecreateInstitutionStore();

const props = defineProps(["dialog"]);
//
const { t } = useI18n();
const emit = defineEmits(["update-dialog", "closeDialiog"]);

const required = [(value) => !!value || "Required."];

//   end of date **********************
async function createInstitution() {
  try {
    await store
      .createInstitution()
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
onMounted(async () => {
  try {
    await store.triggerCitiesFetch();
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
        ref="Institutionform"
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
            <!-- {{ store.Institution }} -->
            <!-- {{ InstitutionEntity }} -->
            <VRow>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.name"
                  :rules="required"
                  :label="$t('common.name')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VSelect
                  v-model="store.Institution.cityId"
                  :label="$t('common.city')"
                  variant="outlined"
                  :items="store.cities"
                  item-title="name"
                  item-value="id"
                  required
                  :rules="required"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.code"
                  :rules="required"
                  :label="$t('common.code')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.facebookLink"
                  :rules="required"
                  :label="$t('common.facebookLink')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.googleMapsLink"
                  :rules="required"
                  :label="$t('common.googleMapsLink')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.instagramLink"
                  :rules="required"
                  :label="$t('common.instagramLink')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.twitterLink"
                  :rules="required"
                  :label="$t('common.twitterLink')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.website"
                  :rules="required"
                  :label="$t('common.website')"
                  variant="outlined"
                  required
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VText-field
                  v-model="store.Institution.address"
                  :rules="required"
                  :label="$t('common.address')"
                  variant="outlined"
                  required
                />
              </VCol>
            </VRow>
          </VContainer>
          <small>*indicates required field</small>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" variant="plain" @click="emit('update-dialog')">
            {{ t("components.close") }}
          </VBtn>
          <VBtn type="submit" color="primary" variant="plain">
            {{ t("components.save") }}
          </VBtn>
        </VCardActions>
      </v-form>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
