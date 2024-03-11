/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUpsertWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUpsertWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from './DeviceTypeEnumWhereUniqueInput.schema';
import { DeviceTypeEnumUpdateToOneWithWhereWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUpdateToOneWithWhereWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumUpdateOneRequiredWithoutDeviceTokenNestedInput>;
export const DeviceTypeEnumUpdateOneRequiredWithoutDeviceTokenNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema).optional(),
        upsert: z.lazy(() => DeviceTypeEnumUpsertWithoutDeviceTokenInputObjectSchema).optional(),
        connect: z.lazy(() => DeviceTypeEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => DeviceTypeEnumUpdateToOneWithWhereWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
