import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CoPayDistributionAvgOrderByAggregateInput> = z
  .object({
    threashold: z.lazy(() => SortOrderSchema).optional(),
    Percentage: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CoPayDistributionAvgOrderByAggregateInputObjectSchema = Schema;
