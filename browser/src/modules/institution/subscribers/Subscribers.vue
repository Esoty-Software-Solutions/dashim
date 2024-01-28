<script setup lang="ts">
import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
defineOptions({
  name: "InstitutionsSubscribersPage",
});
</script>

<template>
  <DataPageBase>
    <template #actions>
      <VCardActions>
        <VBtn>Action 1</VBtn>
      </VCardActions>
    </template>
  </DataPageBase>
</template>
