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
