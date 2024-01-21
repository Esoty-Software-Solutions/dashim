import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { BeneficiaryFutureStatusChange as BeneficiaryFutureStatusChangeType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.BeneficiaryFutureStatusChangeFindManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.findMany(params)
}

async function getOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.findUnique(params)
}

async function createMany(userId: string, params: Prisma.BeneficiaryFutureStatusChangeCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.createMany(params)
}

async function createOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeCreateArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.create(params)
}

async function updateMany(userId: string, params: Prisma.BeneficiaryFutureStatusChangeUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeUpdateArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.update(params)
}

async function deleteMany(userId: string, params: Prisma.BeneficiaryFutureStatusChangeDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeDeleteArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.delete(params)
}

export const BeneficiaryFutureStatusChange = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
