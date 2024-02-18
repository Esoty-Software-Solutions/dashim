import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { FingerTypeEnum as FingerTypeEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.FingerTypeEnumFindManyArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.FingerTypeEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.FingerTypeEnumFindFirstArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.findFirst(params);
}

async function createMany(userId: string, params: Prisma.FingerTypeEnumCreateManyArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.FingerTypeEnumCreateArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.FingerTypeEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.FingerTypeEnumUpdateArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.update(params);
}

async function deleteMany(userId: string, params?: Prisma.FingerTypeEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.FingerTypeEnumDeleteArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.delete(params);
}

async function count(userId: string, params?: Prisma.FingerTypeEnumCountArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.FingerTypeEnumAggregateArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.aggregate(params);
}

export const FingerTypeEnum = {
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
