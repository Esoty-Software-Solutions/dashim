/* eslint-disable */
import { z } from 'zod';
import { CountryEnumSelectObjectSchema } from './CountryEnumSelect.schema';
import { CountryEnumIncludeObjectSchema } from './CountryEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumArgs>;
export const CountryEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => CountryEnumSelectObjectSchema).optional(),
        include: z.lazy(() => CountryEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
