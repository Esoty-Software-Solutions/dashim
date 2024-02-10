import { z } from "zod";
import { enhancedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";
import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "./_config.controller";
import {
  CreateBeneficiaryEntityInputSchema,
  ListBeneficiaryEntityInputSchema,
} from "@schemas/procedures/beneficiary.procedure.schema";
import { rules } from "./beneficiary.rule";
import { actions } from "./beneficiary.action";

const StatusSetByFields = {
  //* Using Prisma operation "include" includes all fields in the return type
  select: { id: true, firstName: true, lastName: true },
};

export async function _listBeneficiaries(
  userId: string,
  input: z.infer<typeof ListBeneficiaryEntityInputSchema>,
) {
  const MAX_RETRIES = DEFAULT_MAX_RETRIES;
  let retries = 0;

  input = input || {};
  input.take = input.take || DEFAULT_PAGE_SIZE;
  input.skip = input.skip || DEFAULT_PAGE_NUMBER * DEFAULT_PAGE_SIZE;

  // TODO: parse to validate input or do it at TRPC level?

  /*
  Return the following
  data
  count
  max/min of certain columns
  statistics
  */

  const validInput = ListBeneficiaryEntityInputSchema.parse(input);

  while (true) {
    try {
      return await enhancedPrisma(userId).$transaction(
        async (tx) => {
          // Code running in a transaction...
          const [data, filteredCount, unFilteredCount, activeCount] =
            await Promise.all([
              tx.subscriber.findMany({
                where: validInput?.where,
                skip: validInput?.skip,
                take: validInput?.take,
                select: {
                  id: true,
                  createdAt: true,
                  updatedAt: true,
                  isActive: true,
                  // TODO: add city
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
                      residence: true, //TODO: rename into city and move to subscriber
                      genderId: true,
                      relationshipId: true,
                      StatusSetBy: StatusSetByFields,
                      beneficiaryBalances: {
                        select: { id: true, balance: true, updatedAt: true },
                      },
                    },
                  },
                  StatusSetBy: StatusSetByFields,
                },
                // include: { //* This blows up the return type
                //   beneficiaries: { select: { StatusSetBy: selectStatusSetBy } },
                //   StatusSetBy: selectStatusSetBy,
                // },
              }),
              tx.subscriber.count({
                where: input?.where,
              }),
              tx.subscriber.count(),
              tx.subscriber.count({
                where: { ...input?.where, isActive: true },
              }),
            ]);
          const inActiveCount = filteredCount - activeCount;
          // const maxAge = await tx.subscriber.aggregate({where: input.where, select: {age: true}})
          const statistics = [
            { key: "activeCount", value: activeCount },
            { key: "inActiveCount", value: inActiveCount },
          ];

          // const metaData = {
          //   uFCount,
          //   priceFilter: { min: 0, max: 1000 },
          //   countryFilter: ["Egypt", "Saudi Arabia", "United Arab Emirates"],
          //   cityFilter: ["Cairo", "Alexandria", "Giza"],
          // };

          return {
            data,
            filteredCount,
            unFilteredCount,
            statistics,
          };
        },
        {
          //   maxWait: 5000, // default: 2000
          //   timeout: 10000, // default: 5000
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
        },
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === "P2034") {
          retries++;
          if (retries >= MAX_RETRIES) {
            throw error;
          }
          continue;
        }
      }
      throw error;
    }
  }
}
// }

export async function _createBeneficiaryEntity(
  userId: string,
  input: z.infer<typeof CreateBeneficiaryEntityInputSchema>,
) {
  // input data validation
  const validInput = CreateBeneficiaryEntityInputSchema.parse(input);
  // input data business rules
  rules.oneSelfRelationshipMustExist.evaluation(validInput.data.beneficiaries);
  // business logic
  const processedInput = await actions.formatToPrismaCreateShape(
    userId,
    validInput,
  );

  return await enhancedPrisma(userId).subscriber.create({
    data: processedInput,
    include: { beneficiaries: true },
  });
}

export async function _updateBeneficiaryEntityStatus(
  userId: string,
  input: z.infer<typeof CreateBeneficiaryEntityInputSchema>,
) {
  // input data validation
  const validInput = CreateBeneficiaryEntityInputSchema.parse(input);
  // input data business rules
  rules.oneSelfRelationshipMustExist.evaluation(validInput.data.beneficiaries);
  // business logic
  const processedInput = await actions.formatToPrismaCreateShape(
    userId,
    validInput,
  );

  return await enhancedPrisma(userId).subscriber.create({
    data: processedInput,
    include: { beneficiaries: true },
  });
}