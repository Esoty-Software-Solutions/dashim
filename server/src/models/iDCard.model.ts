import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { IDCard as IDCardType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.IDCardFindManyArgs) {
  return await enhancedPrisma(userId).iDCard.findMany(params);
}

async function findUnique(userId: string, params: Prisma.IDCardFindUniqueArgs) {
  return await enhancedPrisma(userId).iDCard.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.IDCardFindFirstArgs) {
  return await enhancedPrisma(userId).iDCard.findFirst(params);
}

async function createMany(userId: string, params: Prisma.IDCardCreateManyArgs) {
  return await enhancedPrisma(userId).iDCard.createMany(params);
}

async function createOne(userId: string, params: Prisma.IDCardCreateArgs) {
  return await enhancedPrisma(userId).iDCard.create(params);
}

async function updateMany(userId: string, params: Prisma.IDCardUpdateManyArgs) {
  return await enhancedPrisma(userId).iDCard.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.IDCardUpdateArgs) {
  return await enhancedPrisma(userId).iDCard.update(params);
}

async function deleteMany(userId: string, params?: Prisma.IDCardDeleteManyArgs) {
  return await enhancedPrisma(userId).iDCard.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.IDCardDeleteArgs) {
  return await enhancedPrisma(userId).iDCard.delete(params);
}

async function count(userId: string, params?: Prisma.IDCardCountArgs) {
  return await enhancedPrisma(userId).iDCard.count(params);
}

async function aggregate(userId: string, params: Prisma.IDCardAggregateArgs) {
  return await enhancedPrisma(userId).iDCard.aggregate(params);
}

export const IDCard = {
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
