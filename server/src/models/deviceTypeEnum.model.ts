import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { DeviceTypeEnum as DeviceTypeEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.DeviceTypeEnumFindManyArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.DeviceTypeEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.DeviceTypeEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).deviceTypeEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.DeviceTypeEnumFindFirstArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.DeviceTypeEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).deviceTypeEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.DeviceTypeEnumCreateManyArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.DeviceTypeEnumCreateArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.DeviceTypeEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.DeviceTypeEnumUpdateArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.update(params);
}

async function upsert(userId: string, params: Prisma.DeviceTypeEnumUpsertArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.DeviceTypeEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.DeviceTypeEnumDeleteArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.delete(params);
}

async function count(userId: string, params?: Prisma.DeviceTypeEnumCountArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.DeviceTypeEnumAggregateArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.DeviceTypeEnumGroupByArgs) {
  return await enhancedPrisma(userId).deviceTypeEnum.groupBy(params);
}

export const DeviceTypeEnum = {
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
