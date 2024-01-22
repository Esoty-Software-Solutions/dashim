import { shallowRef, computed, isRef, toValue, watch } from "vue";
import type { MaybeRefOrGetter } from "vue";

export default function useProxiedRefOrGetter<T>(
  target: MaybeRefOrGetter<T>,
  initialValue: T,

  onUpdateCallback?: (value: T) => any,
) {
  const persisted = shallowRef<T>();
  persisted.value = initialValue;
  watch(
    () => toValue(target),
    (newValue) => {
      persisted.value = newValue;
    },
    {
      immediate: true,
    },
  );

  const targetProxy = computed({
    set(value: T) {
      persisted.value = value;
      if (isRef(target)) {
        target.value = value;
      }

      onUpdateCallback?.(value);
    },
    get() {
      return persisted.value as T;
    },
  });

  return targetProxy;
}
