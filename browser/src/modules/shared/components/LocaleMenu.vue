<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import useConfig from "../stores/configStore";

import type { SupportedLocale } from "@/plugins/i18n";

const { t, locale: currentLocale } = useI18n();
const configStore = useConfig();

const value = computed(() => {
  return configStore.locale;
});

const locales = computed((): { value: SupportedLocale; text: string }[] => {
  const result = [];
  for (const localeKey of ["en", "ar"] as SupportedLocale[]) {
    const localeObj = {
      value: localeKey,
      text: "",
    };

    const name = t(`locale.${localeKey}.name`);
    const nativeName = t(`locale.${localeKey}.nativeName`);
    if (currentLocale.value === localeKey) {
      // no need for native name
      localeObj.text = name;
    } else {
      localeObj.text = `${nativeName} (${name})`;
    }

    result.push(localeObj);
  }

  return result;
});
</script>

<template>
  <VCard flat>
    <VCardText>
      <VRadioGroup
        :model-value="value"
        density="compact"
        hide-details
        class="mt-0"
        @update:model-value="configStore.setLocale"
      >
        <VRadio
          v-for="(item, index) of locales"
          :key="index"
          :value="item.value"
          :label="item.text"
        />
      </VRadioGroup>
    </VCardText>
  </VCard>
</template>

<style scoped></style>
