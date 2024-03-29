/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NestedBoolFilter>;
export const NestedBoolFilterObjectSchema: SchemaType = z
    .object({
        equals: z.boolean().optional(),
        not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
