<script setup lang="ts">
import { ref } from "vue";

const colorIsClicked = ref(false);

function test() {
  colorIsClicked.value = !colorIsClicked.value;
  console.log(colorIsClicked.value);
}
</script>

<template>
  <VCard width="300">
    <v-row no-gutters :class="colorIsClicked ? undefined : 'bg-primary'">
      <v-col cols="1">
        <v-sheet
          :color="colorIsClicked ? 'primary' : undefined"
          color-is-clicked
          height="40"
          class="pa-2 ma-1"
          @click="test"
        />
      </v-col>

      <v-col cols="11">
        <v-sheet class="ma-1">
          <v-text-field hide-details />
        </v-sheet>
      </v-col>
    </v-row>
  </VCard>
</template>
