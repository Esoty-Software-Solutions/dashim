import { Prisma, Beneficiary, BeneficiaryEntity } from "@prisma/client";
import { z } from "zod";
import {
  CreateBeneficiaryEntityInputSchema,
  CreateBeneficiaryInputSchema,
} from "./beneficiary.procedure.schema";

interface NameFields {
  firstName: string;
  secondName?: string | null;
  thirdName?: string | null;
  fourthName?: string | null;
  lastName: string;
}

export const actions = {
  processBeneficiaryEntryCreate: function (
    input: Prisma.BeneficiaryEntityCreateArgs,
    userId: string,
  ) {
    input.data.StatusSetBy = { connect: { id: userId } };
    if (input.data.beneficiaries?.create) {
      if (Array.isArray(input.data.beneficiaries.create)) {
        //! Prisma type does not include foreign keys for some reason
        //TODO: remove this method in validation
      } else {
        input.data.beneficiaries.create = this.sanitizeNames(
          input.data.beneficiaries.create,
        );
        input.data.beneficiaries.create.StatusSetBy = {
          connect: { id: userId },
        };
      }
    }
    if (input.data.beneficiaries?.createMany) {
      if (Array.isArray(input.data.beneficiaries.createMany.data)) {
        input.data.beneficiaries.createMany.data.forEach((ben) => {
          ben = this.sanitizeNames(ben);
          ben.statusSetById = userId;
        });
      } else {
        input.data.beneficiaries.createMany.data = this.sanitizeNames(
          input.data.beneficiaries.createMany.data,
        );
        input.data.beneficiaries.createMany.data.statusSetById = userId;
      }
    }
    if (input.data.beneficiaries?.connectOrCreate) {
      if (Array.isArray(input.data.beneficiaries.connectOrCreate)) {
        input.data.beneficiaries.connectOrCreate.forEach((ben) => {
          ben.create = this.sanitizeNames(ben.create);
          ben.create.StatusSetBy = { connect: { id: userId } };
        });
      } else {
        input.data.beneficiaries.connectOrCreate.create = this.sanitizeNames(
          input.data.beneficiaries.connectOrCreate.create,
        );
        input.data.beneficiaries.connectOrCreate.create.StatusSetBy = {
          connect: { id: userId },
        };
      }
    }
    return input;
  },
  processBeneficiaryCreate: function (
    input: Prisma.BeneficiaryCreateArgs,
    userId: string,
  ) {
    if (Array.isArray(input.data)) {
      input.data.forEach((ben) => {
        ben = this.sanitizeNames(ben);
        ben.statusSetById = userId;
      });
    } else {
      input.data.StatusSetBy = { connect: { id: userId } };
      input.data = this.sanitizeNames(input.data);
    }
    return input;
  },

  processBeneficiaryUpdate: function (
    input: Prisma.BeneficiaryUpdateArgs,
    userId: string,
  ) {
    if (input.data.isActive) {
      input.data.StatusSetBy = { connect: { id: userId } };
    }
    if (input.data) {
    }
    return input;
  },

  processBeneficiaryEntityUpdate: function (
    input: Prisma.BeneficiaryUpdateArgs,
    userId: string,
  ) {
    if (input.data.isActive) {
      input.data.StatusSetBy = { connect: { id: userId } };
    }
    // input.data.
    return input;
  },
  sanitizeNames: function <T extends NameFields>(beneficiary: T): T {
    const names = [
      beneficiary.firstName,
      beneficiary.secondName,
      beneficiary.thirdName,
      beneficiary.fourthName,
      beneficiary.lastName,
    ];
    const searchName = this.normalizeSearchName(
      names
        .filter((name) => name) // Remove any empty or undefined names
        .map((name) => (name ? name.replace(/\s/g, "") : "")) // Trim whitespace from each name
        .join(" "),
    ); // Concatenate the names with a space

    return { ...beneficiary, searchName };
  },
  normalizeSearchName: function (name: string) {
    return name
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "");
  },
};
