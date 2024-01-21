import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { BenefitPackageMedicalServiceTemplate as BenefitPackageMedicalServiceTemplateType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.BenefitPackageMedicalServiceTemplateFindManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.findMany(params)
}

async function getOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateFindUniqueArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.findUnique(params)
}

async function createMany(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateCreateManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.createMany(params)
}

async function createOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateCreateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.create(params)
}

async function updateMany(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateUpdateManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateUpdateArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.update(params)
}

async function deleteMany(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateDeleteManyArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.BenefitPackageMedicalServiceTemplateDeleteArgs) {
  return await enhancedPrisma(userId).benefitPackageMedicalServiceTemplate.delete(params)
}

export const BenefitPackageMedicalServiceTemplate = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
