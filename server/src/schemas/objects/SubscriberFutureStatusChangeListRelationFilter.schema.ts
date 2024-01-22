import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereInputObjectSchema } from './SubscriberFutureStatusChangeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberFutureStatusChangeListRelationFilterObjectSchema =
  Schema;
