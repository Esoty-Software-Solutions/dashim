import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CurrencyEnumSumOrderByAggregateInput> = z
  .object({
    buyExchangeRate: z.lazy(() => SortOrderSchema).optional(),
    SellExchangeRate: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CurrencyEnumSumOrderByAggregateInputObjectSchema = Schema;
