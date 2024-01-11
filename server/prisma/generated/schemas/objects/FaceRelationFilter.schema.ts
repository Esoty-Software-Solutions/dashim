import { z } from 'zod';
import { FaceWhereInputObjectSchema } from './FaceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceRelationFilter> = z
  .object({
    is: z
      .lazy(() => FaceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FaceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FaceRelationFilterObjectSchema = Schema;
