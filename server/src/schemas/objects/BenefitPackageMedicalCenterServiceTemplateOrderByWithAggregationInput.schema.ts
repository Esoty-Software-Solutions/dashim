import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCountOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCountOrderByAggregateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateMaxOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateMaxOrderByAggregateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateMinOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      deactivationReason: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      benefitPackageId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterServiceTemplateId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema =
  Schema;
