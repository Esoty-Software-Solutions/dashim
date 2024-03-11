import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardRelationFilter> = z
  .object({
    is: z
      .lazy(() => IDCardWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => IDCardWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const IDCardRelationFilterObjectSchema = Schema;
