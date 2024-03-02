import { actions } from "@procedures/_actions";
import ServerError from "@utilities/error";
type RuleTemplate = {
  id: string;
  name: string;
  description: string;
  evaluation: Function;
  // conditions: Array<{
  //   field: string;
  //   operator: string;
  //   value: string | number | boolean;
  // }>;
  // actions: Array<{
  //   actionType: string;
  //   parameters: Record<string, unknown>;
  // }>;
};

import {
  Engine,
  Rule,
  ConditionProperties,
  Event,
  RuleProperties,
  TopLevelCondition,
  FactOptions,
} from "json-rules-engine";

const engine = new Engine();

const conditions: ConditionProperties[] = [
  {
    fact: "my-fact",
    operator: "equal",
    value: 2,
    priority: 10,
    name: "condition 1",
  },
];

const event: Event = { type: "event 1", params: { param1: "value1" } };

const topLevelCondition: TopLevelCondition = {
  all: conditions,
  name: "top level condition",
  priority: 10,
};

const rule: RuleProperties = {
  conditions: topLevelCondition,
  event,
  name: "my-rule",
  priority: 10,
  onSuccess: function (event, almanac) {}, // optional
  onFailure: function (event, almanac) {}, // optional
};
