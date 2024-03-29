import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { RelationshipEnum as RelationshipEnumType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.RelationshipEnumFindManyArgs) {
  return await enhancedPrisma(userId).relationshipEnum.findMany(params);
}

async function findUnique(userId: string, params: Prisma.RelationshipEnumFindUniqueArgs) {
  return await enhancedPrisma(userId).relationshipEnum.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.RelationshipEnumFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).relationshipEnum.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.RelationshipEnumFindFirstArgs) {
  return await enhancedPrisma(userId).relationshipEnum.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.RelationshipEnumFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).relationshipEnum.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.RelationshipEnumCreateManyArgs) {
  return await enhancedPrisma(userId).relationshipEnum.createMany(params);
}

async function createOne(userId: string, params: Prisma.RelationshipEnumCreateArgs) {
  return await enhancedPrisma(userId).relationshipEnum.create(params);
}

async function updateMany(userId: string, params: Prisma.RelationshipEnumUpdateManyArgs) {
  return await enhancedPrisma(userId).relationshipEnum.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.RelationshipEnumUpdateArgs) {
  return await enhancedPrisma(userId).relationshipEnum.update(params);
}

async function upsert(userId: string, params: Prisma.RelationshipEnumUpsertArgs) {
  return await enhancedPrisma(userId).relationshipEnum.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.RelationshipEnumDeleteManyArgs) {
  return await enhancedPrisma(userId).relationshipEnum.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.RelationshipEnumDeleteArgs) {
  return await enhancedPrisma(userId).relationshipEnum.delete(params);
}

async function count(userId: string, params?: Prisma.RelationshipEnumCountArgs) {
  return await enhancedPrisma(userId).relationshipEnum.count(params);
}

async function aggregate(userId: string, params: Prisma.RelationshipEnumAggregateArgs) {
  return await enhancedPrisma(userId).relationshipEnum.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.RelationshipEnumGroupByArgs) {
  return await enhancedPrisma(userId).relationshipEnum.groupBy(params);
}

export const RelationshipEnum = {
  findMany: middleware(findMany),
  findUnique: middleware(findUnique),
  findUniqueOrThrow: middleware(findUniqueOrThrow),
  findFirst: middleware(findFirst),
  findFirstOrThrow: middleware(findFirstOrThrow),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  upsert: middleware(upsert),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
  count: middleware(count),
  aggregate: middleware(aggregate),
  groupBy: middleware(groupBy),
};
