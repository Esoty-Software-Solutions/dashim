/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { GenderEnumRelationFilterObjectSchema } from './GenderEnumRelationFilter.schema';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';
import { DeviceTokenListRelationFilterObjectSchema } from './DeviceTokenListRelationFilter.schema';
import { TenantListRelationFilterObjectSchema } from './TenantListRelationFilter.schema';
import { TenantMemberListRelationFilterObjectSchema } from './TenantMemberListRelationFilter.schema';
import { BeneficiaryEntityListRelationFilterObjectSchema } from './BeneficiaryEntityListRelationFilter.schema';
import { BeneficiaryListRelationFilterObjectSchema } from './BeneficiaryListRelationFilter.schema';
import { BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema } from './BeneficiaryEntityFutureStatusChangeListRelationFilter.schema';
import { BeneficiaryFutureStatusChangeListRelationFilterObjectSchema } from './BeneficiaryFutureStatusChangeListRelationFilter.schema';
import { ReviewStatusListRelationFilterObjectSchema } from './ReviewStatusListRelationFilter.schema';
import { BeneficiaryServiceListRelationFilterObjectSchema } from './BeneficiaryServiceListRelationFilter.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserWhereUniqueInput>;
export const UserWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        username: z.string().optional(),
        email: z.string().optional(),
        AND: z
            .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => UserWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        deactivationReason: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.lazy(() => DateTimeNullableFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
                z.null(),
            ])
            .optional()
            .nullable(),
        firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        secondName: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        thirdName: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        fourthName: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        searchName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        birthDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        genderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        nationality: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        nationalID: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        isEmailVerificationActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        phone: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        isPhoneVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        avatar: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        gender: z
            .union([z.lazy(() => GenderEnumRelationFilterObjectSchema), z.lazy(() => GenderEnumWhereInputObjectSchema)])
            .optional(),
        deviceToken: z.lazy(() => DeviceTokenListRelationFilterObjectSchema).optional(),
        ownerOf: z.lazy(() => TenantListRelationFilterObjectSchema).optional(),
        memberOf: z.lazy(() => TenantMemberListRelationFilterObjectSchema).optional(),
        beneficiaryEntityStatusChanges: z.lazy(() => BeneficiaryEntityListRelationFilterObjectSchema).optional(),
        beneficiaryStatusChanges: z.lazy(() => BeneficiaryListRelationFilterObjectSchema).optional(),
        beneficiaryEntityFutureStatusCreations: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusUpdates: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema)
            .optional(),
        beneficiaryFutureStatusCreations: z
            .lazy(() => BeneficiaryFutureStatusChangeListRelationFilterObjectSchema)
            .optional(),
        beneficiaryFutureStatusUpdates: z
            .lazy(() => BeneficiaryFutureStatusChangeListRelationFilterObjectSchema)
            .optional(),
        ReviewStatusCreations: z.lazy(() => ReviewStatusListRelationFilterObjectSchema).optional(),
        ReviewStatusUpdates: z.lazy(() => ReviewStatusListRelationFilterObjectSchema).optional(),
        BeneficiaryServiceCreations: z.lazy(() => BeneficiaryServiceListRelationFilterObjectSchema).optional(),
        BeneficiaryServiceUpdates: z.lazy(() => BeneficiaryServiceListRelationFilterObjectSchema).optional(),
        EntryRecordServiceCreations: z.lazy(() => EntryRecordListRelationFilterObjectSchema).optional(),
        EntryRecordServiceUpdates: z.lazy(() => EntryRecordListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;