import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type BenefitPackageInput = Parameters<
  typeof client.crud.benefitPackage.updateOne.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useCreateBenefitPackageStore = defineStore(
  "CreateBenefitPackageStore",
  () => {
    const dialog = useLocalStorage<boolean>(
      "editBenefitPackage.editBenefitPackageDialog",
      false,
    );
    const benefitPackageRef = ref<BenefitPackageInput>({});
    const benefitPackage = useLocalStorage<BenefitPackageInput>(
      "editBenefitPackage.BenefitPackage",
      benefitPackageRef,
    );
    const sentBenefitPackageRef = ref<BenefitPackageInput>({});
    const sentBenefitPackage = useLocalStorage<BenefitPackageInput>(
      "editBenefitPackage.sentBenefitPackage",
      sentBenefitPackageRef,
    );
    // const relations = ref<RelationshipCrudResponseData>([]);
    // const genders = ref<GenderCrudResponseData>([]);
    const valid = ref(false);

    const {
      items: insurancePolicies,
      triggerFetch: triggerinsurancePoliciesFetch,
    } = useApi({
      storageKey: "editBenefitPackage.insurancePolicies",
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

    const updateBenefitPackage = async () => {
      try {
        if (valid.value) {
          const response = await client.crud.benefitPackage.updateOne.mutate({
            data: benefitPackage.value,
            where: {
              id: benefitPackage.value.id,
            },
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
      benefitPackage.value = {};
      sentBenefitPackage.value = {};
    }
    return {
      dialog,
      updateBenefitPackage,
      benefitPackage,
      benefitPackageRef,
      insurancePolicies,
      triggerinsurancePoliciesFetch,
      valid,
      $reset,
      sentBenefitPackage,
    };
  },
);

export default useCreateBenefitPackageStore;
