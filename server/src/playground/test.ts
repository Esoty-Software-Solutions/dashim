// import { actions } from "@procedures/_actions";
// import ServerError from "@utilities/error";
import util from "util";
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
    return 1;
  },
};

const keys = Object.keys(facts) as FactKeys[];

const conditions: TopLevelCondition = {
  any: [
    {
      fact: "selfRelationshipOccurrence",
      operator: "equal",
      value: 0,
      priority: 1,
      name: "one self relationship required",
    },
    {
      fact: "fatherRelationshipOccurrence",
      operator: "lessThanInclusive",
      value: 0,
      priority: 1,
      name: "at most one father",
    },
    {
      fact: "motherRelationshipOccurrence",
      operator: "lessThanInclusive",
      value: 0,
      priority: 4,
      name: "at most one mother",
    },
    {
      all: [
        {
          fact: "test",
          operator: "greaterThanInclusive",
          value: 5,
          priority: 1,
          name: "one test1 required",
        },
        {
          fact: "test",
          operator: "lessThanInclusive",
          value: 555,
          priority: 1,
          name: "one test2 required",
        },
        {
          not: {
            fact: "test",
            operator: "equal",
            value: 1,
            priority: 1,
            name: "one test3 required",
          },
        },
      ],
    },
  ],
};

const rules = new Rule({
  name: "Beneficiary relationship check",
  priority: 10,
  conditions: conditions,
  event: {
    type: "beneficiaryRelationshipCheck",
  },
  onSuccess: (event, almanac, ruleResult) => {
    // console.log("onSuccess", event, almanac, ruleResult);
    console.log("onSuccess", event);
    almanac.addFact("rulesPassed", true);
  },
  onFailure: (event, almanac, ruleResult) => {
    //   // console.log("onFailure", event, almanac, ruleResult);
    // console.log("onFailure", ruleResult);
    almanac.addFact("rulesPassed", false);
    almanac.addFact("failureReport", parseResult(ruleResult.conditions, false));
  },
});

function parseResultObject(condition: any, resultType: boolean) {
  if (condition.operator === "not") {
    if (condition.result === resultType) {
      return {
        fact: condition.not.fact,
        operator: `not ${condition.not.operator}`,
        value: condition.not.value,
        result: condition.not.result,
      };
    }
  } else {
    if (condition.result === resultType) {
      return {
        fact: condition.fact,
        operator: condition.operator,
        value: condition.value,
        result: condition.result,
      };
    }
  }
}
function parseResult(condition: any, resultType: boolean) {
  if (condition.operator === "any" || condition.operator === "all") {
    const x = condition[condition.operator]
      .map((element: any) => {
        return parseResult(element, resultType);
      })
      .filter((element: any) => element !== undefined);
    return { [condition.operator]: x };
  } else {
    return parseResultObject(condition, resultType);
  }
}
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
        relationship: "mother",
      },
      {
        id: "1",
        relationship: "father",
      },
    ],
  };
  engine.addRule(rules);
  let jsonString = rules.toJSON(false);
  console.log(
    "stringify rules object",
    util.inspect(jsonString, false, null, true),
  );
  engine.on("failure", (event, almanac, ruleResult) => {
    engine.stop();
  });
  const result = await engine.run(beneficiary);

  console.log("rules result...", await result.almanac.factValue("rulesPassed"));
  if (result.failureResults.length > 0) {
    let failureReport: any = {};

    // const oprtr = result.failureResults[0].conditions.operator;
    // console.log("result.failureResults", result.failureResults[0].conditions);
    failureReport = parseResult(result.failureResults[0].conditions, false);
    console.log(
      "failure report",
      util.inspect(
        await result.almanac.factValue("failureReport"),
        false,
        null,
        true,
      ),
    );

    // console.log(
    //   "failure report",
    //   util.inspect(failureReport, false, null, true),
    // );
  }

  // const successReport = parseResult(result.results[0].conditions, true);
  // console.log("failure report", util.inspect(successReport, false, null, true));

  return { resolution: true, message: "Beneficiary relationship check passed" };
}

ruleCheck();
