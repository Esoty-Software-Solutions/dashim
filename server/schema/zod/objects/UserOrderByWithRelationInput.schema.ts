/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenderEnumOrderByWithRelationInputObjectSchema } from './GenderEnumOrderByWithRelationInput.schema';
import { DeviceTokenOrderByRelationAggregateInputObjectSchema } from './DeviceTokenOrderByRelationAggregateInput.schema';
import { TenantOrderByRelationAggregateInputObjectSchema } from './TenantOrderByRelationAggregateInput.schema';
import { TenantMemberOrderByRelationAggregateInputObjectSchema } from './TenantMemberOrderByRelationAggregateInput.schema';
import { BeneficiaryEntityOrderByRelationAggregateInputObjectSchema } from './BeneficiaryEntityOrderByRelationAggregateInput.schema';
import { BeneficiaryOrderByRelationAggregateInputObjectSchema } from './BeneficiaryOrderByRelationAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInput.schema';
import { BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema } from './BeneficiaryFutureStatusChangeOrderByRelationAggregateInput.schema';
import { ReviewStatusOrderByRelationAggregateInputObjectSchema } from './ReviewStatusOrderByRelationAggregateInput.schema';
import { BeneficiaryServiceOrderByRelationAggregateInputObjectSchema } from './BeneficiaryServiceOrderByRelationAggregateInput.schema';
import { EntryRecordOrderByRelationAggregateInputObjectSchema } from './EntryRecordOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        firstName: z.lazy(() => SortOrderSchema).optional(),
        secondName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        thirdName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        fourthName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        lastName: z.lazy(() => SortOrderSchema).optional(),
        searchName: z.lazy(() => SortOrderSchema).optional(),
        birthDate: z.lazy(() => SortOrderSchema).optional(),
        genderId: z.lazy(() => SortOrderSchema).optional(),
        nationality: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        nationalID: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        isEmailVerificationActive: z.lazy(() => SortOrderSchema).optional(),
        phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        isPhoneVerified: z.lazy(() => SortOrderSchema).optional(),
        passwordHash: z.lazy(() => SortOrderSchema).optional(),
        avatar: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        gender: z.lazy(() => GenderEnumOrderByWithRelationInputObjectSchema).optional(),
        deviceToken: z.lazy(() => DeviceTokenOrderByRelationAggregateInputObjectSchema).optional(),
        ownerOf: z.lazy(() => TenantOrderByRelationAggregateInputObjectSchema).optional(),
        memberOf: z.lazy(() => TenantMemberOrderByRelationAggregateInputObjectSchema).optional(),
        beneficiaryEntityStatusChanges: z
            .lazy(() => BeneficiaryEntityOrderByRelationAggregateInputObjectSchema)
            .optional(),
        beneficiaryStatusChanges: z.lazy(() => BeneficiaryOrderByRelationAggregateInputObjectSchema).optional(),
        beneficiaryEntityFutureStatusCreations: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInputObjectSchema)
            .optional(),
        beneficiaryEntityFutureStatusUpdates: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusCreations: z
            .lazy(() => BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema)
            .optional(),
        beneficiaryFutureStatusUpdates: z
            .lazy(() => BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema)
            .optional(),
        ReviewStatusCreations: z.lazy(() => ReviewStatusOrderByRelationAggregateInputObjectSchema).optional(),
        ReviewStatusUpdates: z.lazy(() => ReviewStatusOrderByRelationAggregateInputObjectSchema).optional(),
        BeneficiaryServiceCreations: z
            .lazy(() => BeneficiaryServiceOrderByRelationAggregateInputObjectSchema)
            .optional(),
        BeneficiaryServiceUpdates: z.lazy(() => BeneficiaryServiceOrderByRelationAggregateInputObjectSchema).optional(),
        EntryRecordServiceCreations: z.lazy(() => EntryRecordOrderByRelationAggregateInputObjectSchema).optional(),
        EntryRecordServiceUpdates: z.lazy(() => EntryRecordOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
