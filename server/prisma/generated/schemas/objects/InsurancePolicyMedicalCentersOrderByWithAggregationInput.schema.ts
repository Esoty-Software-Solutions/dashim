import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InsurancePolicyMedicalCentersCountOrderByAggregateInputObjectSchema } from './InsurancePolicyMedicalCentersCountOrderByAggregateInput.schema';
import { InsurancePolicyMedicalCentersMaxOrderByAggregateInputObjectSchema } from './InsurancePolicyMedicalCentersMaxOrderByAggregateInput.schema';
import { InsurancePolicyMedicalCentersMinOrderByAggregateInputObjectSchema } from './InsurancePolicyMedicalCentersMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersOrderByWithAggregationInput> =
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
      insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCentersOrderByWithAggregationInputObjectSchema =
  Schema;
