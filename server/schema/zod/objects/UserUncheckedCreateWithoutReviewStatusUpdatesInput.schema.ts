/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DeviceTokenUncheckedCreateNestedManyWithoutUserInput.schema';
import { TenantUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { TenantMemberUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './TenantMemberUncheckedCreateNestedManyWithoutMemberInput.schema';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutStatusSetByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { EntryRecordUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateWithoutReviewStatusUpdatesInput>;
export const UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        firstName: z.string(),
        secondName: z.union([z.string(), z.null()]).optional().nullable(),
        thirdName: z.union([z.string(), z.null()]).optional().nullable(),
        fourthName: z.union([z.string(), z.null()]).optional().nullable(),
        lastName: z.string(),
        searchName: z.string(),
        birthDate: z.union([z.date(), z.string().datetime()]),
        genderId: z.string(),
        nationality: z.union([z.string(), z.null()]).optional().nullable(),
        nationalID: z.union([z.string(), z.null()]).optional().nullable(),
        username: z.string(),
        email: z.string(),
        isEmailVerificationActive: z.boolean().optional(),
        phone: z.union([z.string(), z.null()]).optional().nullable(),
        isPhoneVerified: z.boolean().optional(),
        passwordHash: z.string(),
        avatar: z.union([z.string(), z.null()]).optional().nullable(),
        deviceToken: z.lazy(() => DeviceTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
        ownerOf: z.lazy(() => TenantUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
        memberOf: z.lazy(() => TenantMemberUncheckedCreateNestedManyWithoutMemberInputObjectSchema).optional(),
        beneficiaryEntityStatusChanges: z
            .lazy(() => BeneficiaryEntityUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema)
            .optional(),
        beneficiaryStatusChanges: z
            .lazy(() => BeneficiaryUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusCreations: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusUpdates: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusCreations: z
            .lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusUpdates: z
            .lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
        ReviewStatusCreations: z
            .lazy(() => ReviewStatusUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        BeneficiaryServiceCreations: z
            .lazy(() => BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        BeneficiaryServiceUpdates: z
            .lazy(() => BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
        EntryRecordServiceCreations: z
            .lazy(() => EntryRecordUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        EntryRecordServiceUpdates: z
            .lazy(() => EntryRecordUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
