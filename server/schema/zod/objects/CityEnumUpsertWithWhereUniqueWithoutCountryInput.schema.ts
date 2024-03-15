/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateWithoutCountryInputObjectSchema } from './CityEnumUpdateWithoutCountryInput.schema';
import { CityEnumUncheckedUpdateWithoutCountryInputObjectSchema } from './CityEnumUncheckedUpdateWithoutCountryInput.schema';
import { CityEnumCreateWithoutCountryInputObjectSchema } from './CityEnumCreateWithoutCountryInput.schema';
import { CityEnumUncheckedCreateWithoutCountryInputObjectSchema } from './CityEnumUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpsertWithWhereUniqueWithoutCountryInput>;
export const CityEnumUpsertWithWhereUniqueWithoutCountryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => CityEnumUpdateWithoutCountryInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutCountryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutCountryInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutCountryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
