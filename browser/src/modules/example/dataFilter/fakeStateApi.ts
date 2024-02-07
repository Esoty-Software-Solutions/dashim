import { sleep } from "@/utils";

const statesSet1 = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
].map((s, index) => ({ title: s, value: index }));

const statesSet2 = [
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
].map((s, index) => ({ title: s, value: index + statesSet1.length - 1 }));

export default async function findStates(
  search: string | null,
  secondSet: boolean,
) {
  await sleep(500);

  const setInUse = secondSet ? statesSet2 : statesSet1;

  const result = setInUse.filter(
    (state) =>
      // prettier-ignore
      state.title.toLowerCase().indexOf((search || "").toLowerCase()) > -1,
  );

  return result;
}
