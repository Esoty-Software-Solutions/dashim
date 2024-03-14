import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { MedicalCenter as MedicalCenterType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.MedicalCenterFindManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.findMany(params);
}

async function findUnique(userId: string, params: Prisma.MedicalCenterFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalCenter.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.MedicalCenterFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).medicalCenter.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.MedicalCenterFindFirstArgs) {
  return await enhancedPrisma(userId).medicalCenter.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.MedicalCenterFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).medicalCenter.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.MedicalCenterCreateManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.createMany(params);
}

async function createOne(userId: string, params: Prisma.MedicalCenterCreateArgs) {
  return await enhancedPrisma(userId).medicalCenter.create(params);
}

async function updateMany(userId: string, params: Prisma.MedicalCenterUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.MedicalCenterUpdateArgs) {
  return await enhancedPrisma(userId).medicalCenter.update(params);
}

async function upsert(userId: string, params: Prisma.MedicalCenterUpsertArgs) {
  return await enhancedPrisma(userId).medicalCenter.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.MedicalCenterDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.MedicalCenterDeleteArgs) {
  return await enhancedPrisma(userId).medicalCenter.delete(params);
}

async function count(userId: string, params?: Prisma.MedicalCenterCountArgs) {
  return await enhancedPrisma(userId).medicalCenter.count(params);
}

async function aggregate(userId: string, params: Prisma.MedicalCenterAggregateArgs) {
  return await enhancedPrisma(userId).medicalCenter.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.MedicalCenterGroupByArgs) {
  return await enhancedPrisma(userId).medicalCenter.groupBy(params);
}

export const MedicalCenter = {
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
