/* eslint-disable */
import { z } from 'zod';
import { RoleEnumWhereInputObjectSchema } from './RoleEnumWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleEnumWhereUniqueInput>;
export const RoleEnumWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        AND: z
            .union([z.lazy(() => RoleEnumWhereInputObjectSchema), z.lazy(() => RoleEnumWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => RoleEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => RoleEnumWhereInputObjectSchema), z.lazy(() => RoleEnumWhereInputObjectSchema).array()])
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
    })
    .strict() as SchemaType;
