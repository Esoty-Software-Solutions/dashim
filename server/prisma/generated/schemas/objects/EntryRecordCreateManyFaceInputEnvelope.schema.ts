import { z } from 'zod';
import { EntryRecordCreateManyFaceInputObjectSchema } from './EntryRecordCreateManyFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyFaceInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EntryRecordCreateManyFaceInputObjectSchema),
      z.lazy(() => EntryRecordCreateManyFaceInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EntryRecordCreateManyFaceInputEnvelopeObjectSchema = Schema;
