import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Subscriber as SubscriberType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.SubscriberFindManyArgs) {
  return await enhancedPrisma(userId).subscriber.findMany(params);
}

async function findUnique(userId: string, params: Prisma.SubscriberFindUniqueArgs) {
  return await enhancedPrisma(userId).subscriber.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.SubscriberFindFirstArgs) {
  return await enhancedPrisma(userId).subscriber.findFirst(params);
}

async function createMany(userId: string, params: Prisma.SubscriberCreateManyArgs) {
  return await enhancedPrisma(userId).subscriber.createMany(params);
}

async function createOne(userId: string, params: Prisma.SubscriberCreateArgs) {
  return await enhancedPrisma(userId).subscriber.create(params);
}

async function updateMany(userId: string, params: Prisma.SubscriberUpdateManyArgs) {
  return await enhancedPrisma(userId).subscriber.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.SubscriberUpdateArgs) {
  return await enhancedPrisma(userId).subscriber.update(params);
}

async function deleteMany(userId: string, params?: Prisma.SubscriberDeleteManyArgs) {
  return await enhancedPrisma(userId).subscriber.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.SubscriberDeleteArgs) {
  return await enhancedPrisma(userId).subscriber.delete(params);
}

async function count(userId: string, params?: Prisma.SubscriberCountArgs) {
  return await enhancedPrisma(userId).subscriber.count(params);
}

async function aggregate(userId: string, params: Prisma.SubscriberAggregateArgs) {
  return await enhancedPrisma(userId).subscriber.aggregate(params);
}

export const Subscriber = {
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
