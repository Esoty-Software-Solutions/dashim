/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUpdateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedUpdateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedUpdateWithoutDeviceTypeInput.schema';
import { DeviceTokenCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUpsertWithWhereUniqueWithoutDeviceTypeInput>;
export const DeviceTokenUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => DeviceTokenUpdateWithoutDeviceTypeInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedUpdateWithoutDeviceTypeInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => DeviceTokenCreateWithoutDeviceTypeInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
