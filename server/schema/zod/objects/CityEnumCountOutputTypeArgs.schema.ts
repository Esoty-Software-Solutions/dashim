/* eslint-disable */
import { z } from 'zod';
import { CityEnumCountOutputTypeSelectObjectSchema } from './CityEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCountOutputTypeArgs>;
export const CityEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => CityEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
