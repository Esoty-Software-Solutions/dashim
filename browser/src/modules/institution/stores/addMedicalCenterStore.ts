import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { createId } from "@paralleldrive/cuid2";

import useApi from "../composables/useApi";

import { client, type RouterInput } from "@/queries";

// type AddMedicalCenterInput = Parameters<
//   typeof client.crud.insurancePolicyMedicalCenter.createOne.mutate
// >[0]["data"];
type AddMedicalCenterInput =
  RouterInput["crud"]["insurancePolicyMedicalCenter"]["createMany"]["data"];

// declare const properlyTyped: { prop: { a: string } };

const useAddMedicalCenterStore = defineStore("addMedicalCenterStore", () => {
  const dialog = useLocalStorage<boolean>(
    "addMedicalCenter.addMedicalCenterDialog",
    false,
  );
  const addMedicalCenterRef = ref<AddMedicalCenterInput>({
    id: createId(),
    insurancePolicyId: "",
    medicalCenterId: "",
  });
  const medicalCenter = useLocalStorage<AddMedicalCenterInput>(
    "network.addMedicalCenter",
    addMedicalCenterRef,
  );
  // const relations = ref<RelationshipCrudResponseData>([]);
  // const genders = ref<GenderCrudResponseData>([]);
  const valid = ref(false);
  const insurancePolicyId = ref<string>("");
  const alreadyAddedCenters = ref<string[]>([]);
  const selected = ref<any[]>([""]);

  const { items: medicalCenters, triggerFetch: triggerMedicalCentersFetch } =
    useApi({
      storageKey: "network.addMedicalCenter",
      input: computed(() => ({
        where: { NOT: { id: { in: alreadyAddedCenters.value } } },
      })),
      // findCallback: client.procedure.listSubscribers.query,
      findCallback: client.crud.medicalCenter.findMany.query,
      onError(error) {
        globalStore.setMessage("Error while connection to server.");
        console.error(error);
      },
      immediate: true,
    });

  const addMedicalCenter = async (insurancePolicyId: string) => {
    try {
      console.log(insurancePolicyId);

      if (selected.value.length > 0 && insurancePolicyId.value) {
        const sentIds: AddMedicalCenterInput[] = selected.value
          .map((centerId: string) => {
            if (centerId) {
              return {
                id: createId(),
                insurancePolicyId: insurancePolicyId.value,
                medicalCenterId: centerId,
              };
            }
          })
          .filter((centerId) => centerId);
        const response =
          await client.crud.insurancePolicyMedicalCenter.createMany.mutate({
            data: sentIds,
          });
        console.log("response", response);
        selected.value = [];

        $reset();
        return response;
      }
    } catch (error) {
      console.log("error1 ", error);
      return error;
    }
  };
  const getMedicalCenters = async (value: string[]) => {
    try {
      alreadyAddedCenters.value = value.value;
      triggerMedicalCentersFetch();
    } catch (error) {
      console.log("error1 ", error);
      return error;
    }
  };
  function $reset() {
    console.log("resetting");

    dialog.value = false;
    selected.value = [];
    medicalCenter.value = {
      id: createId(),
      insurancePolicyId: "",
      medicalCenterId: "",
    };
  }
  return {
    dialog,
    addMedicalCenter,
    medicalCenter,
    addMedicalCenterRef,
    medicalCenters,
    triggerMedicalCentersFetch,
    valid,
    $reset,
    insurancePolicyId,
    alreadyAddedCenters,
    selected,
    getMedicalCenters,
  };
});

export default useAddMedicalCenterStore;
