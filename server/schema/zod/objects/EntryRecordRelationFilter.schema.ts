/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordRelationFilter>;
export const EntryRecordRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
