/* eslint-disable */
import { z } from 'zod';
import { NestedFloatNullableWithAggregatesFilterObjectSchema } from './NestedFloatNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FloatNullableWithAggregatesFilter>;
export const FloatNullableWithAggregatesFilterObjectSchema: SchemaType = z
    .object({
        equals: z.union([z.number(), z.null()]).optional().nullable(),
        in: z.union([z.number().array(), z.null()]).optional().nullable(),
        notIn: z.union([z.number().array(), z.null()]).optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedFloatNullableWithAggregatesFilterObjectSchema), z.null()])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
        _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
        _sum: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
        _min: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
        _max: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
