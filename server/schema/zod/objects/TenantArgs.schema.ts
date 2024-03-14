/* eslint-disable */
import { z } from 'zod';
import { TenantSelectObjectSchema } from './TenantSelect.schema';
import { TenantIncludeObjectSchema } from './TenantInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantArgs>;
export const TenantArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => TenantSelectObjectSchema).optional(),
        include: z.lazy(() => TenantIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
