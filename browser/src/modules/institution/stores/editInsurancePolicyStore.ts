import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useApi from "../composables/useApi";

import globalStore from "@/modules/shared/stores/globalStore";
import { client } from "@/queries";

type InsurancePolicyInput = Parameters<
  typeof client.crud.insurancePolicy.updateOne.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useEditInsurancePolicyStore = defineStore(
  "EditInsurancePolicyStore",
  () => {
    const dialog = useLocalStorage<boolean>(
      "editInsurancePolicy.editInsurancePolicyDialog",
      false,
    );
    const insurancePolicyRef = ref<InsurancePolicyInput>({
      BalanceResetDate: new Date("1991-05-27T18:52:09.013Z"),
      issueDate: new Date("1991-05-27T18:52:09.013Z"),
      renewalDate: new Date("1991-05-27T18:52:09.013Z"),
    });
    const insurancePolicy = useLocalStorage<InsurancePolicyInput>(
      "editInsurancePolicy.InsurancePolicy",
      insurancePolicyRef,
    );
    const sentInsurancePolicyRef = ref<InsurancePolicyInput>({
      BalanceResetDate: new Date("1991-05-27T18:52:09.013Z"),
      issueDate: new Date("1991-05-27T18:52:09.013Z"),
      renewalDate: new Date("1991-05-27T18:52:09.013Z"),
    });
    const sentInsurancePolicy = useLocalStorage(
      "editInsurancePolicy.sentInsurancePolicy",
      sentInsurancePolicyRef,
    );
    // const relations = ref<RelationshipCrudResponseData>([]);
    // const genders = ref<GenderCrudResponseData>([]);
    const valid = ref(false);

    const { items: institutions, triggerFetch: triggerInstitutionsFetch } =
      useApi({
        storageKey: "editInsurancePolicy.institutions",
        input: computed(() => ({
          where: {},
        })),
        // findCallback: client.procedure.listSubscribers.query,
        findCallback: client.crud.institution.findMany.query,
        onError(error) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          globalStore.setMessage("Error while connection to server.");
          console.error(error);
        },
        immediate: true,
      });

    const updateInsurancePolicy = async () => {
      try {
        if (valid.value && Object.keys(sentInsurancePolicy.value).length > 0) {
          const response = await client.crud.insurancePolicy.updateOne.mutate({
            data: sentInsurancePolicy.value,
            where: {
              id: insurancePolicy.value.id,
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
      insurancePolicy.value = {};
      sentInsurancePolicy.value = {};
    }
    return {
      dialog,
      updateInsurancePolicy,
      insurancePolicy,
      insurancePolicyRef,
      institutions,
      triggerInstitutionsFetch,
      valid,
      $reset,
      sentInsurancePolicy,
    };
  },
);

export default useEditInsurancePolicyStore;
