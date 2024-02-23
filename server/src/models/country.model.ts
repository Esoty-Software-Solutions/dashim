import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Country as CountryType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.CountryFindManyArgs) {
  return await enhancedPrisma(userId).country.findMany(params);
}

async function findUnique(userId: string, params: Prisma.CountryFindUniqueArgs) {
  return await enhancedPrisma(userId).country.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.CountryFindFirstArgs) {
  return await enhancedPrisma(userId).country.findFirst(params);
}

async function createMany(userId: string, params: Prisma.CountryCreateManyArgs) {
  return await enhancedPrisma(userId).country.createMany(params);
}

async function createOne(userId: string, params: Prisma.CountryCreateArgs) {
  return await enhancedPrisma(userId).country.create(params);
}

async function updateMany(userId: string, params: Prisma.CountryUpdateManyArgs) {
  return await enhancedPrisma(userId).country.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.CountryUpdateArgs) {
  return await enhancedPrisma(userId).country.update(params);
}

async function deleteMany(userId: string, params?: Prisma.CountryDeleteManyArgs) {
  return await enhancedPrisma(userId).country.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.CountryDeleteArgs) {
  return await enhancedPrisma(userId).country.delete(params);
}

async function count(userId: string, params?: Prisma.CountryCountArgs) {
  return await enhancedPrisma(userId).country.count(params);
}

async function aggregate(userId: string, params: Prisma.CountryAggregateArgs) {
  return await enhancedPrisma(userId).country.aggregate(params);
}

export const Country = {
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