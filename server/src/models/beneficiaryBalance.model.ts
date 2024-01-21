import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { BeneficiaryBalance as BeneficiaryBalanceType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.BeneficiaryBalanceFindManyArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.findMany(params)
}

async function getOne(userId: string, params: Prisma.BeneficiaryBalanceFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.findUnique(params)
}

async function createMany(userId: string, params: Prisma.BeneficiaryBalanceCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.createMany(params)
}

async function createOne(userId: string, params: Prisma.BeneficiaryBalanceCreateArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.create(params)
}

async function updateMany(userId: string, params: Prisma.BeneficiaryBalanceUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.BeneficiaryBalanceUpdateArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.update(params)
}

async function deleteMany(userId: string, params: Prisma.BeneficiaryBalanceDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryBalanceDeleteArgs) {
  return await enhancedPrisma(userId).beneficiaryBalance.delete(params)
}

export const BeneficiaryBalance = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
