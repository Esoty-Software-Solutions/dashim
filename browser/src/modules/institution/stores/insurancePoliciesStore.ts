import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client } from "@/queries";

const useInsurancePoliciesStore = defineStore(
  "InsurancePoliciesStoreList",
  () => {
    const idSearch = ref("");
    const idEnabled = ref(true);
    const nameFilter = useLocalStorage(
      "insurancePoliciesList.nameFilterValue",
      "",
    );
    const nameFilterEnabled = useLocalStorage<boolean>(
      "insurancePoliciesList.nameFilterEnabled",
      true,
    );
    // if using "immediate=true"
    // the table will to hit the api without the need to change dependant
    // the first fetch is when the filters/page change
    const { binding, items, triggerFetch } = useQuerierTable({
      storageKey: "insurancePoliciesList",
      input: () => {
        // type inputType = Parameters<typeof client.crud.beneficiary.findMany.query>[0]
        // const where: any = {};

        if (nameFilterEnabled.value && nameFilter.value.trim()) {
          // searchName : { contains: nameFilter.value.trim() }
          return {
            where: { name: { contains: nameFilter.value.trim() } },
          };
        }
        return {
          where: {},
        };
      },
      // findCallback: client.procedure.listSubscribers.query,
      findCallback: client.crud.insurancePolicy.findMany.query,
      onError(error) {
        globalStore.setMessage("Error while connection to server.");
        console.error(error);
      },
      immediate: true,
    });

    // &_& depending on ts performance and inference capabilities
    // `items`, `input` should have the proper types

    return {
      idSearch,
      idEnabled,
      nameFilter,
      nameFilterEnabled,
      binding,
      items,
      triggerFetch,
    };
  },
);

export default useInsurancePoliciesStore;
