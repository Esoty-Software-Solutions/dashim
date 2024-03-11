import { z } from 'zod';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => GenderEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => GenderEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const GenderEnumRelationFilterObjectSchema = Schema;
