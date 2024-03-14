/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumSelectObjectSchema } from './TenantTypeEnumSelect.schema';
import { TenantTypeEnumIncludeObjectSchema } from './TenantTypeEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumArgs>;
export const TenantTypeEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema).optional(),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
