import { z } from 'zod';
import { FingerTypeCreateNestedOneWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateNestedOneWithoutFingerTypeInput.schema';
import { EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateWithoutBeneficiaryInput> =
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
      fingerType: z.lazy(
        () => FingerTypeCreateNestedOneWithoutFingerTypeInputObjectSchema,
      ),
      entryRecords: z
        .lazy(
          () =>
            EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema =
  Schema;