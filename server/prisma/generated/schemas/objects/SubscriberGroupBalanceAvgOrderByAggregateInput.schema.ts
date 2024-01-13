import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceAvgOrderByAggregateInput> =
  z
    .object({
      balance: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriberGroupBalanceAvgOrderByAggregateInputObjectSchema =
  Schema;
