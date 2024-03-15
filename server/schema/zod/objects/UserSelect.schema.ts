/* eslint-disable */
import { z } from 'zod';
import { GenderEnumArgsObjectSchema } from './GenderEnumArgs.schema';
import { DeviceTokenInputSchema } from '../input/DeviceTokenInput.schema';
import { TenantInputSchema } from '../input/TenantInput.schema';
import { TenantMemberInputSchema } from '../input/TenantMemberInput.schema';
import { BeneficiaryEntityInputSchema } from '../input/BeneficiaryEntityInput.schema';
import { BeneficiaryInputSchema } from '../input/BeneficiaryInput.schema';
import { BeneficiaryEntityFutureStatusChangeInputSchema } from '../input/BeneficiaryEntityFutureStatusChangeInput.schema';
import { BeneficiaryFutureStatusChangeInputSchema } from '../input/BeneficiaryFutureStatusChangeInput.schema';
import { ReviewStatusInputSchema } from '../input/ReviewStatusInput.schema';
import { BeneficiaryServiceInputSchema } from '../input/BeneficiaryServiceInput.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        firstName: z.boolean().optional(),
        secondName: z.boolean().optional(),
        thirdName: z.boolean().optional(),
        fourthName: z.boolean().optional(),
        lastName: z.boolean().optional(),
        searchName: z.boolean().optional(),
        birthDate: z.boolean().optional(),
        gender: z.union([z.boolean(), z.lazy(() => GenderEnumArgsObjectSchema)]).optional(),
        genderId: z.boolean().optional(),
        nationality: z.boolean().optional(),
        nationalID: z.boolean().optional(),
        username: z.boolean().optional(),
        email: z.boolean().optional(),
        isEmailVerificationActive: z.boolean().optional(),
        phone: z.boolean().optional(),
        isPhoneVerified: z.boolean().optional(),
        passwordHash: z.boolean().optional(),
        avatar: z.boolean().optional(),
        deviceToken: z.union([z.boolean(), z.lazy(() => DeviceTokenInputSchema.findMany)]).optional(),
        ownerOf: z.union([z.boolean(), z.lazy(() => TenantInputSchema.findMany)]).optional(),
        memberOf: z.union([z.boolean(), z.lazy(() => TenantMemberInputSchema.findMany)]).optional(),
        beneficiaryEntityStatusChanges: z
            .union([z.boolean(), z.lazy(() => BeneficiaryEntityInputSchema.findMany)])
            .optional(),
        beneficiaryStatusChanges: z.union([z.boolean(), z.lazy(() => BeneficiaryInputSchema.findMany)]).optional(),
        beneficiaryEntityFutureStatusCreations: z
            .union([z.boolean(), z.lazy(() => BeneficiaryEntityFutureStatusChangeInputSchema.findMany)])
            .optional(),
        beneficiaryEntityFutureStatusUpdates: z
            .union([z.boolean(), z.lazy(() => BeneficiaryEntityFutureStatusChangeInputSchema.findMany)])
            .optional(),
        beneficiaryFutureStatusCreations: z
            .union([z.boolean(), z.lazy(() => BeneficiaryFutureStatusChangeInputSchema.findMany)])
            .optional(),
        beneficiaryFutureStatusUpdates: z
            .union([z.boolean(), z.lazy(() => BeneficiaryFutureStatusChangeInputSchema.findMany)])
            .optional(),
        ReviewStatusCreations: z.union([z.boolean(), z.lazy(() => ReviewStatusInputSchema.findMany)]).optional(),
        ReviewStatusUpdates: z.union([z.boolean(), z.lazy(() => ReviewStatusInputSchema.findMany)]).optional(),
        BeneficiaryServiceCreations: z
            .union([z.boolean(), z.lazy(() => BeneficiaryServiceInputSchema.findMany)])
            .optional(),
        BeneficiaryServiceUpdates: z
            .union([z.boolean(), z.lazy(() => BeneficiaryServiceInputSchema.findMany)])
            .optional(),
        EntryRecordServiceCreations: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        EntryRecordServiceUpdates: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
