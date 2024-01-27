import { z } from "zod";
import { enhancedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";
import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "./_config.controller";
import { SubscriberFindManySchema } from "@schemas/routers/subscriber.schema";

type _ListBeneficiariesInputType = z.infer<typeof SubscriberFindManySchema>;
export async function _ListBeneficiaries(
  userId: string,
  input: _ListBeneficiariesInputType,
) {
  const MAX_RETRIES = DEFAULT_MAX_RETRIES;
  let retries = 0;

  input = input || {};
  input.take = input.take || DEFAULT_PAGE_SIZE;
  input.skip = input.skip || DEFAULT_PAGE_NUMBER * DEFAULT_PAGE_SIZE;

  /*
  Return the following
  data
  count
  max/min of certain columns
  statistics
  */

  // const validUser = addSubscribersDataSchema.parse(data);

  while (true) {
    try {
      return await enhancedPrisma(userId).$transaction(
        async (tx) => {
          // Code running in a transaction...
          const subscribers = await tx.subscriber.findMany(input);
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
