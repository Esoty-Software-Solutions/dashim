import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutVoiceInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateWithoutEntryRecordsInput> = z
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
      () => BeneficiaryCreateNestedOneWithoutVoiceInputObjectSchema,
    ),
  })
  .strict();

export const VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema = Schema;
