import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => CityEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CityEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CityEnumRelationFilterObjectSchema = Schema;
