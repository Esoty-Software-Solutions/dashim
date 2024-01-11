import { z } from 'zod';
import { EntryRecordCreateManySubscriberGroupInputObjectSchema } from './EntryRecordCreateManySubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManySubscriberGroupInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EntryRecordCreateManySubscriberGroupInputObjectSchema),
        z
          .lazy(() => EntryRecordCreateManySubscriberGroupInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManySubscriberGroupInputEnvelopeObjectSchema =
  Schema;
