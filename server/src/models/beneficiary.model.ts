import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { Beneficiary as BeneficiaryType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BeneficiaryFindManyArgs) {
  return await enhancedPrisma(userId).beneficiary.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BeneficiaryFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiary.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.BeneficiaryFindFirstArgs) {
  return await enhancedPrisma(userId).beneficiary.findFirst(params);
}

async function createMany(userId: string, params: Prisma.BeneficiaryCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiary.createMany(params);
}

async function createOne(userId: string, params: Prisma.BeneficiaryCreateArgs) {
  return await enhancedPrisma(userId).beneficiary.create(params);
}

async function updateMany(userId: string, params: Prisma.BeneficiaryUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiary.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BeneficiaryUpdateArgs) {
  return await enhancedPrisma(userId).beneficiary.update(params);
}

async function deleteMany(userId: string, params?: Prisma.BeneficiaryDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiary.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryDeleteArgs) {
  return await enhancedPrisma(userId).beneficiary.delete(params);
}

async function count(userId: string, params?: Prisma.BeneficiaryCountArgs) {
  return await enhancedPrisma(userId).beneficiary.count(params);
}

async function aggregate(userId: string, params: Prisma.BeneficiaryAggregateArgs) {
  return await enhancedPrisma(userId).beneficiary.aggregate(params);
}

export const Beneficiary = {
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
