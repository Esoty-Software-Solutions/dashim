import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateManyUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateManyUpdatedByInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              SubscriberFutureStatusChangeCreateManyUpdatedByInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema =
  Schema;
