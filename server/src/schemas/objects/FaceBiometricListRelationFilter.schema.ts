import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricListRelationFilter> = z
  .object({
    every: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
    some: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
    none: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
  })
  .strict();

export const FaceBiometricListRelationFilterObjectSchema = Schema;
