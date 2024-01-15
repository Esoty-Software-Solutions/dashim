import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceAvgAggregateInputType> = z
  .object({
    basePrice: z.literal(true).optional(),
  })
  .strict();

export const MedicalCenterServiceAvgAggregateInputObjectSchema = Schema;
