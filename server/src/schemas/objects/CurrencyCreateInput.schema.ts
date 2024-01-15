import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CurrencyCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    code: z.string(),
    symbol: z.string(),
    BuyexchangeRate: z.number().optional(),
    SellExchangeRate: z.number().optional(),
  })
  .strict();

export const CurrencyCreateInputObjectSchema = Schema;
