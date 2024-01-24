<script setup lang="ts">
import AppBar from "@/modules/shared/layouts/main/AppBar.vue";
import DrawerComponent from "@/modules/shared/layouts/main/DrawerComponent.vue";
</script>

<template>
  <DrawerComponent />

  <VMain>
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.name" />
    </RouterView>
  </VMain>

  <VFooter app elevation="3" :height="28" class="d-block py-1 px-3 text-end">
    <span class="text-caption">
      2023 &copy; All rights reserved. Dalil Shafi.
    </span>
  </VFooter>
</template>

<script setup lang="ts"></script>

<style>
.v-table thead tr th {
  background: rgba(var(--v-theme-primary), 0.8) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
  padding-top: 4px;
  padding-bottom: 40px;
}

.v-table td {
  border-right: solid rgba(var(--v-border-color), var(--v-border-opacity)) 1px;
}

.v-table th {
  border-right: solid rgba(var(--v-theme-on-primary), calc(0.5)) 1px;
}

/* A workaround the inavailbilty of specifying selection checkbox color of vuetify's */
.v-table tr.v-data-table__tr td:first-child div.v-selection-control--dirty {
  color: rgb(var(--v-theme-primary));
}
</style>

<style>
.v-table .v-table__wrapper > table {
  position: relative;
}
</style>
