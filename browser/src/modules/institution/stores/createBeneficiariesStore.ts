import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

import { client } from "@/queries";
type createSubscriberProcedureInput = Parameters<
  typeof client.procedure.CreateSubscriber.mutate
>[0];
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
  ReturnType<typeof client.crud.relationship.findMany.query>
>;
type RelationshipCrudResponseData =
  NonNullable<RelationshipCrudResponse>["data"];

type GenderCrudResponse = Awaited<
  ReturnType<typeof client.crud.gender.findMany.query>
>;
type GenderCrudResponseData = NonNullable<GenderCrudResponse>["data"];

type BeneficiaryInput = Parameters<
  typeof client.procedure.CreateSubscriber.mutate
>[0]["beneficiaries"][0];
// declare const properlyTyped: { prop: { a: string } };

const useCreateBeneficiariesStore = defineStore(
  "CreateBeneficiariesStore",
  () => {
    const dialog = useLocalStorage<boolean>(
      "createBeneficiaries.createBeneficiariesDialog",
      false,
    );
    const subscriberRef = ref<createSubscriberProcedureInput>({
      id: "",
      insurancePolicyId: "",
      beneficiaries: [] as BeneficiaryInput[],
    });
    const subscriber = useLocalStorage<createSubscriberProcedureInput>(
      "createBeneficiaries.subscriber",
      subscriberRef,
    );
    const institutions = ref<InstitutionCrudResponseData>([]);
    const selectedInstitutionId = ref<string>("");
    const insurancePolicies = ref<InsurancePoliciesCrudResponseData>([]);
    const relations = ref<RelationshipCrudResponseData>([]);
    const genders = ref<GenderCrudResponseData>([]);
    const valid = ref(false);

    const getInstitutions = async () => {
      const response: InstitutionCrudResponse =
        await client.crud.institution.findMany.query({
          take: 5,
        });
      institutions.value = response && response.data ? response.data : [];
    };
    const getInsurancePolicies = async () => {
      console.log("selected");
      const response = await client.crud.insurancePolicy.findMany.query({
        where: {
          institutionId: selectedInstitutionId.value,
        },
      });
      if (response) {
        insurancePolicies.value = response.data;
      }
      console.log(response);
    };
    const getRelations = async () => {
      try {
        const response = await client.crud.relationship.findMany.query({
          take: 10,
        });
        console.log(response);

        relations.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getGenders = async () => {
      try {
        const response = await client.crud.gender.findMany.query({
          take: 10,
        });
        console.log(response);

        genders.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    const createSubscriber = async () => {
      try {
        if (valid.value && subscriber.value?.beneficiaries?.length > 0) {
          console.log("sub");
          // console.log(subscriber.value);
          const sub = await client.procedure.CreateSubscriber.mutate({
            data: subscriber.value,
          });
        }

        console.log("unvalid form");
        // console.log(sub);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      dialog,
      createSubscriber,
      subscriber,
      subscriberRef,
      institutions,
      getInstitutions,
      selectedInstitutionId,
      getInsurancePolicies,
      insurancePolicies,
      getRelations,
      relations,
      genders,
      getGenders,
      valid,
      // properlyTyped
    };
  },
);

export default useCreateBeneficiariesStore;