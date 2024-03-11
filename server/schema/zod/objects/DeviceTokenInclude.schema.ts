/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumArgsObjectSchema } from './DeviceTypeEnumArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenInclude>;
export const DeviceTokenIncludeObjectSchema: SchemaType = z
    .object({
        deviceType: z.union([z.boolean(), z.lazy(() => DeviceTypeEnumArgsObjectSchema)]).optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
