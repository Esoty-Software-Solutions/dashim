export function pageToSkipTake(
  page: number,
  pageSize: number,
  zeroBased = false,
): [offset: number, limit: number] {
  let skip: number = 0;
  if (zeroBased) {
    skip = page * pageSize;
  } else {
    skip = (page - 1) * pageSize;
  }

  return [skip, pageSize];
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export type Merge<A, B> = {
  [K in keyof A]: K extends keyof B ? B[K] : A[K];
} & B;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
