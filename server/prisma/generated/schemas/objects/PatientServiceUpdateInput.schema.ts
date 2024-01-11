import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EntryRecordUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema } from './EntryRecordUpdateOneRequiredWithoutPatientServicesNestedInput.schema';
import { ReviewStatusUpdateOneRequiredWithoutTransactionPatientServicesNestedInputObjectSchema } from './ReviewStatusUpdateOneRequiredWithoutTransactionPatientServicesNestedInput.schema';
import { ReviewStatusUpdateOneRequiredWithoutMedicalPatientServicesNestedInputObjectSchema } from './ReviewStatusUpdateOneRequiredWithoutMedicalPatientServicesNestedInput.schema';
import { PatientExaminationUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema } from './PatientExaminationUpdateOneRequiredWithoutPatientServicesNestedInput.schema';
import { PackageMedicalServicesUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema } from './PackageMedicalServicesUpdateOneRequiredWithoutPatientServicesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateInput> = z
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
          EntryRecordUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema,
      )
      .optional(),
    transactionReviewStatus: z
      .lazy(
        () =>
          ReviewStatusUpdateOneRequiredWithoutTransactionPatientServicesNestedInputObjectSchema,
      )
      .optional(),
    medicalReviewStatus: z
      .lazy(
        () =>
          ReviewStatusUpdateOneRequiredWithoutMedicalPatientServicesNestedInputObjectSchema,
      )
      .optional(),
    patientExamination: z
      .lazy(
        () =>
          PatientExaminationUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema,
      )
      .optional(),
    service: z
      .lazy(
        () =>
          PackageMedicalServicesUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PatientServiceUpdateInputObjectSchema = Schema;
