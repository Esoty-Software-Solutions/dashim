import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { GenderUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './GenderUpdateOneRequiredWithoutUserNestedInput.schema';
import { DeviceTokenUpdateManyWithoutUserNestedInputObjectSchema } from './DeviceTokenUpdateManyWithoutUserNestedInput.schema';
import { TenantUpdateManyWithoutOwnerNestedInputObjectSchema } from './TenantUpdateManyWithoutOwnerNestedInput.schema';
import { TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema } from './TenantMemberUpdateManyWithoutMemberNestedInput.schema';
import { SubscriberUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './SubscriberUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryUpdateManyWithoutStatusSetByNestedInput.schema';
import { SubscriberFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyWithoutCreatedByNestedInput.schema';
import { SubscriberFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
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
      .lazy(() => GenderUpdateOneRequiredWithoutUserNestedInputObjectSchema)
      .optional(),
    deviceToken: z
      .lazy(() => DeviceTokenUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => TenantUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    memberOf: z
      .lazy(() => TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema)
      .optional(),
    subscriberStatusChanges: z
      .lazy(() => SubscriberUpdateManyWithoutStatusSetByNestedInputObjectSchema)
      .optional(),
    beneficiaryStatusChanges: z
      .lazy(
        () => BeneficiaryUpdateManyWithoutStatusSetByNestedInputObjectSchema,
      )
      .optional(),
    subscriberFutureStatusCreations: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    subscriberFutureStatusChanges: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusCreations: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusChanges: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
