import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Relationship as RelationshipType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.RelationshipFindManyArgs) {
  return await enhancedPrisma(userId).relationship.findMany(params);
}

async function findUnique(userId: string, params: Prisma.RelationshipFindUniqueArgs) {
  return await enhancedPrisma(userId).relationship.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.RelationshipFindFirstArgs) {
  return await enhancedPrisma(userId).relationship.findFirst(params);
}

async function createMany(userId: string, params: Prisma.RelationshipCreateManyArgs) {
  return await enhancedPrisma(userId).relationship.createMany(params);
}

async function createOne(userId: string, params: Prisma.RelationshipCreateArgs) {
  return await enhancedPrisma(userId).relationship.create(params);
}

async function updateMany(userId: string, params: Prisma.RelationshipUpdateManyArgs) {
  return await enhancedPrisma(userId).relationship.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.RelationshipUpdateArgs) {
  return await enhancedPrisma(userId).relationship.update(params);
}

async function deleteMany(userId: string, params?: Prisma.RelationshipDeleteManyArgs) {
  return await enhancedPrisma(userId).relationship.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.RelationshipDeleteArgs) {
  return await enhancedPrisma(userId).relationship.delete(params);
}

async function count(userId: string, params?: Prisma.RelationshipCountArgs) {
  return await enhancedPrisma(userId).relationship.count(params);
}

async function aggregate(userId: string, params: Prisma.RelationshipAggregateArgs) {
  return await enhancedPrisma(userId).relationship.aggregate(params);
}

export const Relationship = {
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
