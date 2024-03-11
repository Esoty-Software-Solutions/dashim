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

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.FingerTypeEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).fingerTypeEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.FingerTypeEnumFindFirstArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.FingerTypeEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).fingerTypeEnum.findFirstOrThrow(params);
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

async function upsert(userId: string, params: Prisma.FingerTypeEnumUpsertArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.upsert(params);
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

async function groupBy(userId: string, params: Prisma.FingerTypeEnumGroupByArgs) {
  return await enhancedPrisma(userId).fingerTypeEnum.groupBy(params);
}

export const FingerTypeEnum = {
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
