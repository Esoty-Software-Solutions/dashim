import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyAvgOrderByAggregateInput> = z
  .object({
    coPay: z.lazy(() => SortOrderSchema).optional(),
    limit: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InsurancePolicyAvgOrderByAggregateInputObjectSchema = Schema;