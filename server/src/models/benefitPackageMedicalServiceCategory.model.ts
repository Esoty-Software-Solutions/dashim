import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BenefitPackageMedicalServiceCategory as BenefitPackageMedicalServiceCategoryType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BenefitPackageMedicalServiceCategoryFindManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryFindUniqueArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryFindFirstArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.findFirst(params);
}

async function createMany(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryCreateManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.createMany(params);
}

async function createOne(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryCreateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.create(params);
}

async function updateMany(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryUpdateManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryUpdateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.update(params);
}

async function deleteMany(userId: string, params?: Prisma.BenefitPackageMedicalServiceCategoryDeleteManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryDeleteArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.delete(params);
}

async function count(userId: string, params?: Prisma.BenefitPackageMedicalServiceCategoryCountArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.count(params);
}

async function aggregate(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryAggregateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.aggregate(params);
}

export const BenefitPackageMedicalServiceCategory = {
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
