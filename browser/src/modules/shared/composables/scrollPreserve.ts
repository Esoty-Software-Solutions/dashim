import { useLocalStorage, useScroll } from "@vueuse/core";
import { watch, onMounted, onUpdated } from "vue";

interface UseScrollPreserveOptions {
  /**
   * @default true
   */
  scrollOnMounted?: boolean;
  /**
   * @default false
   */
  scrollOnUpdated?: boolean;
}

type _ScrollElement = Parameters<typeof useScroll>[0];
export default function useScrollPreserve(
  storageKey: string,
  element: _ScrollElement,
  options?: UseScrollPreserveOptions,
) {
  const scroll = useLocalStorage<number>(storageKey, 0);
  const { y } = useScroll(element);
  watch(y, (value) => {
    scroll.value = value;
  });

  function updateElementScroll() {
    y.value = scroll.value;
  }

  if (options?.scrollOnMounted !== false) {
    onMounted(updateElementScroll);
  }

  if (options?.scrollOnUpdated === true) {
    onUpdated(updateElementScroll);
  }

  return {
    scroll: updateElementScroll,
  };
}
