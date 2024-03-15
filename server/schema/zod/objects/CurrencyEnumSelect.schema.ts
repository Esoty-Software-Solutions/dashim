/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumSelect>;
export const CurrencyEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        code: z.boolean().optional(),
        symbol: z.boolean().optional(),
        buyExchangeRate: z.boolean().optional(),
        SellExchangeRate: z.boolean().optional(),
    })
    .strict() as SchemaType;
