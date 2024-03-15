import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { LabReportAttachment as LabReportAttachmentType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.LabReportAttachmentFindManyArgs) {
  return await enhancedPrisma(userId).labReportAttachment.findMany(params);
}

async function findUnique(userId: string, params: Prisma.LabReportAttachmentFindUniqueArgs) {
  return await enhancedPrisma(userId).labReportAttachment.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.LabReportAttachmentFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).labReportAttachment.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.LabReportAttachmentFindFirstArgs) {
  return await enhancedPrisma(userId).labReportAttachment.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.LabReportAttachmentFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).labReportAttachment.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.LabReportAttachmentCreateManyArgs) {
  return await enhancedPrisma(userId).labReportAttachment.createMany(params);
}

async function createOne(userId: string, params: Prisma.LabReportAttachmentCreateArgs) {
  return await enhancedPrisma(userId).labReportAttachment.create(params);
}

async function updateMany(userId: string, params: Prisma.LabReportAttachmentUpdateManyArgs) {
  return await enhancedPrisma(userId).labReportAttachment.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.LabReportAttachmentUpdateArgs) {
  return await enhancedPrisma(userId).labReportAttachment.update(params);
}

async function upsert(userId: string, params: Prisma.LabReportAttachmentUpsertArgs) {
  return await enhancedPrisma(userId).labReportAttachment.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.LabReportAttachmentDeleteManyArgs) {
  return await enhancedPrisma(userId).labReportAttachment.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.LabReportAttachmentDeleteArgs) {
  return await enhancedPrisma(userId).labReportAttachment.delete(params);
}

async function count(userId: string, params?: Prisma.LabReportAttachmentCountArgs) {
  return await enhancedPrisma(userId).labReportAttachment.count(params);
}

async function aggregate(userId: string, params: Prisma.LabReportAttachmentAggregateArgs) {
  return await enhancedPrisma(userId).labReportAttachment.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.LabReportAttachmentGroupByArgs) {
  return await enhancedPrisma(userId).labReportAttachment.groupBy(params);
}

export const LabReportAttachment = {
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
