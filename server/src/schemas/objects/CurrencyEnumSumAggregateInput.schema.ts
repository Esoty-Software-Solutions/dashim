import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CurrencyEnumSumAggregateInputType> = z
  .object({
    buyExchangeRate: z.literal(true).optional(),
    SellExchangeRate: z.literal(true).optional(),
  })
  .strict();

export const CurrencyEnumSumAggregateInputObjectSchema = Schema;
