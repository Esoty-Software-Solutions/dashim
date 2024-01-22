import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenderOrderByWithRelationInputObjectSchema } from './GenderOrderByWithRelationInput.schema';
import { DeviceTokenOrderByRelationAggregateInputObjectSchema } from './DeviceTokenOrderByRelationAggregateInput.schema';
import { TenantOrderByRelationAggregateInputObjectSchema } from './TenantOrderByRelationAggregateInput.schema';
import { TenantMemberOrderByRelationAggregateInputObjectSchema } from './TenantMemberOrderByRelationAggregateInput.schema';
import { SubscriberOrderByRelationAggregateInputObjectSchema } from './SubscriberOrderByRelationAggregateInput.schema';
import { BeneficiaryOrderByRelationAggregateInputObjectSchema } from './BeneficiaryOrderByRelationAggregateInput.schema';
import { SubscriberFutureStatusChangeOrderByRelationAggregateInputObjectSchema } from './SubscriberFutureStatusChangeOrderByRelationAggregateInput.schema';
import { BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema } from './BeneficiaryFutureStatusChangeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    deactivationDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    secondName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    thirdName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    fourthName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    searchName: z.lazy(() => SortOrderSchema).optional(),
    birthDate: z.lazy(() => SortOrderSchema).optional(),
    genderId: z.lazy(() => SortOrderSchema).optional(),
    nationality: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    nationalID: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    residence: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    address: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    isPhoneVerified: z.lazy(() => SortOrderSchema).optional(),
    passwordHash: z.lazy(() => SortOrderSchema).optional(),
    avatar: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    gender: z.lazy(() => GenderOrderByWithRelationInputObjectSchema).optional(),
    deviceToken: z
      .lazy(() => DeviceTokenOrderByRelationAggregateInputObjectSchema)
      .optional(),
    ownerOf: z
      .lazy(() => TenantOrderByRelationAggregateInputObjectSchema)
      .optional(),
    memberOf: z
      .lazy(() => TenantMemberOrderByRelationAggregateInputObjectSchema)
      .optional(),
    subscriberStatusChanges: z
      .lazy(() => SubscriberOrderByRelationAggregateInputObjectSchema)
      .optional(),
    beneficiaryStatusChanges: z
      .lazy(() => BeneficiaryOrderByRelationAggregateInputObjectSchema)
      .optional(),
    subscriberFutureStatusCreations: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    subscriberFutureStatusChanges: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusCreations: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusChanges: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
