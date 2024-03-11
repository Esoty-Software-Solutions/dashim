/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumSumOrderByAggregateInput>;
export const CurrencyEnumSumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        buyExchangeRate: z.lazy(() => SortOrderSchema).optional(),
        SellExchangeRate: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
