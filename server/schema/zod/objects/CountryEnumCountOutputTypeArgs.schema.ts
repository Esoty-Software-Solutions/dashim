/* eslint-disable */
import { z } from 'zod';
import { CountryEnumCountOutputTypeSelectObjectSchema } from './CountryEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumCountOutputTypeArgs>;
export const CountryEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => CountryEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
