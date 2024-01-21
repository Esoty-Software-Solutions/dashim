import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CurrencyCountOrderByAggregateInputObjectSchema } from './CurrencyCountOrderByAggregateInput.schema';
import { CurrencyAvgOrderByAggregateInputObjectSchema } from './CurrencyAvgOrderByAggregateInput.schema';
import { CurrencyMaxOrderByAggregateInputObjectSchema } from './CurrencyMaxOrderByAggregateInput.schema';
import { CurrencyMinOrderByAggregateInputObjectSchema } from './CurrencyMinOrderByAggregateInput.schema';
import { CurrencySumOrderByAggregateInputObjectSchema } from './CurrencySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CurrencyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    arabic: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    english: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    symbol: z.lazy(() => SortOrderSchema).optional(),
    buyExchangeRate: z.lazy(() => SortOrderSchema).optional(),
    SellExchangeRate: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CurrencyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CurrencyAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CurrencyMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CurrencyMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CurrencySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CurrencyOrderByWithAggregationInputObjectSchema = Schema;
