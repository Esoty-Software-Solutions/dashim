import { z } from 'zod';
import { CountryEnumUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUpdateWithoutCitiesInput.schema';
import { CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedUpdateWithoutCitiesInput.schema';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryEnumUpsertWithoutCitiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CountryEnumUpdateWithoutCitiesInputObjectSchema),
      z.lazy(() => CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
      z.lazy(() => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema),
    ]),
  })
  .strict();

export const CountryEnumUpsertWithoutCitiesInputObjectSchema = Schema;
