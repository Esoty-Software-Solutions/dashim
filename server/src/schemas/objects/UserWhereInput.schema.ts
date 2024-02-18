import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
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

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    deactivationDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    secondName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    thirdName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fourthName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    searchName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    birthDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    genderId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    nationality: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nationalID: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    username: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isEmailVerificationActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isPhoneVerified: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    passwordHash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    avatar: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    gender: z
      .union([
        z.lazy(() => GenderEnumRelationFilterObjectSchema),
        z.lazy(() => GenderEnumWhereInputObjectSchema),
      ])
      .optional(),
    deviceToken: z
      .lazy(() => DeviceTokenListRelationFilterObjectSchema)
      .optional(),
    ownerOf: z.lazy(() => TenantListRelationFilterObjectSchema).optional(),
    memberOf: z
      .lazy(() => TenantMemberListRelationFilterObjectSchema)
      .optional(),
    beneficiaryEntityStatusChanges: z
      .lazy(() => BeneficiaryEntityListRelationFilterObjectSchema)
      .optional(),
    beneficiaryStatusChanges: z
      .lazy(() => BeneficiaryListRelationFilterObjectSchema)
      .optional(),
    beneficiaryEntityFutureStatusCreations: z
      .lazy(
        () => BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema,
      )
      .optional(),
    beneficiaryEntityFutureStatusUpdates: z
      .lazy(
        () => BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema,
      )
      .optional(),
    beneficiaryFutureStatusCreations: z
      .lazy(() => BeneficiaryFutureStatusChangeListRelationFilterObjectSchema)
      .optional(),
    beneficiaryFutureStatusUpdates: z
      .lazy(() => BeneficiaryFutureStatusChangeListRelationFilterObjectSchema)
      .optional(),
    ReviewStatusCreations: z
      .lazy(() => ReviewStatusListRelationFilterObjectSchema)
      .optional(),
    ReviewStatusUpdates: z
      .lazy(() => ReviewStatusListRelationFilterObjectSchema)
      .optional(),
    BeneficiaryServiceCreations: z
      .lazy(() => BeneficiaryServiceListRelationFilterObjectSchema)
      .optional(),
    BeneficiaryServiceUpdates: z
      .lazy(() => BeneficiaryServiceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
