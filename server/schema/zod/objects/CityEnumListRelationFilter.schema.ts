/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumListRelationFilter>;
export const CityEnumListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
        some: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
        none: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
