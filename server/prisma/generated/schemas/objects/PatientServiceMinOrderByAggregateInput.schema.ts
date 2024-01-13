import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z.lazy(() => SortOrderSchema).optional(),
    entryRecordId: z.lazy(() => SortOrderSchema).optional(),
    Note: z.lazy(() => SortOrderSchema).optional(),
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
  })
  .strict();

export const PatientServiceMinOrderByAggregateInputObjectSchema = Schema;
