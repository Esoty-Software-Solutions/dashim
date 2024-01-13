import { z } from 'zod';
import { FingerprintWhereInputObjectSchema } from './FingerprintWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintRelationFilter> = z
  .object({
    is: z
      .lazy(() => FingerprintWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FingerprintWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FingerprintRelationFilterObjectSchema = Schema;
