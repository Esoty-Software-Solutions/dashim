import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { GenderEnum as GenderEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.GenderEnumFindManyArgs) {
  return await enhancedPrisma(userId).genderEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.GenderEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).genderEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.GenderEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).genderEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.GenderEnumFindFirstArgs) {
  return await enhancedPrisma(userId).genderEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.GenderEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).genderEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.GenderEnumCreateManyArgs) {
  return await enhancedPrisma(userId).genderEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.GenderEnumCreateArgs) {
  return await enhancedPrisma(userId).genderEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.GenderEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).genderEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.GenderEnumUpdateArgs) {
  return await enhancedPrisma(userId).genderEnum.update(params);
}

async function upsert(userId: string, params: Prisma.GenderEnumUpsertArgs) {
  return await enhancedPrisma(userId).genderEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.GenderEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).genderEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.GenderEnumDeleteArgs) {
  return await enhancedPrisma(userId).genderEnum.delete(params);
}

async function count(userId: string, params?: Prisma.GenderEnumCountArgs) {
  return await enhancedPrisma(userId).genderEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.GenderEnumAggregateArgs) {
  return await enhancedPrisma(userId).genderEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.GenderEnumGroupByArgs) {
  return await enhancedPrisma(userId).genderEnum.groupBy(params);
}

export const GenderEnum = {
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
