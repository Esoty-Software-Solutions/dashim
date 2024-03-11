import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { TenantTypeEnum as TenantTypeEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.TenantTypeEnumFindManyArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.TenantTypeEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.TenantTypeEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).tenantTypeEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.TenantTypeEnumFindFirstArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.TenantTypeEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).tenantTypeEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.TenantTypeEnumCreateManyArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.TenantTypeEnumCreateArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.TenantTypeEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.TenantTypeEnumUpdateArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.update(params);
}

async function upsert(userId: string, params: Prisma.TenantTypeEnumUpsertArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.TenantTypeEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.TenantTypeEnumDeleteArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.delete(params);
}

async function count(userId: string, params?: Prisma.TenantTypeEnumCountArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.TenantTypeEnumAggregateArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.TenantTypeEnumGroupByArgs) {
  return await enhancedPrisma(userId).tenantTypeEnum.groupBy(params);
}

export const TenantTypeEnum = {
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
