import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TimeWindowCountOrderByAggregateInputObjectSchema } from './TimeWindowCountOrderByAggregateInput.schema';
import { TimeWindowAvgOrderByAggregateInputObjectSchema } from './TimeWindowAvgOrderByAggregateInput.schema';
import { TimeWindowMaxOrderByAggregateInputObjectSchema } from './TimeWindowMaxOrderByAggregateInput.schema';
import { TimeWindowMinOrderByAggregateInputObjectSchema } from './TimeWindowMinOrderByAggregateInput.schema';
import { TimeWindowSumOrderByAggregateInputObjectSchema } from './TimeWindowSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowOrderByWithAggregationInput> = z
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
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TimeWindowCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TimeWindowAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TimeWindowMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TimeWindowMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TimeWindowSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TimeWindowOrderByWithAggregationInputObjectSchema = Schema;
