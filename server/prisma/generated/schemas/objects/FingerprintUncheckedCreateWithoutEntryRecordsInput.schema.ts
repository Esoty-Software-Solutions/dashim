import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUncheckedCreateWithoutEntryRecordsInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      fingerTypeId: z.string(),
      hash: z.string(),
      subscriberGroupId: z.string(),
    })
    .strict();

export const FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema =
  Schema;