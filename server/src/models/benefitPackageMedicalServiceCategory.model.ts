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

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.BenefitPackageMedicalServiceCategoryFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryFindFirstArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.BenefitPackageMedicalServiceCategoryFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.findFirstOrThrow(params);
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

async function upsert(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryUpsertArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.upsert(params);
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

async function groupBy(userId: string, params: Prisma.BenefitPackageMedicalServiceCategoryGroupByArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceCategory.groupBy(params);
}

export const BenefitPackageMedicalServiceCategory = {
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
