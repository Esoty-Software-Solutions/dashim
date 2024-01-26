import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { MedicalService as MedicalServiceType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.MedicalServiceFindManyArgs) {
  return await enhancedPrisma(userId).medicalService.findMany(params);
}

async function findUnique(userId: string, params: Prisma.MedicalServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalService.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.MedicalServiceFindFirstArgs) {
  return await enhancedPrisma(userId).medicalService.findFirst(params);
}

async function createMany(userId: string, params: Prisma.MedicalServiceCreateManyArgs) {
  return await enhancedPrisma(userId).medicalService.createMany(params);
}

async function createOne(userId: string, params: Prisma.MedicalServiceCreateArgs) {
  return await enhancedPrisma(userId).medicalService.create(params);
}

async function updateMany(userId: string, params: Prisma.MedicalServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalService.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.MedicalServiceUpdateArgs) {
  return await enhancedPrisma(userId).medicalService.update(params);
}

async function deleteMany(userId: string, params?: Prisma.MedicalServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalService.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.MedicalServiceDeleteArgs) {
  return await enhancedPrisma(userId).medicalService.delete(params);
}

async function count(userId: string, params?: Prisma.MedicalServiceCountArgs) {
  return await enhancedPrisma(userId).medicalService.count(params);
}

async function aggregate(userId: string, params: Prisma.MedicalServiceAggregateArgs) {
  return await enhancedPrisma(userId).medicalService.aggregate(params);
}

export const MedicalService = {
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
