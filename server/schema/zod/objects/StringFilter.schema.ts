/* eslint-disable */
import { z } from 'zod';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.StringFilter>;
export const StringFilterObjectSchema: SchemaType = z
    .object({
        equals: z.string().optional(),
        in: z.string().array().optional(),
        notIn: z.string().array().optional(),
        lt: z.string().optional(),
        lte: z.string().optional(),
        gt: z.string().optional(),
        gte: z.string().optional(),
        contains: z.string().optional(),
        startsWith: z.string().optional(),
        endsWith: z.string().optional(),
        mode: z.lazy(() => QueryModeSchema).optional(),
        not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
