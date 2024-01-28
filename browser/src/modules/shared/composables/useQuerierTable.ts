import { useLocalStorage } from "@vueuse/core";
import type { MaybeRefOrGetter, Ref } from "vue";
import { ref, toRef, reactive, watch, toValue, readonly } from "vue";

import { TRPCClientError } from "@trpc/client";
import { default as debounce } from "debounce";

import { pageToSkipTake } from "@/utils";

import type { ProcedureOptions } from "@trpc/server";

export type UseQuerierTableReturn = ReturnType<typeof useQuerierTable>;

type IInputBase = {
  skip?: number;
  take?: number;
  orderBy?: any;
  where?: any;
  [x: string]: any;
};

interface IOutputBase {
  data: Record<string, any>[];
  filteredCount: number;
  unFilteredCount: number;
  statistics: { key: string; value: string | number | boolean }[];
}

type FindCallback<TInput extends IInputBase, TOutput extends IOutputBase> = (
  input: TInput,
  opts?: ProcedureOptions,
) => Promise<TOutput | null | undefined>;

export interface UseQuerierOptions<
  TInput extends IInputBase,
  TOutputRaw extends IOutputBase = IOutputBase,
> {
  storageKey: string;
  /**
   * Filtering options except pagination related
   */
  input: MaybeRefOrGetter<Omit<TInput, "take" | "skip">>;
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

function useQuerierTable<
  TInput extends IInputBase,
  TOutputRaw extends IOutputBase = IOutputBase,
>(options: UseQuerierOptions<TInput, TOutputRaw>) {
  const items = ref([]) as Ref<TOutputRaw["data"]>;

  const { storageKey } = options;

  const pagination = reactive({
    pageSize: useLocalStorage<number>(`${storageKey}.table.pageSize`, 10),
    page: 1,
    serverLength: 0,
  });

  const loading = ref(false);

  const pendingRequests: AbortController[] = [];

  async function triggerFetchImplementation() {
    const input = toValue(options.input);

    pendingRequests.forEach((abController) => abController.abort());
    pendingRequests.splice(0, pendingRequests.length);

    const [skip, take] = pageToSkipTake(pagination.page, pagination.pageSize);

    loading.value = true;

    try {
      const findAbController = new AbortController();

      const findPromise = options.findCallback(
        // TODO: check for runtime errors caused by mismatching args/parameters
        // @ts-expect-error
        {
          ...input,
          skip,
          take,
        },
        {
          signal: findAbController.signal,
        },
      );

      pendingRequests.push(findAbController);
      // const countRes = await countPromise;
      const findRes = await findPromise;

      pagination.serverLength = findRes?.filteredCount ?? 0;
      items.value = findRes?.data ?? [];
    } catch (error: any) {
      if (error instanceof TRPCClientError) {
        // console.log(error.name);
      } else {
        if (options.onError) options?.onError(error);
        else throw error;
      }
    } finally {
      loading.value = false;
    }
  }

  const triggerFetch =
    options.debounceInterval != null && options.debounceInterval > 0
      ? debounce(triggerFetchImplementation, options.debounceInterval)
      : triggerFetchImplementation;

  function setupWatchers() {
    watch(
      [() => toValue(options.input), () => pagination.pageSize],
      () => {
        pagination.page = 1;
        void triggerFetch();
      },
      {
        deep: options.deep === false ? false : true,
        onTrigger(event) {
          console.log(event);
        },
      },
    );

    watch(() => pagination.page, triggerFetch, {
      immediate: options.immediate,
    });
  }

  setupWatchers();

  const binding = reactive({
    items: items,

    loading: loading,

    page: toRef(pagination, "page"),
    "onUpdate:page": (page: number) => (pagination.page = page),

    itemsLength: toRef(pagination, "serverLength"),

    itemsPerPage: toRef(pagination, "pageSize"),
    "onUpdate:itemsPerPage": (size: number) => (pagination.pageSize = size),
  });

  return {
    items,
    loading: readonly(loading),
    binding,
    pagination,
    triggerFetch,
  };
}

export default useQuerierTable;
