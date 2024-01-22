import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { ReviewStatus as ReviewStatusType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.ReviewStatusFindManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.findMany(params)
}

async function getOne(userId: string, params: Prisma.ReviewStatusFindUniqueArgs) {
  return await enhancedPrisma(userId).reviewStatus.findUnique(params)
}

async function createMany(userId: string, params: Prisma.ReviewStatusCreateManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.createMany(params)
}

async function createOne(userId: string, params: Prisma.ReviewStatusCreateArgs) {
  return await enhancedPrisma(userId).reviewStatus.create(params)
}

async function updateMany(userId: string, params: Prisma.ReviewStatusUpdateManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.ReviewStatusUpdateArgs) {
  return await enhancedPrisma(userId).reviewStatus.update(params)
}

async function deleteMany(userId: string, params: Prisma.ReviewStatusDeleteManyArgs) {
  return await enhancedPrisma(userId).reviewStatus.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.ReviewStatusDeleteArgs) {
  return await enhancedPrisma(userId).reviewStatus.delete(params)
}

export const ReviewStatus = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
