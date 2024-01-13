import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EntryRecordOrderByWithRelationInputObjectSchema } from './EntryRecordOrderByWithRelationInput.schema';
import { ReviewStatusOrderByWithRelationInputObjectSchema } from './ReviewStatusOrderByWithRelationInput.schema';
import { PatientExaminationOrderByWithRelationInputObjectSchema } from './PatientExaminationOrderByWithRelationInput.schema';
import { PackageMedicalServicesOrderByWithRelationInputObjectSchema } from './PackageMedicalServicesOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceOrderByWithRelationInput> = z
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
    entryRecord: z
      .lazy(() => EntryRecordOrderByWithRelationInputObjectSchema)
      .optional(),
    transactionReviewStatus: z
      .lazy(() => ReviewStatusOrderByWithRelationInputObjectSchema)
      .optional(),
    medicalReviewStatus: z
      .lazy(() => ReviewStatusOrderByWithRelationInputObjectSchema)
      .optional(),
    patientExamination: z
      .lazy(() => PatientExaminationOrderByWithRelationInputObjectSchema)
      .optional(),
    service: z
      .lazy(() => PackageMedicalServicesOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const PatientServiceOrderByWithRelationInputObjectSchema = Schema;
