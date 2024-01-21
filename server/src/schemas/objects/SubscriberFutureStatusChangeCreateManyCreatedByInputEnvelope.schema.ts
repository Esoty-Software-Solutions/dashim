import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateManyCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateManyCreatedByInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              SubscriberFutureStatusChangeCreateManyCreatedByInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema =
  Schema;
