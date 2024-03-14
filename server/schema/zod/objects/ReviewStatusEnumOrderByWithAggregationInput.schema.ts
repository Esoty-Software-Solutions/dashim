/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewStatusEnumCountOrderByAggregateInputObjectSchema } from './ReviewStatusEnumCountOrderByAggregateInput.schema';
import { ReviewStatusEnumMaxOrderByAggregateInputObjectSchema } from './ReviewStatusEnumMaxOrderByAggregateInput.schema';
import { ReviewStatusEnumMinOrderByAggregateInputObjectSchema } from './ReviewStatusEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumOrderByWithAggregationInput>;
export const ReviewStatusEnumOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ReviewStatusEnumCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => ReviewStatusEnumMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => ReviewStatusEnumMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
