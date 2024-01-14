import { z } from 'zod';
import { FingerprintBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema } from './FingerprintBiometricBeneficiaryIdIdCompoundUniqueInput.schema';
import { FingerprintBiometricIdFingerTypeIdCompoundUniqueInputObjectSchema } from './FingerprintBiometricIdFingerTypeIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    hash: z.string().optional(),
    beneficiaryId_id: z
      .lazy(
        () =>
          FingerprintBiometricBeneficiaryIdIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
    id_fingerTypeId: z
      .lazy(
        () => FingerprintBiometricIdFingerTypeIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FingerprintBiometricWhereUniqueInputObjectSchema = Schema;
