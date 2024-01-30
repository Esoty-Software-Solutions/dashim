import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client } from "@/queries";

const useBeneficiariesStore = defineStore("BeneficiariesStoreList", () => {
  const idSearch = ref("");
  const idEnabled = ref(true);
  const nameFilter = useLocalStorage("beneficiariesList.nameFilterValue", "");
  const nameFilterEnabled = useLocalStorage<boolean>(
    "beneficiariesList.nameFilterEnabled",
    true,
  );
  // const getSubs = async ()=>{
  // let subs =  await client.procedure.listSubscribers.query()
  //  if(subs?.data){
  //   subs.data.forEach(element => {
  //     element.beneficiaries.forEach(element => {
  //       element
  //     })
  //     element.
  //   })
  //  }
  // }
  // if using "immediate=true"
  // the table will to hit the api without the need to change dependant
  // the first fetch is when the filters/page change
  const { binding, items, triggerFetch } = useQuerierTable({
    storageKey: "beneficiariesList",
    input: () => {
      // type inputType = Parameters<typeof client.crud.beneficiary.findMany.query>[0]
      // const where: any = {};

      if (nameFilterEnabled.value && nameFilter.value.trim()) {
        // searchName : { contains: nameFilter.value.trim() }
        return {
          where: { searchName: { contains: nameFilter.value.trim() } },
        };
      }
      return {
        where: {},
      };
    },
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.beneficiary.findMany.query,
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
});

export default useBeneficiariesStore;
