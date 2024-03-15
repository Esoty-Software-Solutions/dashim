/* eslint-disable */
import { z } from 'zod';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberSelect>;
export const TenantMemberSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
        tenantId: z.boolean().optional(),
        member: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        memberId: z.boolean().optional(),
    })
    .strict() as SchemaType;
