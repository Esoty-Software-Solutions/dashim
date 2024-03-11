/* eslint-disable */
import { z } from 'zod';
import { CountryEnumWhereInputObjectSchema } from './CountryEnumWhereInput.schema';
import { CountryEnumUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUpdateWithoutCitiesInput.schema';
import { CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedUpdateWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumUpdateToOneWithWhereWithoutCitiesInput>;
export const CountryEnumUpdateToOneWithWhereWithoutCitiesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CountryEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => CountryEnumUpdateWithoutCitiesInputObjectSchema),
            z.lazy(() => CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
