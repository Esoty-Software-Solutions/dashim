/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BeneficiaryListRelationFilterObjectSchema } from './BeneficiaryListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumWhereInput>;
export const RelationshipEnumWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => RelationshipEnumWhereInputObjectSchema),
                z.lazy(() => RelationshipEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => RelationshipEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => RelationshipEnumWhereInputObjectSchema),
                z.lazy(() => RelationshipEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneficiary: z.lazy(() => BeneficiaryListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
