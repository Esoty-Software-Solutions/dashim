import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { BenefitPackage as BenefitPackageType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.BenefitPackageFindManyArgs) {
  return await enhancedPrisma(userId).benefitPackage.findMany(params);
}

async function findUnique(userId: string, params: Prisma.BenefitPackageFindUniqueArgs) {
  return await enhancedPrisma(userId).benefitPackage.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.BenefitPackageFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).benefitPackage.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.BenefitPackageFindFirstArgs) {
  return await enhancedPrisma(userId).benefitPackage.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.BenefitPackageFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).benefitPackage.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.BenefitPackageCreateManyArgs) {
  return await enhancedPrisma(userId).benefitPackage.createMany(params);
}

async function createOne(userId: string, params: Prisma.BenefitPackageCreateArgs) {
  return await enhancedPrisma(userId).benefitPackage.create(params);
}

async function updateMany(userId: string, params: Prisma.BenefitPackageUpdateManyArgs) {
  return await enhancedPrisma(userId).benefitPackage.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.BenefitPackageUpdateArgs) {
  return await enhancedPrisma(userId).benefitPackage.update(params);
}

async function upsert(userId: string, params: Prisma.BenefitPackageUpsertArgs) {
  return await enhancedPrisma(userId).benefitPackage.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.BenefitPackageDeleteManyArgs) {
  return await enhancedPrisma(userId).benefitPackage.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.BenefitPackageDeleteArgs) {
  return await enhancedPrisma(userId).benefitPackage.delete(params);
}

async function count(userId: string, params?: Prisma.BenefitPackageCountArgs) {
  return await enhancedPrisma(userId).benefitPackage.count(params);
}

async function aggregate(userId: string, params: Prisma.BenefitPackageAggregateArgs) {
  return await enhancedPrisma(userId).benefitPackage.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.BenefitPackageGroupByArgs) {
  return await enhancedPrisma(userId).benefitPackage.groupBy(params);
}

export const BenefitPackage = {
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
