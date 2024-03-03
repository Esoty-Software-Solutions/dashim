import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useApi from "../composables/useApi";

import { client } from "@/queries";

type InstitutionUpdateInput = Parameters<
  typeof client.crud.institution.UpdateOne.mutate
>[0]["data"];

const useEditInstitutionStore = defineStore("EditInstitutionStore", () => {
  const dialog = useLocalStorage<boolean>(
    "editInstitution.editInstitutionDialog",
    false,
  );
  const institutionRef = ref<InstitutionUpdateInput>({});
  const sentInstitutionRef = ref<InstitutionUpdateInput>({});
  const institution = useLocalStorage(
    "editInstitution.Institution",
    institutionRef,
  );
  const sentInstitution = useLocalStorage(
    "editInstitution.sentInstitution",
    sentInstitutionRef,
  );
  // const relations = ref<RelationshipCrudResponseData>([]);
  // const genders = ref<GenderCrudResponseData>([]);
  const valid = ref(false);

  const { items: cities, triggerFetch: triggerCitiesFetch } = useApi({
    storageKey: "editInstitution.cities",
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

  const updateInstitution = async () => {
    try {
      if (Object.keys(sentInstitution.value).length == 0) {
        return 0;
      }
      if (valid.value && Object.keys(sentInstitution.value).length > 0) {
        const response = await client.crud.institution.updateOne.mutate({
          data: sentInstitution.value,
          where: {
            id: institution.value.id,
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
    institution.value = {};
    sentInstitution.value = {};
  }
  return {
    dialog,
    updateInstitution,
    institution,
    institutionRef,
    cities,
    triggerCitiesFetch,
    valid,
    $reset,
    sentInstitution,
  };
});

export default useEditInstitutionStore;
