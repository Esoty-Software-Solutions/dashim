import { z } from 'zod';
import { VoiceBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema } from './VoiceBiometricBeneficiaryIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    hash: z.string().optional(),
    beneficiaryId_id: z
      .lazy(() => VoiceBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoiceBiometricWhereUniqueInputObjectSchema = Schema;
