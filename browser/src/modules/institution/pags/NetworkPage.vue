<script setup lang="ts">
import { useLayout, useDisplay } from "vuetify";

const { height } = useDisplay();
const { mainRect } = useLayout();
</script>

<template>
  <VContainer
    ref="container"
    fluid
    :style="{ height: `${height - mainRect.top - mainRect.bottom}px` }"
    style="border: 1px solid"
  />
</template>
