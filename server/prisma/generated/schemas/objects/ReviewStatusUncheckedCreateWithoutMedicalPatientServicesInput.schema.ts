import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInput> =
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
      transactionPatientExamination: z
        .lazy(
          () =>
            PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema,
        )
        .optional(),
      medicalPatientExamination: z
        .lazy(
          () =>
            PatientExaminationUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema =
  Schema;
