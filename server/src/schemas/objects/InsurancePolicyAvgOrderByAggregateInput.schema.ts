import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyAvgOrderByAggregateInput> = z
  .object({
    Accumulatedlimit: z.lazy(() => SortOrderSchema).optional(),
    serviceEntryTimeWindow: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InsurancePolicyAvgOrderByAggregateInputObjectSchema = Schema;
