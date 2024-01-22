import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceSumAggregateInputType> = z
  .object({
    basePrice: z.literal(true).optional(),
  })
  .strict();

export const MedicalServiceSumAggregateInputObjectSchema = Schema;
