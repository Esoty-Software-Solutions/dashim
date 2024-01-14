import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { GenderUpdateOneWithoutBeneficiaryNestedInputObjectSchema } from './GenderUpdateOneWithoutBeneficiaryNestedInput.schema';
import { SubscriberUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema } from './SubscriberUpdateOneRequiredWithoutBeneficiaryNestedInput.schema';
import { RelationshipUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema } from './RelationshipUpdateOneRequiredWithoutBeneficiaryNestedInput.schema';
import { FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInput.schema';
import { IDCardUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './IDCardUpdateManyWithoutBeneficiaryNestedInput.schema';
import { FaceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FaceBiometricUpdateManyWithoutBeneficiaryNestedInput.schema';
import { VoiceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './VoiceBiometricUpdateManyWithoutBeneficiaryNestedInput.schema';
import { EntryRecordUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryBalanceUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryBalanceUpdateManyWithoutBeneficiaryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateInput> = z
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
    legacyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
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
    gender: z
      .lazy(() => GenderUpdateOneWithoutBeneficiaryNestedInputObjectSchema)
      .optional(),
    subscriber: z
      .lazy(
        () =>
          SubscriberUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    relationship: z
      .lazy(
        () =>
          RelationshipUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    fingerprint: z
      .lazy(
        () =>
          FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    idCard: z
      .lazy(() => IDCardUpdateManyWithoutBeneficiaryNestedInputObjectSchema)
      .optional(),
    face: z
      .lazy(
        () => FaceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    voice: z
      .lazy(
        () => VoiceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    entryRecords: z
      .lazy(
        () => EntryRecordUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
    spents: z
      .lazy(
        () =>
          BeneficiaryBalanceUpdateManyWithoutBeneficiaryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryUpdateInputObjectSchema = Schema;
