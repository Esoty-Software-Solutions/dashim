/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantTypeEnumCountOrderByAggregateInputObjectSchema } from './TenantTypeEnumCountOrderByAggregateInput.schema';
import { TenantTypeEnumMaxOrderByAggregateInputObjectSchema } from './TenantTypeEnumMaxOrderByAggregateInput.schema';
import { TenantTypeEnumMinOrderByAggregateInputObjectSchema } from './TenantTypeEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumOrderByWithAggregationInput>;
export const TenantTypeEnumOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => TenantTypeEnumCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => TenantTypeEnumMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => TenantTypeEnumMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
