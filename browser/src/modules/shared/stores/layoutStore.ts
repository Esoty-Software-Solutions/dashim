import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

const useLayout = defineStore("layout", () => {
  const drawer = useLocalStorage<boolean>("layout.drawer", true);

  return {
    drawer,

    toggleDrawer: () => (drawer.value = !drawer.value),
  };
});

export default useLayout;
