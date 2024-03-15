/* eslint-disable */
import { z } from 'zod';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberInclude>;
export const TenantMemberIncludeObjectSchema: SchemaType = z
    .object({
        tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
        member: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
