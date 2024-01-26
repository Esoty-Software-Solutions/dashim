import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BenefitPackageMedicalServiceTemplate as BenefitPackageMedicalServiceTemplateType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BenefitPackageMedicalServiceTemplateFindManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateFindUniqueArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateFindFirstArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.findFirst(params);
}

async function createMany(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateCreateManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.createMany(params);
}

async function createOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateCreateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.create(params);
}

async function updateMany(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateUpdateManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateUpdateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.update(params);
}

async function deleteMany(userId: string, params?: Prisma.BenefitPackageMedicalServiceTemplateDeleteManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateDeleteArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.delete(params);
}

async function count(userId: string, params?: Prisma.BenefitPackageMedicalServiceTemplateCountArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.count(params);
}

async function aggregate(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateAggregateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.aggregate(params);
}

export const BenefitPackageMedicalServiceTemplate = {
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
