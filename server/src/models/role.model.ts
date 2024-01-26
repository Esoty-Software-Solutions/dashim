import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Role as RoleType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.RoleFindManyArgs) {
  return await enhancedPrisma(userId).role.findMany(params);
}

async function findUnique(userId: string, params: Prisma.RoleFindUniqueArgs) {
  return await enhancedPrisma(userId).role.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.RoleFindFirstArgs) {
  return await enhancedPrisma(userId).role.findFirst(params);
}

async function createMany(userId: string, params: Prisma.RoleCreateManyArgs) {
  return await enhancedPrisma(userId).role.createMany(params);
}

async function createOne(userId: string, params: Prisma.RoleCreateArgs) {
  return await enhancedPrisma(userId).role.create(params);
}

async function updateMany(userId: string, params: Prisma.RoleUpdateManyArgs) {
  return await enhancedPrisma(userId).role.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.RoleUpdateArgs) {
  return await enhancedPrisma(userId).role.update(params);
}

async function deleteMany(userId: string, params?: Prisma.RoleDeleteManyArgs) {
  return await enhancedPrisma(userId).role.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.RoleDeleteArgs) {
  return await enhancedPrisma(userId).role.delete(params);
}

async function count(userId: string, params?: Prisma.RoleCountArgs) {
  return await enhancedPrisma(userId).role.count(params);
}

async function aggregate(userId: string, params: Prisma.RoleAggregateArgs) {
  return await enhancedPrisma(userId).role.aggregate(params);
}

export const Role = {
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
