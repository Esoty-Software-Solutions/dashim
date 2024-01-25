import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from "vue-router";

import useSession from "@/modules/auth/stores/session";
import useGlobal from "@/modules/shared/stores/globalStore";

import useConfig from "./modules/shared/stores/configStore";

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

      {
        path: "/institution",
        name: "Institution",
        component: () => import("@/modules/institution/Institution.vue"),
      },
      {
        path: "/setting",
        name: "Setting",
        component: () => import("@/modules/setting/SettingPage.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/join",

    name: "Join",
    component: () => import("@/modules/auth/JoinPage.vue"),
    meta: {
      guestOnly: true,
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
  const sessionStore = useSession();
  const globalStore = useGlobal();
  if (!sessionStore.isInitialized) {
    globalStore.setLoading(true);
    await sessionStore.initialize();
  }
});

// locale fetching
// IMPORTANT: keep this guard after user data/signIn to make sure locale is loaded
//            according to user preferences
router.beforeEach(async () => {
  const config = useConfig();
  await config.initializeI18n();
});

/***
/** Authentication state guard
/***/
router.beforeEach((to) => {
  // redirect non-guest user to home page
  const sessionStore = useSession();
  if (to.meta?.guestOnly && sessionStore.isAuthenticated) {
    return { name: "Home" };
  }
  if (to.meta?.requiresAuth && !sessionStore.isAuthenticated) {
    return {
      name: "Join",
      query: { redirect: encodeURIComponent(JSON.stringify(to)) },
    };
  }
});

// Global before guards
router.beforeEach(
  (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    const globalStore = useGlobal();
    // Show Loading
    globalStore.setLoading(true);

    // Hide snack bar
    globalStore.setMessage("");
    next();
  },
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
