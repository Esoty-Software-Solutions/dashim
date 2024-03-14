/* eslint-disable */
import { z } from 'zod';
import { GenderEnumSelectObjectSchema } from './GenderEnumSelect.schema';
import { GenderEnumIncludeObjectSchema } from './GenderEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumArgs>;
export const GenderEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => GenderEnumSelectObjectSchema).optional(),
        include: z.lazy(() => GenderEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
