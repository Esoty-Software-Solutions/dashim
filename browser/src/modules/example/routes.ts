import type { RouteRecordRaw } from "vue-router";

import { metadata, routeName } from "./metadata";

const subRoute: RouteRecordRaw[] = [];

for (const category in metadata) {
  subRoute.push({
    path: category,
    children: metadata[category].map((example) => ({
      name: routeName(example),
      path: example.name,
      component: example.module,
    })),
  });
}

const routes: RouteRecordRaw[] = [
  {
    path: "/examples",
    component: () => import("./layout/ExampleLayout.vue"),
    children: subRoute,
  },
];

export default routes;
