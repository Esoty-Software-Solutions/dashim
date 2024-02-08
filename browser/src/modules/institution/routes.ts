import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/institutions",
    name: "Institutions",
    /* @see https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Relative-redirecting */
    redirect: { name: "InstitutionsList" },
    component: () => import("./Institution.vue"),
    children: [
      {
        path: "",
        name: "InstitutionsList",
        component: () => import("./list/List.vue"),
      },
      {
        path: "beneficiaries",
        name: "InstitutionsBeneficiaries",
        component: () => import("./beneficiaries/Beneficiaries.vue"),
      },
      {
        path: "beneficiaries2",
        name: "InstitutionsBeneficiaries2",
        component: () => import("./beneficiaries/Beneficiaries2.vue"),
      },
    ],
  },
];

export default routes;
