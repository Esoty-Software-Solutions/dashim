import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
  })
  .strict();

export const GenderEnumWhereUniqueInputObjectSchema = Schema;
