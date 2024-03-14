/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FingerTypeEnumCountOrderByAggregateInputObjectSchema } from './FingerTypeEnumCountOrderByAggregateInput.schema';
import { FingerTypeEnumMaxOrderByAggregateInputObjectSchema } from './FingerTypeEnumMaxOrderByAggregateInput.schema';
import { FingerTypeEnumMinOrderByAggregateInputObjectSchema } from './FingerTypeEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumOrderByWithAggregationInput>;
export const FingerTypeEnumOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => FingerTypeEnumCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => FingerTypeEnumMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => FingerTypeEnumMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
