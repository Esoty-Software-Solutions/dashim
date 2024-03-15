/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenInputSchema } from '../input/DeviceTokenInput.schema';
import { DeviceTypeEnumCountOutputTypeArgsObjectSchema } from './DeviceTypeEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumSelect>;
export const DeviceTypeEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        deviceToken: z.union([z.boolean(), z.lazy(() => DeviceTokenInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => DeviceTypeEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
