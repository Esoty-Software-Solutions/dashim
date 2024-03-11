import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusListRelationFilter> = z
  .object({
    every: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
    some: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
    none: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
  })
  .strict();

export const ReviewStatusListRelationFilterObjectSchema = Schema;
