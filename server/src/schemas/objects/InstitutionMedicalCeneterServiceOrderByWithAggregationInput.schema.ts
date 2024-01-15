import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionMedicalCeneterServiceCountOrderByAggregateInputObjectSchema } from './InstitutionMedicalCeneterServiceCountOrderByAggregateInput.schema';
import { InstitutionMedicalCeneterServiceAvgOrderByAggregateInputObjectSchema } from './InstitutionMedicalCeneterServiceAvgOrderByAggregateInput.schema';
import { InstitutionMedicalCeneterServiceMaxOrderByAggregateInputObjectSchema } from './InstitutionMedicalCeneterServiceMaxOrderByAggregateInput.schema';
import { InstitutionMedicalCeneterServiceMinOrderByAggregateInputObjectSchema } from './InstitutionMedicalCeneterServiceMinOrderByAggregateInput.schema';
import { InstitutionMedicalCeneterServiceSumOrderByAggregateInputObjectSchema } from './InstitutionMedicalCeneterServiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceOrderByWithAggregationInput> =
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
      institutionId: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterServiceId: z.lazy(() => SortOrderSchema).optional(),
      basePrice: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _avg: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceAvgOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _sum: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceSumOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceOrderByWithAggregationInputObjectSchema =
  Schema;
