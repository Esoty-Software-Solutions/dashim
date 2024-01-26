import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { PatientService as PatientServiceType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.PatientServiceFindManyArgs) {
  return await enhancedPrisma(userId).patientService.findMany(params);
}

async function findUnique(userId: string, params: Prisma.PatientServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).patientService.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.PatientServiceFindFirstArgs) {
  return await enhancedPrisma(userId).patientService.findFirst(params);
}

async function createMany(userId: string, params: Prisma.PatientServiceCreateManyArgs) {
  return await enhancedPrisma(userId).patientService.createMany(params);
}

async function createOne(userId: string, params: Prisma.PatientServiceCreateArgs) {
  return await enhancedPrisma(userId).patientService.create(params);
}

async function updateMany(userId: string, params: Prisma.PatientServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).patientService.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.PatientServiceUpdateArgs) {
  return await enhancedPrisma(userId).patientService.update(params);
}

async function deleteMany(userId: string, params?: Prisma.PatientServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).patientService.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.PatientServiceDeleteArgs) {
  return await enhancedPrisma(userId).patientService.delete(params);
}

async function count(userId: string, params?: Prisma.PatientServiceCountArgs) {
  return await enhancedPrisma(userId).patientService.count(params);
}

async function aggregate(userId: string, params: Prisma.PatientServiceAggregateArgs) {
  return await enhancedPrisma(userId).patientService.aggregate(params);
}

export const PatientService = {
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
