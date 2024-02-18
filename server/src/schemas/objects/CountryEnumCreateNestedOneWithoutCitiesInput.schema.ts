import { z } from 'zod';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';
import { CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema } from './CountryEnumCreateOrConnectWithoutCitiesInput.schema';
import { CountryEnumWhereUniqueInputObjectSchema } from './CountryEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryEnumCreateNestedOneWithoutCitiesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
        z.lazy(() => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CountryEnumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CountryEnumCreateNestedOneWithoutCitiesInputObjectSchema = Schema;
