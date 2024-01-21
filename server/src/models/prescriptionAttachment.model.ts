import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { PrescriptionAttachment as PrescriptionAttachmentType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.PrescriptionAttachmentFindManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.findMany(params)
}

async function getOne(userId: string, params: Prisma.PrescriptionAttachmentFindUniqueArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.findUnique(params)
}

async function createMany(userId: string, params: Prisma.PrescriptionAttachmentCreateManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.createMany(params)
}

async function createOne(userId: string, params: Prisma.PrescriptionAttachmentCreateArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.create(params)
}

async function updateMany(userId: string, params: Prisma.PrescriptionAttachmentUpdateManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.PrescriptionAttachmentUpdateArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.update(params)
}

async function deleteMany(userId: string, params: Prisma.PrescriptionAttachmentDeleteManyArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.PrescriptionAttachmentDeleteArgs) {
  return await enhancedPrisma(userId).prescriptionAttachment.delete(params)
}

export const PrescriptionAttachment = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
