/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusMaxOrderByAggregateInput>;
export const ReviewStatusMaxOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        updatedById: z.lazy(() => SortOrderSchema).optional(),
        transactionReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
        medicalReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
