import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUncheckedCreateWithoutEntryRecordsInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      hash: z.string(),
      beneficiaryId: z.string(),
    })
    .strict();

export const VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema =
  Schema;
