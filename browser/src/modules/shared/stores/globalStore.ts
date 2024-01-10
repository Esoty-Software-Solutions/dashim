import { defineStore } from "pinia";
import { ref, reactive, toValue, toRefs, type Ref } from "vue";

const useGlobal = defineStore("global", () => {
  /** Global Store */
  // State

  /** Loading overlay */
  const loading = ref(true);
  /** ProgressBar Percentage */
  const progress = ref<number | null>(null);
  /** SnackBar Text */
  const message = ref("");

  function setLoading(display: Ref<boolean> | boolean): void {
    loading.value = toValue(display);
    if (!display) {
      // Reset Progress value
      progress.value = null;
    }
  }

  /**
   * Update progress value
   *
   * @param v - progress value
   */
  function setProgress(v: number | null = null): void {
    // update progress value
    progress.value = v;
    // display loading overlay
    loading.value = true;
  }

  /**
   * Show snackbar message
   *
   * @param msg - snackbar message
   */
  function setMessage(msg: string = ""): void {
    // put snackbar text
    message.value = msg;
  }

  return {
    loading,
    message,
    progress,
    setMessage,
    setLoading,
    setProgress,
  };
});

export default useGlobal;
