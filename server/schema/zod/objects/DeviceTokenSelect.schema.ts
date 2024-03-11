/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumArgsObjectSchema } from './DeviceTypeEnumArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenSelect>;
export const DeviceTokenSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        deviceName: z.boolean().optional(),
        token: z.boolean().optional(),
        deviceType: z.union([z.boolean(), z.lazy(() => DeviceTypeEnumArgsObjectSchema)]).optional(),
        deviceTypeId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        userId: z.boolean().optional(),
    })
    .strict() as SchemaType;
