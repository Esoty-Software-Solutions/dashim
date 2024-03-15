import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { createId } from "@paralleldrive/cuid2";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type InstitutionInput = Parameters<
  typeof client.crud.institution.createOne.mutate
>[0]["data"];
// declare const properlyTyped: { prop: { a: string } };

const useCreateInstitutionStore = defineStore("CreateInstitutionStore", () => {
  const dialog = useLocalStorage<boolean>(
    "createInstitution.createInstitutionDialog",
    false,
  );
  const InstitutionRef = ref<InstitutionInput>({
    id: createId(),
    name: "",
    cityId: "",
    code: "",
    facebookLink: "",
    googleMapsLink: "",
    instagramLink: "",
    twitterLink: "",
    website: "",
    address: "",
  });
  const Institution = useLocalStorage<InstitutionInput>(
    "createInstitution.Institution",
    InstitutionRef,
  );
  // const relations = ref<RelationshipCrudResponseData>([]);
  // const genders = ref<GenderCrudResponseData>([]);
  const valid = ref(false);

  const { items: cities, triggerFetch: triggerCitiesFetch } = useApi({
    storageKey: "createInstitution.cities",
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

  const createInstitution = async () => {
    try {
      if (valid.value) {
        const response = await client.crud.institution.createOne.mutate({
          data: Institution.value,
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
    Institution.value = {
      id: createId(),
      name: "",
      cityId: "",
      code: "",
      facebookLink: "",
      googleMapsLink: "",
      instagramLink: "",
      twitterLink: "",
      website: "",
      address: "",
    };
  }
  return {
    dialog,
    createInstitution,
    Institution,
    InstitutionRef,
    cities,
    triggerCitiesFetch,
    valid,
    $reset,
  };
});

export default useCreateInstitutionStore;
