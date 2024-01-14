import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CoPayDistributionSumAggregateInputType> = z
  .object({
    threashold: z.literal(true).optional(),
    Percentage: z.literal(true).optional(),
  })
  .strict();

export const CoPayDistributionSumAggregateInputObjectSchema = Schema;
