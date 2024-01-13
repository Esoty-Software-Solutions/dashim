import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceAvgAggregateInputType> = z
  .object({
    balance: z.literal(true).optional(),
  })
  .strict();

export const SubscriberGroupBalanceAvgAggregateInputObjectSchema = Schema;
