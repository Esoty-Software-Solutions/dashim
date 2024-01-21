import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { InsurancePolicyMedicalCenter as InsurancePolicyMedicalCenterType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.InsurancePolicyMedicalCenterFindManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findMany(params)
}

async function getOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterFindUniqueArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findUnique(params)
}

async function createMany(userId: string, params: Prisma.InsurancePolicyMedicalCenterCreateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.createMany(params)
}

async function createOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterCreateArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.create(params)
}

async function updateMany(userId: string, params: Prisma.InsurancePolicyMedicalCenterUpdateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterUpdateArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.update(params)
}

async function deleteMany(userId: string, params: Prisma.InsurancePolicyMedicalCenterDeleteManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterDeleteArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.delete(params)
}

export const InsurancePolicyMedicalCenter = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
