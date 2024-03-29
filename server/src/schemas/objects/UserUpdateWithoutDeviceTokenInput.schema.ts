import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { GenderEnumUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './GenderEnumUpdateOneRequiredWithoutUserNestedInput.schema';
import { TenantUpdateManyWithoutOwnerNestedInputObjectSchema } from './TenantUpdateManyWithoutOwnerNestedInput.schema';
import { TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema } from './TenantMemberUpdateManyWithoutMemberNestedInput.schema';
import { BeneficiaryEntityUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryEntityUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReviewStatusUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReviewStatusUpdateManyWithoutCreatedByNestedInput.schema';
import { ReviewStatusUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReviewStatusUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryServiceUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryServiceUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInput.schema';
import { EntryRecordUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutCreatedByNestedInput.schema';
import { EntryRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutUpdatedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutDeviceTokenInput> = z
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
    deactivationDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
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
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isEmailVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    isPhoneVerified: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    passwordHash: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    avatar: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    gender: z
      .lazy(() => GenderEnumUpdateOneRequiredWithoutUserNestedInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => TenantUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    memberOf: z
      .lazy(() => TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema)
      .optional(),
    beneficiaryEntityStatusChanges: z
      .lazy(
        () =>
          BeneficiaryEntityUpdateManyWithoutStatusSetByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryStatusChanges: z
      .lazy(
        () => BeneficiaryUpdateManyWithoutStatusSetByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryEntityFutureStatusCreations: z
      .lazy(
        () =>
          BeneficiaryEntityFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryEntityFutureStatusUpdates: z
      .lazy(
        () =>
          BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusCreations: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusUpdates: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    ReviewStatusCreations: z
      .lazy(() => ReviewStatusUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
    ReviewStatusUpdates: z
      .lazy(() => ReviewStatusUpdateManyWithoutUpdatedByNestedInputObjectSchema)
      .optional(),
    BeneficiaryServiceCreations: z
      .lazy(
        () =>
          BeneficiaryServiceUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    BeneficiaryServiceUpdates: z
      .lazy(
        () =>
          BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    EntryRecordServiceCreations: z
      .lazy(() => EntryRecordUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
    EntryRecordServiceUpdates: z
      .lazy(() => EntryRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutDeviceTokenInputObjectSchema = Schema;
