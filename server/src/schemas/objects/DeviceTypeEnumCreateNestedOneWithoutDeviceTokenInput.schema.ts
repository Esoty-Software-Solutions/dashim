import { z } from 'zod';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from './DeviceTypeEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeEnumCreateNestedOneWithoutDeviceTokenInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
          z.lazy(
            () =>
              DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => DeviceTypeEnumWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const DeviceTypeEnumCreateNestedOneWithoutDeviceTokenInputObjectSchema =
  Schema;
