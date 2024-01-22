import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordListRelationFilter> = z
  .object({
    every: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
    some: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
    none: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
  })
  .strict();

export const EntryRecordListRelationFilterObjectSchema = Schema;
