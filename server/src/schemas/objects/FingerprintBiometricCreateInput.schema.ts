import { z } from 'zod';
import { FingerTypeCreateNestedOneWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateNestedOneWithoutFingerTypeInput.schema';
import { BeneficiaryCreateNestedOneWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFingerprintInput.schema';
import { EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    hash: z.string(),
    fingerType: z.lazy(
      () => FingerTypeCreateNestedOneWithoutFingerTypeInputObjectSchema,
    ),
    beneficiary: z.lazy(
      () => BeneficiaryCreateNestedOneWithoutFingerprintInputObjectSchema,
    ),
    entryRecords: z
      .lazy(
        () =>
          EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FingerprintBiometricCreateInputObjectSchema = Schema;
