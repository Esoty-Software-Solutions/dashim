import { actions } from "@procedures/_actions";
import ServerError from "@utilities/error";
import {
  Engine,
  Rule,
  Fact,
  Event,
  RuleProperties,
  TopLevelCondition,
  FactOptions,
  DynamicFactCallback,
  Almanac,
} from "json-rules-engine";
import { Beneficiary } from "@prisma/client";
import { onUpdated } from "vue";

interface ConditionProperties {
  fact: FactKeys;
  operator:
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "lessThan"
    | "greaterThanInclusive"
    | "lessThanInclusive"
    | "in"
    | "notIn"
    | "contains"
    | "doesNotContain";
  value: { fact: FactKeys } | any;
  path?: string;
  priority?: number;
  params?: Record<string, any>;
  name?: string;
}
type FactKeys = keyof typeof facts;

const facts = {
  // beneficiaryObject: async (params, almanac) => {
  //   console.log("beneficiaryObject params", params);
  //   return await [
  //     { id: "1", relationship: "self" },
  //     { id: "3", relationship: "mother" },
  //   ];
  // },
  selfRelationshipOccurrence: async (
    params: Record<string, any>,
    almanac: Almanac,
  ) => {
    return almanac.factValue("beneficiaryObject").then((value: any) => {
      return value.filter((element: any) => element.relationship === "self")
        .length as number;
    });
  },
  fatherRelationshipOccurrence: async (
    params: Record<string, any>,
    almanac: Almanac,
  ) => {
    return almanac.factValue("beneficiaryObject").then((value: any) => {
      return value.filter((element: any) => element.relationship === "father")
        .length as number;
    });
  },
  motherRelationshipOccurrence: async (
    params: Record<string, any>,
    almanac: Almanac,
  ) => {
    return almanac.factValue("beneficiaryObject").then((value: any) => {
      return value.filter((element: any) => element.relationship === "mother")
        .length as number;
    });
  },
  test: async (params: Record<string, any>, almanac: Almanac) => {
    return 4;
  },
};

const keys = Object.keys(facts) as FactKeys[];

const conditions: TopLevelCondition = {
  all: [
    {
      fact: "selfRelationshipOccurrence",
      operator: "equal",
      value: 1,
      priority: 1,
      name: "one self relationship required",
    },
    {
      fact: "fatherRelationshipOccurrence",
      operator: "lessThanInclusive",
      value: 1,
      priority: 1,
      name: "at most one father",
    },
    {
      fact: "motherRelationshipOccurrence",
      operator: "lessThanInclusive",
      value: 1,
      priority: 1,
      name: "at most one mother",
    },
    {
      any: [
        {
          fact: "test",
          operator: "equal",
          value: 1,
          priority: 1,
          name: "one father required",
        },
        {
          fact: "test",
          operator: "equal",
          value: 1,
          priority: 1,
          name: "one father required",
        },
      ],
    },
  ],
};

const rules: RuleProperties = {
  conditions: conditions,
  event: {
    type: "beneficiaryRelationshipCheck",
    params: {
      message: "Beneficiary relationship check",
    },
  },
  // onSuccess: (event, almanac, ruleResult) => {
  //   // console.log("onSuccess", event, almanac, ruleResult);
  // },
  // onFailure: (event, almanac, ruleResult) => {
  //   // console.log("onFailure", event, almanac, ruleResult);
  // },
};

export async function ruleCheck(beneficiary2?: Beneficiary[]) {
  const engine = new Engine();
  keys.forEach((key) => {
    engine.addFact(key, facts[key]);
  });

  const beneficiary = {
    beneficiaryObject: [
      {
        id: "1",
        relationship: "self",
      },
      {
        id: "1",
        relationship: "mother",
      },
      {
        id: "1",
        relationship: "father",
      },
    ],
  };
  engine.addRule(rules);
  engine.on("failure", (event, almanac, ruleResult) => {
    engine.stop();
  });
  const result = await engine.run(beneficiary);

  if (result.failureResults.length > 0) {
    const oprtr = result.failureResults[0].conditions.operator;
    console.log("fail report", result.failureResults[0].conditions[oprtr]);
  }

  console.log("result", result.results);
  return { resolution: true, message: "Beneficiary relationship check passed" };
}

ruleCheck();
