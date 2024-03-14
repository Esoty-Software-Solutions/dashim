/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUpdateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedUpdateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedUpdateWithoutDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUpdateWithWhereUniqueWithoutDeviceTypeInput>;
export const DeviceTokenUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => DeviceTokenUpdateWithoutDeviceTypeInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedUpdateWithoutDeviceTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
