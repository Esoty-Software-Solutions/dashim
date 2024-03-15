import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { ReviewStatusEnum as ReviewStatusEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.ReviewStatusEnumFindManyArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.ReviewStatusEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.ReviewStatusEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).reviewStatusEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.ReviewStatusEnumFindFirstArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.ReviewStatusEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).reviewStatusEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.ReviewStatusEnumCreateManyArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.ReviewStatusEnumCreateArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.ReviewStatusEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.ReviewStatusEnumUpdateArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.update(params);
}

async function upsert(userId: string, params: Prisma.ReviewStatusEnumUpsertArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.ReviewStatusEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.ReviewStatusEnumDeleteArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.delete(params);
}

async function count(userId: string, params?: Prisma.ReviewStatusEnumCountArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.ReviewStatusEnumAggregateArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.ReviewStatusEnumGroupByArgs) {
  return await enhancedPrisma(userId).reviewStatusEnum.groupBy(params);
}

export const ReviewStatusEnum = {
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
