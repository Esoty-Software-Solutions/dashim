import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalServiceCountOrderByAggregateInputObjectSchema } from './MedicalServiceCountOrderByAggregateInput.schema';
import { MedicalServiceAvgOrderByAggregateInputObjectSchema } from './MedicalServiceAvgOrderByAggregateInput.schema';
import { MedicalServiceMaxOrderByAggregateInputObjectSchema } from './MedicalServiceMaxOrderByAggregateInput.schema';
import { MedicalServiceMinOrderByAggregateInputObjectSchema } from './MedicalServiceMinOrderByAggregateInput.schema';
import { MedicalServiceSumOrderByAggregateInputObjectSchema } from './MedicalServiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceOrderByWithAggregationInput> = z
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
    name: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterCode: z.lazy(() => SortOrderSchema).optional(),
    basePrice: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MedicalServiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MedicalServiceAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MedicalServiceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MedicalServiceMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MedicalServiceSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MedicalServiceOrderByWithAggregationInputObjectSchema = Schema;
