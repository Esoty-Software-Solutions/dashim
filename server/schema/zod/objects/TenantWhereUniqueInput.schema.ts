/* eslint-disable */
import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TenantTypeEnumRelationFilterObjectSchema } from './TenantTypeEnumRelationFilter.schema';
import { TenantTypeEnumWhereInputObjectSchema } from './TenantTypeEnumWhereInput.schema';
import { MedicalCenterNullableRelationFilterObjectSchema } from './MedicalCenterNullableRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TenantMemberListRelationFilterObjectSchema } from './TenantMemberListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantWhereUniqueInput>;
export const TenantWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        AND: z
            .union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => TenantWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()])
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
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        typeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        logo: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        website: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        phone: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        email: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        address: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        city: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        country: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        type: z
            .union([
                z.lazy(() => TenantTypeEnumRelationFilterObjectSchema),
                z.lazy(() => TenantTypeEnumWhereInputObjectSchema),
            ])
            .optional(),
        assignedToMedicalCenter: z
            .union([
                z.lazy(() => MedicalCenterNullableRelationFilterObjectSchema),
                z.lazy(() => MedicalCenterWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        owner: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
        members: z.lazy(() => TenantMemberListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
