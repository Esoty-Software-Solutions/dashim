/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IntNullableListFilter>;
export const IntNullableListFilterObjectSchema: SchemaType = z
    .object({
        equals: z.union([z.number().array(), z.null()]).optional().nullable(),
        has: z.union([z.number(), z.null()]).optional().nullable(),
        hasEvery: z.number().array().optional(),
        hasSome: z.number().array().optional(),
        isEmpty: z.boolean().optional(),
    })
    .strict() as SchemaType;
