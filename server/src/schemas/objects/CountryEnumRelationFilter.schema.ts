import { z } from 'zod';
import { CountryEnumWhereInputObjectSchema } from './CountryEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => CountryEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CountryEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CountryEnumRelationFilterObjectSchema = Schema;
