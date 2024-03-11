import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    updatedById: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    deactivationDate: z.literal(true).optional(),
    isValidated: z.literal(true).optional(),
    isManuallyInserted: z.literal(true).optional(),
    notes: z.literal(true).optional(),
    beneficiaryId: z.literal(true).optional(),
    fingerprintId: z.literal(true).optional(),
    idCardId: z.literal(true).optional(),
    faceId: z.literal(true).optional(),
    voiceId: z.literal(true).optional(),
    medicalCenterId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const EntryRecordCountAggregateInputObjectSchema = Schema;
