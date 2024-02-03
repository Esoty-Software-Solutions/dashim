import { z } from "zod";
import { enhancedPrisma, unGuardedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";
import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "./_config.controller";
import { SubscriberFindManySchema ,SubscriberCreateOneSchema} from "@schemas/routers/subscriber.schema";
import ServerError from "~/utilities/error";

const StatusSetByFields = {
  //* Using Prisma operation "include" includes all fields in the return type
  select: { id: true, firstName: true, lastName: true },
};
type _ListBeneficiariesInputType = z.infer<typeof SubscriberFindManySchema>;
type _CreateBeneficiariesInputType = z.infer<typeof SubscriberCreateOneSchema>;
export async function _ListBeneficiaries(
  userId: string,
  input: _ListBeneficiariesInputType,
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

  // const validUser = addSubscribersDataSchema.parse(data);

  while (true) {
    try {
      return await enhancedPrisma(userId).$transaction(
        async (tx) => {
          // Code running in a transaction...
          const [data, filteredCount, unFilteredCount, activeCount] =
            await Promise.all([
              tx.subscriber.findMany({
                where: input?.where,
                skip: input?.skip,
                take: input?.take,
                // include: { //* This blows up the return type
                //   beneficiaries: { select: { StatusSetBy: selectStatusSetBy } },
                //   StatusSetBy: selectStatusSetBy,
                // },
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
// export async function _CreateBeneficiaries(
//   userId: string,
//   input: _CreateBeneficiariesInputType,
// ) {
//   const MAX_RETRIES = DEFAULT_MAX_RETRIES;
//   let retries = 0;
//   while (true) {
//     try {
//       return await enhancedPrisma(userId).$transaction(
//         async (tx) => {
//         console.log(input);
        
//           // Code running in a transaction...
//           const [data] =
//             await Promise.all([
//              await tx.subscriber.create({data:input.data}),
//               tx.beneficiary.createMany(input.data.beneficiaries)
//             ]);
//             console.log(data);

//           return {
//             data,
//           };
//         },
//         {
//           //   maxWait: 5000, // default: 2000
//           //   timeout: 10000, // default: 5000
//           isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
//         },
//       );
//     } catch (error) {
//       if (error instanceof Prisma.PrismaClientKnownRequestError) {
//         // The .code property can be accessed in a type-safe manner
//         if (error.code === "P2034") {
//           retries++;
//           if (retries >= MAX_RETRIES) {
//             throw error;
//           }
//           continue;
//         }
//       }
//       throw error;
//     }
//   }

// }
export async function _CreateBeneficiaries(
  userId: string,
  input: Prisma.SubscriberCreateArgs
) {
  const MAX_RETRIES = DEFAULT_MAX_RETRIES
  let retries = 0

  let selfRelationship: { id: string }
  try {
    selfRelationship = await unGuardedPrisma.relationship.findUniqueOrThrow({
      where: { name: 'self' },
      select: { id: true },
    })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      throw new ServerError({
        message: `relationship "self" might not exist: ${e}`,
        code: 'UNPROCESSABLE_CONTENT',
      })
    }
    throw e
  }

  input.data.statusSetById = userId

  if (!input.data.beneficiaries?.createMany) {
    throw new ServerError({
      message:
        'createMany object does not exist. Other methods for adding beneficiaries are not supported at the moment',
      code: 'UNPROCESSABLE_CONTENT',
    })
  }
  const beneficiariesData = input.data.beneficiaries?.createMany.data
  if (Array.isArray(beneficiariesData)) {
    const matchingElements = beneficiariesData.filter(
      (element) => element.relationshipId === selfRelationship.id
    )
    if (matchingElements.length !== 1) {
      throw new ServerError({
        message:
          'There should be only one beneficiary with "self" relationship for the same subscriber entity',
        code: 'UNPROCESSABLE_CONTENT',
      })
    }
    beneficiariesData.forEach((element) => {
      // ...
      element.statusSetById = userId
    })
  } else if (typeof beneficiariesData === 'object') {
    if (beneficiariesData.relationshipId !== selfRelationship.id) {
      throw new ServerError({
        message:
          'the beneficiary attached is not assigned the "self" relationship for the subscriber entity ',
        code: 'UNPROCESSABLE_CONTENT',
      })
    }
    beneficiariesData.statusSetById = userId
  }

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
          const [subscriberAdded] = await Promise.all([
            tx.subscriber.create({
              data: input.data,
              include: { beneficiaries: true },
            }),
          ])
          return { data: subscriberAdded }
        },
        {
          //   maxWait: 5000, // default: 2000
          //   timeout: 10000, // default: 5000
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
        }
      )
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2034') {
          retries++
          if (retries >= MAX_RETRIES) {
            throw error
          }
          continue
        }
      }
      throw error
    }
  }
}
