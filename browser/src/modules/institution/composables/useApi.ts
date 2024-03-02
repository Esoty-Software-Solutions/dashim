import type { MaybeRefOrGetter, Ref } from "vue";
import { ref, watch, toValue, readonly } from "vue";

import { TRPCClientError } from "@trpc/client";
import { default as debounce } from "debounce";

import type { ProcedureOptions } from "@trpc/server";

export type UseApiReturn = ReturnType<typeof useApi>;

interface IInputBase {
  skip?: number;
  take?: number;
  orderBy?: any;
  where?: any;
  [x: string]: any;
}

type TInputBase = IInputBase | undefined | void;

interface IOutputBase {
  data: Record<string, any>[];
  filteredCount: number;
  unFilteredCount: number;
  statistics: { key: string; value: string | number | boolean }[];
}

type FindCallback<TInput extends TInputBase, TOutput extends IOutputBase> = (
  input: TInput,
  opts?: ProcedureOptions,
) => Promise<TOutput | null | undefined>;

export interface UseQuerierOptions<
  TInput extends TInputBase,
  TOutputRaw extends IOutputBase = IOutputBase,
> {
  storageKey: string;
  /**
   * Filtering options except pagination related
   */
  input: MaybeRefOrGetter<TInput>;
  /**
   * Whether to trigger fetch upon initialization
   * @default false
   */
  immediate?: boolean;
  /**
   * Whether to deeply watch filter or not
   * @default true
   */
  deep?: boolean;
  /**
   *
   */
  debounceInterval?: number;

  findCallback: FindCallback<TInput, TOutputRaw>;
  // countCallback: CountCallback<TInput>;

  onError?: (...args: any[]) => void;
}

function useApi<
  TInput extends TInputBase,
  TOutputRaw extends IOutputBase = IOutputBase,
>(options: UseQuerierOptions<TInput, TOutputRaw>) {
  const items = ref([]) as Ref<TOutputRaw["data"]>;
  const filteredCount = ref() as Ref<TOutputRaw["filteredCount"]>;
  const unFilteredCount = ref() as Ref<TOutputRaw["unFilteredCount"]>;
  const statistics = ref([]) as Ref<TOutputRaw["statistics"]>;

  const { storageKey } = options;

  const loading = ref(false);

  const pendingRequests: AbortController[] = [];

  async function triggerFetchImplementation() {
    const input = toValue(options.input);

    pendingRequests.forEach((abController) => abController.abort());
    pendingRequests.splice(0, pendingRequests.length);

    loading.value = true;

    try {
      const findAbController = new AbortController();

      const findPromise = options.findCallback(
        // TODO: check for runtime errors caused by mismatching args/parameters

        input,
        {
          signal: findAbController.signal,
        },
      );

      pendingRequests.push(findAbController);
      // const countRes = await countPromise;
      const findRes = await findPromise;

      items.value = findRes?.data ?? [];
      filteredCount.value = findRes?.filteredCount ?? 0;
      unFilteredCount.value = findRes?.unFilteredCount ?? 0;
      statistics.value = findRes?.statistics ?? [];
      // items.value = findRes ? findRes : {};
    } catch (error: any) {
      if (error instanceof TRPCClientError) {
        // console.log(error.name);
      } else {
        if (options.onError) options?.onError(error);
        else throw error;
      }
    } finally {
      console.log("input", input);

      loading.value = false;
    }
  }

  const triggerFetch =
    options.debounceInterval != null && options.debounceInterval > 0
      ? debounce(triggerFetchImplementation, options.debounceInterval)
      : triggerFetchImplementation;

  function setupWatchers() {
    watch(
      [() => toValue(options.input)],
      () => {
        void triggerFetch();
      },
      {
        deep: options.deep === false ? false : true,
        onTrigger(event) {
          console.log(event);
        },
      },
    );

    watch(() => options.input, triggerFetch, {
      immediate: options.immediate,
    });
  }

  setupWatchers();

  return {
    items,
    loading: readonly(loading),
    triggerFetch,
    filteredCount,
    unFilteredCount,
    statistics,
  };
}

export default useApi;
