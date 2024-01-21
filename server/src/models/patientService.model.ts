import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { PatientService as PatientServiceType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.PatientServiceFindManyArgs) {
  return await enhancedPrisma(userId).patientService.findMany(params)
}

async function getOne(userId: string, params: Prisma.PatientServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).patientService.findUnique(params)
}

async function createMany(userId: string, params: Prisma.PatientServiceCreateManyArgs) {
  return await enhancedPrisma(userId).patientService.createMany(params)
}

async function createOne(userId: string, params: Prisma.PatientServiceCreateArgs) {
  return await enhancedPrisma(userId).patientService.create(params)
}

async function updateMany(userId: string, params: Prisma.PatientServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).patientService.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.PatientServiceUpdateArgs) {
  return await enhancedPrisma(userId).patientService.update(params)
}

async function deleteMany(userId: string, params: Prisma.PatientServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).patientService.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.PatientServiceDeleteArgs) {
  return await enhancedPrisma(userId).patientService.delete(params)
}

export const PatientService = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
