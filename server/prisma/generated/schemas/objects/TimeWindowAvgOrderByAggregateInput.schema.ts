import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowAvgOrderByAggregateInput> = z
  .object({
    time: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TimeWindowAvgOrderByAggregateInputObjectSchema = Schema;
