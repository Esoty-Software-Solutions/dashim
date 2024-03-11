/* eslint-disable */
import { z } from 'zod';
import { CountryEnumUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUpdateWithoutCitiesInput.schema';
import { CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedUpdateWithoutCitiesInput.schema';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';
import { CountryEnumWhereInputObjectSchema } from './CountryEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumUpsertWithoutCitiesInput>;
export const CountryEnumUpsertWithoutCitiesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => CountryEnumUpdateWithoutCitiesInputObjectSchema),
            z.lazy(() => CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
            z.lazy(() => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema),
        ]),
        where: z.lazy(() => CountryEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
