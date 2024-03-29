/* eslint-disable */
import { z } from 'zod';
import { NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FloatFilter>;
export const FloatFilterObjectSchema: SchemaType = z
    .object({
        equals: z.number().optional(),
        in: z.number().array().optional(),
        notIn: z.number().array().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
