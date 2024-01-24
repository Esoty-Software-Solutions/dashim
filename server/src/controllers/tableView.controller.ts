import { z } from "zod";
import { enhancedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";

// Start Automated Script
import { SubscriberFindManySchema } from "@schemas/routers/subscriber.schema";
import { InstitutionFindManySchema } from "@schemas/routers/institution.schema";
// End Automated Script

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_PAGE_SIZE = 50;
const DEFAULT_PAGE_NUMBER = 0;
/*
  Return the following
  return { data: subscribers, filteredCount, metaData, statistics };
  filteredCount: filtered table count
  metaData: filters max/min, shortLists, 
  statistics: full table count, and other stats
  */

const SubscriberFindManySchemaObject = SubscriberFindManySchema.unwrap();
export const ExtendedSubscriberFindManySchema =
  SubscriberFindManySchemaObject.extend({
    include: z.object({}).strict().optional(),
    select: z.object({}).strict().optional(),
  }).optional();

type _getSubscribersType = z.infer<typeof ExtendedSubscriberFindManySchema>;

x = _getSubscribers("userID", {});

export async function _getSubscribers(
  userId: string,
  input: _getSubscribersType,
) {
  const MAX_RETRIES = DEFAULT_MAX_RETRIES;
  input = input || {};
  input.take = input.take || DEFAULT_PAGE_SIZE;
  input.skip = input.skip || DEFAULT_PAGE_NUMBER * DEFAULT_PAGE_SIZE;
  // const validUser = addSubscribersDataSchema.parse(data);
  let retries = 0;
  while (true) {
    try {
      return await enhancedPrisma(userId).$transaction(
        async (tx) => {
          // Code running in a transaction...
          const subscribers = await tx.subscriber.findMany({
            include: { beneficiaries: true },
          });
          const filteredCount = await tx.subscriber.count({
            where: input?.where,
          });
          const unFilteredCount = await tx.subscriber.count();
          const activeCount = await tx.subscriber.count({
            where: { ...input?.where, isActive: true },
          });
          const inActiveCount = filteredCount - activeCount;
          // const maxAge = await tx.subscriber.aggregate({where: input.where, select: {age: true}})
          const statistics = [
            { key: "activeCount", value: activeCount },
            { key: "inActiveCount", value: inActiveCount },
            { key: "unFilteredCount", value: unFilteredCount },
          ];
          const metaData = {
            unFilteredCount,
            priceFilter: { min: 0, max: 1000 },
            countryFilter: ["Egypt", "Saudi Arabia", "United Arab Emirates"],
            cityFilter: ["Cairo", "Alexandria", "Giza"],
          };

          return { data: subscribers, filteredCount, metaData, statistics };
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

type _getInstitutionsType = z.infer<typeof InstitutionFindManySchema>;
export async function _getInstitutions(
  userId: string,
  input: _getInstitutionsType,
) {
  const MAX_RETRIES = DEFAULT_MAX_RETRIES;
  input = input || {};
  input.take = input.take || DEFAULT_PAGE_SIZE;
  input.skip = input.skip || DEFAULT_PAGE_NUMBER * DEFAULT_PAGE_SIZE;
  // const validUser = addInstitutionsDataSchema.parse(data);
  let retries = 0;
  while (true) {
    try {
      return await enhancedPrisma(userId).$transaction(
        async (tx) => {
          // Code running in a transaction...
          const institutions = await tx.institution.findMany(input);
          const filteredCount = await tx.institution.count({
            where: input?.where,
          });
          const unFilteredCount = await tx.institution.count();

          const activeCount = await tx.institution.count({
            where: { ...input?.where, isActive: true },
          });
          const inActiveCount = filteredCount - activeCount;
          // const maxAge = await tx.institution.aggregate({where: input.where, select: {age: true}})
          const statistics = [
            { key: "activeCount", value: activeCount },
            { key: "inActiveCount", value: inActiveCount },
            { key: "unFilteredCount", value: unFilteredCount },
          ];
          const metaData = {
            unFilteredCount,
            priceFilter: { min: 0, max: 1000 },
            countryFilter: ["Egypt", "Saudi Arabia", "United Arab Emirates"],
            cityFilter: ["Cairo", "Alexandria", "Giza"],
          };

          return { data: institutions, filteredCount, metaData, statistics };
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
