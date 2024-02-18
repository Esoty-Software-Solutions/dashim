import { z } from 'zod';
import { GenderCreateNestedOneWithoutUserInputObjectSchema } from './GenderCreateNestedOneWithoutUserInput.schema';
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

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutBeneficiaryServiceUpdatesInput> =
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
      beneficiaryEntityStatusChanges: z
        .lazy(
          () =>
            BeneficiaryEntityCreateNestedManyWithoutStatusSetByInputObjectSchema,
        )
        .optional(),
      beneficiaryStatusChanges: z
        .lazy(
          () => BeneficiaryCreateNestedManyWithoutStatusSetByInputObjectSchema,
        )
        .optional(),
      beneficiaryEntityFutureStatusCreations: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryEntityFutureStatusUpdates: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryFutureStatusCreations: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryFutureStatusUpdates: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      ReviewStatusCreations: z
        .lazy(
          () => ReviewStatusCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      ReviewStatusUpdates: z
        .lazy(
          () => ReviewStatusCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      BeneficiaryServiceCreations: z
        .lazy(
          () =>
            BeneficiaryServiceCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema =
  Schema;
