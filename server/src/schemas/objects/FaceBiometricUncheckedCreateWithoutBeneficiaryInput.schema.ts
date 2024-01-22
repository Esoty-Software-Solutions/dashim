import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUncheckedCreateWithoutBeneficiaryInput> =
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
      hash: z.string(),
      entryRecords: z
        .lazy(
          () =>
            EntryRecordUncheckedCreateNestedManyWithoutFaceBiometricInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema =
  Schema;
