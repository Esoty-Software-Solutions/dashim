/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberListRelationFilter>;
export const TenantMemberListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
        some: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
        none: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
