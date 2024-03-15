/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenInputSchema } from '../input/DeviceTokenInput.schema';
import { DeviceTypeEnumCountOutputTypeArgsObjectSchema } from './DeviceTypeEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumInclude>;
export const DeviceTypeEnumIncludeObjectSchema: SchemaType = z
    .object({
        deviceToken: z.union([z.boolean(), z.lazy(() => DeviceTokenInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => DeviceTypeEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
