import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicySumAggregateInputType> = z
  .object({
    coPay: z.literal(true).optional(),
    limit: z.literal(true).optional(),
  })
  .strict();

export const InsurancePolicySumAggregateInputObjectSchema = Schema;
