/**
 * Vue3 Main script
 */

// Load vue core
import { createPinia } from "pinia";
import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";

import App from "@/App.vue";
import i18n from "@/plugins/i18n";
import vuetify from "@/plugins/vuetify";
import router from "@/router";

import "@/queries";

/** Register Vue */
const vue = createApp(App);
const pinia = createPinia();
vue.use(router);
vue.use(VueQueryPlugin);
vue.use(pinia);
vue.use(i18n);
vue.use(vuetify);

// Run!
router
  .isReady()
  .then(() => vue.mount("#app"))
  .catch((e) => console.error(e));
