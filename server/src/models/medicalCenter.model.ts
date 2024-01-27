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

async function findFirst(userId: string, params: Prisma.MedicalCenterFindFirstArgs) {
  return await enhancedPrisma(userId).medicalCenter.findFirst(params);
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

export const MedicalCenter = {
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
