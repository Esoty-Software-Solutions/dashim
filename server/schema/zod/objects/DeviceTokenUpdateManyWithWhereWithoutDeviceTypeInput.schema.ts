/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenScalarWhereInputObjectSchema } from './DeviceTokenScalarWhereInput.schema';
import { DeviceTokenUpdateManyMutationInputObjectSchema } from './DeviceTokenUpdateManyMutationInput.schema';
import { DeviceTokenUncheckedUpdateManyWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedUpdateManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUpdateManyWithWhereWithoutDeviceTypeInput>;
export const DeviceTokenUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => DeviceTokenUpdateManyMutationInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedUpdateManyWithoutDeviceTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
