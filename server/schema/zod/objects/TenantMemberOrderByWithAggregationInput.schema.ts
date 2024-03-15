/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantMemberCountOrderByAggregateInputObjectSchema } from './TenantMemberCountOrderByAggregateInput.schema';
import { TenantMemberMaxOrderByAggregateInputObjectSchema } from './TenantMemberMaxOrderByAggregateInput.schema';
import { TenantMemberMinOrderByAggregateInputObjectSchema } from './TenantMemberMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberOrderByWithAggregationInput>;
export const TenantMemberOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        tenantId: z.lazy(() => SortOrderSchema).optional(),
        memberId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => TenantMemberCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => TenantMemberMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => TenantMemberMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
