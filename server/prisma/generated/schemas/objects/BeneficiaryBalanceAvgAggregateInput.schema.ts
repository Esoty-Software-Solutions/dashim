import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceAvgAggregateInputType> = z
  .object({
    balance: z.literal(true).optional(),
  })
  .strict();

export const BeneficiaryBalanceAvgAggregateInputObjectSchema = Schema;
