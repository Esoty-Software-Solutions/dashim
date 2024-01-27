import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { InsurancePolicy as InsurancePolicyType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.InsurancePolicyFindManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.findMany(params);
}

async function findUnique(userId: string, params: Prisma.InsurancePolicyFindUniqueArgs) {
  return await enhancedPrisma(userId).insurancePolicy.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.InsurancePolicyFindFirstArgs) {
  return await enhancedPrisma(userId).insurancePolicy.findFirst(params);
}

async function createMany(userId: string, params: Prisma.InsurancePolicyCreateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.createMany(params);
}

async function createOne(userId: string, params: Prisma.InsurancePolicyCreateArgs) {
  return await enhancedPrisma(userId).insurancePolicy.create(params);
}

async function updateMany(userId: string, params: Prisma.InsurancePolicyUpdateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.InsurancePolicyUpdateArgs) {
  return await enhancedPrisma(userId).insurancePolicy.update(params);
}

async function deleteMany(userId: string, params?: Prisma.InsurancePolicyDeleteManyArgs) {
  return await enhancedPrisma(userId).insurancePolicy.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.InsurancePolicyDeleteArgs) {
  return await enhancedPrisma(userId).insurancePolicy.delete(params);
}

async function count(userId: string, params?: Prisma.InsurancePolicyCountArgs) {
  return await enhancedPrisma(userId).insurancePolicy.count(params);
}

async function aggregate(userId: string, params: Prisma.InsurancePolicyAggregateArgs) {
  return await enhancedPrisma(userId).insurancePolicy.aggregate(params);
}

export const InsurancePolicy = {
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
