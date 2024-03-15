/* eslint-disable */
import { z } from 'zod';
import { TenantMemberMemberIdIdCompoundUniqueInputObjectSchema } from './TenantMemberMemberIdIdCompoundUniqueInput.schema';
import { TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TenantRelationFilterObjectSchema } from './TenantRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberWhereUniqueInput>;
export const TenantMemberWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        memberId_id: z.lazy(() => TenantMemberMemberIdIdCompoundUniqueInputObjectSchema).optional(),
        AND: z
            .union([
                z.lazy(() => TenantMemberWhereInputObjectSchema),
                z.lazy(() => TenantMemberWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => TenantMemberWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => TenantMemberWhereInputObjectSchema),
                z.lazy(() => TenantMemberWhereInputObjectSchema).array(),
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        deactivationReason: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.lazy(() => DateTimeNullableFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
                z.null(),
            ])
            .optional()
            .nullable(),
        tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        tenant: z
            .union([z.lazy(() => TenantRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)])
            .optional(),
        member: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
    })
    .strict() as SchemaType;
