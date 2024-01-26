import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { MedicalServiceTemplate as MedicalServiceTemplateType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.MedicalServiceTemplateFindManyArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.findMany(params);
}

async function findUnique(userId: string, params: Prisma.MedicalServiceTemplateFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.MedicalServiceTemplateFindFirstArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.findFirst(params);
}

async function createMany(userId: string, params: Prisma.MedicalServiceTemplateCreateManyArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.createMany(params);
}

async function createOne(userId: string, params: Prisma.MedicalServiceTemplateCreateArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.create(params);
}

async function updateMany(userId: string, params: Prisma.MedicalServiceTemplateUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.MedicalServiceTemplateUpdateArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.update(params);
}

async function deleteMany(userId: string, params?: Prisma.MedicalServiceTemplateDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.MedicalServiceTemplateDeleteArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.delete(params);
}

async function count(userId: string, params?: Prisma.MedicalServiceTemplateCountArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.count(params);
}

async function aggregate(userId: string, params: Prisma.MedicalServiceTemplateAggregateArgs) {
  return await enhancedPrisma(userId).medicalServiceTemplate.aggregate(params);
}

export const MedicalServiceTemplate = {
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
