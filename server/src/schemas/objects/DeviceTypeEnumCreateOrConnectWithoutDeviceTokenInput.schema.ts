import { z } from 'zod';
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from './DeviceTypeEnumWhereUniqueInput.schema';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInput> =
  z
    .object({
      where: z.lazy(() => DeviceTypeEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
        z.lazy(
          () =>
            DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DeviceTypeEnumCreateOrConnectWithoutDeviceTokenInputObjectSchema =
  Schema;
