import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    subscriberGroupId: z.string(),
    beneftiPackageId: z.string(),
    balance: z.number(),
  })
  .strict();

export const SubscriberGroupBalanceCreateManyInputObjectSchema = Schema;
