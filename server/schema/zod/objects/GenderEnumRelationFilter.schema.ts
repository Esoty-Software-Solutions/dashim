/* eslint-disable */
import { z } from 'zod';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumRelationFilter>;
export const GenderEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => GenderEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => GenderEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
