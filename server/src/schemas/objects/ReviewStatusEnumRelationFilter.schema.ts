import { z } from 'zod';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => ReviewStatusEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ReviewStatusEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ReviewStatusEnumRelationFilterObjectSchema = Schema;
