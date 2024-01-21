import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeSubscriberIdChangeDateCompoundUniqueInput> =
  z
    .object({
      subscriberId: z.string(),
      changeDate: z.coerce.date(),
    })
    .strict();

export const SubscriberFutureStatusChangeSubscriberIdChangeDateCompoundUniqueInputObjectSchema =
  Schema;
