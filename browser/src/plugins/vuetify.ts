/**
 * Vuetify3 Plugin
 */
import { useI18n } from "vue-i18n";

import {
  createVuetify,
  type VuetifyOptions,
  type ThemeDefinition,
} from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
// Translations provided by Vuetify
import { en, ar } from "vuetify/locale";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";

import { loadFonts } from "@/plugins/webfontloader";

import i18n from "./i18n";

// Styles
import "vuetify/styles";

i18n.global.mergeLocaleMessage("en", { $vuetify: en });
i18n.global.mergeLocaleMessage("ar", { $vuetify: ar });

await loadFonts();

const dalilLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#39bcc0",
    "on-primary": "#ffffff",
    background: "#F6F6F6",
  },
};

const dalilDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#39bcc0",
    "on-primary": "#ffffff",
  },
};

let vuetifyConfig: VuetifyOptions = {
  // Global configuration
  // https://vuetifyjs.com/en/features/global-configuration/
  defaults: {
    global: {
      density: "compact",
    },
    VAlert: {
      variant: "tonal",
    },
    VTextField: {
      color: "primary",
    },
  },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },

  // Internationalization (i18n)
  // https://vuetifyjs.com/en/features/internationalization/#internationalization-i18n
  locale: {
    // @ts-expect-error
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  // Theme
  // https://vuetifyjs.com/en/features/theme/
  theme: {
    defaultTheme: "dalil-light",
    themes: {
      "dalil-light": dalilLightTheme,
      "dalil-dark": dalilDarkTheme,
    },
  },
};

if (import.meta.env.DEV) {
  // Disable treeshaking for DEV mode.
  const components = (await import("vuetify/components")).default;
  // const components = (await import('vuetify/laba')).default

  vuetifyConfig = {
    ...vuetifyConfig,
    components: { components },
  };
}
export default createVuetify(vuetifyConfig);
