/* eslint-disable */
import { z } from 'zod';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { BeneficiaryListRelationFilterObjectSchema } from './BeneficiaryListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumWhereUniqueInput>;
export const GenderEnumWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => GenderEnumWhereInputObjectSchema),
                z.lazy(() => GenderEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => GenderEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => GenderEnumWhereInputObjectSchema),
                z.lazy(() => GenderEnumWhereInputObjectSchema).array(),
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
        user: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
