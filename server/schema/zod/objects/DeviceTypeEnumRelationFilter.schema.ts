/* eslint-disable */
import { z } from 'zod';
import { DeviceTypeEnumWhereInputObjectSchema } from './DeviceTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTypeEnumRelationFilter>;
export const DeviceTypeEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => DeviceTypeEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => DeviceTypeEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
