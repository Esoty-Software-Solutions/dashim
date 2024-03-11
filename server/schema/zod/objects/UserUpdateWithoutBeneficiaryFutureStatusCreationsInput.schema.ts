/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { GenderEnumUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './GenderEnumUpdateOneRequiredWithoutUserNestedInput.schema';
import { DeviceTokenUpdateManyWithoutUserNestedInputObjectSchema } from './DeviceTokenUpdateManyWithoutUserNestedInput.schema';
import { TenantUpdateManyWithoutOwnerNestedInputObjectSchema } from './TenantUpdateManyWithoutOwnerNestedInput.schema';
import { TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema } from './TenantMemberUpdateManyWithoutMemberNestedInput.schema';
import { BeneficiaryEntityUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryEntityUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryUpdateManyWithoutStatusSetByNestedInputObjectSchema } from './BeneficiaryUpdateManyWithoutStatusSetByNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReviewStatusUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReviewStatusUpdateManyWithoutCreatedByNestedInput.schema';
import { ReviewStatusUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReviewStatusUpdateManyWithoutUpdatedByNestedInput.schema';
import { BeneficiaryServiceUpdateManyWithoutCreatedByNestedInputObjectSchema } from './BeneficiaryServiceUpdateManyWithoutCreatedByNestedInput.schema';
import { BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInput.schema';
import { EntryRecordUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutCreatedByNestedInput.schema';
import { EntryRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutUpdatedByNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateWithoutBeneficiaryFutureStatusCreationsInput>;
export const UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        createdAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        isPublished: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isSoftDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        deactivationReason: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        secondName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        thirdName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        fourthName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        searchName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        birthDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        nationality: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        nationalID: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        isEmailVerificationActive: z
            .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
            .optional(),
        phone: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        isPhoneVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        avatar: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        gender: z.lazy(() => GenderEnumUpdateOneRequiredWithoutUserNestedInputObjectSchema).optional(),
        deviceToken: z.lazy(() => DeviceTokenUpdateManyWithoutUserNestedInputObjectSchema).optional(),
        ownerOf: z.lazy(() => TenantUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
        memberOf: z.lazy(() => TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema).optional(),
        beneficiaryEntityStatusChanges: z
            .lazy(() => BeneficiaryEntityUpdateManyWithoutStatusSetByNestedInputObjectSchema)
            .optional(),
        beneficiaryStatusChanges: z
            .lazy(() => BeneficiaryUpdateManyWithoutStatusSetByNestedInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusCreations: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusUpdates: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusUpdates: z
            .lazy(() => BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema)
            .optional(),
        ReviewStatusCreations: z.lazy(() => ReviewStatusUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
        ReviewStatusUpdates: z.lazy(() => ReviewStatusUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
        BeneficiaryServiceCreations: z
            .lazy(() => BeneficiaryServiceUpdateManyWithoutCreatedByNestedInputObjectSchema)
            .optional(),
        BeneficiaryServiceUpdates: z
            .lazy(() => BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInputObjectSchema)
            .optional(),
        EntryRecordServiceCreations: z
            .lazy(() => EntryRecordUpdateManyWithoutCreatedByNestedInputObjectSchema)
            .optional(),
        EntryRecordServiceUpdates: z
            .lazy(() => EntryRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
