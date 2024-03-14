/* eslint-disable */
import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantListRelationFilter>;
export const TenantListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => TenantWhereInputObjectSchema).optional(),
        some: z.lazy(() => TenantWhereInputObjectSchema).optional(),
        none: z.lazy(() => TenantWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
