import { z } from 'zod';
import { EntryRecordCreateManyCreatedByInputObjectSchema } from './EntryRecordCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EntryRecordCreateManyCreatedByInputObjectSchema),
      z.lazy(() => EntryRecordCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EntryRecordCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
