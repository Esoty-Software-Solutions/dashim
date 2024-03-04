import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { createId } from "@paralleldrive/cuid2";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type InsurancePolicyInput = Parameters<
  typeof client.crud.insurancePolicy.createOne.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useCreateInsurancePolicyStore = defineStore(
  "CreateInsurancePolicyStore",
  () => {
    const dialog = useLocalStorage<boolean>(
      "createInsurancePolicy.createInsurancePolicyDialog",
      false,
    );
    const insurancePolicyRef = ref<InsurancePolicyInput>({
      id: createId(),
      name: "",
      Accumulatedlimit: 0,
      BalanceResetDate: new Date("1991-05-27T18:52:09.013Z"),
      institutionId: "",
      issueDate: new Date("1991-05-27T18:52:09.013Z"),
      renewalDate: new Date("1991-05-27T18:52:09.013Z"),
    });
    const insurancePolicy = useLocalStorage<InsurancePolicyInput>(
      "createInsurancePolicy.InsurancePolicy",
      insurancePolicyRef,
    );
    // const relations = ref<RelationshipCrudResponseData>([]);
    // const genders = ref<GenderCrudResponseData>([]);
    const valid = ref(false);

    const { items: institutions, triggerFetch: triggerInstitutionsFetch } =
      useApi({
        storageKey: "createInsurancePolicy. institutions",
        input: computed(() => ({
          where: {},
        })),
        // findCallback: client.procedure.listSubscribers.query,
        findCallback: client.crud.institution.findMany.query,
        onError(error) {
          globalStore.setMessage("Error while connection to server.");
          console.error(error);
        },
        immediate: true,
      });

    const createInsurancePolicy = async () => {
      try {
        if (valid.value && insurancePolicy.value.Accumulatedlimit > 0) {
          const response = await client.crud.insurancePolicy.createOne.mutate({
            data: insurancePolicy.value,
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
      insurancePolicy.value = {
        id: createId(),
        name: "",
        Accumulatedlimit: 0,
        BalanceResetDate: "",
        institutionId: "",
        issueDate: "",
        renewalDate: "",
      };
    }
    return {
      dialog,
      createInsurancePolicy,
      insurancePolicy,
      insurancePolicyRef,
      institutions,
      triggerInstitutionsFetch,
      valid,
      $reset,
    };
  },
);

export default useCreateInsurancePolicyStore;
