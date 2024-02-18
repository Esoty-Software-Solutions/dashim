import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceAvgAggregateInputType> = z
  .object({
    balancePending: z.literal(true).optional(),
    balanceActual: z.literal(true).optional(),
  })
  .strict();

export const BeneficiaryBalanceAvgAggregateInputObjectSchema = Schema;
