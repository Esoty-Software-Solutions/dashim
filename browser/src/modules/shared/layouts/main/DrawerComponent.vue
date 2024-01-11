<script setup lang="ts">
import { ref, computed } from "vue";

import { mdiThemeLightDark, mdiAccountGroup, mdiLogout } from "@mdi/js";
import { useDisplay } from "vuetify";

import useSession from "@/modules/auth/stores/session";
import useConfig from "@/modules/shared/stores/configStore";
import useLayoutStore from "@/modules/shared/stores/layoutStore";

import type { DrawerMenuItem } from "../../interfaces";

const sessionStore = useSession();

// == drawer open/close state //
const layoutStore = useLayoutStore();
const rail = ref(true);
function onRailChange(value: boolean) {
  rail.value = value;
}

const vDisplay = useDisplay();
const showDrawer = computed(() => {
  if (vDisplay.lgAndUp.value) {
    return true;
  }

  return layoutStore.drawer;
});

/** Drawer menu items */
const items: DrawerMenuItem[] = [
  {
    title: "Patients",
    icon: mdiAccountGroup,
    to: { name: "Home" },
    exact: true,
  },
  // {
  //   title: "Subscribers",
  //   icon: mdiClipboardEdit,
  //   to: { name: "AdvicePage" },
  //   exact: true,
  // },
];

/**
 * theme state
 */
const configStore = useConfig();
</script>

<template>
  <VNavigationDrawer
    :model-value="showDrawer"
    :rail="!layoutStore.drawer && $vuetify.display.lgAndUp"
    :expand-on-hover="!layoutStore.drawer"
    @update:rail="onRailChange"
    @update:model-value="layoutStore.drawer = $event"
  >
    <VList>
      <VListItem>
        <VListItemTitle class="text-capitalize">
          <!-- {{ sessionStore.user?.fullName }} -->
        </VListItemTitle>
        <VListItemSubtitle>
          <!-- {{ sessionStore.user?.email }} -->
        </VListItemSubtitle>
        <template #prepend>
          <VAvatar color="primary">
            <!-- {{ sessionStore.user?.fullName.slice(0, 2)?.toUpperCase() }} -->
          </VAvatar>
        </template>
      </VListItem>
    </VList>

    <VDivider thickness="2" />

    <VList nav color="primary">
      <template v-for="item in items" :key="item.title">
        <VDivider v-if="item.title === '-'" />
        <template v-else>
          <!-- Menu Item -->
          <VListItem
            v-if="!item.items"
            :disabled="!item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.to"
            :exact="true"
          />
          <!-- Sub menu -->
          <VListGroup v-else-if="item.items" v-model="item.active">
            <template #activator="{ props }">
              <VListItem
                v-bind="props"
                :prepend-icon="item.icon"
                :title="item.title"
              />
            </template>
            <!-- Sub menu item -->
            <template v-for="subItem in item.items" :key="subItem.title">
              <VDivider v-if="subItem.title === '-'" />
              <VListItem
                v-else
                :disabled="!subItem.to"
                :prepend-icon="subItem.icon"
                :title="subItem.title"
                :to="subItem.to"
                link
              />
            </template>
          </VListGroup>
        </template>
      </template>

      <VDivider />
      <VListItem :prepend-icon="mdiThemeLightDark" title="Dark mode">
        <template #append>
          <VListItemAction end>
            <VSwitch v-model="configStore.dark" color="primary" hide-details />
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
    <template #append>
      <div class="pa-2">
        <VFadeTransition>
          <VBtn
            v-show="!rail || layoutStore.drawer"
            color="primary"
            density="comfortable"
            block
            @click="sessionStore.signOut"
          >
            <template #prepend>
              <VIcon :icon="mdiLogout" />
            </template>
            Sign out
          </VBtn>
        </VFadeTransition>
      </div>
    </template>
  </VNavigationDrawer>
</template>
