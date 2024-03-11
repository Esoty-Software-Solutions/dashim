/* eslint-disable */
import { z } from 'zod';
import { TenantCountOutputTypeSelectObjectSchema } from './TenantCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCountOutputTypeArgs>;
export const TenantCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => TenantCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
