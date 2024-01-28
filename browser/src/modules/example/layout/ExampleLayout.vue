<script setup lang="ts">
import { useI18n } from "vue-i18n";

import {
  mdiThemeLightDark,
  mdiTranslateVariant,
  mdiChevronDown,
} from "@mdi/js";

import { metadata, routeName } from "../metadata";

import LocaleMenu from "@/modules/shared/components/LocaleMenu.vue";
import useConfig from "@/modules/shared/stores/configStore";

const { t } = useI18n();

const configStore = useConfig();
</script>

<template>
  <VNavigationDrawer>
    <VList nav color="primary">
      <VListSubheader> Examples </VListSubheader>
      <VDivider />

      <template v-for="(examples, category) in metadata" :key="category">
        <!-- Sub menu -->
        <VListGroup>
          <template #activator="{ props }">
            <VListItem
              v-bind="props"
              style="text-transform: capitalize"
              :title="category"
            />
          </template>
          <!-- Sub menu item -->
          <template v-for="example in examples" :key="example.name">
            <VListItem
              :title="example.name"
              :to="{ name: routeName(example) }"
              link
            />
          </template>
        </VListGroup>
      </template>
    </VList>

    <template #append>
      <VDivider />
      <VList>
        <VListItem
          :prepend-icon="mdiThemeLightDark"
          :title="t('common.darkMode')"
        >
          <template #append>
            <VListItemAction end>
              <VSwitch
                v-model="configStore.dark"
                color="primary"
                hide-details
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VMenu>
          <template #default>
            <LocaleMenu />
          </template>
          <template #activator="{ props }">
            <VListItem
              :prepend-icon="mdiTranslateVariant"
              title="Locale switch"
              :append-icon="mdiChevronDown"
              v-bind="props"
            />
          </template>
        </VMenu>
      </VList>
    </template>
  </VNavigationDrawer>

  <VMain>
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.name" />
    </RouterView>
  </VMain>
</template>
