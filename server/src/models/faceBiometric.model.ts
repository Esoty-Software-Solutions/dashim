import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { FaceBiometric as FaceBiometricType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.FaceBiometricFindManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.findMany(params);
}

async function findUnique(userId: string, params: Prisma.FaceBiometricFindUniqueArgs) {
  return await enhancedPrisma(userId).faceBiometric.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.FaceBiometricFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).faceBiometric.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.FaceBiometricFindFirstArgs) {
  return await enhancedPrisma(userId).faceBiometric.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.FaceBiometricFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).faceBiometric.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.FaceBiometricCreateManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.createMany(params);
}

async function createOne(userId: string, params: Prisma.FaceBiometricCreateArgs) {
  return await enhancedPrisma(userId).faceBiometric.create(params);
}

async function updateMany(userId: string, params: Prisma.FaceBiometricUpdateManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.FaceBiometricUpdateArgs) {
  return await enhancedPrisma(userId).faceBiometric.update(params);
}

async function upsert(userId: string, params: Prisma.FaceBiometricUpsertArgs) {
  return await enhancedPrisma(userId).faceBiometric.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.FaceBiometricDeleteManyArgs) {
  return await enhancedPrisma(userId).faceBiometric.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.FaceBiometricDeleteArgs) {
  return await enhancedPrisma(userId).faceBiometric.delete(params);
}

async function count(userId: string, params?: Prisma.FaceBiometricCountArgs) {
  return await enhancedPrisma(userId).faceBiometric.count(params);
}

async function aggregate(userId: string, params: Prisma.FaceBiometricAggregateArgs) {
  return await enhancedPrisma(userId).faceBiometric.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.FaceBiometricGroupByArgs) {
  return await enhancedPrisma(userId).faceBiometric.groupBy(params);
}

export const FaceBiometric = {
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
