import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InsurancePolicyMedicalCenterCountOrderByAggregateInputObjectSchema } from './InsurancePolicyMedicalCenterCountOrderByAggregateInput.schema';
import { InsurancePolicyMedicalCenterMaxOrderByAggregateInputObjectSchema } from './InsurancePolicyMedicalCenterMaxOrderByAggregateInput.schema';
import { InsurancePolicyMedicalCenterMinOrderByAggregateInputObjectSchema } from './InsurancePolicyMedicalCenterMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterOrderByWithAggregationInput> =
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
      insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema =
  Schema;
