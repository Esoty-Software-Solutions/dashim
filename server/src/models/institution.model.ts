import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Institution as InstitutionType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.InstitutionFindManyArgs) {
  return await enhancedPrisma(userId).institution.findMany(params);
}

async function findUnique(userId: string, params: Prisma.InstitutionFindUniqueArgs) {
  return await enhancedPrisma(userId).institution.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.InstitutionFindFirstArgs) {
  return await enhancedPrisma(userId).institution.findFirst(params);
}

async function createMany(userId: string, params: Prisma.InstitutionCreateManyArgs) {
  return await enhancedPrisma(userId).institution.createMany(params);
}

async function createOne(userId: string, params: Prisma.InstitutionCreateArgs) {
  return await enhancedPrisma(userId).institution.create(params);
}

async function updateMany(userId: string, params: Prisma.InstitutionUpdateManyArgs) {
  return await enhancedPrisma(userId).institution.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.InstitutionUpdateArgs) {
  return await enhancedPrisma(userId).institution.update(params);
}

async function deleteMany(userId: string, params?: Prisma.InstitutionDeleteManyArgs) {
  return await enhancedPrisma(userId).institution.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.InstitutionDeleteArgs) {
  return await enhancedPrisma(userId).institution.delete(params);
}

async function count(userId: string, params?: Prisma.InstitutionCountArgs) {
  return await enhancedPrisma(userId).institution.count(params);
}

async function aggregate(userId: string, params: Prisma.InstitutionAggregateArgs) {
  return await enhancedPrisma(userId).institution.aggregate(params);
}

export const Institution = {
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
