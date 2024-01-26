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

async function findFirst(userId: string, params: Prisma.TenantFindFirstArgs) {
  return await enhancedPrisma(userId).tenant.findFirst(params);
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

export const Tenant = {
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
