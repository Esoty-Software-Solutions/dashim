/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenCreateNestedManyWithoutUserInputObjectSchema } from './DeviceTokenCreateNestedManyWithoutUserInput.schema';
import { TenantCreateNestedManyWithoutOwnerInputObjectSchema } from './TenantCreateNestedManyWithoutOwnerInput.schema';
import { TenantMemberCreateNestedManyWithoutMemberInputObjectSchema } from './TenantMemberCreateNestedManyWithoutMemberInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutStatusSetByInput.schema';
import { BeneficiaryCreateNestedManyWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutStatusSetByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInput.schema';
import { ReviewStatusCreateNestedManyWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateNestedManyWithoutCreatedByInput.schema';
import { ReviewStatusCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateNestedManyWithoutUpdatedByInput.schema';
import { BeneficiaryServiceCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateNestedManyWithoutUpdatedByInput.schema';
import { EntryRecordCreateNestedManyWithoutCreatedByInputObjectSchema } from './EntryRecordCreateNestedManyWithoutCreatedByInput.schema';
import { EntryRecordCreateNestedManyWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateNestedManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateWithoutGenderInput>;
export const UserCreateWithoutGenderInputObjectSchema: SchemaType = z
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
        nationality: z.union([z.string(), z.null()]).optional().nullable(),
        nationalID: z.union([z.string(), z.null()]).optional().nullable(),
        username: z.string(),
        email: z.string(),
        isEmailVerificationActive: z.boolean().optional(),
        phone: z.union([z.string(), z.null()]).optional().nullable(),
        isPhoneVerified: z.boolean().optional(),
        passwordHash: z.string(),
        avatar: z.union([z.string(), z.null()]).optional().nullable(),
        deviceToken: z.lazy(() => DeviceTokenCreateNestedManyWithoutUserInputObjectSchema).optional(),
        ownerOf: z.lazy(() => TenantCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
        memberOf: z.lazy(() => TenantMemberCreateNestedManyWithoutMemberInputObjectSchema).optional(),
        beneficiaryEntityStatusChanges: z
            .lazy(() => BeneficiaryEntityCreateNestedManyWithoutStatusSetByInputObjectSchema)
            .optional(),
        beneficiaryStatusChanges: z
            .lazy(() => BeneficiaryCreateNestedManyWithoutStatusSetByInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusCreations: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusUpdates: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusCreations: z
            .lazy(() => BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusUpdates: z
            .lazy(() => BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
        ReviewStatusCreations: z.lazy(() => ReviewStatusCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
        ReviewStatusUpdates: z.lazy(() => ReviewStatusCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
        BeneficiaryServiceCreations: z
            .lazy(() => BeneficiaryServiceCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        BeneficiaryServiceUpdates: z
            .lazy(() => BeneficiaryServiceCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
        EntryRecordServiceCreations: z
            .lazy(() => EntryRecordCreateNestedManyWithoutCreatedByInputObjectSchema)
            .optional(),
        EntryRecordServiceUpdates: z
            .lazy(() => EntryRecordCreateNestedManyWithoutUpdatedByInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
