/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberMaxOrderByAggregateInput>;
export const TenantMemberMaxOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z.lazy(() => SortOrderSchema).optional(),
        deactivationDate: z.lazy(() => SortOrderSchema).optional(),
        tenantId: z.lazy(() => SortOrderSchema).optional(),
        memberId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
