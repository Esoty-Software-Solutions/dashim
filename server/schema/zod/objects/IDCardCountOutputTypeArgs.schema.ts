/* eslint-disable */
import { z } from 'zod';
import { IDCardCountOutputTypeSelectObjectSchema } from './IDCardCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardCountOutputTypeArgs>;
export const IDCardCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => IDCardCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
