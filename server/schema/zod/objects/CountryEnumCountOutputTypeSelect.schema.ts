/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumCountOutputTypeSelect>;
export const CountryEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        cities: z.boolean().optional(),
    })
    .strict() as SchemaType;
