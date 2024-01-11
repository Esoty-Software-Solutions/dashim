import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInput> =
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
            PatientServiceUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
        )
        .optional(),
      medicalPatientServices: z
        .lazy(
          () =>
            PatientServiceUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
      transactionPatientExamination: z
        .lazy(
          () =>
            PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema =
  Schema;
