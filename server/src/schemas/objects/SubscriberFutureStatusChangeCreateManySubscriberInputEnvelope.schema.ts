import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateManySubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateManySubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateManySubscriberInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateManySubscriberInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              SubscriberFutureStatusChangeCreateManySubscriberInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateManySubscriberInputEnvelopeObjectSchema =
  Schema;
