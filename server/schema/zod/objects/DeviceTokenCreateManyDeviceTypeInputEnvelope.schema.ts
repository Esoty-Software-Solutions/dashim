/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenCreateManyDeviceTypeInputObjectSchema } from './DeviceTokenCreateManyDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenCreateManyDeviceTypeInputEnvelope>;
export const DeviceTokenCreateManyDeviceTypeInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => DeviceTokenCreateManyDeviceTypeInputObjectSchema),
            z.lazy(() => DeviceTokenCreateManyDeviceTypeInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
