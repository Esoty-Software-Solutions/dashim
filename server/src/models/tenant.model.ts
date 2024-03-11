import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Tenant as TenantType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.TenantFindManyArgs) {
  return await enhancedPrisma(userId).tenant.findMany(params);
}

async function findUnique(userId: string, params: Prisma.TenantFindUniqueArgs) {
  return await enhancedPrisma(userId).tenant.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.TenantFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).tenant.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.TenantFindFirstArgs) {
  return await enhancedPrisma(userId).tenant.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.TenantFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).tenant.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.TenantCreateManyArgs) {
  return await enhancedPrisma(userId).tenant.createMany(params);
}

async function createOne(userId: string, params: Prisma.TenantCreateArgs) {
  return await enhancedPrisma(userId).tenant.create(params);
}

async function updateMany(userId: string, params: Prisma.TenantUpdateManyArgs) {
  return await enhancedPrisma(userId).tenant.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.TenantUpdateArgs) {
  return await enhancedPrisma(userId).tenant.update(params);
}

async function upsert(userId: string, params: Prisma.TenantUpsertArgs) {
  return await enhancedPrisma(userId).tenant.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.TenantDeleteManyArgs) {
  return await enhancedPrisma(userId).tenant.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.TenantDeleteArgs) {
  return await enhancedPrisma(userId).tenant.delete(params);
}

async function count(userId: string, params?: Prisma.TenantCountArgs) {
  return await enhancedPrisma(userId).tenant.count(params);
}

async function aggregate(userId: string, params: Prisma.TenantAggregateArgs) {
  return await enhancedPrisma(userId).tenant.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.TenantGroupByArgs) {
  return await enhancedPrisma(userId).tenant.groupBy(params);
}

export const Tenant = {
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
