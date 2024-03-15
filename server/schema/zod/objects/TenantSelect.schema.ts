/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumArgsObjectSchema } from './TenantTypeEnumArgs.schema';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TenantMemberInputSchema } from '../input/TenantMemberInput.schema';
import { TenantCountOutputTypeArgsObjectSchema } from './TenantCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantSelect>;
export const TenantSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        name: z.boolean().optional(),
        type: z.union([z.boolean(), z.lazy(() => TenantTypeEnumArgsObjectSchema)]).optional(),
        typeId: z.boolean().optional(),
        description: z.boolean().optional(),
        logo: z.boolean().optional(),
        website: z.boolean().optional(),
        phone: z.boolean().optional(),
        email: z.boolean().optional(),
        address: z.boolean().optional(),
        city: z.boolean().optional(),
        country: z.boolean().optional(),
        assignedToMedicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
        owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        ownerId: z.boolean().optional(),
        members: z.union([z.boolean(), z.lazy(() => TenantMemberInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
