import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutIdCardInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutIdCardInput.schema';
import { EntryRecordCreateNestedManyWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateInput> = z
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
      () => BeneficiaryCreateNestedOneWithoutIdCardInputObjectSchema,
    ),
    entryRecords: z
      .lazy(
        () =>
          EntryRecordCreateNestedManyWithoutIdCardBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const IDCardCreateInputObjectSchema = Schema;