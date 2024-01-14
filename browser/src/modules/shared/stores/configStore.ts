import {
  usePreferredDark,
  useLocalStorage,
  usePreferredLanguages,
} from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

import i18n, { type SupportedLocale } from "@/plugins/i18n";

function getDefaultLocale(): SupportedLocale {
  let locale: SupportedLocale = "ar";

  const match = usePreferredLanguages().value.find(
    (locale) => locale.startsWith("en") || locale.startsWith("ar"),
  );

  if (match?.startsWith("en")) {
    locale = "en";
  } else if (match?.startsWith("ar")) {
    locale = "ar";
  }

  return locale;
}

const useConfig = defineStore("config", () => {
  const dark = useLocalStorage("theme.darkMode", usePreferredDark().value);

  /** Toggle Dark/Light mode */
  const toggleTheme = () => (dark.value = !dark.value);

  const locale = useLocalStorage<SupportedLocale>("locale", getDefaultLocale());

  // upon application boot, tell vue-i18n to use the preserved locale
  i18n.global.locale.value = locale.value;
  /**
   * Set Locale.
   *
   */
  function setLocale(l: SupportedLocale) {
    locale.value = l;
  }

  /**
   * List of loaded of locales that are successfully lazy loaded
   */
  const loadedLocales = ref<SupportedLocale[]>([]);
  async function loadLocaleMessages() {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[I18n]: Loading "${locale.value}"locale messages.`);
    }

    const jsonModule = await import(
      `../../../assets/locales/locale-${locale.value}.json`
    );

    loadedLocales.value.push(locale.value);
    i18n.global.mergeLocaleMessage(locale.value, jsonModule.default);
  }

  watch(locale, async (value) => {
    i18n.global.fallbackWarn = false;
    i18n.global.missingWarn = false;

    if (!loadedLocales.value.includes(value)) {
      await loadLocaleMessages();
    }

    i18n.global.locale.value = value;

    i18n.global.fallbackWarn = true;
    i18n.global.missingWarn = true;
  });

  return {
    dark,
    locale,

    toggleTheme,
    setLocale,

    /**
     * Configures the application according to the users preferred locale
     *
     * Should be invoked once the user preferences are already available
     */
    initializeI18n: async () => {
      setLocale(locale.value);
      await loadLocaleMessages();
    },
  };
});

export default useConfig;
