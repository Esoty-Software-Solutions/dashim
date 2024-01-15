import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema } from './BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInput.schema';
import { FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInput.schema';
import { FaceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './FaceBiometricUpdateOneWithoutEntryRecordsNestedInput.schema';
import { VoiceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './VoiceBiometricUpdateOneWithoutEntryRecordsNestedInput.schema';
import { PatientServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutEntryRecordNestedInput.schema';
import { MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema } from './MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithoutIdCardBiometricInput> = z
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
    beneficiary: z
      .lazy(
        () =>
          BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
    fingerprintBiometric: z
      .lazy(
        () =>
          FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
    faceBiometric: z
      .lazy(
        () => FaceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
    voiceBiometric: z
      .lazy(
        () => VoiceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema,
      )
      .optional(),
    patientServices: z
      .lazy(
        () => PatientServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema,
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

export const EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema = Schema;
