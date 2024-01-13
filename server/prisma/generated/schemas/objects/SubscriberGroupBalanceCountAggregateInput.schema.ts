import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCountAggregateInputType> =
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      isPublished: z.literal(true).optional(),
      isSoftDeleted: z.literal(true).optional(),
      subscriberGroupId: z.literal(true).optional(),
      beneftiPackageId: z.literal(true).optional(),
      balance: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();

export const SubscriberGroupBalanceCountAggregateInputObjectSchema = Schema;
