import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client } from "@/queries";

const useStoreList = defineStore("institutionsStoreList", () => {
  const nameFilter = useLocalStorage("institutionsList.nameFilterValue", "");
  const nameFilterEnabled = useLocalStorage<boolean>(
    "institutionsList.nameFilterEnabled",
    true,
  );

  const { binding, items } = useQuerierTable({
    input: () => {
      const where: any = {};

      if (nameFilterEnabled.value && nameFilter.value.trim()) {
        where.name = { equals: nameFilter.value.trim() };
      }

      return {
        where,
      };
    },
    storageKey: "institutionsList",
    findCallback: client.crud.institution.findMany.query,
    immediate: true,
  });

  return {
    nameFilter,
    nameFilterEnabled,

    binding,
  };
});

export default useStoreList;
