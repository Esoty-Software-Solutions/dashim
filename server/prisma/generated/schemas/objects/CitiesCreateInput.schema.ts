import { z } from 'zod';
import { CountryCreateNestedOneWithoutCitiesInputObjectSchema } from './CountryCreateNestedOneWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    country: z.lazy(() => CountryCreateNestedOneWithoutCitiesInputObjectSchema),
  })
  .strict();

export const CitiesCreateInputObjectSchema = Schema;
