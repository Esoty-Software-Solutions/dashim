/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalServiceCategoryCountOrderByAggregateInputObjectSchema } from './MedicalServiceCategoryCountOrderByAggregateInput.schema';
import { MedicalServiceCategoryMaxOrderByAggregateInputObjectSchema } from './MedicalServiceCategoryMaxOrderByAggregateInput.schema';
import { MedicalServiceCategoryMinOrderByAggregateInputObjectSchema } from './MedicalServiceCategoryMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryOrderByWithAggregationInput>;
export const MedicalServiceCategoryOrderByWithAggregationInputObjectSchema: SchemaType = z
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
        dalilCode: z.lazy(() => SortOrderSchema).optional(),
        basePrice: z.lazy(() => SortOrderSchema).optional(),
        IsPriceVaried: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => MedicalServiceCategoryCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => MedicalServiceCategoryMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => MedicalServiceCategoryMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
