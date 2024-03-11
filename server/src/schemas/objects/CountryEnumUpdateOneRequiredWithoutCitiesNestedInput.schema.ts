import { z } from 'zod';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';
import { CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema } from './CountryEnumCreateOrConnectWithoutCitiesInput.schema';
import { CountryEnumUpsertWithoutCitiesInputObjectSchema } from './CountryEnumUpsertWithoutCitiesInput.schema';
import { CountryEnumWhereUniqueInputObjectSchema } from './CountryEnumWhereUniqueInput.schema';
import { CountryEnumUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUpdateWithoutCitiesInput.schema';
import { CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedUpdateWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryEnumUpdateOneRequiredWithoutCitiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
          z.lazy(
            () => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CountryEnumUpsertWithoutCitiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CountryEnumWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CountryEnumUpdateWithoutCitiesInputObjectSchema),
          z.lazy(
            () => CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CountryEnumUpdateOneRequiredWithoutCitiesNestedInputObjectSchema =
  Schema;
