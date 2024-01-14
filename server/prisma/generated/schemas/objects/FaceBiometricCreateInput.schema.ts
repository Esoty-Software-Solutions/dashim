import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutFaceInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFaceInput.schema';
import { EntryRecordCreateNestedManyWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    hash: z.string(),
    beneficiary: z.lazy(
      () => BeneficiaryCreateNestedOneWithoutFaceInputObjectSchema,
    ),
    entryRecords: z
      .lazy(
        () => EntryRecordCreateNestedManyWithoutFaceBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FaceBiometricCreateInputObjectSchema = Schema;
