/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumCountOutputTypeSelect>;
export const DeviceTypeEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        deviceToken: z.boolean().optional(),
    })
    .strict() as SchemaType;
