/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumCountOutputTypeSelect>;
export const TenantTypeEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        tenant: z.boolean().optional(),
    })
    .strict() as SchemaType;
