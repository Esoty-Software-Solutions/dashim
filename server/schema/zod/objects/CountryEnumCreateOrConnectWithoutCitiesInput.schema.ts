/* eslint-disable */
import { z } from 'zod';
import { CountryEnumWhereUniqueInputObjectSchema } from './CountryEnumWhereUniqueInput.schema';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumCreateOrConnectWithoutCitiesInput>;
export const CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CountryEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
            z.lazy(() => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
