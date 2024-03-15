/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumCreateNestedOneWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateNestedOneWithoutTenantInput.schema';
import { MedicalCenterCreateNestedOneWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutManagingTenantInput.schema';
import { TenantMemberCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateWithoutOwnerInput>;
export const TenantCreateWithoutOwnerInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        name: z.string(),
        description: z.union([z.string(), z.null()]).optional().nullable(),
        logo: z.union([z.string(), z.null()]).optional().nullable(),
        website: z.union([z.string(), z.null()]).optional().nullable(),
        phone: z.union([z.string(), z.null()]).optional().nullable(),
        email: z.union([z.string(), z.null()]).optional().nullable(),
        address: z.union([z.string(), z.null()]).optional().nullable(),
        city: z.union([z.string(), z.null()]).optional().nullable(),
        country: z.union([z.string(), z.null()]).optional().nullable(),
        type: z.lazy(() => TenantTypeEnumCreateNestedOneWithoutTenantInputObjectSchema),
        assignedToMedicalCenter: z
            .lazy(() => MedicalCenterCreateNestedOneWithoutManagingTenantInputObjectSchema)
            .optional(),
        members: z.lazy(() => TenantMemberCreateNestedManyWithoutTenantInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
