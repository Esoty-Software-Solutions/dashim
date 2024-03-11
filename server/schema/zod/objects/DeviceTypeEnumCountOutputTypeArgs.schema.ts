/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumCountOutputTypeSelectObjectSchema } from './DeviceTypeEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumCountOutputTypeArgs>;
export const DeviceTypeEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => DeviceTypeEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
