<script setup lang="ts">
import { ref } from "vue";

import InstitutionPage from "../institution/pags/InstitutionPage.vue";
import NetworkPage from "../institution/pags/NetworkPage.vue";
import SubscribersPage from "../institution/pags/SubscribersPage.vue";

defineOptions({
  name: "HomePage",
  components: {
    InstitutionPage,
    NetworkPage,
    SubscribersPage,
  },
});

let tab = ref("");

const tapName: { name: string; key: string }[] = [
  { name: "Institutions", key: "InstitutionPage" },
  { name: "Network", key: "NetworkPage" },
  { name: "Subscribers", key: "SubscribersPage" },
];
</script>

<template>
  <VCard>
    <v-tabs v-model="tab" height="60">
      <v-tab
        v-for="tap in tapName"
        :key="tap.key"
        color="primary"
        :value="tap.key"
        >{{ tap.name }}</v-tab
      >
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item v-for="tap in tapName" :key="tap.key" :value="tap.key">
          <component :is="tap.key" />
        </v-window-item>
      </v-window>
    </v-card-text>
  </VCard>
</template>
