import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BeneficiaryService as BeneficiaryServiceType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BeneficiaryServiceFindManyArgs) {
  return await enhancedPrisma(userId).beneficiaryService.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BeneficiaryServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiaryService.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.BeneficiaryServiceFindFirstArgs) {
  return await enhancedPrisma(userId).beneficiaryService.findFirst(params);
}

async function createMany(userId: string, params: Prisma.BeneficiaryServiceCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryService.createMany(params);
}

async function createOne(userId: string, params: Prisma.BeneficiaryServiceCreateArgs) {
  return await enhancedPrisma(userId).beneficiaryService.create(params);
}

async function updateMany(userId: string, params: Prisma.BeneficiaryServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryService.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BeneficiaryServiceUpdateArgs) {
  return await enhancedPrisma(userId).beneficiaryService.update(params);
}

async function deleteMany(userId: string, params?: Prisma.BeneficiaryServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiaryService.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryServiceDeleteArgs) {
  return await enhancedPrisma(userId).beneficiaryService.delete(params);
}

async function count(userId: string, params?: Prisma.BeneficiaryServiceCountArgs) {
  return await enhancedPrisma(userId).beneficiaryService.count(params);
}

async function aggregate(userId: string, params: Prisma.BeneficiaryServiceAggregateArgs) {
  return await enhancedPrisma(userId).beneficiaryService.aggregate(params);
}

export const BeneficiaryService = {
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
