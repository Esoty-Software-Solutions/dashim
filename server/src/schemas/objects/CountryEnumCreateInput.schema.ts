import { z } from 'zod';
import { CityEnumCreateNestedManyWithoutCountryInputObjectSchema } from './CityEnumCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryEnumCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    code: z.string(),
    cities: z
      .lazy(() => CityEnumCreateNestedManyWithoutCountryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CountryEnumCreateInputObjectSchema = Schema;
