import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { EntryRecord as EntryRecordType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.EntryRecordFindManyArgs) {
  return await enhancedPrisma(userId).entryRecord.findMany(params)
}

async function getOne(userId: string, params: Prisma.EntryRecordFindUniqueArgs) {
  return await enhancedPrisma(userId).entryRecord.findUnique(params)
}

async function createMany(userId: string, params: Prisma.EntryRecordCreateManyArgs) {
  return await enhancedPrisma(userId).entryRecord.createMany(params)
}

async function createOne(userId: string, params: Prisma.EntryRecordCreateArgs) {
  return await enhancedPrisma(userId).entryRecord.create(params)
}

async function updateMany(userId: string, params: Prisma.EntryRecordUpdateManyArgs) {
  return await enhancedPrisma(userId).entryRecord.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.EntryRecordUpdateArgs) {
  return await enhancedPrisma(userId).entryRecord.update(params)
}

async function deleteMany(userId: string, params: Prisma.EntryRecordDeleteManyArgs) {
  return await enhancedPrisma(userId).entryRecord.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.EntryRecordDeleteArgs) {
  return await enhancedPrisma(userId).entryRecord.delete(params)
}

export const EntryRecord = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
