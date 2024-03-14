/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenUserIdDeviceNameCompoundUniqueInputObjectSchema } from './DeviceTokenUserIdDeviceNameCompoundUniqueInput.schema';
import { DeviceTokenUserIdTokenCompoundUniqueInputObjectSchema } from './DeviceTokenUserIdTokenCompoundUniqueInput.schema';
import { DeviceTokenWhereInputObjectSchema } from './DeviceTokenWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DeviceTypeEnumRelationFilterObjectSchema } from './DeviceTypeEnumRelationFilter.schema';
import { DeviceTypeEnumWhereInputObjectSchema } from './DeviceTypeEnumWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenWhereUniqueInput>;
export const DeviceTokenWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        userId_deviceName: z.lazy(() => DeviceTokenUserIdDeviceNameCompoundUniqueInputObjectSchema).optional(),
        userId_token: z.lazy(() => DeviceTokenUserIdTokenCompoundUniqueInputObjectSchema).optional(),
        AND: z
            .union([
                z.lazy(() => DeviceTokenWhereInputObjectSchema),
                z.lazy(() => DeviceTokenWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => DeviceTokenWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => DeviceTokenWhereInputObjectSchema),
                z.lazy(() => DeviceTokenWhereInputObjectSchema).array(),
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
        deviceName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        deviceTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        deviceType: z
            .union([
                z.lazy(() => DeviceTypeEnumRelationFilterObjectSchema),
                z.lazy(() => DeviceTypeEnumWhereInputObjectSchema),
            ])
            .optional(),
        user: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
    })
    .strict() as SchemaType;
