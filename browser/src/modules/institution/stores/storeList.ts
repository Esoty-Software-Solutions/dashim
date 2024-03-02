import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import { client, type RouterInput } from "@/queries";

// See the input later
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FindManyInput = RouterInput["crud"]["institution"]["findMany"];

const useStoreList = defineStore("institutionsStoreList", () => {
  const nameFilter = useLocalStorage("institutionsList.nameFilterValue", "");
  const nameFilterEnabled = useLocalStorage<boolean>(
    "institutionsList.nameFilterEnabled",
    true,
  );
  const dialog = useLocalStorage<boolean>("createInstitution.dialog", false);
  const deletedItems = ref<string[]>([]);

  async function deleteInstitution(id) {
    if (deletedItems.value.length > 0) {
      const response = await client.crud.institution.deleteMany.mutate({
        where: {
          id: { in: deletedItems.value },
        },
      });
      deletedItems.value = [];
      console.log(response);
    }
  }
  const { binding, items, triggerFetch } = useQuerierTable({
    /*
     * There are multiple ways to pass your input as this is a `MayBeRefOrGetter`
     * _might want to learn more about this at_
     *
     * Input Argument conventions of vue composables
     * https://vuejs.org/guide/reusability/composables#input-arguments
     * 

     * If you are going with the getter approach like below
     * keep in mind that the return of the getter only benefits from
     * type inference this is how TypeScript is
     * 
     * See Contextual Typing
     * https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing
     *
     */

    input: () => {
      // you may want to use this if you want to access the types ahead of time.
      /* const where: FindManyInput['where'] = {} */
      const where: any = {};

      if (nameFilterEnabled.value && nameFilter.value.trim()) {
        where.name = { equals: nameFilter.value.trim() };
      }

      return {
        // only here type inference is available
        // this has nothing to do with our code
        where,
      };
    },
    storageKey: "institutionsList",
    findCallback: client.crud.institution.findMany.query,
    immediate: true,
  });

  return {
    nameFilter,
    nameFilterEnabled,
    dialog,
    binding,
    triggerFetch,
    deleteInstitution,
    deletedItems,
  };
});

export default useStoreList;
