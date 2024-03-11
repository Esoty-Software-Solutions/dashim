/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumCountOutputTypeSelectObjectSchema } from './TenantTypeEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumCountOutputTypeArgs>;
export const TenantTypeEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => TenantTypeEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
