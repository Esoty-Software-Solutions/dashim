import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { EntryRecord as EntryRecordType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.EntryRecordFindManyArgs) {
  return await enhancedPrisma(userId).entryRecord.findMany(params);
}

async function findUnique(userId: string, params: Prisma.EntryRecordFindUniqueArgs) {
  return await enhancedPrisma(userId).entryRecord.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.EntryRecordFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).entryRecord.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.EntryRecordFindFirstArgs) {
  return await enhancedPrisma(userId).entryRecord.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.EntryRecordFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).entryRecord.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.EntryRecordCreateManyArgs) {
  return await enhancedPrisma(userId).entryRecord.createMany(params);
}

async function createOne(userId: string, params: Prisma.EntryRecordCreateArgs) {
  return await enhancedPrisma(userId).entryRecord.create(params);
}

async function updateMany(userId: string, params: Prisma.EntryRecordUpdateManyArgs) {
  return await enhancedPrisma(userId).entryRecord.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.EntryRecordUpdateArgs) {
  return await enhancedPrisma(userId).entryRecord.update(params);
}

async function upsert(userId: string, params: Prisma.EntryRecordUpsertArgs) {
  return await enhancedPrisma(userId).entryRecord.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.EntryRecordDeleteManyArgs) {
  return await enhancedPrisma(userId).entryRecord.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.EntryRecordDeleteArgs) {
  return await enhancedPrisma(userId).entryRecord.delete(params);
}

async function count(userId: string, params?: Prisma.EntryRecordCountArgs) {
  return await enhancedPrisma(userId).entryRecord.count(params);
}

async function aggregate(userId: string, params: Prisma.EntryRecordAggregateArgs) {
  return await enhancedPrisma(userId).entryRecord.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.EntryRecordGroupByArgs) {
  return await enhancedPrisma(userId).entryRecord.groupBy(params);
}

export const EntryRecord = {
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
