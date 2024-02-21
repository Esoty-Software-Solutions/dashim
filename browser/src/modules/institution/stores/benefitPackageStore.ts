import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useApi from "../composables/useApi";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client, type RouterOutput } from "@/queries";

const useBenefitPackagesStore = defineStore("BenefitPackagesStoreList", () => {
  const idSearch = ref("");
  const idEnabled = ref(true);
  const nameFilter = useLocalStorage("benefitPackagesList.nameFilterValue", "");
  const nameFilterEnabled = useLocalStorage<boolean>(
    "benefitPackagesList.nameFilterEnabled",
    true,
  );
  type InstitutionOutput = RouterOutput["crud"]["institution"]["findMany"];
  type Institution = NonNullable<InstitutionOutput>["data"][number];
  const selectedInstitution = ref<Institution["id"] | null>(null);
  const selectedInstitutionEnabled = useLocalStorage<boolean>(
    "benefitPackagesList.selectedInstitutionEnabled",
    true,
  );
  type InsurancePolicyOutput =
    RouterOutput["crud"]["insurancePolicy"]["findMany"];
  type InsurancePolicy = NonNullable<InsurancePolicyOutput>["data"][number];
  const selectedInsurancePolicy = ref<InsurancePolicy["id"] | null>(null);
  const selectedInsurancePolicyEnabled = useLocalStorage<boolean>(
    "benefitPackagesList.selectedInsurancePolicyEnabled",
    true,
  );
  type BenefitPackegeOutput =
    RouterOutput["crud"]["benefitPackage"]["findMany"];
  type BenefitPackege = NonNullable<BenefitPackegeOutput>["data"][number];

  const selectedBenefitPackege = ref<BenefitPackege["id"] | null>(null);
  const selectedBenefitPackegeName = ref<string>("");
  const selectedServiceCategoriesIds = ref<string[] | never[]>([]);
  const selectedServiceCategory = ref<string | null>(null);
  const selectedServiceCategoryEnabled = useLocalStorage<boolean>(
    "benefitPackagesList.selectedServiceCategoryEnabled",
    true,
  );
  // if using "immediate=true"
  // the table will to hit the api without the need to change dependant
  // the first fetch is when the filters/page change
  const { binding, items, triggerFetch } = useQuerierTable({
    storageKey: "benefitPackagesList.benefitPackage",
    input: computed(() => ({
      where: {
        insurancePolicyId:
          selectedInsurancePolicy.value && selectedInsurancePolicyEnabled.value
            ? selectedInsurancePolicy.value
            : undefined,
        name:
          nameFilterEnabled.value && nameFilter.value.trim()
            ? { contains: nameFilter.value.trim() }
            : undefined,
      },
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.benefitPackage.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });

  const { items: benenfitPackageServiceCategories } = useApi({
    storageKey: "benefitPackagesList.benefitPackageMedicalServiceCategory",
    input: computed(() => ({
      // take: 1,
      where: {
        benefitPackageId: selectedBenefitPackege.value
          ? selectedBenefitPackege.value
          : undefined,
      },
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback:
      client.crud.benefitPackageMedicalServiceCategory.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });

  const { items: serviceCategories } = useApi({
    storageKey: "benefitPackagesList.medicalServiceCategory",

    // if (nameFilterEnabled.value && nameFilter.value.trim()) {
    //   // searchName : { contains: nameFilter.value.trim() }
    //   return {
    //     where: { name: { contains: nameFilter.value.trim() } },
    //   };
    // }
    input: computed(() => ({
      // take: 1,
      where: {
        id: { in: selectedServiceCategoriesIds.value },
      },
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.medicalServiceCategory.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    // immediate: true,
  });
  const { items: medicalServices } = useApi({
    storageKey: "benefitPackagesList.medicalService",

    // if (nameFilterEnabled.value && nameFilter.value.trim()) {
    //   // searchName : { contains: nameFilter.value.trim() }
    //   return {
    //     where: { name: { contains: nameFilter.value.trim() } },
    //   };
    // }
    input: computed(() => ({
      take: 20,
      where: {
        categoryId: selectedServiceCategory.value
          ? selectedServiceCategory.value
          : { in: selectedServiceCategoriesIds.value },
      },
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.medicalService.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    // immediate: true,
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
    benenfitPackageServiceCategories,
    selectedInsurancePolicy,
    selectedInsurancePolicyEnabled,
    selectedBenefitPackege,
    selectedBenefitPackegeName,
    selectedServiceCategoriesIds,
    selectedServiceCategoryEnabled,
    selectedServiceCategory,
    serviceCategories,
    medicalServices,
    // if using "immediate=true"
  };
});

export default useBenefitPackagesStore;
