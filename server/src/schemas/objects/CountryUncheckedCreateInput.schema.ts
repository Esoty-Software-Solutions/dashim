import { z } from 'zod';
import { CityUncheckedCreateNestedManyWithoutCountryInputObjectSchema } from './CityUncheckedCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryUncheckedCreateInput> = z
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
      .lazy(() => CityUncheckedCreateNestedManyWithoutCountryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CountryUncheckedCreateInputObjectSchema = Schema;
