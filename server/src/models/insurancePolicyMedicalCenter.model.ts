import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { InsurancePolicyMedicalCenter as InsurancePolicyMedicalCenterType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.InsurancePolicyMedicalCenterFindManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findMany(params);
}

async function findUnique(userId: string, params: Prisma.InsurancePolicyMedicalCenterFindUniqueArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.InsurancePolicyMedicalCenterFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.InsurancePolicyMedicalCenterFindFirstArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.InsurancePolicyMedicalCenterFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.InsurancePolicyMedicalCenterCreateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.createMany(params);
}

async function createOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterCreateArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.create(params);
}

async function updateMany(userId: string, params: Prisma.InsurancePolicyMedicalCenterUpdateManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterUpdateArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.update(params);
}

async function upsert(userId: string, params: Prisma.InsurancePolicyMedicalCenterUpsertArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.InsurancePolicyMedicalCenterDeleteManyArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.InsurancePolicyMedicalCenterDeleteArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.delete(params);
}

async function count(userId: string, params?: Prisma.InsurancePolicyMedicalCenterCountArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.count(params);
}

async function aggregate(userId: string, params: Prisma.InsurancePolicyMedicalCenterAggregateArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.InsurancePolicyMedicalCenterGroupByArgs) {
  return await enhancedPrisma(userId).insurancePolicyMedicalCenter.groupBy(params);
}

export const InsurancePolicyMedicalCenter = {
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
