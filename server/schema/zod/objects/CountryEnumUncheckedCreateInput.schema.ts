/* eslint-disable */
import { z } from 'zod';
import { CityEnumUncheckedCreateNestedManyWithoutCountryInputObjectSchema } from './CityEnumUncheckedCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumUncheckedCreateInput>;
export const CountryEnumUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        code: z.string(),
        cities: z.lazy(() => CityEnumUncheckedCreateNestedManyWithoutCountryInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
