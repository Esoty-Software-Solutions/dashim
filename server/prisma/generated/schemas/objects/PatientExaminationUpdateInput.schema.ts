import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EntryRecordUpdateOneRequiredWithoutPatientExaminationNestedInputObjectSchema } from './EntryRecordUpdateOneRequiredWithoutPatientExaminationNestedInput.schema';
import { ReviewStatusUpdateOneRequiredWithoutTransactionPatientExaminationNestedInputObjectSchema } from './ReviewStatusUpdateOneRequiredWithoutTransactionPatientExaminationNestedInput.schema';
import { ReviewStatusUpdateOneRequiredWithoutMedicalPatientExaminationNestedInputObjectSchema } from './ReviewStatusUpdateOneRequiredWithoutMedicalPatientExaminationNestedInput.schema';
import { PatientServiceUpdateManyWithoutPatientExaminationNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutPatientExaminationNestedInput.schema';
import { PackageMedicalServicesUpdateOneRequiredWithoutPatientExaminationsNestedInputObjectSchema } from './PackageMedicalServicesUpdateOneRequiredWithoutPatientExaminationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateInput> = z
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
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deactivationReason: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Note: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    isWorkInjury: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cash: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    limit: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deffered: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    groupId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    entryRecord: z
      .lazy(
        () =>
          EntryRecordUpdateOneRequiredWithoutPatientExaminationNestedInputObjectSchema,
      )
      .optional(),
    transactionReviewStatus: z
      .lazy(
        () =>
          ReviewStatusUpdateOneRequiredWithoutTransactionPatientExaminationNestedInputObjectSchema,
      )
      .optional(),
    medicalReviewStatus: z
      .lazy(
        () =>
          ReviewStatusUpdateOneRequiredWithoutMedicalPatientExaminationNestedInputObjectSchema,
      )
      .optional(),
    patientServices: z
      .lazy(
        () =>
          PatientServiceUpdateManyWithoutPatientExaminationNestedInputObjectSchema,
      )
      .optional(),
    service: z
      .lazy(
        () =>
          PackageMedicalServicesUpdateOneRequiredWithoutPatientExaminationsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PatientExaminationUpdateInputObjectSchema = Schema;
