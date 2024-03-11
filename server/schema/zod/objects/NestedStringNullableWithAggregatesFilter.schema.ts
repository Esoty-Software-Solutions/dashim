/* eslint-disable */
import { z } from 'zod';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter>;
export const NestedStringNullableWithAggregatesFilterObjectSchema: SchemaType = z
    .object({
        equals: z.union([z.string(), z.null()]).optional().nullable(),
        in: z.union([z.string().array(), z.null()]).optional().nullable(),
        notIn: z.union([z.string().array(), z.null()]).optional().nullable(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        not: z
            .union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema), z.null()])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
        _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
        _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
