import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyAvgAggregateInputType> = z
  .object({
    Accumulatedlimit: z.literal(true).optional(),
    serviceEntryTimeWindow: z.literal(true).optional(),
  })
  .strict();

export const InsurancePolicyAvgAggregateInputObjectSchema = Schema;
