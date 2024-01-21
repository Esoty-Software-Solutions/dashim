import { z } from 'zod';
import { SubscriberCreateManyStatusSetByInputObjectSchema } from './SubscriberCreateManyStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateManyStatusSetByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SubscriberCreateManyStatusSetByInputObjectSchema),
      z.lazy(() => SubscriberCreateManyStatusSetByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SubscriberCreateManyStatusSetByInputEnvelopeObjectSchema = Schema;
