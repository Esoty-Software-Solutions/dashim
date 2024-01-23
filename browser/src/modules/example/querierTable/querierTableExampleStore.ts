import { defineStore } from "pinia";
import { ref, computed } from "vue";

import useQuerierTable from "@/modules/shared/composables/useQuerierTable";
import useGlobal from "@/modules/shared/stores/globalStore";
import { client } from "@/queries";

const useQuerierTableExampleStore = defineStore("querierExampleStore", () => {
  const globalStore = useGlobal();
  const idSearch = ref("");
  const idEnabled = ref(true);

  // if using "immediate=true"
  // the table will to hit the api without the need to change dependant
  // the first fetch is when the filters/page change
  const { binding, items, triggerFetch } = useQuerierTable({
    storageKey: "myKey",
    input: computed(() => ({
      where: {
        id:
          idEnabled.value && idSearch.value.trim()
            ? { equals: idSearch.value.trim() }
            : undefined,
      },
    })),
    findCallback: client.viewTable.subscribers.query,
    onError(error) {
      globalStore.setMessage("Error while connection to server.");
      console.error(error);
    },
    immediate: true,
  });

  // &_& depending on ts performance and inference capabilities
  // `items`, `input` should have the proper types

  return {
    idSearch,
    idEnabled,

    binding,
  };
});

export default useQuerierTableExampleStore;
