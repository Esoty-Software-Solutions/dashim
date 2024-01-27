import { enhancedPrisma } from "@config/db";
import type { Prisma } from "@prisma/client";
import { middleware } from "@utilities/middleware";

export type { VoiceBiometric as VoiceBiometricType } from "@prisma/client";

async function findMany(userId: string, params?: Prisma.VoiceBiometricFindManyArgs) {
  return await enhancedPrisma(userId).voiceBiometric.findMany(params);
}

async function findUnique(userId: string, params: Prisma.VoiceBiometricFindUniqueArgs) {
  return await enhancedPrisma(userId).voiceBiometric.findUnique(params);
}

async function findFirst(userId: string, params: Prisma.VoiceBiometricFindFirstArgs) {
  return await enhancedPrisma(userId).voiceBiometric.findFirst(params);
}

async function createMany(userId: string, params: Prisma.VoiceBiometricCreateManyArgs) {
  return await enhancedPrisma(userId).voiceBiometric.createMany(params);
}

async function createOne(userId: string, params: Prisma.VoiceBiometricCreateArgs) {
  return await enhancedPrisma(userId).voiceBiometric.create(params);
}

async function updateMany(userId: string, params: Prisma.VoiceBiometricUpdateManyArgs) {
  return await enhancedPrisma(userId).voiceBiometric.updateMany(params);
}

async function updateOne(userId: string, params: Prisma.VoiceBiometricUpdateArgs) {
  return await enhancedPrisma(userId).voiceBiometric.update(params);
}

async function deleteMany(userId: string, params?: Prisma.VoiceBiometricDeleteManyArgs) {
  return await enhancedPrisma(userId).voiceBiometric.deleteMany(params);
}

async function deleteOne(userId: string, params: Prisma.VoiceBiometricDeleteArgs) {
  return await enhancedPrisma(userId).voiceBiometric.delete(params);
}

async function count(userId: string, params?: Prisma.VoiceBiometricCountArgs) {
  return await enhancedPrisma(userId).voiceBiometric.count(params);
}

async function aggregate(userId: string, params: Prisma.VoiceBiometricAggregateArgs) {
  return await enhancedPrisma(userId).voiceBiometric.aggregate(params);
}

export const VoiceBiometric = {
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
