import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewStatusCountOrderByAggregateInputObjectSchema } from './ReviewStatusCountOrderByAggregateInput.schema';
import { ReviewStatusMaxOrderByAggregateInputObjectSchema } from './ReviewStatusMaxOrderByAggregateInput.schema';
import { ReviewStatusMinOrderByAggregateInputObjectSchema } from './ReviewStatusMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    arabic: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    english: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReviewStatusCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ReviewStatusMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ReviewStatusMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewStatusOrderByWithAggregationInputObjectSchema = Schema;
