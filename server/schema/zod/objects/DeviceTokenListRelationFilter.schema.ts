/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenWhereInputObjectSchema } from './DeviceTokenWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenListRelationFilter>;
export const DeviceTokenListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => DeviceTokenWhereInputObjectSchema).optional(),
        some: z.lazy(() => DeviceTokenWhereInputObjectSchema).optional(),
        none: z.lazy(() => DeviceTokenWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
