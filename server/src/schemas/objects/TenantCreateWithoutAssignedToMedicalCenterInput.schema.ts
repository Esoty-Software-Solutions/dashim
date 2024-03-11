import { z } from 'zod';
import { TenantTypeEnumCreateNestedOneWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateNestedOneWithoutTenantInput.schema';
import { UserCreateNestedOneWithoutOwnerOfInputObjectSchema } from './UserCreateNestedOneWithoutOwnerOfInput.schema';
import { TenantMemberCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateWithoutAssignedToMedicalCenterInput> =
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
      name: z.string(),
      description: z.string().optional().nullable(),
      logo: z.string().optional().nullable(),
      website: z.string().optional().nullable(),
      phone: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      city: z.string().optional().nullable(),
      country: z.string().optional().nullable(),
      type: z.lazy(
        () => TenantTypeEnumCreateNestedOneWithoutTenantInputObjectSchema,
      ),
      owner: z.lazy(() => UserCreateNestedOneWithoutOwnerOfInputObjectSchema),
      members: z
        .lazy(() => TenantMemberCreateNestedManyWithoutTenantInputObjectSchema)
        .optional(),
    })
    .strict();

export const TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema =
  Schema;
