import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { DiagnosisAttachment as DiagnosisAttachmentType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.DiagnosisAttachmentFindManyArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.findMany(params);
}

async function findUnique(userId: string, params: Prisma.DiagnosisAttachmentFindUniqueArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.DiagnosisAttachmentFindFirstArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.findFirst(params);
}

async function createMany(userId: string, params: Prisma.DiagnosisAttachmentCreateManyArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.createMany(params);
}

async function createOne(userId: string, params: Prisma.DiagnosisAttachmentCreateArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.create(params);
}

async function updateMany(userId: string, params: Prisma.DiagnosisAttachmentUpdateManyArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.DiagnosisAttachmentUpdateArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.update(params);
}

async function deleteMany(userId: string, params?: Prisma.DiagnosisAttachmentDeleteManyArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.DiagnosisAttachmentDeleteArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.delete(params);
}

async function count(userId: string, params?: Prisma.DiagnosisAttachmentCountArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.count(params);
}

async function aggregate(userId: string, params: Prisma.DiagnosisAttachmentAggregateArgs) {
  return await enhancedPrisma(userId).diagnosisAttachment.aggregate(params);
}

export const DiagnosisAttachment = {
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
