/* eslint-disable */
import { z } from 'zod';
import { CountryEnumWhereInputObjectSchema } from './CountryEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumRelationFilter>;
export const CountryEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => CountryEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => CountryEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
