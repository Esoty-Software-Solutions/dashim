import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUncheckedCreateWithoutBeneficiaryInput> =
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
      entryRecords: z
        .lazy(
          () =>
            EntryRecordUncheckedCreateNestedManyWithoutFingerprintBiometricInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema =
  Schema;
