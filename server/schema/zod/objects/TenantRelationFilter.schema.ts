/* eslint-disable */
import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantRelationFilter>;
export const TenantRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => TenantWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => TenantWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
