import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client, type RouterInput, type RouterOutput } from "@/queries";

const useBeneficiariesStore = defineStore("BeneficiariesStoreList2", () => {
  const idSearch = ref("");
  const idEnabled = ref(true);
  const nameFilter = useLocalStorage("beneficiariesList2.nameFilterValue", "");
  const nameFilterEnabled = useLocalStorage<boolean>(
    "beneficiariesList2.nameFilterEnabled",
    true,
  );

  const isActiveFilter = ref<string | null>("true");
  const isActiveFilterEnabled = useLocalStorage<boolean>(
    "beneficiariesList2.isActiveFilterEnabled",
    true,
  );

  type InstitutionOutput = RouterOutput["crud"]["institution"]["findMany"];
  type Institution = NonNullable<InstitutionOutput>["data"][number];
  const selectedInstitution = ref<Institution | null>(null);
  const selectedInstitutionEnabled = useLocalStorage<boolean>(
    "beneficiariesList2.selectedInstitutionEnabled",
    true,
  );

  type CityOutput = RouterOutput["crud"]["city"]["findMany"];
  type City = NonNullable<CityOutput>["data"][number];
  const selectedCity = ref<City[] | string[]>([]);
  const selectedCityEnabled = useLocalStorage<boolean>(
    "beneficiariesList2.selectedCityEnabled",
    true,
  );
  const dialog = useLocalStorage<boolean>("createBeneficiaries.dialog", false);
  const addBeneficiarydialog = useLocalStorage<boolean>(
    "createBeneficiaries.addBeneficiarydialog",
    false,
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
    storageKey: "beneficiariesList2",
    input: computed(() => ({
      where: {
        //   AND: [
        //     {
        isActive:
          isActiveFilterEnabled.value && isActiveFilter.value == "true"
            ? true
            : undefined,
        //     },
        //     {
        isActive:
          isActiveFilterEnabled.value && isActiveFilter.value == undefined
            ? false
            : undefined,
        //     },
        //     {
        // insurancePolicy:  {
        //   institutionId:
        //     selectedInstitution.value && selectedInstitutionEnabled.value
        //       ? selectedInstitution.value
        //       : undefined,
        // },
        insurancePolicy:
          selectedInstitution.value && selectedInstitutionEnabled.value
            ? {
                institutionId: selectedInstitution.value,
              }
            : undefined,
        //     },
        //     {
        beneficiaries:
          nameFilterEnabled.value && nameFilter.value.trim()
            ? {
                some: {
                  searchName:
                    nameFilterEnabled.value && nameFilter.value.trim()
                      ? { contains: nameFilter.value.trim() }
                      : undefined,
                },
              }
            : undefined,
        //     },
        //     {
        // cityId: {
        //   in:
        //     selectedCity.value.length !== 0 && selectedCityEnabled.value
        //       ? selectedCity.value
        //       : undefined,
        // },
        cityId:
          selectedCity.value.length !== 0 && selectedCityEnabled.value
            ? {
                in: selectedCity.value,
              }
            : undefined,
        //     },
        //   ],
        //   NOT: {
        //     beneficiaries: {
        //       none: {},
        //     },
        //   },
      },
    })),
    findCallback: client.procedure.listBeneficiaryEntities.query,

    // the first fetch is when the filters/page change
    // const { binding, items, triggerFetch } = useQuerierTable({
    //   storageKey: "beneficiariesList2",
    //   input: () => {
    //     if (nameFilterEnabled.value && nameFilter.value.trim()) {
    //       return {
    //         where: {
    //           AND: [
    //             {
    //               beneficiaries: {
    //                 some: {
    //                   searchName: { contains: nameFilter.value.trim() },
    //                 },
    //               },
    //             },
    //           ],
    //           NOT: {
    //             beneficiaries: {
    //               none: {},
    //             },
    //           },
    //         },
    //       };
    //     }
    //     return {
    //       where: {
    //         NOT: {
    //           beneficiaries: {
    //             none: {},
    //           },
    //         },
    //       },
    //     };
    //   },
    //   findCallback: client.procedure.listBeneficiaryEntities.query,
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
    isActiveFilter,
    isActiveFilterEnabled,
    selectedInstitution,
    selectedInstitutionEnabled,
    selectedCity,
    selectedCityEnabled,
    dialog,
    addBeneficiarydialog,
  };
});

export default useBeneficiariesStore;
