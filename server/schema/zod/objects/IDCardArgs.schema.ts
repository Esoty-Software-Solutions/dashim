/* eslint-disable */
import { z } from 'zod';
import { IDCardSelectObjectSchema } from './IDCardSelect.schema';
import { IDCardIncludeObjectSchema } from './IDCardInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardArgs>;
export const IDCardArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => IDCardSelectObjectSchema).optional(),
        include: z.lazy(() => IDCardIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
