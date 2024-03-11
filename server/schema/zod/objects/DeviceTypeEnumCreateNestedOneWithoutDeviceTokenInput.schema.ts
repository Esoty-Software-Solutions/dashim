/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from './DeviceTypeEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumCreateNestedOneWithoutDeviceTokenInput>;
export const DeviceTypeEnumCreateNestedOneWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema).optional(),
        connect: z.lazy(() => DeviceTypeEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
