import { Prisma } from "@prisma/client";
import { z } from "zod";
import { CreateBeneficiaryEntityInputSchema } from "@schemas/procedures/beneficiary.procedure.schema";

export const actions = {
  formatToPrismaCreateShape: async function (
    userId: string,
    beneficiaryEntity: z.infer<typeof CreateBeneficiaryEntityInputSchema>,
  ) {
    const formattedData: Prisma.SubscriberUncheckedCreateInput = {
      ...beneficiaryEntity.data,
      statusSetById: userId,
      beneficiaries: {
        createMany: {
          data: beneficiaryEntity.data.beneficiaries.map((beneficiary) => ({
            ...beneficiary,
            statusSetById: userId,
            searchName: "", //TODO: this is a computed field so it should be optional
          })),
        },
      },
    };

    return formattedData;
  },
};
