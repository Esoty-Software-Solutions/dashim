_While it is on the roadmap to refactor to use pinia_. Do keep in mind that using the current pattern do not attempt to use composables or Vue's utilities that register listers (i.e. watchers) and anything that triggers side effects inside the composable itself.
Unless you really know what you are doing, it could lead to repetitive computations or API requests
