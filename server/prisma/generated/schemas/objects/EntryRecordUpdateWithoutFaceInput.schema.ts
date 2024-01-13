import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { SubscriberGroupUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema } from './SubscriberGroupUpdateOneRequiredWithoutEntryRecordsNestedInput.schema';
import { FingerprintUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './FingerprintUpdateOneWithoutEntryRecordsNestedInput.schema';
import { IDCardUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './IDCardUpdateOneWithoutEntryRecordsNestedInput.schema';
import { VoiceUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './VoiceUpdateOneWithoutEntryRecordsNestedInput.schema';
import { PatientServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutEntryRecordNestedInput.schema';
import { PatientExaminationUpdateOneWithoutEntryRecordNestedInputObjectSchema } from './PatientExaminationUpdateOneWithoutEntryRecordNestedInput.schema';
import { MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema } from './MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithoutFaceInput> = z
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
    isValidated: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isManuallyInserted: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    subscriberGroup: z
      .lazy(
        () =>
          SubscriberGroupUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
    fingerprintBiometric: z
      .lazy(
        () => FingerprintUpdateOneWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
    idCard: z
      .lazy(() => IDCardUpdateOneWithoutEntryRecordsNestedInputObjectSchema)
      .optional(),
    voice: z
      .lazy(() => VoiceUpdateOneWithoutEntryRecordsNestedInputObjectSchema)
      .optional(),
    patientServices: z
      .lazy(
        () => PatientServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema,
      )
      .optional(),
    patientExamination: z
      .lazy(
        () =>
          PatientExaminationUpdateOneWithoutEntryRecordNestedInputObjectSchema,
      )
      .optional(),
    medicalCenter: z
      .lazy(
        () =>
          MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EntryRecordUpdateWithoutFaceInputObjectSchema = Schema;
