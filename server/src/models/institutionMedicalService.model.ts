import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { InstitutionMedicalService as InstitutionMedicalServiceType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.InstitutionMedicalServiceFindManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.findMany(params)
}

async function getOne(userId: string, params: Prisma.InstitutionMedicalServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.findUnique(params)
}

async function createMany(userId: string, params: Prisma.InstitutionMedicalServiceCreateManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.createMany(params)
}

async function createOne(userId: string, params: Prisma.InstitutionMedicalServiceCreateArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.create(params)
}

async function updateMany(userId: string, params: Prisma.InstitutionMedicalServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.InstitutionMedicalServiceUpdateArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.update(params)
}

async function deleteMany(userId: string, params: Prisma.InstitutionMedicalServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.InstitutionMedicalServiceDeleteArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.delete(params)
}

export const InstitutionMedicalService = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
