/* eslint-disable */
import { z } from 'zod';
import { CityEnumInputSchema } from '../input/CityEnumInput.schema';
import { CountryEnumCountOutputTypeArgsObjectSchema } from './CountryEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumSelect>;
export const CountryEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        code: z.boolean().optional(),
        cities: z.union([z.boolean(), z.lazy(() => CityEnumInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CountryEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
