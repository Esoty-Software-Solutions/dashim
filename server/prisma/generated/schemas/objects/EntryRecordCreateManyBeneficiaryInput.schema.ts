import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyBeneficiaryInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    fingerprintId: z.string().optional().nullable(),
    idCardId: z.string().optional().nullable(),
    faceId: z.string().optional().nullable(),
    voiceId: z.string().optional().nullable(),
    isValidated: z.boolean(),
    isManuallyInserted: z.boolean().optional(),
    medicalCenterId: z.string(),
  })
  .strict();

export const EntryRecordCreateManyBeneficiaryInputObjectSchema = Schema;
