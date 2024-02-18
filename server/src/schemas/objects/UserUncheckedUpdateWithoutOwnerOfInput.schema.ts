import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DeviceTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './DeviceTokenUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutMemberNestedInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOwnerOfInput> = z
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
    deviceToken: z
      .lazy(
        () => DeviceTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    memberOf: z
      .lazy(
        () =>
          TenantMemberUncheckedUpdateManyWithoutMemberNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryEntityStatusChanges: z
      .lazy(
        () =>
          BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryStatusChanges: z
      .lazy(
        () =>
          BeneficiaryUncheckedUpdateManyWithoutStatusSetByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryEntityFutureStatusCreations: z
      .lazy(
        () =>
          BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryEntityFutureStatusUpdates: z
      .lazy(
        () =>
          BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusCreations: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusUpdates: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    ReviewStatusCreations: z
      .lazy(
        () =>
          ReviewStatusUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    ReviewStatusUpdates: z
      .lazy(
        () =>
          ReviewStatusUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    BeneficiaryServiceCreations: z
      .lazy(
        () =>
          BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    BeneficiaryServiceUpdates: z
      .lazy(
        () =>
          BeneficiaryServiceUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    EntryRecordServiceCreations: z
      .lazy(
        () =>
          EntryRecordUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    EntryRecordServiceUpdates: z
      .lazy(
        () =>
          EntryRecordUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutOwnerOfInputObjectSchema = Schema;
