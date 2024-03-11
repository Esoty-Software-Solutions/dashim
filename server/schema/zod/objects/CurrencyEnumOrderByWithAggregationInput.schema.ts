/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CurrencyEnumCountOrderByAggregateInputObjectSchema } from './CurrencyEnumCountOrderByAggregateInput.schema';
import { CurrencyEnumAvgOrderByAggregateInputObjectSchema } from './CurrencyEnumAvgOrderByAggregateInput.schema';
import { CurrencyEnumMaxOrderByAggregateInputObjectSchema } from './CurrencyEnumMaxOrderByAggregateInput.schema';
import { CurrencyEnumMinOrderByAggregateInputObjectSchema } from './CurrencyEnumMinOrderByAggregateInput.schema';
import { CurrencyEnumSumOrderByAggregateInputObjectSchema } from './CurrencyEnumSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumOrderByWithAggregationInput>;
export const CurrencyEnumOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        code: z.lazy(() => SortOrderSchema).optional(),
        symbol: z.lazy(() => SortOrderSchema).optional(),
        buyExchangeRate: z.lazy(() => SortOrderSchema).optional(),
        SellExchangeRate: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => CurrencyEnumCountOrderByAggregateInputObjectSchema).optional(),
        _avg: z.lazy(() => CurrencyEnumAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => CurrencyEnumMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => CurrencyEnumMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => CurrencyEnumSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
