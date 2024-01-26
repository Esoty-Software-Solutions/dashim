import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { DeviceType as DeviceTypeType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.DeviceTypeFindManyArgs) {
  return await enhancedPrisma(userId).deviceType.findMany(params);
}

async function findUnique(userId: string, params: Prisma.DeviceTypeFindUniqueArgs) {
  return await enhancedPrisma(userId).deviceType.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.DeviceTypeFindFirstArgs) {
  return await enhancedPrisma(userId).deviceType.findFirst(params);
}

async function createMany(userId: string, params: Prisma.DeviceTypeCreateManyArgs) {
  return await enhancedPrisma(userId).deviceType.createMany(params);
}

async function createOne(userId: string, params: Prisma.DeviceTypeCreateArgs) {
  return await enhancedPrisma(userId).deviceType.create(params);
}

async function updateMany(userId: string, params: Prisma.DeviceTypeUpdateManyArgs) {
  return await enhancedPrisma(userId).deviceType.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.DeviceTypeUpdateArgs) {
  return await enhancedPrisma(userId).deviceType.update(params);
}

async function deleteMany(userId: string, params?: Prisma.DeviceTypeDeleteManyArgs) {
  return await enhancedPrisma(userId).deviceType.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.DeviceTypeDeleteArgs) {
  return await enhancedPrisma(userId).deviceType.delete(params);
}

async function count(userId: string, params?: Prisma.DeviceTypeCountArgs) {
  return await enhancedPrisma(userId).deviceType.count(params);
}

async function aggregate(userId: string, params: Prisma.DeviceTypeAggregateArgs) {
  return await enhancedPrisma(userId).deviceType.aggregate(params);
}

export const DeviceType = {
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
