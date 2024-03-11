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
    createdById: z.lazy(() => SortOrderSchema).optional(),
    updatedById: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    transactionReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    medicalReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
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
