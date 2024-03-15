/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryFutureStatusChangeCountOrderByAggregateInputObjectSchema } from './BeneficiaryFutureStatusChangeCountOrderByAggregateInput.schema';
import { BeneficiaryFutureStatusChangeMaxOrderByAggregateInputObjectSchema } from './BeneficiaryFutureStatusChangeMaxOrderByAggregateInput.schema';
import { BeneficiaryFutureStatusChangeMinOrderByAggregateInputObjectSchema } from './BeneficiaryFutureStatusChangeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeOrderByWithAggregationInput>;
export const BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        updatedById: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        changeDate: z.lazy(() => SortOrderSchema).optional(),
        futureStatus: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => BeneficiaryFutureStatusChangeCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => BeneficiaryFutureStatusChangeMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => BeneficiaryFutureStatusChangeMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
