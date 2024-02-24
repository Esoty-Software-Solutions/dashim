import { Prisma } from "@prisma/client";
import { z } from "zod";
import { CreateBeneficiaryEntityInputSchema } from "./beneficiary.procedure.schema";

export const actions = {
  formatToPrismaCreateShape: async function (
    userId: string,
    beneficiaryEntity: z.infer<typeof CreateBeneficiaryEntityInputSchema>,
  ) {
    const formattedData: Prisma.BeneficiaryEntityUncheckedCreateInput = {
      ...beneficiaryEntity.data,
      statusSetById: userId,
      beneficiaries: {
        createMany: {
          data: beneficiaryEntity.data.beneficiaries.map((beneficiary) => ({
            ...beneficiary,
            statusSetById: userId,
            searchName: this.normalizeSearchName(
              [
                beneficiary.firstName,
                beneficiary.secondName,
                beneficiary.thirdName,
                beneficiary.fourthName,
                beneficiary.lastName,
              ]
                .filter((name) => name) // Remove any empty or undefined names
                .map((name) => (name ? name.replace(/\s/g, "") : "")) // Trim whitespace from each name
                .join(" "), // Concatenate the names with a space
            ), //TODO: this is a computed field so it should be optional
          })),
        },
      },
    };

    return formattedData;
  },
  normalizeSearchName: function (name: string) {
    return name
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "");
  },
};
