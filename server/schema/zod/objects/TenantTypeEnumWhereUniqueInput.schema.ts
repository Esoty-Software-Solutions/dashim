/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumWhereInputObjectSchema } from './TenantTypeEnumWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TenantListRelationFilterObjectSchema } from './TenantListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumWhereUniqueInput>;
export const TenantTypeEnumWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => TenantTypeEnumWhereInputObjectSchema),
                z.lazy(() => TenantTypeEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => TenantTypeEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => TenantTypeEnumWhereInputObjectSchema),
                z.lazy(() => TenantTypeEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        arabic: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        tenant: z.lazy(() => TenantListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
