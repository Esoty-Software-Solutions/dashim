import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CountryRelationFilterObjectSchema } from './CountryRelationFilter.schema';
import { CountryWhereInputObjectSchema } from './CountryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CitiesWhereInputObjectSchema),
        z.lazy(() => CitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CitiesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CitiesWhereInputObjectSchema),
        z.lazy(() => CitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    arabic: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    english: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    countryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    country: z
      .union([
        z.lazy(() => CountryRelationFilterObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CitiesWhereInputObjectSchema = Schema;
