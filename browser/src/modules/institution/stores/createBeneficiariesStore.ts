import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

import { client } from "@/queries";
type createSubscriberProcedureInput = Parameters<
  typeof client.procedure.CreateSubscriber.mutate
>[0];
type institutionCrudResponse = Awaited<
  ReturnType<typeof client.crud.institution.findMany.query>
>;
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
      beneficiaries: [],
    });
    const subscriber = useLocalStorage<createSubscriberProcedureInput>(
      "createBeneficiaries.subscriber",
      subscriberRef,
    );
    const institutions = ref<institutionCrudResponse>([]);
    const selectedInstitution = ref(undefined);

    const getInstitutions = async () => {
      const response: institutionCrudResponse =
        await client.crud.institution.findMany.query({
          take: 5,
        });
      institutions.value = response && response.data ? response.data : [];
    };
    const createSubscriber = async () => {
      try {
        console.log("sub");
        // console.log(subscriber.value);
        const sub = await client.procedure.CreateSubscriber.mutate({
          id: "5445q",
          insurancePolicyId: "564",
          beneficiaries: [],
        });
        // console.log("sub 2222");
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
      selectedInstitution,
      // properlyTyped
    };
  },
);

export default useCreateBeneficiariesStore;
