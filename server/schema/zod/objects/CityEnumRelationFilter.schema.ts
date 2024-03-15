/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumRelationFilter>;
export const CityEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
