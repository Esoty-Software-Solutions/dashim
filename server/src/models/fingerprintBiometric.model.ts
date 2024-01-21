import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { FingerprintBiometric as FingerprintBiometricType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.FingerprintBiometricFindManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.findMany(params)
}

async function getOne(userId: string, params: Prisma.FingerprintBiometricFindUniqueArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.findUnique(params)
}

async function createMany(userId: string, params: Prisma.FingerprintBiometricCreateManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.createMany(params)
}

async function createOne(userId: string, params: Prisma.FingerprintBiometricCreateArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.create(params)
}

async function updateMany(userId: string, params: Prisma.FingerprintBiometricUpdateManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.FingerprintBiometricUpdateArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.update(params)
}

async function deleteMany(userId: string, params: Prisma.FingerprintBiometricDeleteManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.FingerprintBiometricDeleteArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.delete(params)
}

export const FingerprintBiometric = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
