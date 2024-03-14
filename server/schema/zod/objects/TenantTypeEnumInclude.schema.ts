/* eslint-disable */
import { z } from 'zod';
import { TenantInputSchema } from '../input/TenantInput.schema';
import { TenantTypeEnumCountOutputTypeArgsObjectSchema } from './TenantTypeEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumInclude>;
export const TenantTypeEnumIncludeObjectSchema: SchemaType = z
    .object({
        tenant: z.union([z.boolean(), z.lazy(() => TenantInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TenantTypeEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
