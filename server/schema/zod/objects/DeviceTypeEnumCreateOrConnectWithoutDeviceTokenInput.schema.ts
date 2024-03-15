/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from './DeviceTypeEnumWhereUniqueInput.schema';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInput>;
export const DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTypeEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
