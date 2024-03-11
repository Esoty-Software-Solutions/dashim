import { z } from 'zod';
import { FingerTypeEnumWhereInputObjectSchema } from './FingerTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => FingerTypeEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FingerTypeEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FingerTypeEnumRelationFilterObjectSchema = Schema;
