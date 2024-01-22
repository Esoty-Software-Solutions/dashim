import { z } from 'zod';
import { FaceBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema } from './FaceBiometricBeneficiaryIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    hash: z.string().optional(),
    beneficiaryId_id: z
      .lazy(() => FaceBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const FaceBiometricWhereUniqueInputObjectSchema = Schema;
