/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumCreateWithoutCountryInputObjectSchema } from './CityEnumCreateWithoutCountryInput.schema';
import { CityEnumUncheckedCreateWithoutCountryInputObjectSchema } from './CityEnumUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateOrConnectWithoutCountryInput>;
export const CityEnumCreateOrConnectWithoutCountryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutCountryInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutCountryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
