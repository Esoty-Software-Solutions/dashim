/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumScalarWhereWithAggregatesInput>;
export const RelationshipEnumScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => RelationshipEnumScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => RelationshipEnumScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => RelationshipEnumScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => RelationshipEnumScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => RelationshipEnumScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
            ])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
        arabic: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    })
    .strict() as SchemaType;
