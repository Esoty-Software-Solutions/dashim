import { z } from 'zod';
import { FingerTypeEnumCreateNestedOneWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateNestedOneWithoutFingerTypeInput.schema';
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
      deactivationDate: z.coerce.date().optional().nullable(),
      record: z.string(),
      fingerType: z.lazy(
        () => FingerTypeEnumCreateNestedOneWithoutFingerTypeInputObjectSchema,
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
