import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { RoleEnum as RoleEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.RoleEnumFindManyArgs) {
  return await enhancedPrisma(userId).roleEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.RoleEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).roleEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.RoleEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).roleEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.RoleEnumFindFirstArgs) {
  return await enhancedPrisma(userId).roleEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.RoleEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).roleEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.RoleEnumCreateManyArgs) {
  return await enhancedPrisma(userId).roleEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.RoleEnumCreateArgs) {
  return await enhancedPrisma(userId).roleEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.RoleEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).roleEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.RoleEnumUpdateArgs) {
  return await enhancedPrisma(userId).roleEnum.update(params);
}

async function upsert(userId: string, params: Prisma.RoleEnumUpsertArgs) {
  return await enhancedPrisma(userId).roleEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.RoleEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).roleEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.RoleEnumDeleteArgs) {
  return await enhancedPrisma(userId).roleEnum.delete(params);
}

async function count(userId: string, params?: Prisma.RoleEnumCountArgs) {
  return await enhancedPrisma(userId).roleEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.RoleEnumAggregateArgs) {
  return await enhancedPrisma(userId).roleEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.RoleEnumGroupByArgs) {
  return await enhancedPrisma(userId).roleEnum.groupBy(params);
}

export const RoleEnum = {
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
