import { useLocalStorage } from "@vueuse/core";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";

// import { createId } from "@paralleldrive/cuid2";
import useApi from "../composables/useApi";

import { client } from "@/queries";

type updateBeneficiaryProcedureInput = Parameters<
  typeof client.crud.beneficiaryEntity.updateOne.mutate
>[0]["data"];
type InstitutionCrudResponse = Awaited<
  ReturnType<typeof client.crud.institution.findMany.query>
>;
type InstitutionCrudResponseData = NonNullable<InstitutionCrudResponse>["data"];
type InsurancePoliciesCrudResponse = Awaited<
  ReturnType<typeof client.crud.insurancePolicy.findMany.query>
>;

type InsurancePoliciesCrudResponseData =
  NonNullable<InsurancePoliciesCrudResponse>["data"];

type RelationshipCrudResponse = Awaited<
  ReturnType<typeof client.crud.relationshipEnum.findMany.query>
>;
type RelationshipCrudResponseData =
  NonNullable<RelationshipCrudResponse>["data"];

type GenderCrudResponse = Awaited<
  ReturnType<typeof client.crud.genderEnum.findMany.query>
>;
type GenderCrudResponseData = NonNullable<GenderCrudResponse>["data"];

type CityCrudResponse = Awaited<
  ReturnType<typeof client.crud.cityEnum.findMany.query>
>;
type CityCrudResponseData = NonNullable<CityCrudResponse>["data"];

type BeneficiaryInput = Parameters<
  typeof client.crud.beneficiaryEntity.updateOne.mutate
>[0]["data"]["beneficiaries"][0];
// declare const properlyTyped: { prop: { a: string } };

const useEditBeneficiariesStore = defineStore("EditBeneficiariesStore", () => {
  const dialog = useLocalStorage<boolean>(
    "editBeneficiaries.editBeneficiariesDialog",
    false,
  );
  const beneficiaryRef = ref<updateBeneficiaryProcedureInput>({});
  const beneficiary = useLocalStorage<updateBeneficiaryProcedureInput>(
    "editBeneficiaries.beneficiary",
    beneficiaryRef,
  );
  const sentBeneficiaryRef = ref<updateBeneficiaryProcedureInput>({});
  const sentBeneficiary = useLocalStorage<updateBeneficiaryProcedureInput>(
    "editBeneficiaries.sentBeneficiary",
    sentBeneficiaryRef,
  );
  const selectedInstitutionId = ref<string>("");
  const relations = ref<RelationshipCrudResponseData>([]);
  const valid = ref(false);

  const { items: cities, triggerFetch: getCities } = useApi({
    storageKey: "editBeneficiaryEntity.cities",
    input: computed(() => ({
      where: {},
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.cityEnum.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });
  const { items: insurancePolicies, triggerFetch: getInsurancePolicies } =
    useApi({
      storageKey: "editBeneficiaryEntity.insurancePolicies",
      input: computed(() => ({
        where: { institutionId: selectedInstitutionId.value },
      })),
      // findCallback: client.procedure.listSubscribers.query,
      findCallback: client.crud.insurancePolicy.findMany.query,
      onError(error) {
        globalStore.setMessage("Error while connection to server.");
        console.error(error);
      },
      immediate: true,
    });

  const {
    items: insurancePolicy,
    triggerFetch: getBeneficiaryInsurancePolicy,
  } = useApi({
    storageKey: "editBeneficiaryEntity.insurancePolicy",
    input: computed(() => ({
      where: { id: beneficiary.value.insurancePolicyId },
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.insurancePolicy.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });
  const { items: institution, triggerFetch: getInstitution } = useApi({
    storageKey: "editBeneficiaryEntity.insurancePolicy",
    input: computed(() => ({
      where: { id: selectedInstitutionId.value },
    })),
    // findCallback: client.procedure.listSubscribers.query,
    findCallback: client.crud.institution.findMany.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });
  const { items: institutions, triggerFetch: getInstitutions } = useApi({
    storageKey: "editBeneficiaryEntity.institutions",
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
  const updateBeneficiary = async () => {
    try {
      if (valid.value && beneficiary.value?.beneficiaries?.length > 0) {
        // console.log(beneficiary.value);
        const response = await client.crud.beneficiaryEntity.updateOne.mutate({
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
    selectedInstitutionId.value = "";
  }
  return {
    dialog,
    updateBeneficiary,
    beneficiary,
    beneficiaryRef,
    institutions,
    getInstitutions,
    selectedInstitutionId,
    getInsurancePolicies,
    insurancePolicies,
    relations,
    valid,
    getCities,
    cities,
    $reset,
    sentBeneficiary,
    insurancePolicy,
    getBeneficiaryInsurancePolicy,
    institution,
    getInstitution,
  };
});

export default useEditBeneficiariesStore;
