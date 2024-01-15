import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricRelationFilter> = z
  .object({
    is: z
      .lazy(() => FaceBiometricWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FaceBiometricWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FaceBiometricRelationFilterObjectSchema = Schema;
