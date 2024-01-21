import { z } from 'zod';
import { TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberListRelationFilter> = z
  .object({
    every: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
    some: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
    none: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  })
  .strict();

export const TenantMemberListRelationFilterObjectSchema = Schema;
