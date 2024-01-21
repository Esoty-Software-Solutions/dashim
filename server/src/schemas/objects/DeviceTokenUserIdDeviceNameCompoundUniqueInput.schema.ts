import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUserIdDeviceNameCompoundUniqueInput> =
  z
    .object({
      userId: z.string(),
      deviceName: z.string(),
    })
    .strict();

export const DeviceTokenUserIdDeviceNameCompoundUniqueInputObjectSchema =
  Schema;
