import { z } from 'zod';
import { PatientServiceCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateWithoutMedicalPatientServicesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      arabic: z.string().optional().nullable(),
      english: z.string().optional().nullable(),
      name: z.string(),
      transactionPatientServices: z
        .lazy(
          () =>
            PatientServiceCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
        )
        .optional(),
      transactionPatientExamination: z
        .lazy(
          () =>
            PatientExaminationCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
        )
        .optional(),
      medicalPatientExamination: z
        .lazy(
          () =>
            PatientExaminationCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema =
  Schema;
