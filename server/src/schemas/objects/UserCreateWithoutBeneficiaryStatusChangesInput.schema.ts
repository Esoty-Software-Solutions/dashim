import { z } from 'zod';
import { GenderCreateNestedOneWithoutUserInputObjectSchema } from './GenderCreateNestedOneWithoutUserInput.schema';
import { DeviceTokenCreateNestedManyWithoutUserInputObjectSchema } from './DeviceTokenCreateNestedManyWithoutUserInput.schema';
import { TenantCreateNestedManyWithoutOwnerInputObjectSchema } from './TenantCreateNestedManyWithoutOwnerInput.schema';
import { TenantMemberCreateNestedManyWithoutMemberInputObjectSchema } from './TenantMemberCreateNestedManyWithoutMemberInput.schema';
import { SubscriberCreateNestedManyWithoutStatusSetByInputObjectSchema } from './SubscriberCreateNestedManyWithoutStatusSetByInput.schema';
import { SubscriberFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateNestedManyWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateNestedManyWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutBeneficiaryStatusChangesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      deactivationDate: z.coerce.date().optional().nullable(),
      firstName: z.string(),
      secondName: z.string().optional().nullable(),
      thirdName: z.string().optional().nullable(),
      fourthName: z.string().optional().nullable(),
      lastName: z.string(),
      searchName: z.string(),
      birthDate: z.coerce.date(),
      nationality: z.string().optional().nullable(),
      nationalID: z.string().optional().nullable(),
      residence: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      username: z.string(),
      email: z.string(),
      isEmailVerificationActive: z.boolean().optional(),
      phone: z.string().optional().nullable(),
      isPhoneVerified: z.boolean().optional(),
      passwordHash: z.string(),
      avatar: z.string().optional().nullable(),
      gender: z.lazy(() => GenderCreateNestedOneWithoutUserInputObjectSchema),
      deviceToken: z
        .lazy(() => DeviceTokenCreateNestedManyWithoutUserInputObjectSchema)
        .optional(),
      ownerOf: z
        .lazy(() => TenantCreateNestedManyWithoutOwnerInputObjectSchema)
        .optional(),
      memberOf: z
        .lazy(() => TenantMemberCreateNestedManyWithoutMemberInputObjectSchema)
        .optional(),
      subscriberStatusChanges: z
        .lazy(
          () => SubscriberCreateNestedManyWithoutStatusSetByInputObjectSchema,
        )
        .optional(),
      subscriberFutureStatusCreations: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      subscriberFutureStatusChanges: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryFutureStatusCreations: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryFutureStatusChanges: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema =
  Schema;
