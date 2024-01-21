import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { FaceBiometric as FaceBiometricType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.FaceBiometricFindManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.findMany(params)
}

async function getOne(userId: string, params: Prisma.FaceBiometricFindUniqueArgs) {
  return await enhancedPrisma(userId).faceBiometric.findUnique(params)
}

async function createMany(userId: string, params: Prisma.FaceBiometricCreateManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.createMany(params)
}

async function createOne(userId: string, params: Prisma.FaceBiometricCreateArgs) {
  return await enhancedPrisma(userId).faceBiometric.create(params)
}

async function updateMany(userId: string, params: Prisma.FaceBiometricUpdateManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.FaceBiometricUpdateArgs) {
  return await enhancedPrisma(userId).faceBiometric.update(params)
}

async function deleteMany(userId: string, params: Prisma.FaceBiometricDeleteManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.FaceBiometricDeleteArgs) {
  return await enhancedPrisma(userId).faceBiometric.delete(params)
}

export const FaceBiometric = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
