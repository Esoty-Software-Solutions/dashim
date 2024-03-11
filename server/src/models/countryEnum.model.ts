import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { CountryEnum as CountryEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.CountryEnumFindManyArgs) {
  return await enhancedPrisma(userId).countryEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.CountryEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).countryEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.CountryEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).countryEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.CountryEnumFindFirstArgs) {
  return await enhancedPrisma(userId).countryEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.CountryEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).countryEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.CountryEnumCreateManyArgs) {
  return await enhancedPrisma(userId).countryEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.CountryEnumCreateArgs) {
  return await enhancedPrisma(userId).countryEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.CountryEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).countryEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.CountryEnumUpdateArgs) {
  return await enhancedPrisma(userId).countryEnum.update(params);
}

async function upsert(userId: string, params: Prisma.CountryEnumUpsertArgs) {
  return await enhancedPrisma(userId).countryEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.CountryEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).countryEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.CountryEnumDeleteArgs) {
  return await enhancedPrisma(userId).countryEnum.delete(params);
}

async function count(userId: string, params?: Prisma.CountryEnumCountArgs) {
  return await enhancedPrisma(userId).countryEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.CountryEnumAggregateArgs) {
  return await enhancedPrisma(userId).countryEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.CountryEnumGroupByArgs) {
  return await enhancedPrisma(userId).countryEnum.groupBy(params);
}

export const CountryEnum = {
  findMany: middleware(findMany),
  findUnique: middleware(findUnique),
  findUniqueOrThrow: middleware(findUniqueOrThrow),
  findFirst: middleware(findFirst),
  findFirstOrThrow: middleware(findFirstOrThrow),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  upsert: middleware(upsert),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
  count: middleware(count),
  aggregate: middleware(aggregate),
  groupBy: middleware(groupBy),
};
