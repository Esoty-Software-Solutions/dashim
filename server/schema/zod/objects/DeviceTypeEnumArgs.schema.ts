/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumSelectObjectSchema } from './DeviceTypeEnumSelect.schema';
import { DeviceTypeEnumIncludeObjectSchema } from './DeviceTypeEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumArgs>;
export const DeviceTypeEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema).optional(),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
