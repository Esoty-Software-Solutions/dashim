import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { City as CityType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.CityFindManyArgs) {
  return await enhancedPrisma(userId).city.findMany(params)
}

async function getOne(userId: string, params: Prisma.CityFindUniqueArgs) {
  return await enhancedPrisma(userId).city.findUnique(params)
}

async function createMany(userId: string, params: Prisma.CityCreateManyArgs) {
  return await enhancedPrisma(userId).city.createMany(params)
}

async function createOne(userId: string, params: Prisma.CityCreateArgs) {
  return await enhancedPrisma(userId).city.create(params)
}

async function updateMany(userId: string, params: Prisma.CityUpdateManyArgs) {
  return await enhancedPrisma(userId).city.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.CityUpdateArgs) {
  return await enhancedPrisma(userId).city.update(params)
}

async function deleteMany(userId: string, params: Prisma.CityDeleteManyArgs) {
  return await enhancedPrisma(userId).city.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.CityDeleteArgs) {
  return await enhancedPrisma(userId).city.delete(params)
}

export const City = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
