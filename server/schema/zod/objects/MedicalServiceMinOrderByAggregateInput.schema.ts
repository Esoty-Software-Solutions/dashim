/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceMinOrderByAggregateInput>;
export const MedicalServiceMinOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z.lazy(() => SortOrderSchema).optional(),
        deactivationDate: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        medicalCenterCode: z.lazy(() => SortOrderSchema).optional(),
        basePrice: z.lazy(() => SortOrderSchema).optional(),
        medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
        categoryId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
