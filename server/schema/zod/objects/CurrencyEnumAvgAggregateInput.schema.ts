/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumAvgAggregateInputType>;
export const CurrencyEnumAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        buyExchangeRate: z.literal(true).optional(),
        SellExchangeRate: z.literal(true).optional(),
    })
    .strict() as SchemaType;
