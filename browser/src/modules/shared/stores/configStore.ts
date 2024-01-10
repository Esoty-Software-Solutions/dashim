import {
  usePreferredDark,
  useLocalStorage,
  usePreferredLanguages,
} from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

const useConfig = defineStore("config", () => {
  const dark = useLocalStorage("theme.darkMode", usePreferredDark().value);
  const locale = ref(usePreferredLanguages().value[0] ?? "en");
  /** Toggle Dark/Light mode */
  const toggleTheme = () => (dark.value = !dark.value);
  /**
   * Set Locale.
   *
   * @param locale - Locale
   */
  const setLocale = (l: string) => (locale.value = l);

  return {
    dark,
    locale,
    toggleTheme,
    setLocale,
  };
});

export default useConfig;
