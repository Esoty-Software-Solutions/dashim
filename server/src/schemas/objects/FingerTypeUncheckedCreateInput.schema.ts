import { z } from 'zod';
import { FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    fingerType: z
      .lazy(
        () =>
          FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FingerTypeUncheckedCreateInputObjectSchema = Schema;