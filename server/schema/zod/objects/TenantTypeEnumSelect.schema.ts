/* eslint-disable */
import { z } from 'zod';
import { TenantInputSchema } from '../input/TenantInput.schema';
import { TenantTypeEnumCountOutputTypeArgsObjectSchema } from './TenantTypeEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumSelect>;
export const TenantTypeEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        tenant: z.union([z.boolean(), z.lazy(() => TenantInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TenantTypeEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
