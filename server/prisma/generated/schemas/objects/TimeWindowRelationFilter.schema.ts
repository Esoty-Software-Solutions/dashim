import { z } from 'zod';
import { TimeWindowWhereInputObjectSchema } from './TimeWindowWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowRelationFilter> = z
  .object({
    is: z
      .lazy(() => TimeWindowWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TimeWindowWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TimeWindowRelationFilterObjectSchema = Schema;
