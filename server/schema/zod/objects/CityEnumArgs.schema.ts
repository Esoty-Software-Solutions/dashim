/* eslint-disable */
import { z } from 'zod';
import { CityEnumSelectObjectSchema } from './CityEnumSelect.schema';
import { CityEnumIncludeObjectSchema } from './CityEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumArgs>;
export const CityEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => CityEnumSelectObjectSchema).optional(),
        include: z.lazy(() => CityEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
