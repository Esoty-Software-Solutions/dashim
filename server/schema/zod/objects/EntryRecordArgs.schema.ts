/* eslint-disable */
import { z } from 'zod';
import { EntryRecordSelectObjectSchema } from './EntryRecordSelect.schema';
import { EntryRecordIncludeObjectSchema } from './EntryRecordInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordArgs>;
export const EntryRecordArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => EntryRecordSelectObjectSchema).optional(),
        include: z.lazy(() => EntryRecordIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
