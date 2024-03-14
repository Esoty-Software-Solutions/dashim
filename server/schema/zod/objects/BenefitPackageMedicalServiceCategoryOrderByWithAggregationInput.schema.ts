/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageMedicalServiceCategoryCountOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCountOrderByAggregateInput.schema';
import { BenefitPackageMedicalServiceCategoryMaxOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalServiceCategoryMaxOrderByAggregateInput.schema';
import { BenefitPackageMedicalServiceCategoryMinOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalServiceCategoryMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryOrderByWithAggregationInput>;
export const BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema: SchemaType = z
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
        benefitPackageId: z.lazy(() => SortOrderSchema).optional(),
        medicalServiceCategoryId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => BenefitPackageMedicalServiceCategoryCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => BenefitPackageMedicalServiceCategoryMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => BenefitPackageMedicalServiceCategoryMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
