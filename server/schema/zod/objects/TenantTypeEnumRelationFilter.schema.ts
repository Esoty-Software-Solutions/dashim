/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumWhereInputObjectSchema } from './TenantTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumRelationFilter>;
export const TenantTypeEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => TenantTypeEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => TenantTypeEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
