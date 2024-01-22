import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusRelationFilter> = z
  .object({
    is: z
      .lazy(() => ReviewStatusWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ReviewStatusWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ReviewStatusRelationFilterObjectSchema = Schema;
