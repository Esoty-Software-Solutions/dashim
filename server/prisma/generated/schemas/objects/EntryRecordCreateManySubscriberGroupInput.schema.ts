import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManySubscriberGroupInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    fingerprintId: z.string(),
    isValidated: z.boolean(),
    isManuallyInserted: z.boolean().optional(),
    idCardId: z.string(),
    faceId: z.string(),
    voiceId: z.string(),
    medicalCenterId: z.string(),
  })
  .strict();

export const EntryRecordCreateManySubscriberGroupInputObjectSchema = Schema;
