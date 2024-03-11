import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionMedicalServiceCountOrderByAggregateInputObjectSchema } from './InstitutionMedicalServiceCountOrderByAggregateInput.schema';
import { InstitutionMedicalServiceAvgOrderByAggregateInputObjectSchema } from './InstitutionMedicalServiceAvgOrderByAggregateInput.schema';
import { InstitutionMedicalServiceMaxOrderByAggregateInputObjectSchema } from './InstitutionMedicalServiceMaxOrderByAggregateInput.schema';
import { InstitutionMedicalServiceMinOrderByAggregateInputObjectSchema } from './InstitutionMedicalServiceMinOrderByAggregateInput.schema';
import { InstitutionMedicalServiceSumOrderByAggregateInputObjectSchema } from './InstitutionMedicalServiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceOrderByWithAggregationInput> =
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
      institutionId: z.lazy(() => SortOrderSchema).optional(),
      medicalServiceId: z.lazy(() => SortOrderSchema).optional(),
      basePrice: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => InstitutionMedicalServiceCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _avg: z
        .lazy(
          () => InstitutionMedicalServiceAvgOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () => InstitutionMedicalServiceMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () => InstitutionMedicalServiceMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _sum: z
        .lazy(
          () => InstitutionMedicalServiceSumOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema =
  Schema;
