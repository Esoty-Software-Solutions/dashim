import { z } from 'zod';
import { ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInput.schema';
import { PatientExaminationCreateNestedOneWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateNestedOneWithoutPatientServicesInput.schema';
import { PackageMedicalServicesCreateNestedOneWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateNestedOneWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateWithoutEntryRecordInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    Note: z.string().optional().nullable(),
    isWorkInjury: z.boolean().optional(),
    name: z.string(),
    cash: z.number(),
    limit: z.number(),
    deffered: z.number(),
    groupId: z.string(),
    transactionReviewStatus: z.lazy(
      () =>
        ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema,
    ),
    medicalReviewStatus: z.lazy(
      () =>
        ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInputObjectSchema,
    ),
    patientExamination: z.lazy(
      () =>
        PatientExaminationCreateNestedOneWithoutPatientServicesInputObjectSchema,
    ),
    service: z.lazy(
      () =>
        PackageMedicalServicesCreateNestedOneWithoutPatientServicesInputObjectSchema,
    ),
  })
  .strict();

export const PatientServiceCreateWithoutEntryRecordInputObjectSchema = Schema;
