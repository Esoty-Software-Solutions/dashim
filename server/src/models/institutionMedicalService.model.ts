import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { InstitutionMedicalService as InstitutionMedicalServiceType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.InstitutionMedicalServiceFindManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.findMany(params);
}

async function findUnique(userId: string, params: Prisma.InstitutionMedicalServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.InstitutionMedicalServiceFindFirstArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.findFirst(params);
}

async function createMany(userId: string, params: Prisma.InstitutionMedicalServiceCreateManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.createMany(params);
}

async function createOne(userId: string, params: Prisma.InstitutionMedicalServiceCreateArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.create(params);
}

async function updateMany(userId: string, params: Prisma.InstitutionMedicalServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.InstitutionMedicalServiceUpdateArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.update(params);
}

async function deleteMany(userId: string, params?: Prisma.InstitutionMedicalServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.InstitutionMedicalServiceDeleteArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.delete(params);
}

async function count(userId: string, params?: Prisma.InstitutionMedicalServiceCountArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.count(params);
}

async function aggregate(userId: string, params: Prisma.InstitutionMedicalServiceAggregateArgs) {
  return await enhancedPrisma(userId).institutionMedicalService.aggregate(params);
}

export const InstitutionMedicalService = {
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
