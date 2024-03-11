import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricRelationFilter> = z
  .object({
    is: z
      .lazy(() => FingerprintBiometricWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FingerprintBiometricWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FingerprintBiometricRelationFilterObjectSchema = Schema;
