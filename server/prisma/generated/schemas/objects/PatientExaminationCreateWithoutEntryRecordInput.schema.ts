import { z } from 'zod';
import { ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInput.schema';
import { PatientServiceCreateNestedManyWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateNestedManyWithoutPatientExaminationInput.schema';
import { PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateWithoutEntryRecordInput> =
  z
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
          ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInputObjectSchema,
      ),
      medicalReviewStatus: z.lazy(
        () =>
          ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInputObjectSchema,
      ),
      patientServices: z
        .lazy(
          () =>
            PatientServiceCreateNestedManyWithoutPatientExaminationInputObjectSchema,
        )
        .optional(),
      service: z.lazy(
        () =>
          PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInputObjectSchema,
      ),
    })
    .strict();

export const PatientExaminationCreateWithoutEntryRecordInputObjectSchema =
  Schema;
