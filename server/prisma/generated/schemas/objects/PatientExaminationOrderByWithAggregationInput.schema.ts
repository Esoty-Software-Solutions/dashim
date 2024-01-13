import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientExaminationCountOrderByAggregateInputObjectSchema } from './PatientExaminationCountOrderByAggregateInput.schema';
import { PatientExaminationAvgOrderByAggregateInputObjectSchema } from './PatientExaminationAvgOrderByAggregateInput.schema';
import { PatientExaminationMaxOrderByAggregateInputObjectSchema } from './PatientExaminationMaxOrderByAggregateInput.schema';
import { PatientExaminationMinOrderByAggregateInputObjectSchema } from './PatientExaminationMinOrderByAggregateInput.schema';
import { PatientExaminationSumOrderByAggregateInputObjectSchema } from './PatientExaminationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationOrderByWithAggregationInput> =
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
      serviceId: z.lazy(() => SortOrderSchema).optional(),
      groupId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => PatientExaminationCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => PatientExaminationAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => PatientExaminationMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => PatientExaminationMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => PatientExaminationSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PatientExaminationOrderByWithAggregationInputObjectSchema = Schema;
