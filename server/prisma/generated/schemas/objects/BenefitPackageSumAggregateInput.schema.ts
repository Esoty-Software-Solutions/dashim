import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageSumAggregateInputType> = z
  .object({
    limit: z.literal(true).optional(),
  })
  .strict();

export const BenefitPackageSumAggregateInputObjectSchema = Schema;
