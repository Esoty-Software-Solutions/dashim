/* eslint-disable */
import { z } from 'zod';
import { CountryEnumCreateWithoutCitiesInputObjectSchema } from './CountryEnumCreateWithoutCitiesInput.schema';
import { CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedCreateWithoutCitiesInput.schema';
import { CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema } from './CountryEnumCreateOrConnectWithoutCitiesInput.schema';
import { CountryEnumUpsertWithoutCitiesInputObjectSchema } from './CountryEnumUpsertWithoutCitiesInput.schema';
import { CountryEnumWhereUniqueInputObjectSchema } from './CountryEnumWhereUniqueInput.schema';
import { CountryEnumUpdateToOneWithWhereWithoutCitiesInputObjectSchema } from './CountryEnumUpdateToOneWithWhereWithoutCitiesInput.schema';
import { CountryEnumUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUpdateWithoutCitiesInput.schema';
import { CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema } from './CountryEnumUncheckedUpdateWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumUpdateOneRequiredWithoutCitiesNestedInput>;
export const CountryEnumUpdateOneRequiredWithoutCitiesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CountryEnumCreateWithoutCitiesInputObjectSchema),
                z.lazy(() => CountryEnumUncheckedCreateWithoutCitiesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CountryEnumCreateOrConnectWithoutCitiesInputObjectSchema).optional(),
        upsert: z.lazy(() => CountryEnumUpsertWithoutCitiesInputObjectSchema).optional(),
        connect: z.lazy(() => CountryEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => CountryEnumUpdateToOneWithWhereWithoutCitiesInputObjectSchema),
                z.lazy(() => CountryEnumUpdateWithoutCitiesInputObjectSchema),
                z.lazy(() => CountryEnumUncheckedUpdateWithoutCitiesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
