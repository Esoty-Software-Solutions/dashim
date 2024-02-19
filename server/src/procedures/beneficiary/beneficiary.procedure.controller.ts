import { z } from "zod";
import { enhancedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";
import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "@procedures/_config";
import {
  ListBeneficiaryEntityInputSchema,
  CreateBeneficiaryEntityInputSchema,
  UpdateBeneficiaryEntityInputSchema,
} from "./beneficiary.procedure.schema";
import { rules } from "./beneficiary.procedure.rule";
import { actions } from "./beneficiary.procedure.action";

import { FAKE_USER_ID } from "@utilities/auth";

const StatusSetByFields = {
  //* Using Prisma operation "include" includes all fields in the return type
  select: { id: true, firstName: true, lastName: true },
};

export async function listBeneficiaryEntities(
  userId: string,
  input: z.infer<typeof ListBeneficiaryEntityInputSchema>,
) {
  input = input || {};
  input.take = input.take || DEFAULT_PAGE_SIZE;
  input.skip = input.skip || DEFAULT_PAGE_NUMBER * DEFAULT_PAGE_SIZE;
  const validInput = ListBeneficiaryEntityInputSchema.parse(input);
  const [data, filteredCount, unFilteredCount, activeCount] = await Promise.all(
    [
      enhancedPrisma(userId).beneficiaryEntity.findMany({
        where: validInput?.where,
        orderBy: validInput?.orderBy,
        skip: validInput?.skip,
        take: validInput?.take,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isActive: true,
          city: {
            select: {
              id: true,
              arabic: true,
              english: true,
              name: true,
            },
          },
          insurancePolicyId: true,
          beneficiaries: {
            select: {
              id: true,
              createdAt: true,
              updatedAt: true,
              isActive: true,
              firstName: true,
              secondName: true,
              thirdName: true,
              fourthName: true,
              lastName: true,
              birthDate: true,
              gender: {
                select: {
                  id: true,
                  name: true,
                  arabic: true,
                  english: true,
                },
              },
              relationship: {
                select: {
                  id: true,
                  name: true,
                  arabic: true,
                  english: true,
                },
              },
              StatusSetBy: StatusSetByFields,
              beneficiaryBalances: {
                select: {
                  id: true,
                  balanceActual: true,
                  balancePending: true,
                  updatedAt: true,
                },
              },
            },
          },
          StatusSetBy: StatusSetByFields,
        },
      }),
      enhancedPrisma(userId).beneficiaryEntity.count({
        where: input?.where,
      }),
      enhancedPrisma(userId).beneficiaryEntity.count(),
      enhancedPrisma(userId).beneficiaryEntity.count({
        where: { ...input?.where, isActive: true },
      }),
    ],
  );
  const inActiveCount = filteredCount - activeCount;
  const statistics = [
    { key: "activeCount", value: activeCount },
    { key: "inActiveCount", value: inActiveCount },
  ];

  return {
    data,
    filteredCount,
    unFilteredCount,
    statistics,
  };
}
export async function createBeneficiaryEntity(
  userId: string,
  input: z.infer<typeof CreateBeneficiaryEntityInputSchema>,
) {
  // input data validation
  const validInput = CreateBeneficiaryEntityInputSchema.parse(input);
  // input data business rules
  rules.oneSelfRelationshipMustExist.evaluation(validInput.data.beneficiaries);
  rules.oneFatherRelationshipMustExist.evaluation(
    validInput.data.beneficiaries,
  );
  rules.oneMotherRelationshipMustExist.evaluation(
    validInput.data.beneficiaries,
  );
  // business logic
  const processedInput = await actions.formatToPrismaCreateShape(
    FAKE_USER_ID,
    validInput,
  );

  return await enhancedPrisma(userId).beneficiaryEntity.create({
    data: processedInput,
    include: { beneficiaries: true },
  });
}

// export async function updateBeneficiaryEntity(
//   userId: string,
//   input: z.infer<typeof UpdateBeneficiaryEntityInputSchema>,
// ) {
//   // input data validation
//   const validInput = UpdateBeneficiaryEntityInputSchema.parse(input);
//   // input data business rules
//   rules.oneSelfRelationshipMustExist.evaluation(validInput.data.beneficiaries);
//   // business logic
//   const processedInput = await actions.formatToPrismaCreateShape(
//     userId,
//     validInput,
//   );

//   return await enhancedPrisma(userId).beneficiaryEntity.create({
//     data: processedInput,
//     include: { beneficiaries: true },
//   });
// }
