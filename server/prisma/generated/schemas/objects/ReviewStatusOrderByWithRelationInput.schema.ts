import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientServiceOrderByRelationAggregateInputObjectSchema } from './PatientServiceOrderByRelationAggregateInput.schema';
import { PatientExaminationOrderByRelationAggregateInputObjectSchema } from './PatientExaminationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    arabic: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    english: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    transactionPatientServices: z
      .lazy(() => PatientServiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    medicalPatientServices: z
      .lazy(() => PatientServiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    transactionPatientExamination: z
      .lazy(() => PatientExaminationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    medicalPatientExamination: z
      .lazy(() => PatientExaminationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewStatusOrderByWithRelationInputObjectSchema = Schema;
