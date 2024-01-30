<script setup lang="ts">
import { ref, computed, mergeProps } from "vue";
import { useI18n } from "vue-i18n";
import type { RouteLocationRaw } from "vue-router";

import {
  mdiThemeLightDark,
  mdiAccountGroup,
  mdiLogout,
  mdiTranslateVariant,
  mdiChevronDown,
  mdiSettingsHelper,
  mdiCarSettings,
  mdiCog,
} from "@mdi/js";
import { useDisplay } from "vuetify";
import { el } from "vuetify/locale";

import LocaleMenu from "../../components/LocaleMenu.vue";

import useSession from "@/modules/auth/stores/session";
import useConfig from "@/modules/shared/stores/configStore";
import useLayoutStore from "@/modules/shared/stores/layoutStore";

import type { DrawerMenuItem } from "../../interfaces";

const { t } = useI18n();

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
  {
    title: "Institutions",
    icon: mdiAccountGroup,
    to: { name: "Institutions" },
    exact: false,
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

/**
 * Locale dropdown
 */
const localeName = computed(() => {
  const currentLocale = configStore.locale;
  if (currentLocale == "ar") {
    return t(`locale.en.name`);
  } else {
    return t(`locale.ar.name`);
  }
});

function changeLocale() {
  const currentLocale = configStore.locale;
  if (currentLocale == "ar") {
    configStore.setLocale("en");
  } else {
    configStore.setLocale("ar");
  }
}
</script>

<template>
  <!-- :expand-on-hover="!layoutStore.drawer" -->
  <!-- :rail="!layoutStore.drawer && $vuetify.display.lgAndUp" -->

  <VNavigationDrawer
    :permanent="true"
    :model-value="true"
    :rail="true"
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
          <v-tooltip v-if="!item.items" :text="item.title">
            <template #activator="{ props }">
              <VListItem
                v-bind="props"
                :disabled="!item.to"
                :prepend-icon="item.icon"
                :title="item.title"
                :to="item.to"
                :exact="item.exact"
              />
            </template>
          </v-tooltip>

          <!-- Sub menu -->

          <VListGroup v-else-if="item.items" v-model="item.active">
            <template #activator="listBinding">
              <v-tooltip text="Tooltip">
                <template #activator="tooltipBinding">
                  <VListItem
                    v-bind="mergeProps(tooltipBinding.props, listBinding.props)"
                    :prepend-icon="item.icon"
                    :title="item.title"
                  />
                </template>
              </v-tooltip>
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
      <VListItem
        :prepend-icon="mdiThemeLightDark"
        :title="configStore.dark ? t('common.lightMode') : t('common.darkMode')"
        @click="configStore.dark = !configStore.dark"
      />

      <VListItem
        :prepend-icon="mdiTranslateVariant"
        :title="localeName"
        @click="changeLocale"
      />
    </VList>
    <template #append>
      <div class="pa-2">
        <VList>
          <VFadeTransition>
            <VBtn
              class="mb-2"
              color="primary"
              density="comfortable"
              block
              to="Setting"
            >
              <template #prepend>
                <VIcon :icon="mdiCog" />
              </template>
              {{ !rail || layoutStore.drawer ? "Setting" : "" }}
            </VBtn>
          </VFadeTransition>

          <VFadeTransition>
            <VBtn
              color="primary"
              density="comfortable"
              block
              @click="sessionStore.signOut"
            >
              <template #prepend>
                <VIcon :icon="mdiLogout" />
              </template>
              {{ !rail || layoutStore.drawer ? "Sign out" : "" }}
            </VBtn>
          </VFadeTransition>
        </VList>
      </div>
    </template>
  </VNavigationDrawer>
</template>

<style>
.v-navigation-drawer__content {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
</style>
