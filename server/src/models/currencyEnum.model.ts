import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { CurrencyEnum as CurrencyEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.CurrencyEnumFindManyArgs) {
  return await enhancedPrisma(userId).currencyEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.CurrencyEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).currencyEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.CurrencyEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).currencyEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.CurrencyEnumFindFirstArgs) {
  return await enhancedPrisma(userId).currencyEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.CurrencyEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).currencyEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.CurrencyEnumCreateManyArgs) {
  return await enhancedPrisma(userId).currencyEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.CurrencyEnumCreateArgs) {
  return await enhancedPrisma(userId).currencyEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.CurrencyEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).currencyEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.CurrencyEnumUpdateArgs) {
  return await enhancedPrisma(userId).currencyEnum.update(params);
}

async function upsert(userId: string, params: Prisma.CurrencyEnumUpsertArgs) {
  return await enhancedPrisma(userId).currencyEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.CurrencyEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).currencyEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.CurrencyEnumDeleteArgs) {
  return await enhancedPrisma(userId).currencyEnum.delete(params);
}

async function count(userId: string, params?: Prisma.CurrencyEnumCountArgs) {
  return await enhancedPrisma(userId).currencyEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.CurrencyEnumAggregateArgs) {
  return await enhancedPrisma(userId).currencyEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.CurrencyEnumGroupByArgs) {
  return await enhancedPrisma(userId).currencyEnum.groupBy(params);
}

export const CurrencyEnum = {
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
