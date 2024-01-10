import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from "vue-router";

// sub routes
import useGlobal from "@/modules/shared/stores/globalStore";

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/modules/shared/layouts/main/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/modules/home/Home.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/",
  },
];

/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html }
   */
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory(import.meta.env.BASE_URL)
  /*
  scrollBehavior: (to, _from, savedPosition) => {
    let scrollTo: number | string = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.top;
    }
    return goTo(scrollTo);
  },
  */
  routes,
});

export default router;

if (import.meta.env.DEV) {
  router.addRoute({
    path: "/playground",
    name: "Playground",
    component: () => import("@/playground/Playground.vue"),
  });
}

/***
/** session initialization
/***/
router.beforeEach(async () => {
  // const sessionStore = useSession();
  const globalStore = useGlobal();
  // if (!sessionStore.isInitialized.value) {
  globalStore.setLoading(true);
  // await sessionStore.initialize();
  // }
});

/***
/** Authentication state guard
/***/
router.beforeEach((to) => {
  // // const sessionStore = useSession();
  // // redirect non-guest user to home page
  // if (to.meta?.guestOnly && sessionStore.isAuthenticated.value) {
  //   return { name: "Home" };
  // }
  // if (to.meta?.requiresAuth && !sessionStore.isAuthenticated.value) {
  //   return {
  //     name: "Join",
  //     query: { redirect: encodeURIComponent(JSON.stringify(to)) },
  //   };
  // }
});

// Global before guards
router.beforeEach(
  (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const globalStore = useGlobal();
    // Show Loading
    globalStore.setLoading(true);

    // Hide snack bar
    globalStore.setMessage("");
    next();
  }
);

// Global After Hooks
router.afterEach(() => {
  const globalStore = useGlobal();
  // Hide Loading
  globalStore.setLoading(false);
});

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean;
    guestOnly?: boolean;
  }
}
