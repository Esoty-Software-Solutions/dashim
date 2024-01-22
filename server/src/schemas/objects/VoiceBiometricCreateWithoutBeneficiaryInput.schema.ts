import { z } from 'zod';
import { EntryRecordCreateNestedManyWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateWithoutBeneficiaryInput> = z
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
        () => EntryRecordCreateNestedManyWithoutVoiceBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema = Schema;
