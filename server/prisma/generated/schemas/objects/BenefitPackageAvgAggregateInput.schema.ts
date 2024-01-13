import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageAvgAggregateInputType> = z
  .object({
    limit: z.literal(true).optional(),
  })
  .strict();

export const BenefitPackageAvgAggregateInputObjectSchema = Schema;