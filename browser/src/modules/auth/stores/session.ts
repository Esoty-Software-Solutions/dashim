import { defineStore } from "pinia";
import { ref, computed } from "vue";

// import { getUser } from '@/services/auth';
import useGlobalStore from "@/modules/shared/stores/globalStore";

import type { UserType } from "@/modules/shared/interfaces/user";

const useSession = defineStore("session", () => {
  const user = ref<UserType | null>(null);

  const isInitialized = ref(false);

  const isAuthenticated = computed(
    () => true, // isInitialized.value && user.value != null,
  );

  async function signIn(): Promise<void> {
    onSignInSuccess("test s3cr3t");
  }

  function onSignInSuccess(sessionToken: string) {
    reset();
    isInitialized.value = false;
  }

  async function signOut() {
    const globalStore = useGlobalStore();
    globalStore.setLoading(true);
    reset();
    window.location.reload();
    globalStore.setLoading(false);
  }

  async function initialize() {
    // const { data, error } = await getUser();
    // if (error.value == null) {
    //   state.user = data.value;
    // } else {
    //   // TODO: implement proper error handling
    //   console.error("Authenticated but could not get user data");
    //   state.user = null;
    // }
    isInitialized.value = true;
  }

  function reset() {
    isInitialized.value = false;
    user.value = null;
  }

  return {
    user,
    isAuthenticated,
    isInitialized,
    initialize,
    signIn,
    signOut,
    reset,
  };
});

export default useSession;
