import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type BeneficiaryInput = Parameters<
  typeof client.crud.beneficiary.updateOne.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useEditBeneficiaryStore = defineStore("EditBeneficiaryStore", () => {
  const dialog = useLocalStorage<boolean>(
    "editBeneficiary.editBeneficiaryDialog",
    false,
  );
  const beneficiaryRef = ref<BeneficiaryInput>({});
  const beneficiary = useLocalStorage<BeneficiaryInput>(
    "editBeneficiary.beneficiary",
    beneficiaryRef,
  );
  const sentBeneficiaryRef = ref<BeneficiaryInput>({});
  const sentBeneficiary = useLocalStorage<BeneficiaryInput>(
    "editBeneficiary.sentBeneficiary",
    sentBeneficiaryRef,
  );
  const valid = ref(false);

  const { items: genders, triggerFetch: triggerGendersFetch } = useApi({
    storageKey: "editBeneficiary.genders",
    input: computed(() => ({
      where: {},
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.genderEnum.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });

  const { items: relationships, triggerFetch: triggerRelationshipsFetch } =
    useApi({
      storageKey: "editBeneficiary.relationships",
      input: computed(() => ({
        where: {},
      })),
      // findCallback: client.procedure.listSubscribers.query,
      findCallback: client.crud.relationshipEnum.findMany.query,
      onError(error) {
        globalStore.setMessage("Error while connection to server.");
        console.error(error);
      },
      immediate: true,
    });
  const updateBeneficiary = async () => {
    try {
      if (valid.value) {
        console.log(" beneficiary.value", beneficiary.value);

        const response = await client.crud.beneficiary.updateOne.mutate({
          data: sentBeneficiary.value,
          where: {
            id: beneficiary.value.id,
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
    beneficiary.value = {};
    sentBeneficiary.value = {};
  }
  return {
    dialog,
    updateBeneficiary,
    beneficiary,
    beneficiaryRef,
    relationships,
    triggerRelationshipsFetch,
    genders,
    triggerGendersFetch,
    valid,
    $reset,
    sentBeneficiary,
  };
});

export default useEditBeneficiaryStore;
