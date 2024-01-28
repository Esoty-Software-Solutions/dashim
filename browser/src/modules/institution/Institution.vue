<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

defineOptions({
  name: "InstitutionsLayout",
});

const { t } = useI18n();

const tabs = ref([
  {
    text: t("institution.tabs.list"),
    to: {
      name: "InstitutionsList",
    },
  },
  {
    text: t("institution.tabs.beneficiaries"),
    to: {
      name: "InstitutionsBeneficiaries",
    },
  },
  {
    text: t("institution.tabs.network"),
  },
  {
    text: t("institution.tabs.insurancePolicy"),
  },
  {
    text: t("institution.tabs.benefitPackage"),
  },
  {
    text: t("institution.tabs.claims"),
  },
]);
</script>

<template>
  <VAppBar>
    <VTabs :items="tabs" />
  </VAppBar>

  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :key="route.name" />
  </RouterView>
</template>
