/* eslint-disable */
import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardListRelationFilter>;
export const IDCardListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
        some: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
        none: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
