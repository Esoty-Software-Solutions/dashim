/* eslint-disable */
import { z } from 'zod';
import { TenantMemberSelectObjectSchema } from './TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema } from './TenantMemberInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberArgs>;
export const TenantMemberArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => TenantMemberSelectObjectSchema).optional(),
        include: z.lazy(() => TenantMemberIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
