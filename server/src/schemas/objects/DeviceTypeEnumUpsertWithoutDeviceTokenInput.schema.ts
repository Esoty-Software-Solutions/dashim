import { z } from 'zod';
import { DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeEnumUpsertWithoutDeviceTokenInput> = z
  .object({
    update: z.union([
      z.lazy(() => DeviceTypeEnumUpdateWithoutDeviceTokenInputObjectSchema),
      z.lazy(
        () => DeviceTypeEnumUncheckedUpdateWithoutDeviceTokenInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => DeviceTypeEnumCreateWithoutDeviceTokenInputObjectSchema),
      z.lazy(
        () => DeviceTypeEnumUncheckedCreateWithoutDeviceTokenInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const DeviceTypeEnumUpsertWithoutDeviceTokenInputObjectSchema = Schema;
