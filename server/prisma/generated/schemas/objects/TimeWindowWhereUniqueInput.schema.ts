import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    medicalCenterId: z.string().optional(),
  })
  .strict();

export const TimeWindowWhereUniqueInputObjectSchema = Schema;
