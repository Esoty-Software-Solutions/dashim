import { z } from 'zod';
import { EntryRecordCreateManyIdCardInputObjectSchema } from './EntryRecordCreateManyIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyIdCardInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EntryRecordCreateManyIdCardInputObjectSchema),
      z.lazy(() => EntryRecordCreateManyIdCardInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EntryRecordCreateManyIdCardInputEnvelopeObjectSchema = Schema;
