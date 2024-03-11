/* eslint-disable */
import { z } from 'zod';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';
import { CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema } from './CountryEnumCreateOrConnectWithoutCitiesInput.schema';
import { CountryEnumWhereUniqueInputObjectSchema } from './CountryEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumCreateNestedOneWithoutCitiesInput>;
export const CountryEnumCreateNestedOneWithoutCitiesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
                z.lazy(() => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema).optional(),
        connect: z.lazy(() => CountryEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
