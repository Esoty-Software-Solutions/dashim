import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricBeneficiaryIdIdCompoundUniqueInput> =
  z
    .object({
      beneficiaryId: z.string(),
      id: z.string(),
    })
    .strict();

export const VoiceBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema =
  Schema;
