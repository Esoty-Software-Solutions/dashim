import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PatientServiceUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutTransactionReviewStatusNestedInput.schema';
import { PatientServiceUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutMedicalReviewStatusNestedInput.schema';
import { PatientExaminationUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema } from './PatientExaminationUpdateManyWithoutTransactionReviewStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateWithoutMedicalPatientExaminationInput> =
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
            PatientServiceUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema,
        )
        .optional(),
      medicalPatientServices: z
        .lazy(
          () =>
            PatientServiceUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema,
        )
        .optional(),
      transactionPatientExamination: z
        .lazy(
          () =>
            PatientExaminationUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ReviewStatusUpdateWithoutMedicalPatientExaminationInputObjectSchema =
  Schema;
