import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Gender as GenderType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.GenderFindManyArgs) {
  return await enhancedPrisma(userId).gender.findMany(params);
}

async function findUnique(userId: string, params: Prisma.GenderFindUniqueArgs) {
  return await enhancedPrisma(userId).gender.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.GenderFindFirstArgs) {
  return await enhancedPrisma(userId).gender.findFirst(params);
}

async function createMany(userId: string, params: Prisma.GenderCreateManyArgs) {
  return await enhancedPrisma(userId).gender.createMany(params);
}

async function createOne(userId: string, params: Prisma.GenderCreateArgs) {
  return await enhancedPrisma(userId).gender.create(params);
}

async function updateMany(userId: string, params: Prisma.GenderUpdateManyArgs) {
  return await enhancedPrisma(userId).gender.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.GenderUpdateArgs) {
  return await enhancedPrisma(userId).gender.update(params);
}

async function deleteMany(userId: string, params?: Prisma.GenderDeleteManyArgs) {
  return await enhancedPrisma(userId).gender.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.GenderDeleteArgs) {
  return await enhancedPrisma(userId).gender.delete(params);
}

async function count(userId: string, params?: Prisma.GenderCountArgs) {
  return await enhancedPrisma(userId).gender.count(params);
}

async function aggregate(userId: string, params: Prisma.GenderAggregateArgs) {
  return await enhancedPrisma(userId).gender.aggregate(params);
}

export const Gender = {
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
