import { z } from 'zod';
import { SubscriberGroupBalanceCreateManySubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateManySubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceCreateManySubscriberGroupInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              SubscriberGroupBalanceCreateManySubscriberGroupInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelopeObjectSchema =
  Schema;
