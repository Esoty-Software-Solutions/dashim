/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenCreateOrConnectWithoutDeviceTypeInput>;
export const DeviceTokenCreateOrConnectWithoutDeviceTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => DeviceTokenCreateWithoutDeviceTypeInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
