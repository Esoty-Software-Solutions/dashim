/* eslint-disable */
import { z } from 'zod';
import { CityEnumScalarWhereInputObjectSchema } from './CityEnumScalarWhereInput.schema';
import { CityEnumUpdateManyMutationInputObjectSchema } from './CityEnumUpdateManyMutationInput.schema';
import { CityEnumUncheckedUpdateManyWithoutCountryInputObjectSchema } from './CityEnumUncheckedUpdateManyWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateManyWithWhereWithoutCountryInput>;
export const CityEnumUpdateManyWithWhereWithoutCountryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => CityEnumUpdateManyMutationInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateManyWithoutCountryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
