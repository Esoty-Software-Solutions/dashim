import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricListRelationFilter> = z
  .object({
    every: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
    some: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
    none: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
  })
  .strict();

export const FingerprintBiometricListRelationFilterObjectSchema = Schema;
