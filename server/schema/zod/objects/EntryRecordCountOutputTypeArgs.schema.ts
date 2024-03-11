/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCountOutputTypeSelectObjectSchema } from './EntryRecordCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCountOutputTypeArgs>;
export const EntryRecordCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => EntryRecordCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
