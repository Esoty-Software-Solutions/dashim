/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenSelectObjectSchema } from './DeviceTokenSelect.schema';
import { DeviceTokenIncludeObjectSchema } from './DeviceTokenInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenArgs>;
export const DeviceTokenArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema).optional(),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
