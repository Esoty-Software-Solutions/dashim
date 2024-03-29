import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
  })
  .strict();

export const ReviewStatusEnumWhereUniqueInputObjectSchema = Schema;
