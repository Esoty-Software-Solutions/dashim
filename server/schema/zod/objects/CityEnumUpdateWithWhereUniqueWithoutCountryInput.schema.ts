/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateWithoutCountryInputObjectSchema } from './CityEnumUpdateWithoutCountryInput.schema';
import { CityEnumUncheckedUpdateWithoutCountryInputObjectSchema } from './CityEnumUncheckedUpdateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateWithWhereUniqueWithoutCountryInput>;
export const CityEnumUpdateWithWhereUniqueWithoutCountryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => CityEnumUpdateWithoutCountryInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutCountryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
