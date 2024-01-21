import { z } from 'zod';
import { DeviceTypeCreateNestedOneWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateNestedOneWithoutDeviceTokenInput.schema';
import { UserCreateNestedOneWithoutDeviceTokenInputObjectSchema } from './UserCreateNestedOneWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    deviceName: z.string(),
    token: z.string(),
    deviceType: z.lazy(
      () => DeviceTypeCreateNestedOneWithoutDeviceTokenInputObjectSchema,
    ),
    user: z.lazy(() => UserCreateNestedOneWithoutDeviceTokenInputObjectSchema),
  })
  .strict();

export const DeviceTokenCreateInputObjectSchema = Schema;
