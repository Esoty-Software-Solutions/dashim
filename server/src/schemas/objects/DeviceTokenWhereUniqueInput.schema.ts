import { z } from 'zod';
import { DeviceTokenUserIdDeviceNameCompoundUniqueInputObjectSchema } from './DeviceTokenUserIdDeviceNameCompoundUniqueInput.schema';
import { DeviceTokenUserIdTokenCompoundUniqueInputObjectSchema } from './DeviceTokenUserIdTokenCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_deviceName: z
      .lazy(() => DeviceTokenUserIdDeviceNameCompoundUniqueInputObjectSchema)
      .optional(),
    userId_token: z
      .lazy(() => DeviceTokenUserIdTokenCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTokenWhereUniqueInputObjectSchema = Schema;
