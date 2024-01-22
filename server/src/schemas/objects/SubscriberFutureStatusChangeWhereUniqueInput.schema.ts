import { z } from 'zod';
import { SubscriberFutureStatusChangeSubscriberIdChangeDateCompoundUniqueInputObjectSchema } from './SubscriberFutureStatusChangeSubscriberIdChangeDateCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    subscriberId: z.string().optional(),
    subscriberId_changeDate: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeSubscriberIdChangeDateCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberFutureStatusChangeWhereUniqueInputObjectSchema = Schema;
