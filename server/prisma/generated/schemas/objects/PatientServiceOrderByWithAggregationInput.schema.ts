import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientServiceCountOrderByAggregateInputObjectSchema } from './PatientServiceCountOrderByAggregateInput.schema';
import { PatientServiceAvgOrderByAggregateInputObjectSchema } from './PatientServiceAvgOrderByAggregateInput.schema';
import { PatientServiceMaxOrderByAggregateInputObjectSchema } from './PatientServiceMaxOrderByAggregateInput.schema';
import { PatientServiceMinOrderByAggregateInputObjectSchema } from './PatientServiceMinOrderByAggregateInput.schema';
import { PatientServiceSumOrderByAggregateInputObjectSchema } from './PatientServiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceOrderByWithAggregationInput> = z
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
    entryRecordId: z.lazy(() => SortOrderSchema).optional(),
    Note: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    isWorkInjury: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    cash: z.lazy(() => SortOrderSchema).optional(),
    limit: z.lazy(() => SortOrderSchema).optional(),
    deffered: z.lazy(() => SortOrderSchema).optional(),
    transactionReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    medicalReviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    patientExaminationId: z.lazy(() => SortOrderSchema).optional(),
    serviceId: z.lazy(() => SortOrderSchema).optional(),
    groupId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PatientServiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PatientServiceAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PatientServiceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PatientServiceMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PatientServiceSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PatientServiceOrderByWithAggregationInputObjectSchema = Schema;