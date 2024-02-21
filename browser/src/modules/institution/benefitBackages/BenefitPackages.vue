<script setup lang="ts">
import { ref, toRefs, watch, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiClose } from "@mdi/js";

import useBenefitBackageStore from "../stores/benefitPackageStore";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, {
  text,
  asyncSelect,
} from "@/modules/filter/composables/dataFilter";
import { client, type RouterInput } from "@/queries";

import type { TableHeader } from "@/modules/shared/interfaces";

defineOptions({
  name: "InstitutionsBenefitPackagesPage",
});
const { t } = useI18n();
const store = toRefs(useBenefitBackageStore());
// console.log(store.binding.value.items);
let selected = ref([""]);
let selectedCount = ref(0);

// filters
// async filter
type InstitutionInput = Exclude<
  RouterInput["crud"]["institution"]["findMany"],
  void
>;
type InsurancePolicyInput = Exclude<
  RouterInput["crud"]["insurancePolicy"]["findMany"],
  void
>;
const institutionSelect = asyncSelect(
  {
    value: store.selectedInstitution,
    enabled: store.selectedInstitutionEnabled,
    props: () => ({
      label: t("common.institution"),
      itemValue: "id",
      itemTitle: "name",
      clearable: true,
      // multiple: true,
      // returnObject: true,
    }),
  },
  {
    immediate: true,
    input: () => ({}),
    async onFetch(input: InstitutionInput) {
      const res = await client.crud.institution.findMany.query(input);
      return res?.data ?? [];
    },
  },
);

const insurancePoliciesSelect = asyncSelect(
  {
    value: store.selectedInsurancePolicy,
    enabled: store.selectedInsurancePolicyEnabled,
    props: () => ({
      label: t("common.insurancePolicy"),
      itemValue: "id",
      itemTitle: "name",
      clearable: true,
      disabled: true ? !store.selectedInstitution.value : false,
      // returnObject: true,
    }),
  },
  {
    immediate: true,
    input: () => ({
      where: { institutionId: store.selectedInstitution.value },
    }),
    async onFetch(input: InsurancePolicyInput) {
      if (store.selectedInstitution.value) {
        const res = await client.crud.insurancePolicy.findMany.query(input);
        return res?.data ?? [];
      }
    },
  },
);
const serviceCategoriesSelect = asyncSelect(
  {
    value: store.selectedServiceCategory,
    enabled: store.selectedServiceCategoryEnabled,
    props: () => ({
      label: t("common.serviceCategory"),
      itemValue: "id",
      itemTitle: "name",
      clearable: true,
      // returnObject: true,
    }),
  },
  {
    immediate: true,
    input: () => ({
      where: { id: { in: store.selectedServiceCategoriesIds.value } },
    }),
    async onFetch(input: InsurancePolicyInput) {
      const res =
        await client.crud.medicalServiceCategory.findMany.query(input);
      return res?.data ?? [];
    },
  },
);
const { FilterComponent } = useDataFilters({
  sheetProps: {
    elevation: 0,
  },
  filter: {
    institution: institutionSelect,
    insurancePolicy: insurancePoliciesSelect,
    firstName: text({
      value: store.nameFilter,
      enabled: store.nameFilterEnabled,
      enableOnFocus: false,
      props: {
        label: "Name",
      },
      display: {
        md: 8,
      },
    }),
  },
});

const { FilterComponent: CategoryFilterComponent } = useDataFilters({
  sheetProps: {
    elevation: 0,
  },
  display: {
    md: 12,
  },
  filter: {
    category: serviceCategoriesSelect,
  },
});

watch(
  () => ({ ...store.binding.value }),
  () => {
    console.log("items updated");
    selected.value = [];
    selectedCount.value = 0;
  },
);
watch(
  () => store.selectedInstitution.value,
  () => {
    store.selectedInsurancePolicy.value = null;
    drawer.value = false;
  },
);
watch(
  () => store.selectedInsurancePolicy.value,
  () => {
    drawer.value = false;
  },
);
watch(
  () => store.benenfitPackageServiceCategories.value,
  () => {
    store.selectedServiceCategoriesIds.value =
      store.benenfitPackageServiceCategories.value.map(
        (item) => item.medicalServiceCategoryId,
      );
  },
);
function onSelected($event) {
  // selected.value = store.binding.value.items
  // selected.value
  console.log(selected.value);
  selectedCount.value = selected.value.length;
}
function refresh() {
  store.triggerFetch.value();
}
function selectAll() {
  selected.value = store.binding.value.items.map((item) => item.id);
  selectedCount.value = store.binding.value.itemsLength;

  console.log(selected.value);
}
function paginated() {
  console.log("paginated");

  selected.value = [];
  selectedCount.value = 0;
}
const drawer = ref(false);
let expanded = ref([]);
// table headers
const headers = ref<TableHeader[]>([
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
  {
    title: t("common.creationDate"),
    key: "createdAt",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.updatedAt"),
    key: "updatedAt",
    sortable: false,
    width: "2.7rem",
  },
  {
    title: t("common.status"),
    key: "isActive",
    sortable: false,
    align: "center",
    width: "0.5rem",
  },
  {
    title: t("common.actions"),
    key: "actions",
    sortable: false,
    width: "1rem",
    align: "center",
  },
]);
// servicePackage table headers
const servicePackageHeaders = ref<TableHeader[]>([
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
]);
</script>

<template>
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>
    <template #actions>
      <VCardActions>
        {{ selectedCount }}
        <!-- {{ selected.length }} {{ store.binding.value.itemsLength }} -->
        <VBtn @click="selectAll">{{ t("institution.actions.selectAll") }}</VBtn>
        <VBtn @click="refresh">{{ t("institution.actions.refresh") }}</VBtn>
        <VSpacer />
        <VBtn color="primary" variant="plain">
          <span>{{ t("institution.benefitPackages.newBenefitBackage") }}</span>
          <VIcon end :icon="mdiPlus" />
        </VBtn>
      </VCardActions>
    </template>
    <template #table>
      <VDataTableServer
        v-model="selected"
        :item-value="(item) => item.id"
        show-select
        :headers="headers"
        v-bind="store.binding.value"
        @input="onSelected($event)"
        @update:page="paginated"
        @update:items-per-page="paginated"
        @click:row="
          (event, row) => {
            drawer = true;
            store.selectedBenefitPackege.value = row.item.id;
            store.selectedBenefitPackegeName.value = row.item.name;
          }
        "
      >
        <template #item.name="{ item }">
          <tr
            :class="{
              'text-primary': item.id == store.selectedBenefitPackege.value,
            }"
          >
            <td>{{ item.name }}</td>
          </tr></template
        >
        <!-- local date "sv-SE" for 2024-02-02 fromat -->
        <template #item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleDateString("zh-CN") }}
        </template>
        <template #item.updatedAt="{ item }">
          {{ new Date(item.updatedAt).toLocaleDateString("zh-CN") }}
        </template>
        <template #item.isActive="{ item }">
          <VChip :color="item.isActive ? 'primary' : 'error'">
            {{ item.isActive ? "Active" : "Inactive" }}
          </VChip>
        </template>
      </VDataTableServer>
      <VNavigationDrawer v-model="drawer" location="right">
        <VList class="pa-0">
          <VListItem class="d-flex flex-row-reverse">
            <!-- <VIcon :icon="mdiClose" /> -->
            <VBtn variant="flat" :icon="mdiClose" @click="drawer = false" />
          </VListItem>
          <VListItem
            :title="store.selectedBenefitPackegeName.value"
            class="d-flex justify-center bg-primary"
          />
        </VList>
        <VContainer
          ref="container"
          v-bind="$attrs"
          fluid
          class="d-flex py-1 px-0 ga-1 flex-column h-75"
        >
          <VDefaultsProvider
            :defaults="{
              VDataTableServer: {
                style: 'flex: 1 1 0; min-height: 0;',
                fixedHeader: true,
                fixedFooter: true,
                hover: true,
                color: 'primary',
              },
              VDataTable: {
                style: 'flex: 1 1 0; min-height: 0;',
                fixedHeader: true,
                fixedFooter: true,
                hover: true,
                color: 'primary',
              },
              VRow: {
                class: ['mx-0'],
              },
            }"
          >
            <CategoryFilterComponent />
            <VDataTable
              :items-per-page="store.medicalServices.value.length"
              :fixed-footer="true"
              :fixed-header="true"
              :headers="servicePackageHeaders"
              :items="store.medicalServices.value"
              :item-value="(item) => item.id"
            >
              <template #item.name="{ item }">
                <VList class="pa-0">
                  <VListItem class="mb-2">
                    {{ item.name }}
                    <VChip color="primary">Category</VChip>
                    <!-- <VChip
                      v-for="(category, index) in store.serviceCategories"
                      :key="index"
                      color="primary"
                      >{{ category.name }}</VChip
                    > -->
                  </VListItem>
                </VList>
              </template>
              <template #bottom
            /></VDataTable>
          </VDefaultsProvider>
        </VContainer>
      </VNavigationDrawer>
    </template>
  </DataPageBase>
</template>
