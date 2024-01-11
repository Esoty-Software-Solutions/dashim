import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PatientServiceUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema } from './PatientServiceUncheckedUpdateManyWithoutTransactionReviewStatusNestedInput.schema';
import { PatientExaminationUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema } from './PatientExaminationUncheckedUpdateManyWithoutTransactionReviewStatusNestedInput.schema';
import { PatientExaminationUncheckedUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema } from './PatientExaminationUncheckedUpdateManyWithoutMedicalReviewStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPublished: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isSoftDeleted: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      arabic: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      english: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      transactionPatientServices: z
        .lazy(
          () =>
            PatientServiceUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema,
        )
        .optional(),
      transactionPatientExamination: z
        .lazy(
          () =>
            PatientExaminationUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema,
        )
        .optional(),
      medicalPatientExamination: z
        .lazy(
          () =>
            PatientExaminationUncheckedUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInputObjectSchema =
  Schema;
