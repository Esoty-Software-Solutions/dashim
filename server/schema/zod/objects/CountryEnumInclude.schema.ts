/* eslint-disable */
import { z } from 'zod';
import { CityEnumInputSchema } from '../input/CityEnumInput.schema';
import { CountryEnumCountOutputTypeArgsObjectSchema } from './CountryEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumInclude>;
export const CountryEnumIncludeObjectSchema: SchemaType = z
    .object({
        cities: z.union([z.boolean(), z.lazy(() => CityEnumInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CountryEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
