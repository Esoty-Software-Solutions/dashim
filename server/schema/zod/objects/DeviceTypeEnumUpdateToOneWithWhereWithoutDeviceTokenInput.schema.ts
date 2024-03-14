/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumWhereInputObjectSchema } from './DeviceTypeEnumWhereInput.schema';
import { DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumUpdateToOneWithWhereWithoutDeviceTokenInput>;
export const DeviceTypeEnumUpdateToOneWithWhereWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTypeEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
