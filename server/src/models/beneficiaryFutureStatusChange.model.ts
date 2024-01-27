import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BeneficiaryFutureStatusChange as BeneficiaryFutureStatusChangeType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BeneficiaryFutureStatusChangeFindManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BeneficiaryFutureStatusChangeFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.BeneficiaryFutureStatusChangeFindFirstArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.findFirst(params);
}

async function createMany(userId: string, params: Prisma.BeneficiaryFutureStatusChangeCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.createMany(params);
}

async function createOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeCreateArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.create(params);
}

async function updateMany(userId: string, params: Prisma.BeneficiaryFutureStatusChangeUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeUpdateArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.update(params);
}

async function deleteMany(userId: string, params?: Prisma.BeneficiaryFutureStatusChangeDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryFutureStatusChangeDeleteArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.delete(params);
}

async function count(userId: string, params?: Prisma.BeneficiaryFutureStatusChangeCountArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.count(params);
}

async function aggregate(userId: string, params: Prisma.BeneficiaryFutureStatusChangeAggregateArgs) {
  return await enhancedPrisma(userId).beneficiaryFutureStatusChange.aggregate(params);
}

export const BeneficiaryFutureStatusChange = {
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
