/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateManyCountryInputObjectSchema } from './CityEnumCreateManyCountryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateManyCountryInputEnvelope>;
export const CityEnumCreateManyCountryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => CityEnumCreateManyCountryInputObjectSchema),
            z.lazy(() => CityEnumCreateManyCountryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
