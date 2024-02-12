import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BeneficiaryEntityFutureStatusChange as BeneficiaryEntityFutureStatusChangeType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BeneficiaryEntityFutureStatusChangeFindManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeFindFirstArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.findFirst(params);
}

async function createMany(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.createMany(params);
}

async function createOne(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeCreateArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.create(params);
}

async function updateMany(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeUpdateArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.update(params);
}

async function deleteMany(userId: string, params?: Prisma.BeneficiaryEntityFutureStatusChangeDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeDeleteArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.delete(params);
}

async function count(userId: string, params?: Prisma.BeneficiaryEntityFutureStatusChangeCountArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.count(params);
}

async function aggregate(userId: string, params: Prisma.BeneficiaryEntityFutureStatusChangeAggregateArgs) {
  return await enhancedPrisma(userId).beneficiaryEntityFutureStatusChange.aggregate(params);
}

export const BeneficiaryEntityFutureStatusChange = {
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
