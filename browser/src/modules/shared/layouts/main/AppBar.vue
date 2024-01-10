<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { computed } from "vue";

import useGlobal from "@/modules/shared/stores/globalStore";
import useLayoutStore from "@/modules/shared/stores/layoutStore";

const { toggleDrawer } = useLayoutStore();
const globalStore = useGlobal();

/** loading overlay visibility */
const progress = computed(() => globalStore.progress);

const title = useTitle(null, {
  observe: true,
});
</script>

<template>
  <VAppBar density="comfortable">
    <VAppBarNavIcon @click="toggleDrawer" />
    <VAppBarTitle tag="h1">{{ title }}</VAppBarTitle>
    <VSpacer />

    <VProgressLinear
      v-show="globalStore.loading"
      :active="globalStore.loading"
      :indeterminate="progress === null"
      :model-value="progress !== null ? progress : 0"
      absolute
      color="primary"
    />
  </VAppBar>
</template>
