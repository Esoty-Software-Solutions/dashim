import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
      beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
      balance: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriberGroupBalanceCountOrderByAggregateInputObjectSchema =
  Schema;
