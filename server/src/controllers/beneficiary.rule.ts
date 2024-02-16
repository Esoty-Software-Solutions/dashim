import { actions } from "@controllers/_actions";
import ServerError from "@utilities/error";
import { Beneficiary } from "@prisma/client";
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

export const rules: Record<string, RuleTemplate> = {
  oneSelfRelationshipMustExist: {
    id: "1",
    name: "self Relationship Must Exist",
    description:
      "Every Beneficiary Entity needs to have one beneficiary with a 'self' relationship declared",
    evaluation: async function (beneficiaries: Beneficiary[]) {
      const selfRelationship = await actions.getSelfRelationshipObject();
      const matchingElements = beneficiaries.filter(
        (element) => element.relationshipId === selfRelationship.id,
      );
      if (matchingElements.length !== 1) {
        throw new ServerError({
          message: this.description,
          code: "UNPROCESSABLE_CONTENT",
        });
      }
    },
  },
  oneFatherRelationshipMustExist: {
    id: "1",
    name: "father Relationship Must Exist",
    description:
      "Every Beneficiary Entity needs to have at most one beneficiary with a 'father' relationship declared",
    evaluation: async function (beneficiaries: Beneficiary[]) {
      const selfRelationship = await actions.getSelfRelationshipObject();
      const matchingElements = beneficiaries.filter(
        (element) => element.relationshipId === selfRelationship.id,
      );
      if (matchingElements.length > 1) {
        throw new ServerError({
          message: this.description,
          code: "UNPROCESSABLE_CONTENT",
        });
      }
    },
  },
  oneMotherRelationshipMustExist: {
    id: "1",
    name: "mother Relationship Must Exist",
    description:
      "Every Beneficiary Entity needs to have at most one beneficiary with a 'mother' relationship declared",
    evaluation: async function (beneficiaries: Beneficiary[]) {
      const selfRelationship = await actions.getSelfRelationshipObject();
      const matchingElements = beneficiaries.filter(
        (element) => element.relationshipId === selfRelationship.id,
      );
      if (matchingElements.length > 1) {
        throw new ServerError({
          message: this.description,
          code: "UNPROCESSABLE_CONTENT",
        });
      }
    },
  },
};
