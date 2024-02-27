<script setup lang="ts">
import { ref, toRefs, watch, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

import { mdiPlus, mdiDelete, mdiPencil } from "@mdi/js";

import useBeneficiariesStore from "../stores/beneficiariesStore2";

import DataPageBase from "@/modules/dataPage/DataPageBase.vue";
import useDataFilters, {
  text,
  chips,
  type ChipsDataFilterItem,
  asyncSelect,
  asyncAutocomplete,
} from "@/modules/filter/composables/dataFilter";
import { client, type RouterInput } from "@/queries";

// import CreateBeneficiariesModel from "@/modules/institution/components/CreateBeneficiariesModel.vue";

import type { TableHeader } from "@/modules/shared/interfaces";

// simple usage
const CreateBeneficiariesModel = defineAsyncComponent(
  () => import("@/modules/institution/components/CreateBeneficiariesModel.vue"),
);
const CreateBeneficiaryModel = defineAsyncComponent(
  () => import("@/modules/institution/components/CreateBeneficiaryModel.vue"),
);
defineOptions({
  name: "InstitutionsBeneficiariesPage",
});
const { t } = useI18n();
const store = toRefs(useBeneficiariesStore());
// console.log(store.items.value);

let selected = ref<any[]>([]);
let selectedCount = ref(0);
let expanded = ref([]);
const deleteDialog = ref(false);
const selectedBeneficiaryEntity = ref("");

const chipOptions: ChipsDataFilterItem<string>[] = [
  {
    value: "true",
    title: "Active",
    // contentBorder: false,
    chipProps: {
      class: "pt5",
      // size: "25px",
      // margin: 0,
      // variant: "outlined",
    },
  },
];

// async filter
type InstitutionInput = Exclude<
  RouterInput["crud"]["institution"]["findMany"],
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
const citySelect = asyncAutocomplete(
  {
    value: store.selectedCity,
    enabled: store.selectedCityEnabled,
    props: () => ({
      label: t("common.city"),
      itemValue: "id",
      itemTitle: "name",
      autoSelectFirst: true,
      multiple: true,
      // usage of returnObject is mandatory
      // returnObject: true,
    }),
  },
  {
    debounceInterval: 220,
    input(search: string) {
      // dependencies of this getter are tracked and if required will cause a fetch
      return {
        search,
        // the `useSecondSet` is an example of how dependency tracking is useful to
        // force updates

        // this can be the use case of combined filter (select an institution -> select health center -> select claim/invoice)
        // secondSet: useSecondSet.value,
      };
    },
    async onFetch(input: { search: string }) {
      // assume this is the server side
      // no dependency tracking is done on this callback
      console.log(
        "[AutocompleteExample#fetch new items]",
        `search value: "${input.search}"`,
      );
      const res = await client.crud.cityEnum.findMany.query({
        take: 50,
        where: {
          name: { contains: input.search },
        },
      });
      console.log(res);
      return res?.data ?? [];
    },
  },
);
const { FilterComponent } = useDataFilters({
  sheetProps: {
    elevation: 0,
  },
  filter: {
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
    institution: institutionSelect,
    citySelect: citySelect,
    chips: chips({
      value: store.isActiveFilter,
      enabled: store.isActiveFilterEnabled,
      items: chipOptions,
      display: {
        lg: 2,
        md: 2,
      },
      // label: "Chips Filter label",

      props: () => ({
        color: "primary",
        variant: "tonal",
        filter: true,
      }),

      // generic props passed down to every chip
      chipProps: () => ({
        density: "comfortable",
        margin: 0,
        // size: "lg",
        // label: true,
      }),
    }),
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
// actions
function onSelected() {
  // benefeciaryTableList
  // selected.value = store.binding.value.items
  // selected.value
  console.log(selected.value);
  selectedCount.value = selected.value.length;
}
function refresh() {
  store.triggerFetch.value();
}
function selectAll() {
  // benefeciaryTableList
  selected.value = store.binding.value.items.map((item) => item.id);
  selectedCount.value = store.binding.value.itemsLength;

  console.log(selected.value);
}

function openACreateBeneficiaryDialog() {
  store.dialog.value = !store.dialog.value;
}
function paginated() {
  console.log("paginated");

  // benefeciaryTableList
  selected.value = [];
  selectedCount.value = 0;
}
function closeDialiog() {
  store.dialog.value = false;
}
function deleteItemConfirm(item) {
  console.log(item);

  closeDelete();
}
function closeDelete() {
  deleteDialog.value = false;
  // nextTick(() => {
  //   editedItem.value = Object.assign({}, defaultItem.value)
  //   editedIndex.value = -1
  // })
}
function editItem(item) {
  console.log(item);
}
function deleteItem(item) {
  deleteDialog.value = true;
}
function openAddBeneficiaryDialog(item) {
  console.log(store.addBeneficiarydialog.value);

  selectedBeneficiaryEntity.value = item;
  store.addBeneficiarydialog.value = !store.addBeneficiarydialog.value;
}
function closeAddBeneficiaryDialiog() {
  store.triggerFetch.value();
  store.addBeneficiarydialog.value = false;
}

// table headers
const headers = ref<TableHeader[]>([
  { text: "", value: "data-table-expand", width: "2.7rem" },
  {
    title: t("common.name"),
    key: "name",
    cellProps: () => {
      return { dir: "auto" };
    },
  },
  // {
  //   title: t("common.birthDate"),
  //   key: "birthDate",
  //   sortable: false,
  //   width: "2.7rem",
  // },
  // {
  //   title: t("common.genderId"),
  //   key: "genderId",
  //   sortable: false,
  //   width: "2.7rem",
  // },
  // {
  //   title: t("common.relationshipId"),
  //   key: "relationshipId",
  //   sortable: false,
  //   width: "2.7rem",
  // },

  // {
  //   title: t("common.creationDate"),
  //   key: "createdAt",
  //   sortable: false,
  //   width: "2.7rem",
  // },
  // {
  //   title: t("common.updatedAt"),
  //   key: "updatedAt",
  //   sortable: false,
  //   width: "2.7rem",
  // },
  // {
  //   title: t("common.status"),
  //   key: "isActive",
  //   sortable: false,
  //   align: "center",
  //   width: "0.5rem",
  // },
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
    title: t("common.city"),
    key: "city",
    sortable: false,
    align: "center",
    width: "0.5rem",
  },
  {
    title: t("common.actions"),
    key: "actions",
    sortable: false,
    align: "center",
  },
]);
</script>

<template>
  <CreateBeneficiariesModel
    v-if="store.dialog.value"
    :dialog="store.dialog.value"
    @update-dialog="closeDialiog"
  />
  <CreateBeneficiaryModel
    v-if="store.addBeneficiarydialog.value"
    :dialog="store.addBeneficiarydialog.value"
    :beneficiary-entity="selectedBeneficiaryEntity"
    @update-dialog="closeAddBeneficiaryDialiog"
  />
  <DataPageBase>
    <template #filters>
      <FilterComponent />
    </template>
    <template #actions>
      <VCardActions>
        {{ selectedCount }}
        <!-- {{ selected.length }} {{ store.binding.value.itemsLength }} -->
        <VBtn @click="selectAll">Select All 2</VBtn>
        <VBtn @click="refresh">refresh</VBtn>
        <VSpacer />
        <VBtn
          color="primary"
          variant="plain"
          @click="openACreateBeneficiaryDialog"
        >
          <span>{{ t("institution.beneficiaries.newbeneficiary") }}</span>
          <VIcon end :icon="mdiPlus" />
        </VBtn>
      </VCardActions>
    </template>
    <template #table>
      <VDataTableServer
        v-model="selected"
        v-bind="store.binding.value"
        v-model:expanded="expanded"
        :item-value="(item) => item.id"
        show-select
        :headers="headers"
        @input="onSelected"
        @update:page="paginated"
        @update:items-per-page="paginated"
      >
        <!-- // item.beneficiaries
            //   .filter(
            //     (beneficiary) =>
            //       beneficiary.relationshipId == "xj7v171tl8bcd2co7g7k2kwq",
            //   )
            //   .map((b) => b.firstName)[0] -->
        <template #item.name="{ item }">
          {{ item.beneficiaries[0]?.firstName }}
          {{ item.beneficiaries[0]?.secondName }}
          {{ item.beneficiaries[0]?.thirdName }}
          {{ item.beneficiaries[0]?.lastName }}
          <!-- {{ item.firstName }} {{ item.secondName }} {{ item.thirdName }}
          {{ item.lastName }} -->
        </template>
        <template #expanded-row="{ columns, item }">
          <td :colspan="columns.length">
            <v-table
              density="compact"
              class="emdedded-table"
              :colspan="columns.length"
            >
              <thead>
                <tr>
                  <th class="text-left thembedded-table">
                    {{ t("common.name") }}
                  </th>
                  <th class="text-left">{{ t("common.birthDate") }}</th>
                  <th class="text-left">{{ t("common.relationshipId") }}</th>
                  <th class="text-left">{{ t("common.creationDate") }}</th>
                  <th class="text-left">{{ t("common.updatedAt") }}</th>
                  <th class="text-left">{{ t("common.status") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="beneficiary in item.beneficiaries"
                  :key="beneficiary.id"
                >
                  <td>
                    {{ beneficiary.firstName }} {{ beneficiary.lastName }}
                  </td>
                  <td>
                    {{ new Date(beneficiary.birthDate).toLocaleDateString() }}
                  </td>
                  <td>{{ beneficiary.relationship.name }}</td>
                  <td>
                    {{ new Date(beneficiary.createdAt).toLocaleDateString() }}
                  </td>
                  <td>
                    {{ new Date(beneficiary.updatedAt).toLocaleDateString() }}
                  </td>

                  <td>
                    <VChip :color="beneficiary.isActive ? 'primary' : 'error'">
                      {{ beneficiary.isActive ? "Active" : "Inactive" }}
                    </VChip>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <VDivider />
          </td>
        </template>
        <!-- <template #item.birthDate="{ item }">
          {{ new Date(item.birthDate).toLocaleDateString() }}
        </template> -->

        <template #item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleDateString() }}
        </template>
        <template #item.updatedAt="{ item }">
          {{ new Date(item.updatedAt).toLocaleDateString() }}
        </template>
        <template #item.city="{ item }">
          {{ item.city?.name }}
        </template>
        <template #item.isActive="{ item }">
          <VChip :color="item.isActive ? 'primary' : 'error'">
            {{ item.isActive ? "Active" : "Inactive" }}
          </VChip>
        </template>
        <template #item.actions="{ item }">
          <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiPlus"
            @click="openAddBeneficiaryDialog(item)"
          />
          <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiPencil"
            @click="editItem(item)"
          />
          <VIcon
            class="mx-1"
            color="primary"
            :icon="mdiDelete"
            @click="deleteItem(item)"
          />
        </template>
      </VDataTableServer>
    </template>
  </DataPageBase>
  <VDialog v-model="deleteDialog" max-width="500px">
    <VCard>
      <VCardTitle class="text-h5"
        >Are you sure you want to delete this item?</VCardTitle
      >
      <VCardActions>
        <VSpacer />
        <VBtn color="primary" variant="text" @click="closeDelete">Cancel</VBtn>
        <VBtn color="red" variant="text" @click="deleteItemConfirm">OK</VBtn>
        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
