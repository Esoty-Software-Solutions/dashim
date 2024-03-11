/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordListRelationFilter>;
export const EntryRecordListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
        some: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
        none: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
