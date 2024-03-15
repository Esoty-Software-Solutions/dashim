/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenCreateManyUserInputObjectSchema } from './DeviceTokenCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenCreateManyUserInputEnvelope>;
export const DeviceTokenCreateManyUserInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => DeviceTokenCreateManyUserInputObjectSchema),
            z.lazy(() => DeviceTokenCreateManyUserInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
