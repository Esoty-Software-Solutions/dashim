import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { SubscriberFutureStatusChange as SubscriberFutureStatusChangeType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.SubscriberFutureStatusChangeFindManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.findMany(params)
}

async function getOne(userId: string, params: Prisma.SubscriberFutureStatusChangeFindUniqueArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.findUnique(params)
}

async function createMany(userId: string, params: Prisma.SubscriberFutureStatusChangeCreateManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.createMany(params)
}

async function createOne(userId: string, params: Prisma.SubscriberFutureStatusChangeCreateArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.create(params)
}

async function updateMany(userId: string, params: Prisma.SubscriberFutureStatusChangeUpdateManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.SubscriberFutureStatusChangeUpdateArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.update(params)
}

async function deleteMany(userId: string, params: Prisma.SubscriberFutureStatusChangeDeleteManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.SubscriberFutureStatusChangeDeleteArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.delete(params)
}

export const SubscriberFutureStatusChange = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
