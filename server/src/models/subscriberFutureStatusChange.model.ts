import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { SubscriberFutureStatusChange as SubscriberFutureStatusChangeType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.SubscriberFutureStatusChangeFindManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.findMany(params);
}

async function findUnique(userId: string, params: Prisma.SubscriberFutureStatusChangeFindUniqueArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.SubscriberFutureStatusChangeFindFirstArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.findFirst(params);
}

async function createMany(userId: string, params: Prisma.SubscriberFutureStatusChangeCreateManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.createMany(params);
}

async function createOne(userId: string, params: Prisma.SubscriberFutureStatusChangeCreateArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.create(params);
}

async function updateMany(userId: string, params: Prisma.SubscriberFutureStatusChangeUpdateManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.SubscriberFutureStatusChangeUpdateArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.update(params);
}

async function deleteMany(userId: string, params?: Prisma.SubscriberFutureStatusChangeDeleteManyArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.SubscriberFutureStatusChangeDeleteArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.delete(params);
}

async function count(userId: string, params?: Prisma.SubscriberFutureStatusChangeCountArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.count(params);
}

async function aggregate(userId: string, params: Prisma.SubscriberFutureStatusChangeAggregateArgs) {
  return await enhancedPrisma(userId).subscriberFutureStatusChange.aggregate(params);
}

export const SubscriberFutureStatusChange = {
  findMany: middleware(findMany),
  findUnique: middleware(findUnique),
  findFirst: middleware(findFirst),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
  count: middleware(count),
  aggregate: middleware(aggregate),
};
