import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { TenantMember as TenantMemberType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.TenantMemberFindManyArgs) {
  return await enhancedPrisma(userId).tenantMember.findMany(params);
}

async function findUnique(userId: string, params: Prisma.TenantMemberFindUniqueArgs) {
  return await enhancedPrisma(userId).tenantMember.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.TenantMemberFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).tenantMember.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.TenantMemberFindFirstArgs) {
  return await enhancedPrisma(userId).tenantMember.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.TenantMemberFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).tenantMember.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.TenantMemberCreateManyArgs) {
  return await enhancedPrisma(userId).tenantMember.createMany(params);
}

async function createOne(userId: string, params: Prisma.TenantMemberCreateArgs) {
  return await enhancedPrisma(userId).tenantMember.create(params);
}

async function updateMany(userId: string, params: Prisma.TenantMemberUpdateManyArgs) {
  return await enhancedPrisma(userId).tenantMember.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.TenantMemberUpdateArgs) {
  return await enhancedPrisma(userId).tenantMember.update(params);
}

async function upsert(userId: string, params: Prisma.TenantMemberUpsertArgs) {
  return await enhancedPrisma(userId).tenantMember.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.TenantMemberDeleteManyArgs) {
  return await enhancedPrisma(userId).tenantMember.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.TenantMemberDeleteArgs) {
  return await enhancedPrisma(userId).tenantMember.delete(params);
}

async function count(userId: string, params?: Prisma.TenantMemberCountArgs) {
  return await enhancedPrisma(userId).tenantMember.count(params);
}

async function aggregate(userId: string, params: Prisma.TenantMemberAggregateArgs) {
  return await enhancedPrisma(userId).tenantMember.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.TenantMemberGroupByArgs) {
  return await enhancedPrisma(userId).tenantMember.groupBy(params);
}

export const TenantMember = {
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
