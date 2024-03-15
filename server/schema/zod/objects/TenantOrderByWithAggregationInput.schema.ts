/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantCountOrderByAggregateInputObjectSchema } from './TenantCountOrderByAggregateInput.schema';
import { TenantMaxOrderByAggregateInputObjectSchema } from './TenantMaxOrderByAggregateInput.schema';
import { TenantMinOrderByAggregateInputObjectSchema } from './TenantMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantOrderByWithAggregationInput>;
export const TenantOrderByWithAggregationInputObjectSchema: SchemaType = z
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
        name: z.lazy(() => SortOrderSchema).optional(),
        typeId: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        logo: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        website: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        address: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        city: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        country: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        ownerId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => TenantCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => TenantMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => TenantMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
