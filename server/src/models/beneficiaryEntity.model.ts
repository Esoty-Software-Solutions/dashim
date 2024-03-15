import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BeneficiaryEntity as BeneficiaryEntityType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BeneficiaryEntityFindManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BeneficiaryEntityFindUniqueArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.BeneficiaryEntityFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).beneficiaryEntity.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.BeneficiaryEntityFindFirstArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.BeneficiaryEntityFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).beneficiaryEntity.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.BeneficiaryEntityCreateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.createMany(params);
}

async function createOne(userId: string, params: Prisma.BeneficiaryEntityCreateArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.create(params);
}

async function updateMany(userId: string, params: Prisma.BeneficiaryEntityUpdateManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BeneficiaryEntityUpdateArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.update(params);
}

async function upsert(userId: string, params: Prisma.BeneficiaryEntityUpsertArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.BeneficiaryEntityDeleteManyArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BeneficiaryEntityDeleteArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.delete(params);
}

async function count(userId: string, params?: Prisma.BeneficiaryEntityCountArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.count(params);
}

async function aggregate(userId: string, params: Prisma.BeneficiaryEntityAggregateArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.BeneficiaryEntityGroupByArgs) {
  return await enhancedPrisma(userId).beneficiaryEntity.groupBy(params);
}

export const BeneficiaryEntity = {
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
