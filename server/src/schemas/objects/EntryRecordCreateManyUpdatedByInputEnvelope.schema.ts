import { z } from 'zod';
import { EntryRecordCreateManyUpdatedByInputObjectSchema } from './EntryRecordCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyUpdatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EntryRecordCreateManyUpdatedByInputObjectSchema),
      z.lazy(() => EntryRecordCreateManyUpdatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EntryRecordCreateManyUpdatedByInputEnvelopeObjectSchema = Schema;
