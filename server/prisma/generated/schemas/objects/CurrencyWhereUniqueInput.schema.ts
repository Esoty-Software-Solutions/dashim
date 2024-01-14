import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CurrencyWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    code: z.string().optional(),
  })
  .strict();

export const CurrencyWhereUniqueInputObjectSchema = Schema;
