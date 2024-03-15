import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { FingerprintBiometric as FingerprintBiometricType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.FingerprintBiometricFindManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.findMany(params);
}

async function findUnique(userId: string, params: Prisma.FingerprintBiometricFindUniqueArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.findUnique(params);
}

async function findUniqueOrThrow(
  userId: string,
  params: Prisma.FingerprintBiometricFindUniqueOrThrowArgs,
) {
  return await enhancedPrisma(userId).fingerprintBiometric.findUniqueOrThrow(params);
}

async function findFirst(userId: string, params: Prisma.FingerprintBiometricFindFirstArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.findFirst(params);
}

async function findFirstOrThrow(
  userId: string,
  params: Prisma.FingerprintBiometricFindFirstOrThrowArgs,
) {
  return await enhancedPrisma(userId).fingerprintBiometric.findFirstOrThrow(params);
}

async function createMany(userId: string, params: Prisma.FingerprintBiometricCreateManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.createMany(params);
}

async function createOne(userId: string, params: Prisma.FingerprintBiometricCreateArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.create(params);
}

async function updateMany(userId: string, params: Prisma.FingerprintBiometricUpdateManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.FingerprintBiometricUpdateArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.update(params);
}

async function upsert(userId: string, params: Prisma.FingerprintBiometricUpsertArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.upsert(params);
}

async function deleteMany(userId: string, params?: Prisma.FingerprintBiometricDeleteManyArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.FingerprintBiometricDeleteArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.delete(params);
}

async function count(userId: string, params?: Prisma.FingerprintBiometricCountArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.count(params);
}

async function aggregate(userId: string, params: Prisma.FingerprintBiometricAggregateArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.aggregate(params);
}

async function groupBy(userId: string, params: Prisma.FingerprintBiometricGroupByArgs) {
  return await enhancedPrisma(userId).fingerprintBiometric.groupBy(params);
}

export const FingerprintBiometric = {
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
