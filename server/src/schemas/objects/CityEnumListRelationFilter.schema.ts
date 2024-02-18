import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumListRelationFilter> = z
  .object({
    every: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    some: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    none: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
  })
  .strict();

export const CityEnumListRelationFilterObjectSchema = Schema;
