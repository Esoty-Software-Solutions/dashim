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

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.PrescriptionAttachmentFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).prescriptionAttachment.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.PrescriptionAttachmentFindFirstArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.PrescriptionAttachmentFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).prescriptionAttachment.findFirstOrThrow(params);
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

async function upsert(userId: string, params: Prisma.PrescriptionAttachmentUpsertArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.upsert(params);
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

async function groupBy(userId: string, params: Prisma.PrescriptionAttachmentGroupByArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.groupBy(params);
}

export const PrescriptionAttachment = {
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
