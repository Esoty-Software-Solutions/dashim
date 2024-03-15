/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUserIdDeviceNameCompoundUniqueInput>;
export const DeviceTokenUserIdDeviceNameCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        userId: z.string(),
        deviceName: z.string(),
    })
    .strict() as SchemaType;
