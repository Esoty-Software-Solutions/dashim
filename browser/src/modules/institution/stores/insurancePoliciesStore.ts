import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client, type RouterOutput } from "@/queries";

const useInsurancePoliciesStore = defineStore(
  "InsurancePoliciesStoreList",
  () => {
    const idSearch = ref("");
    const idEnabled = ref(true);
    const nameFilter = useLocalStorage(
      "insurancePoliciesList.nameFilterValue",
      "",
    );
    const dialog = useLocalStorage<boolean>(
      "createInsurancePolicy.dialog",
      false,
    );

    const nameFilterEnabled = useLocalStorage<boolean>(
      "insurancePoliciesList.nameFilterEnabled",
      true,
    );
    type InstitutionOutput = RouterOutput["crud"]["institution"]["findMany"];
    type Institution = NonNullable<InstitutionOutput>["data"][number];
    const selectedInstitution = ref<Institution | null>(null);
    const selectedInstitutionEnabled = useLocalStorage<boolean>(
      "beneficiariesList2.selectedInstitutionEnabled",
      true,
    );
    const editDialog = useLocalStorage<boolean>(
      "createInstitution.editDialog",
      false,
    );
    const editedItem = ref({});
    // if using "immediate=true"
    // the table will to hit the api without the need to change dependant
    // the first fetch is when the filters/page change
    const { binding, items, triggerFetch } = useQuerierTable({
      storageKey: "insurancePoliciesList",

      // if (nameFilterEnabled.value && nameFilter.value.trim()) {
      //   // searchName : { contains: nameFilter.value.trim() }
      //   return {
      //     where: { name: { contains: nameFilter.value.trim() } },
      //   };
      // }
      input: computed(() => ({
        where: {
          institutionId:
            selectedInstitution.value && selectedInstitutionEnabled.value
              ? selectedInstitution.value
              : undefined,
          name:
            nameFilterEnabled.value && nameFilter.value.trim()
              ? { contains: nameFilter.value.trim() }
              : undefined,
        },
      })),
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
      selectedInstitution,
      selectedInstitutionEnabled,
      dialog,
      editDialog,
      editedItem,
    };
  },
);

export default useInsurancePoliciesStore;
