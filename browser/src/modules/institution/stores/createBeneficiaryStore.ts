import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { createId } from "@paralleldrive/cuid2";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type BeneficiaryInput = Parameters<
  typeof client.procedure.createBeneficiary.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useCreateBeneficiaryStore = defineStore("CreateBeneficiaryStore", () => {
  const dialog = useLocalStorage<boolean>(
    "createBeneficiary.createBeneficiaryDialog",
    false,
  );
  const beneficiaryRef = ref<BeneficiaryInput>({
    id: createId(),
    firstName: "",
    secondName: "",
    thirdName: "",
    lastName: "",
    birthDate: new Date("1991-05-27T18:52:09.013Z"),
    genderId: "",
    nationality: "",
    beneficiaryEntityId: "",
    relationshipId: "",
  });
  const beneficiary = useLocalStorage<BeneficiaryInput>(
    "createBeneficiary.beneficiary",
    beneficiaryRef,
  );
  // const relations = ref<RelationshipCrudResponseData>([]);
  // const genders = ref<GenderCrudResponseData>([]);
  const valid = ref(false);

  const { items: genders, triggerFetch: triggerGendersFetch } = useApi({
    storageKey: "createBeneficiary.genders",
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
      storageKey: "createBeneficiary.relationships",
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
  const createBeneficiary = async () => {
    try {
      if (valid.value) {
        const response = await client.procedure.createBeneficiary.mutate({
          data: beneficiary.value,
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
    beneficiary.value = {
      id: createId(),
      firstName: "",
      secondName: "",
      thirdName: "",
      lastName: "",
      birthDate: new Date("1991-05-27T18:52:09.013Z"),
      genderId: "",
      nationality: "",
      beneficiaryEntityId: "",
      relationshipId: "",
    };
  }
  return {
    dialog,
    createBeneficiary,
    beneficiary,
    beneficiaryRef,
    relationships,
    triggerRelationshipsFetch,
    genders,
    triggerGendersFetch,
    valid,
    $reset,
  };
});

export default useCreateBeneficiaryStore;
