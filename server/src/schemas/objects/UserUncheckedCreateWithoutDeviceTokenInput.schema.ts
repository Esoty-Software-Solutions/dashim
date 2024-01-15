import { z } from 'zod';
import { TenantUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { TenantMembersUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './TenantMembersUncheckedCreateNestedManyWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutDeviceTokenInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
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
    residence: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    username: z.string(),
    email: z.string(),
    isEmailVerificationActive: z.boolean().optional(),
    phone: z.string().optional().nullable(),
    isPhoneVerified: z.boolean().optional(),
    passwordHash: z.string(),
    avatar: z.string().optional().nullable(),
    ownerOf: z
      .lazy(() => TenantUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    memberOf: z
      .lazy(
        () =>
          TenantMembersUncheckedCreateNestedManyWithoutMemberInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutDeviceTokenInputObjectSchema = Schema;
