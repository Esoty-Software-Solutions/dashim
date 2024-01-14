import { z } from 'zod';
import { CitiesWhereInputObjectSchema } from './CitiesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesListRelationFilter> = z
  .object({
    every: z.lazy(() => CitiesWhereInputObjectSchema).optional(),
    some: z.lazy(() => CitiesWhereInputObjectSchema).optional(),
    none: z.lazy(() => CitiesWhereInputObjectSchema).optional(),
  })
  .strict();

export const CitiesListRelationFilterObjectSchema = Schema;
