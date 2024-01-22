import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageMedicalServiceTemplateCountOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCountOrderByAggregateInput.schema';
import { BenefitPackageMedicalServiceTemplateMaxOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateMaxOrderByAggregateInput.schema';
import { BenefitPackageMedicalServiceTemplateMinOrderByAggregateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateOrderByWithAggregationInput> =
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
      deactivationDate: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      benefitPackageId: z.lazy(() => SortOrderSchema).optional(),
      medicalServiceTemplateId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateOrderByWithAggregationInputObjectSchema =
  Schema;
