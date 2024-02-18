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
import { ReviewStatusUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewStatusCreationsInput> =
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
      genderId: z.string(),
      nationality: z.string().optional().nullable(),
      nationalID: z.string().optional().nullable(),
      username: z.string(),
      email: z.string(),
      isEmailVerificationActive: z.boolean().optional(),
      phone: z.string().optional().nullable(),
      isPhoneVerified: z.boolean().optional(),
      passwordHash: z.string(),
      avatar: z.string().optional().nullable(),
      deviceToken: z
        .lazy(
          () =>
            DeviceTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      ownerOf: z
        .lazy(
          () => TenantUncheckedCreateNestedManyWithoutOwnerInputObjectSchema,
        )
        .optional(),
      memberOf: z
        .lazy(
          () =>
            TenantMemberUncheckedCreateNestedManyWithoutMemberInputObjectSchema,
        )
        .optional(),
      beneficiaryEntityStatusChanges: z
        .lazy(
          () =>
            BeneficiaryEntityUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema,
        )
        .optional(),
      beneficiaryStatusChanges: z
        .lazy(
          () =>
            BeneficiaryUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema,
        )
        .optional(),
      beneficiaryEntityFutureStatusCreations: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryEntityFutureStatusUpdates: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryFutureStatusCreations: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      beneficiaryFutureStatusUpdates: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      ReviewStatusUpdates: z
        .lazy(
          () =>
            ReviewStatusUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
      BeneficiaryServiceCreations: z
        .lazy(
          () =>
            BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema,
        )
        .optional(),
      BeneficiaryServiceUpdates: z
        .lazy(
          () =>
            BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema =
  Schema;
