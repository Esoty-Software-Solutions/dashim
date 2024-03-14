/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterMaxOrderByAggregateInput>;
export const MedicalCenterMaxOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z.lazy(() => SortOrderSchema).optional(),
        deactivationDate: z.lazy(() => SortOrderSchema).optional(),
        cityId: z.lazy(() => SortOrderSchema).optional(),
        address: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        code: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        website: z.lazy(() => SortOrderSchema).optional(),
        facebookLink: z.lazy(() => SortOrderSchema).optional(),
        googleMapsLink: z.lazy(() => SortOrderSchema).optional(),
        twitterLink: z.lazy(() => SortOrderSchema).optional(),
        instagramLink: z.lazy(() => SortOrderSchema).optional(),
        latitude: z.lazy(() => SortOrderSchema).optional(),
        longitude: z.lazy(() => SortOrderSchema).optional(),
        managingTenantId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
