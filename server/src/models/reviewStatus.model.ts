import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { ReviewStatus as ReviewStatusType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.ReviewStatusFindManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.findMany(params);
}

async function findUnique(userId: string, params: Prisma.ReviewStatusFindUniqueArgs) {
  return await enhancedPrisma(userId).reviewStatus.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.ReviewStatusFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).reviewStatus.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.ReviewStatusFindFirstArgs) {
  return await enhancedPrisma(userId).reviewStatus.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.ReviewStatusFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).reviewStatus.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.ReviewStatusCreateManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.createMany(params);
}

async function createOne(userId: string, params: Prisma.ReviewStatusCreateArgs) {
  return await enhancedPrisma(userId).reviewStatus.create(params);
}

async function updateMany(userId: string, params: Prisma.ReviewStatusUpdateManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.ReviewStatusUpdateArgs) {
  return await enhancedPrisma(userId).reviewStatus.update(params);
}

async function upsert(userId: string, params: Prisma.ReviewStatusUpsertArgs) {
  return await enhancedPrisma(userId).reviewStatus.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.ReviewStatusDeleteManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.ReviewStatusDeleteArgs) {
  return await enhancedPrisma(userId).reviewStatus.delete(params);
}

async function count(userId: string, params?: Prisma.ReviewStatusCountArgs) {
  return await enhancedPrisma(userId).reviewStatus.count(params);
}

async function aggregate(userId: string, params: Prisma.ReviewStatusAggregateArgs) {
  return await enhancedPrisma(userId).reviewStatus.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.ReviewStatusGroupByArgs) {
  return await enhancedPrisma(userId).reviewStatus.groupBy(params);
}

export const ReviewStatus = {
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
