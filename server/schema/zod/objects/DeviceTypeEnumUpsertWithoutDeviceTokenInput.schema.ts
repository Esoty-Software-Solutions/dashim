/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumWhereInputObjectSchema } from './DeviceTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumUpsertWithoutDeviceTokenInput>;
export const DeviceTypeEnumUpsertWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema),
        ]),
        where: z.lazy(() => DeviceTypeEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
