import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed, watch, watchEffect } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client } from "@/queries";

const useNetworkStore = defineStore("NetworkStoreList", () => {
  const idSearch = ref("");
  const idEnabled = ref(true);
  const nameFilter = useLocalStorage("networkList.nameFilterValue", "");
  const nameFilterEnabled = useLocalStorage<boolean>(
    "networkList.nameFilterEnabled",
    true,
  );
  const selectedInstitutionId = ref("");
  const institutions = ref([]);
  const insurancePolicies = ref([]);

  const selectedInsurancePolicyId = ref("");
  const insurancePolicyMedicalCenterIds = ref<string[] | never[]>([]);

  // if using "immediate=true"
  // the table will to hit the api without the need to change dependant
  // the first fetch is when the filters/page change
  // const pageSize = useLocalStorage<number>(
  //   `networkList.institution.table.pageSize`,
  //   50,
  // );
  const getInstitutions = async () => {
    const response = await client.crud.institution.findMany.query();
    institutions.value = response && response.data ? response.data : [];
  };
  const getInsurancePolicies = async (institutionId: string) => {
    const response = await client.crud.insurancePolicy.findMany.query({
      where: { institutionId: institutionId },
    });
    insurancePolicies.value = response && response.data ? response.data : [];
  };

  getInstitutions();
  const {
    binding: institutionBinding,
    items: institutionItems,
    triggerFetch: institutionTriggerFetch,
  } = useQuerierTable({
    storageKey: "networkList.institution",
    pageSize: -1,
    input: () => {
      return {
        // where: {},
      };
    },
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.institution.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });

  const {
    binding: insurancePoliciesBinding,
    items: insurancePoliciesItems,
    triggerFetch: insurancePoliciesTriggerFetch,
  } = useQuerierTable({
    storageKey: "networkList.insurancePolicies",
    input: () => {
      // type inputType = Parameters<typeof client.crud.beneficiary.findMany.query>[0]
      // const where: any = {};

      if (selectedInstitutionId.value) {
        // searchName : { contains: nameFilter.value.trim() }
        return {
          take: 100,
          where: { institutionId: selectedInstitutionId.value },
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

  const {
    binding: insurancePolicyMedicalCenterBinding,
    items: insurancePolicyMedicalCenterItems,
    triggerFetch: insurancePolicyMedicalCenterTriggerFetch,
  } = useQuerierTable({
    storageKey: "networkList.insurancePolicyMedicalCenter",
    input: () => {
      // type inputType = Parameters<typeof client.crud.beneficiary.findMany.query>[0]
      // const where: any = {};
      // if (nameFilterEnabled.value && nameFilter.value.trim()) {
      //   // searchName : { contains: nameFilter.value.trim() }
      //   return {
      //     // where: {
      //     //   name: { contains: nameFilter.value.trim() },
      //     //   insurancePolicy: {
      //     //     id: selectedInsurancePolicyId.value
      //     //       ? selectedInsurancePolicyId.value
      //     //       : undefined,
      //     //   },
      //     // },
      //   };
      // }
      return {
        where: {
          insurancePolicy: {
            id: selectedInsurancePolicyId.value
              ? selectedInsurancePolicyId.value
              : undefined,
          },
        },
      };
    },
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.insurancePolicyMedicalCenter.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });
  const {
    binding: medicalCenterBinding,
    items: medicalCenterItems,
    triggerFetch: medicalCenterTriggerFetch,
  } = useQuerierTable({
    storageKey: "networkList.medicalCenter",
    input: () => {
      // type inputType = Parameters<typeof client.crud.beneficiary.findMany.query>[0]
      // const where: any = {};
      // if (nameFilterEnabled.value && nameFilter.value.trim()) {
      // searchName : { contains: nameFilter.value.trim() }
      return {
        where: {
          id: { in: insurancePolicyMedicalCenterIds.value },
          name:
            nameFilterEnabled.value && nameFilter.value.trim()
              ? { contains: nameFilter.value.trim() }
              : undefined,

          //   name: { contains: nameFilter.value.trim() },
          //   insurancePolicy: {
          //     id: selectedInsurancePolicyId.value
          //       ? selectedInsurancePolicyId.value
          //       : undefined,
          //   },
        },
      };
      // }
    },
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.medicalCenter.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });
  return {
    idSearch,
    idEnabled,
    nameFilter,
    nameFilterEnabled,
    selectedInstitutionId,
    selectedInsurancePolicyId,
    medicalCenterBinding,
    medicalCenterItems,
    medicalCenterTriggerFetch,
    institutionBinding,
    institutionItems,
    institutionTriggerFetch,
    insurancePoliciesBinding,
    insurancePoliciesItems,
    insurancePoliciesTriggerFetch,
    insurancePolicyMedicalCenterBinding,
    insurancePolicyMedicalCenterItems,
    insurancePolicyMedicalCenterTriggerFetch,
    insurancePolicyMedicalCenterIds,
    getInstitutions,
    institutions,
    getInsurancePolicies,
    insurancePolicies,
  };
});

export default useNetworkStore;