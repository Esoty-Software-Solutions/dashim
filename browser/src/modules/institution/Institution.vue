<script setup lang="ts">
import { ref } from "vue";

import { VDataTable } from "vuetify/components/VDataTable";

import Filter from "./Filter.vue";

import type { File } from "buffer";
type VDataTableHeaders = VDataTable["headers"];

let tab = ref("");
const headers: VDataTableHeaders = [
  { title: "Plant", align: "start", sortable: false, key: "name" },
  { title: "Light", align: "end", key: "light" },
  { title: "Height", align: "end", key: "height" },
  { title: "Pet Friendly", align: "end", key: "petFriendly" },
  { title: "Price ($)", align: "end", key: "price" },
];

const test = [
  {
    name: "Fern",
    light: "Low",
    height: "20cm",
    petFriendly: "Yes",
    price: 20,
  },
  {
    name: "Snake Plant",
    light: "Low",
    height: "50cm",
    petFriendly: "No",
    price: 35,
  },
  {
    name: "Monstera",
    light: "Medium",
    height: "60cm",
    petFriendly: "No",
    price: 50,
  },
  {
    name: "Pothos",
    light: "Low to medium",
    height: "40cm",
    petFriendly: "Yes",
    price: 25,
  },
  {
    name: "ZZ Plant",
    light: "Low to medium",
    height: "90cm",
    petFriendly: "Yes",
    price: 30,
  },
  {
    name: "Spider Plant",
    light: "Bright, indirect",
    height: "30cm",
    petFriendly: "Yes",
    price: 15,
  },
  {
    name: "Air Plant",
    light: "Bright, indirect",
    height: "15cm",
    petFriendly: "Yes",
    price: 10,
  },
  {
    name: "Peperomia",
    light: "Bright, indirect",
    height: "25cm",
    petFriendly: "Yes",
    price: 20,
  },
  {
    name: "Aloe Vera",
    light: "Bright, direct",
    height: "30cm",
    petFriendly: "Yes",
    price: 15,
  },
  {
    name: "Jade Plant",
    light: "Bright, direct",
    height: "40cm",
    petFriendly: "Yes",
    price: 25,
  },
  {
    name: "Aloe Vera",
    light: "Bright, direct",
    height: "30cm",
    petFriendly: "Yes",
    price: 15,
  },
  {
    name: "Jade Plant",
    light: "Bright, direct",
    height: "40cm",
    petFriendly: "Yes",
    price: 25,
  },
];
</script>

<template>
  <VCard>
    <v-tabs v-model="tab" height="60">
      <v-tab color="primary" value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <VContainer fluid class="pa-0">
            <VRow>
              <VCol cols="3"><Filter /></VCol>
              <VCol cols="3"><Filter /></VCol>
              <VCol cols="3"><Filter /></VCol>
              <VCol cols="3"><Filter /></VCol>
            </VRow>
            <VSheet class="d-flex flex-wrap ga-2 mt-3">
              <VBtn height="40">OUTLIND</VBtn>
              <VBtn height="40">ELEVATED</VBtn>
              <VBtn height="40">FLAT</VBtn>
              <VBtn height="40">ELEVATED</VBtn>
              <VBtn height="40">ELEVATED</VBtn>
              <VBtn height="40">ELEVATED</VBtn>
            </VSheet>
            <VDataTable
              fixed-header
              height="425"
              :items="test"
              :headers="headers"
              class="ma-2"
            />

            <VRow>
              <VCol><h1>Statistics</h1></VCol>
              <VCol> <p>Key: value</p></VCol>
              <VCol> <p>Key: value</p></VCol>
              <VCol> <p>Key: value</p></VCol>
            </VRow>
          </VContainer>
        </v-window-item>

        <v-window-item value="two">
          <div>
            <div class="d-flex flex-row mb-6">
              <VCheckbox hide-details class="flex-grow-0" />
              <VTextField class="ma-2 pa-2" />
            </div>
          </div>
        </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </VCard>
</template>
