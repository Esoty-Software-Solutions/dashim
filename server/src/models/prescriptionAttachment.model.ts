import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { PrescriptionAttachment as PrescriptionAttachmentType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.PrescriptionAttachmentFindManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.findMany(params);
}

async function findUnique(userId: string, params: Prisma.PrescriptionAttachmentFindUniqueArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.PrescriptionAttachmentFindFirstArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.findFirst(params);
}

async function createMany(userId: string, params: Prisma.PrescriptionAttachmentCreateManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.createMany(params);
}

async function createOne(userId: string, params: Prisma.PrescriptionAttachmentCreateArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.create(params);
}

async function updateMany(userId: string, params: Prisma.PrescriptionAttachmentUpdateManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.PrescriptionAttachmentUpdateArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.update(params);
}

async function deleteMany(userId: string, params?: Prisma.PrescriptionAttachmentDeleteManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.PrescriptionAttachmentDeleteArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.delete(params);
}

async function count(userId: string, params?: Prisma.PrescriptionAttachmentCountArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.count(params);
}

async function aggregate(userId: string, params: Prisma.PrescriptionAttachmentAggregateArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.aggregate(params);
}

export const PrescriptionAttachment = {
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
