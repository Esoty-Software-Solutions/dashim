import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { MedicalServiceCategory as MedicalServiceCategoryType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.MedicalServiceCategoryFindManyArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.findMany(params);
}

async function findUnique(userId: string, params: Prisma.MedicalServiceCategoryFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.MedicalServiceCategoryFindFirstArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.findFirst(params);
}

async function createMany(userId: string, params: Prisma.MedicalServiceCategoryCreateManyArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.createMany(params);
}

async function createOne(userId: string, params: Prisma.MedicalServiceCategoryCreateArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.create(params);
}

async function updateMany(userId: string, params: Prisma.MedicalServiceCategoryUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.MedicalServiceCategoryUpdateArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.update(params);
}

async function deleteMany(userId: string, params?: Prisma.MedicalServiceCategoryDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.MedicalServiceCategoryDeleteArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.delete(params);
}

async function count(userId: string, params?: Prisma.MedicalServiceCategoryCountArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.count(params);
}

async function aggregate(userId: string, params: Prisma.MedicalServiceCategoryAggregateArgs) {
  return await enhancedPrisma(userId).medicalServiceCategory.aggregate(params);
}

export const MedicalServiceCategory = {
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
