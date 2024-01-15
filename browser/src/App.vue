<script setup lang="ts">
import { computed, nextTick, ref, watch, type Ref } from "vue";
import { useI18n } from "vue-i18n";

import { mdiClose } from "@mdi/js";
import { useTheme } from "vuetify";

import logo from "@/assets/logo.svg";
import useConfig from "@/modules/shared/stores/configStore";
import useGlobal from "@/modules/shared/stores/globalStore";

const globalStore = useGlobal();

/** loading overlay visibility */
const loading = computed(() => globalStore.loading);

const snackbarVisibility: Ref<boolean> = ref(false);
const snackbarText = computed(() => globalStore.message);
/** Clear store when snackbar hide */
const onSnackbarChanged = async () => {
  globalStore.setMessage();
  await nextTick();
};

watch(
  () => globalStore.message,
  (message) => (snackbarVisibility.value = message !== ""),
);

const theme = useTheme();
const configStore = useConfig();
watch(
  () => configStore.dark,
  (isDark) => (theme.global.name.value = isDark ? "dalil-dark" : "dalil-light"),
  {
    immediate: true,
  },
);

// locale switching
const i18n = useI18n();
watch(
  () => configStore.locale,
  (locale) => {
    i18n.locale.value = locale;
  },
);
</script>

<template>
  <VApp>
    <RouterView />

    <VSnackbar
      v-model="snackbarVisibility"
      :content-props="{ dir: 'auto' }"
      @update:model-value="onSnackbarChanged"
    >
      {{ snackbarText }}
      <template #actions>
        <VBtn :icon="mdiClose" @click="onSnackbarChanged" />
      </template>
    </VSnackbar>
  </VApp>
  <Teleport to="head">
    <meta name="theme-color" :content="theme.current.value.colors.primary" />
    <link rel="icon" :href="logo" type="image/svg+xml" />
  </Teleport>
</template>

<style lang="scss">
@use "vuetify/_settings";

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get(settings.$grey, "lighten-2")
    map-get(settings.$grey, "base");
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get(settings.$grey, "lighten-2");
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get(settings.$grey, "base");
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

// Fixed a bug that the theme color is interrupted when scrolling
.v-application {
  overflow-y: auto;
}

// Fix app-bar's progress-bar
.v-app-bar .v-progress-linear {
  position: absolute;
  bottom: 0;
}
</style>
