/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ReviewStatusListRelationFilterObjectSchema } from './ReviewStatusListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumWhereUniqueInput>;
export const ReviewStatusEnumWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
                z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ReviewStatusEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
                z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).array(),
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
        transactionBeneficiaryServices: z.lazy(() => ReviewStatusListRelationFilterObjectSchema).optional(),
        medicalBeneficiaryServices: z.lazy(() => ReviewStatusListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
