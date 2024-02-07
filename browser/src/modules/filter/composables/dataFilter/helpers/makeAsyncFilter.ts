import { watchTriggerable } from "@vueuse/core";
import { type Ref, type MaybeRefOrGetter } from "vue";
import { ref, toValue } from "vue";

import { default as debounce } from "debounce";

/**
 * @internal
 */
export interface MakeAsyncFilterOptions<TInput, TReturn> {
  /**
   * Callback that should execute the api and any async code and return data
   */
  onFetch: TInput extends undefined
    ? (input?: TInput) => Promise<TReturn>
    : (input: TInput) => Promise<TReturn>;

  onError?: (error: any) => void;

  /**
   * Input factory, the execution of this callback is tracked and a watcher
   * is set up to
   *
   * **CAUTION** try not to cause circular updates
   */
  input: MaybeRefOrGetter<TInput>;

  immediate?: boolean;
  deep?: boolean;

  /**
   *
   */
  debounceInterval?: number;
}

/**
 * @internal
 */
export interface InternalMakeAsyncFilterOptions<TInput, TReturn>
  extends MakeAsyncFilterOptions<TInput, TReturn> {
  onResult: (output: TReturn) => void;
}

/**
 * @internal
 */
export interface MakeAsyncFilterReturn {
  triggerFetch: () => Promise<void>;

  isLoading: Ref<boolean>;
}

export function makeAsyncFilter<TInput, TOutput>(
  options: InternalMakeAsyncFilterOptions<TInput, TOutput>,
): MakeAsyncFilterReturn {
  const isLoading = ref(false);

  const fetchImplementation = async (input: TInput) => {
    try {
      isLoading.value = true;
      const asyncOutput = await options.onFetch(input);
      options.onResult(asyncOutput);
    } catch (error) {
      if (options.onError != null) {
        options.onError(error);
      } else {
        throw error;
      }
    } finally {
      isLoading.value = false;
    }
  };

  const debouncedFetch =
    options.debounceInterval != null && options.debounceInterval > 0
      ? debounce(fetchImplementation, options.debounceInterval)
      : fetchImplementation;

  const { trigger } = watchTriggerable(
    () => toValue(options.input),
    async (input) => {
      await debouncedFetch(input);
    },
    {
      immediate: options.immediate,
      deep: options.deep,
    },
  );

  return {
    isLoading,
    triggerFetch: trigger,
  };
}
