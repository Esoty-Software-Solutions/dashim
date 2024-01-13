import { z } from 'zod';
import { PatientServiceCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { PatientServiceCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateNestedManyWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateNestedManyWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateWithoutMedicalPatientExaminationInput> =
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
      medicalPatientServices: z
        .lazy(
          () =>
            PatientServiceCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
      transactionPatientExamination: z
        .lazy(
          () =>
            PatientExaminationCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema =
  Schema;