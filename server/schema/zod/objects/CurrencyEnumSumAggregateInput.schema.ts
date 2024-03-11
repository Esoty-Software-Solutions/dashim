/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumSumAggregateInputType>;
export const CurrencyEnumSumAggregateInputObjectSchema: SchemaType = z
    .object({
        buyExchangeRate: z.literal(true).optional(),
        SellExchangeRate: z.literal(true).optional(),
    })
    .strict() as SchemaType;
