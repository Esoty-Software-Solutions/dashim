import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceAvgAggregateInputType> = z
  .object({
    cash: z.literal(true).optional(),
    limit: z.literal(true).optional(),
    deffered: z.literal(true).optional(),
  })
  .strict();

export const PatientServiceAvgAggregateInputObjectSchema = Schema;
