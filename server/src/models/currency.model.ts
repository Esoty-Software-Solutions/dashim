import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Currency as CurrencyType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.CurrencyFindManyArgs) {
  return await enhancedPrisma(userId).currency.findMany(params);
}

async function findUnique(userId: string, params: Prisma.CurrencyFindUniqueArgs) {
  return await enhancedPrisma(userId).currency.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.CurrencyFindFirstArgs) {
  return await enhancedPrisma(userId).currency.findFirst(params);
}

async function createMany(userId: string, params: Prisma.CurrencyCreateManyArgs) {
  return await enhancedPrisma(userId).currency.createMany(params);
}

async function createOne(userId: string, params: Prisma.CurrencyCreateArgs) {
  return await enhancedPrisma(userId).currency.create(params);
}

async function updateMany(userId: string, params: Prisma.CurrencyUpdateManyArgs) {
  return await enhancedPrisma(userId).currency.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.CurrencyUpdateArgs) {
  return await enhancedPrisma(userId).currency.update(params);
}

async function deleteMany(userId: string, params?: Prisma.CurrencyDeleteManyArgs) {
  return await enhancedPrisma(userId).currency.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.CurrencyDeleteArgs) {
  return await enhancedPrisma(userId).currency.delete(params);
}

async function count(userId: string, params?: Prisma.CurrencyCountArgs) {
  return await enhancedPrisma(userId).currency.count(params);
}

async function aggregate(userId: string, params: Prisma.CurrencyAggregateArgs) {
  return await enhancedPrisma(userId).currency.aggregate(params);
}

export const Currency = {
  findMany: middleware(findMany),
  findUnique: middleware(findUnique),
  findFirst: middleware(findFirst),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
  count: middleware(count),
  aggregate: middleware(aggregate),
};