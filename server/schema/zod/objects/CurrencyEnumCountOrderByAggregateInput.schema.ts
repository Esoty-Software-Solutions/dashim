/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumCountOrderByAggregateInput>;
export const CurrencyEnumCountOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.lazy(() => SortOrderSchema).optional(),
        english: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        code: z.lazy(() => SortOrderSchema).optional(),
        symbol: z.lazy(() => SortOrderSchema).optional(),
        buyExchangeRate: z.lazy(() => SortOrderSchema).optional(),
        SellExchangeRate: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
