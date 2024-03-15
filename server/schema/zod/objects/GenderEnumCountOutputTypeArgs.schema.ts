/* eslint-disable */
import { z } from 'zod';
import { GenderEnumCountOutputTypeSelectObjectSchema } from './GenderEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCountOutputTypeArgs>;
export const GenderEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => GenderEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
