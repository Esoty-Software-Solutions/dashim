import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInput> =
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
      genderId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
      deactivationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      statusSetById: z
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
      beneficiaryBalances: z
        .lazy(
          () =>
            BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
        )
        .optional(),
      futureStatus: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
