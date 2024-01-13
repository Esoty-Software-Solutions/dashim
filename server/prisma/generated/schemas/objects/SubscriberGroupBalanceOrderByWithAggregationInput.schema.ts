import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SubscriberGroupBalanceCountOrderByAggregateInputObjectSchema } from './SubscriberGroupBalanceCountOrderByAggregateInput.schema';
import { SubscriberGroupBalanceAvgOrderByAggregateInputObjectSchema } from './SubscriberGroupBalanceAvgOrderByAggregateInput.schema';
import { SubscriberGroupBalanceMaxOrderByAggregateInputObjectSchema } from './SubscriberGroupBalanceMaxOrderByAggregateInput.schema';
import { SubscriberGroupBalanceMinOrderByAggregateInputObjectSchema } from './SubscriberGroupBalanceMinOrderByAggregateInput.schema';
import { SubscriberGroupBalanceSumOrderByAggregateInputObjectSchema } from './SubscriberGroupBalanceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceOrderByWithAggregationInput> =
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
      _count: z
        .lazy(
          () => SubscriberGroupBalanceCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _avg: z
        .lazy(() => SubscriberGroupBalanceAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => SubscriberGroupBalanceMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => SubscriberGroupBalanceMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => SubscriberGroupBalanceSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupBalanceOrderByWithAggregationInputObjectSchema =
  Schema;
