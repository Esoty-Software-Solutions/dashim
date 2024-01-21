import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUncheckedCreateWithoutBeneficiaryInput> = z
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
    entryRecords: z
      .lazy(
        () =>
          EntryRecordUncheckedCreateNestedManyWithoutIdCardBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema = Schema;
