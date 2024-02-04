<script setup lang="ts">
import { ref } from "vue";

import useDataFilters, {
  asyncAutocomplete,
  asyncSelect,
} from "@/modules/filter/composables/dataFilter";
import { client, type RouterInput, type RouterOutput } from "@/queries";

import findStates from "./fakeStateApi";

// async select example

type RelationshipInput = Exclude<
  RouterInput["crud"]["relationship"]["findMany"],
  void
>;
type RelationshipOutput = RouterOutput["crud"]["relationship"]["findMany"];

type Relationship = NonNullable<RelationshipOutput>["data"][number];

const selectedRelationship = ref<Relationship | null>(null);

const relationshipSelect = asyncSelect(
  {
    value: selectedRelationship,
    props: () => ({
      label: "Relationship (async)",
      itemValue: "id",
      itemTitle: "english",
      returnObject: true,
    }),
  },
  {
    immediate: true,
    input: () => ({}),
    async onFetch(input: RelationshipInput) {
      const res = await client.crud.relationship.findMany.query(input);

      return res?.data ?? [];
    },
  },
);

// async autocomplete example 1 (tRPC status)

type StatusInput = Exclude<
  RouterInput["crud"]["reviewStatus"]["findMany"],
  void
>;
type StatusOutput = RouterOutput["crud"]["reviewStatus"]["findMany"];

type ReviewStatus = NonNullable<StatusOutput>["data"][number];

const selectedReviewStatus = ref<ReviewStatus | null>(null);

const reviewStatusFilter = asyncAutocomplete(
  {
    value: selectedReviewStatus,

    props: () => ({
      label: "Review Status (async)",

      itemTitle: "english",
      itemValue: "id",

      returnObject: true,
    }),

    display: {
      md: 6,
    },
  },
  {
    debounceInterval: 220,
    input: (search: string | any) => {
      return {
        where: {
          english: search?.trim() ? { contains: search.trim() } : undefined,
        },
      };
    },
    async onFetch(input: StatusInput) {
      const res = await client.crud.reviewStatus.findMany.query(input);

      return res?.data ?? [];
    },
  },
);

// async autocomplete example 2 (fake api)

const useSecondSet = ref(false);
const stateValue = ref([]);
const state = asyncAutocomplete(
  {
    value: stateValue,
    props: () => ({
      label: "State (async)",
      autoSelectFirst: true,
      multiple: true,
      // usage of returnObject is mandatory
      returnObject: true,
    }),
  },
  {
    debounceInterval: 220,
    input(search: string | null) {
      // dependencies of this getter are tracked and if required will cause a fetch
      return {
        search,
        // the `useSecondSet` is an example of how dependency tracking is useful to
        // force updates

        // this can be the use case of combined filter (select an institution -> select health center -> select claim/invoice)
        secondSet: useSecondSet.value,
      };
    },
    onFetch(input: { search: string | null; secondSet: boolean }) {
      // assume this is the server side
      // no dependency tracking is done on this callback
      console.log(
        "[AutocompleteExample#fetch new items]",
        `search value: "${input.search}"`,
      );

      return findStates(input.search, input.secondSet);
    },
  },
);

const { FilterComponent } = useDataFilters({
  filter: {
    relationship: relationshipSelect,
    reviewStatus: reviewStatusFilter,
    state,
  },
});
</script>

<template>
  <VContainer>
    <FilterComponent />

    <VCard class="mt-2">
      <VCardText>
        <VSwitch v-model="useSecondSet" label="Use second set" />
      </VCardText>
      <VCardText>
        {{ stateValue }}
      </VCardText>
    </VCard>

    <VDivider class="my-4" />
  </VContainer>
</template>
