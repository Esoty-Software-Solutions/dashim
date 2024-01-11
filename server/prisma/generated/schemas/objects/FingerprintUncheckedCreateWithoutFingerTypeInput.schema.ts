import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUncheckedCreateWithoutFingerTypeInput> =
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
      subscriberGroupId: z.string(),
      entryRecords: z
        .lazy(
          () =>
            EntryRecordUncheckedCreateNestedManyWithoutFingerprintBiometricInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema =
  Schema;
