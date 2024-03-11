import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { DeviceToken as DeviceTokenType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.DeviceTokenFindManyArgs) {
  return await enhancedPrisma(userId).deviceToken.findMany(params);
}

async function findUnique(userId: string, params: Prisma.DeviceTokenFindUniqueArgs) {
  return await enhancedPrisma(userId).deviceToken.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.DeviceTokenFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).deviceToken.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.DeviceTokenFindFirstArgs) {
  return await enhancedPrisma(userId).deviceToken.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.DeviceTokenFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).deviceToken.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.DeviceTokenCreateManyArgs) {
  return await enhancedPrisma(userId).deviceToken.createMany(params);
}

async function createOne(userId: string, params: Prisma.DeviceTokenCreateArgs) {
  return await enhancedPrisma(userId).deviceToken.create(params);
}

async function updateMany(userId: string, params: Prisma.DeviceTokenUpdateManyArgs) {
  return await enhancedPrisma(userId).deviceToken.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.DeviceTokenUpdateArgs) {
  return await enhancedPrisma(userId).deviceToken.update(params);
}

async function upsert(userId: string, params: Prisma.DeviceTokenUpsertArgs) {
  return await enhancedPrisma(userId).deviceToken.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.DeviceTokenDeleteManyArgs) {
  return await enhancedPrisma(userId).deviceToken.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.DeviceTokenDeleteArgs) {
  return await enhancedPrisma(userId).deviceToken.delete(params);
}

async function count(userId: string, params?: Prisma.DeviceTokenCountArgs) {
  return await enhancedPrisma(userId).deviceToken.count(params);
}

async function aggregate(userId: string, params: Prisma.DeviceTokenAggregateArgs) {
  return await enhancedPrisma(userId).deviceToken.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.DeviceTokenGroupByArgs) {
  return await enhancedPrisma(userId).deviceToken.groupBy(params);
}

export const DeviceToken = {
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
