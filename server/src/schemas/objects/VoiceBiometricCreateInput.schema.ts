import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutVoiceInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutVoiceInput.schema';
import { EntryRecordCreateNestedManyWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateNestedManyWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateInput> = z
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
    beneficiary: z.lazy(
      () => BeneficiaryCreateNestedOneWithoutVoiceInputObjectSchema,
    ),
    entryRecords: z
      .lazy(
        () => EntryRecordCreateNestedManyWithoutVoiceBiometricInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const VoiceBiometricCreateInputObjectSchema = Schema;
