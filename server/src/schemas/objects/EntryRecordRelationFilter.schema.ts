import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordRelationFilter> = z
  .object({
    is: z
      .lazy(() => EntryRecordWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EntryRecordWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EntryRecordRelationFilterObjectSchema = Schema;
