import { z } from 'zod';
import { SubscriberGroupBalanceWhereInputObjectSchema } from './SubscriberGroupBalanceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceListRelationFilter> = z
  .object({
    every: z
      .lazy(() => SubscriberGroupBalanceWhereInputObjectSchema)
      .optional(),
    some: z.lazy(() => SubscriberGroupBalanceWhereInputObjectSchema).optional(),
    none: z.lazy(() => SubscriberGroupBalanceWhereInputObjectSchema).optional(),
  })
  .strict();

export const SubscriberGroupBalanceListRelationFilterObjectSchema = Schema;
