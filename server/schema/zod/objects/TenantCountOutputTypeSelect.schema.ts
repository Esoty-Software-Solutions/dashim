/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCountOutputTypeSelect>;
export const TenantCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        members: z.boolean().optional(),
    })
    .strict() as SchemaType;
