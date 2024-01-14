import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicySumOrderByAggregateInput> = z
  .object({
    limit: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InsurancePolicySumOrderByAggregateInputObjectSchema = Schema;
