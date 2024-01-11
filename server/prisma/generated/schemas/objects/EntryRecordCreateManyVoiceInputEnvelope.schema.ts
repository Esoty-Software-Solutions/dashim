import { z } from 'zod';
import { EntryRecordCreateManyVoiceInputObjectSchema } from './EntryRecordCreateManyVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyVoiceInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EntryRecordCreateManyVoiceInputObjectSchema),
      z.lazy(() => EntryRecordCreateManyVoiceInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EntryRecordCreateManyVoiceInputEnvelopeObjectSchema = Schema;
