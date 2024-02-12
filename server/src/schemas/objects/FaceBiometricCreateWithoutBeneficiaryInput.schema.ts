import { z } from 'zod';
import { EntryRecordCreateNestedManyWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCreateWithoutBeneficiaryInput> = z
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
    entryRecords: z
      .lazy(
        () => EntryRecordCreateNestedManyWithoutFaceBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FaceBiometricCreateWithoutBeneficiaryInputObjectSchema = Schema;
