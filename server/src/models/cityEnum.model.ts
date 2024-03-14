import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { CityEnum as CityEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.CityEnumFindManyArgs) {
  return await enhancedPrisma(userId).cityEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.CityEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).cityEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.CityEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).cityEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.CityEnumFindFirstArgs) {
  return await enhancedPrisma(userId).cityEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.CityEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).cityEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.CityEnumCreateManyArgs) {
  return await enhancedPrisma(userId).cityEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.CityEnumCreateArgs) {
  return await enhancedPrisma(userId).cityEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.CityEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).cityEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.CityEnumUpdateArgs) {
  return await enhancedPrisma(userId).cityEnum.update(params);
}

async function upsert(userId: string, params: Prisma.CityEnumUpsertArgs) {
  return await enhancedPrisma(userId).cityEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.CityEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).cityEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.CityEnumDeleteArgs) {
  return await enhancedPrisma(userId).cityEnum.delete(params);
}

async function count(userId: string, params?: Prisma.CityEnumCountArgs) {
  return await enhancedPrisma(userId).cityEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.CityEnumAggregateArgs) {
  return await enhancedPrisma(userId).cityEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.CityEnumGroupByArgs) {
  return await enhancedPrisma(userId).cityEnum.groupBy(params);
}

export const CityEnum = {
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
