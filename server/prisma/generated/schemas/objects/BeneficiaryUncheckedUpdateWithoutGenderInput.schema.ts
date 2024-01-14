import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedUpdateWithoutGenderInput> = z
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
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    secondName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    thirdName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    fourthName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    searchName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    birthDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nationality: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    nationalID: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    residence: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    address: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
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
    subscriberId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    legacyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    relationshipId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isFingerprintVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isIdCardVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isFaceVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isVoiceVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    fingerprint: z
      .lazy(
        () =>
          FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    idCard: z
      .lazy(
        () =>
          IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    face: z
      .lazy(
        () =>
          FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    voice: z
      .lazy(
        () =>
          VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    entryRecords: z
      .lazy(
        () =>
          EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    spents: z
      .lazy(
        () =>
          BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema = Schema;
