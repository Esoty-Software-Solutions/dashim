/* eslint-disable */
import { z } from 'zod';
import { CountryEnumWhereInputObjectSchema } from './CountryEnumWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CityEnumListRelationFilterObjectSchema } from './CityEnumListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumWhereUniqueInput>;
export const CountryEnumWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        code: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => CountryEnumWhereInputObjectSchema),
                z.lazy(() => CountryEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => CountryEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => CountryEnumWhereInputObjectSchema),
                z.lazy(() => CountryEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        arabic: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        cities: z.lazy(() => CityEnumListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
