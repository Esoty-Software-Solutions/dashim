import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CoPayDistributionCountOrderByAggregateInputObjectSchema } from './CoPayDistributionCountOrderByAggregateInput.schema';
import { CoPayDistributionAvgOrderByAggregateInputObjectSchema } from './CoPayDistributionAvgOrderByAggregateInput.schema';
import { CoPayDistributionMaxOrderByAggregateInputObjectSchema } from './CoPayDistributionMaxOrderByAggregateInput.schema';
import { CoPayDistributionMinOrderByAggregateInputObjectSchema } from './CoPayDistributionMinOrderByAggregateInput.schema';
import { CoPayDistributionSumOrderByAggregateInputObjectSchema } from './CoPayDistributionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CoPayDistributionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    threashold: z.lazy(() => SortOrderSchema).optional(),
    Percentage: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CoPayDistributionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => CoPayDistributionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CoPayDistributionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CoPayDistributionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => CoPayDistributionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CoPayDistributionOrderByWithAggregationInputObjectSchema = Schema;
