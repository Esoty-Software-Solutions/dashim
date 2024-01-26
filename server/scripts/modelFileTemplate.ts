import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { User as UserType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.UserFindManyArgs) {
  return await enhancedPrisma(userId).user.findMany(params);
}

async function findUnique(userId: string, params: Prisma.UserFindUniqueArgs) {
  return await enhancedPrisma(userId).user.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.UserFindFirstArgs) {
  return await enhancedPrisma(userId).user.findFirst(params);
}

async function createMany(userId: string, params: Prisma.UserCreateManyArgs) {
  return await enhancedPrisma(userId).user.createMany(params);
}

async function createOne(userId: string, params: Prisma.UserCreateArgs) {
  return await enhancedPrisma(userId).user.create(params);
}

async function updateMany(userId: string, params: Prisma.UserUpdateManyArgs) {
  return await enhancedPrisma(userId).user.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.UserUpdateArgs) {
  return await enhancedPrisma(userId).user.update(params);
}

async function deleteMany(userId: string, params?: Prisma.UserDeleteManyArgs) {
  return await enhancedPrisma(userId).user.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.UserDeleteArgs) {
  return await enhancedPrisma(userId).user.delete(params);
}

async function count(userId: string, params?: Prisma.UserCountArgs) {
  return await enhancedPrisma(userId).user.count(params);
}

async function aggregate(userId: string, params: Prisma.UserAggregateArgs) {
  return await enhancedPrisma(userId).user.aggregate(params);
}

export const User = {
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
