import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { createId } from "@paralleldrive/cuid2";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type BenefitPackageInput = Parameters<
  typeof client.crud.benefitPackage.createOne.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useCreateBenefitPackageStore = defineStore(
  "CreateBenefitPackageStore",
  () => {
    const dialog = useLocalStorage<boolean>(
      "createBenefitPackage.createBenefitPackageDialog",
      false,
    );
    const benefitPackageRef = ref<BenefitPackageInput>({
      id: createId(),
      name: "",
      copayDistrubtion: [0],
      threashold: [0],
      insurancePolicyId: "",
    });
    const benefitPackage = useLocalStorage<BenefitPackageInput>(
      "createBenefitPackage.BenefitPackage",
      benefitPackageRef,
    );
    // const relations = ref<RelationshipCrudResponseData>([]);
    // const genders = ref<GenderCrudResponseData>([]);
    const valid = ref(false);

    const {
      items: insurancePolicies,
      triggerFetch: triggerinsurancePoliciesFetch,
    } = useApi({
      storageKey: "createBenefitPackage. insurancePolicies",
      input: computed(() => ({
        where: {},
      })),
      // findCallback: client.procedure.listSubscribers.query,
      findCallback: client.crud.insurancePolicy.findMany.query,
      onError(error) {
        globalStore.setMessage("Error while connection to server.");
        console.error(error);
      },
      immediate: true,
    });

    const createBenefitPackage = async () => {
      try {
        if (valid.value) {
          const response = await client.crud.benefitPackage.createOne.mutate({
            data: benefitPackage.value,
          });
          console.log("response", response);
          return response;
        }
      } catch (error) {
        console.log("error1 ", error);
        return error;
      }
    };
    function $reset() {
      dialog.value = false;
      benefitPackage.value = {
        id: createId(),
        name: "",
        copayDistrubtion: [0],
        threashold: [0],
        insurancePolicyId: "",
      };
    }
    return {
      dialog,
      createBenefitPackage,
      benefitPackage,
      benefitPackageRef,
      insurancePolicies,
      triggerinsurancePoliciesFetch,
      valid,
      $reset,
    };
  },
);

export default useCreateBenefitPackageStore;
