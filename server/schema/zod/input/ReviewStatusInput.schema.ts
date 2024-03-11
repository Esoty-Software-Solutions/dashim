/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { ReviewStatusSelectObjectSchema } from '../objects/ReviewStatusSelect.schema';
import { ReviewStatusIncludeObjectSchema } from '../objects/ReviewStatusInclude.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from '../objects/ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusWhereInputObjectSchema } from '../objects/ReviewStatusWhereInput.schema';
import { ReviewStatusOrderByWithRelationInputObjectSchema } from '../objects/ReviewStatusOrderByWithRelationInput.schema';
import { ReviewStatusScalarFieldEnumSchema } from '../enums/ReviewStatusScalarFieldEnum.schema';
import { ReviewStatusCreateInputObjectSchema } from '../objects/ReviewStatusCreateInput.schema';
import { ReviewStatusUncheckedCreateInputObjectSchema } from '../objects/ReviewStatusUncheckedCreateInput.schema';
import { ReviewStatusCreateManyInputObjectSchema } from '../objects/ReviewStatusCreateManyInput.schema';
import { ReviewStatusUpdateInputObjectSchema } from '../objects/ReviewStatusUpdateInput.schema';
import { ReviewStatusUncheckedUpdateInputObjectSchema } from '../objects/ReviewStatusUncheckedUpdateInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from '../objects/ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyInputObjectSchema } from '../objects/ReviewStatusUncheckedUpdateManyInput.schema';
import { ReviewStatusCountAggregateInputObjectSchema } from '../objects/ReviewStatusCountAggregateInput.schema';
import { ReviewStatusMinAggregateInputObjectSchema } from '../objects/ReviewStatusMinAggregateInput.schema';
import { ReviewStatusMaxAggregateInputObjectSchema } from '../objects/ReviewStatusMaxAggregateInput.schema';
import { ReviewStatusOrderByWithAggregationInputObjectSchema } from '../objects/ReviewStatusOrderByWithAggregationInput.schema';
import { ReviewStatusScalarWhereWithAggregatesInputObjectSchema } from '../objects/ReviewStatusScalarWhereWithAggregatesInput.schema';

type ReviewStatusInputSchemaType = {
    findUnique: z.ZodType<Prisma.ReviewStatusFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ReviewStatusFindFirstArgs>;
    findMany: z.ZodType<Prisma.ReviewStatusFindManyArgs>;
    create: z.ZodType<Prisma.ReviewStatusCreateArgs>;
    createMany: z.ZodType<Prisma.ReviewStatusCreateManyArgs>;
    delete: z.ZodType<Prisma.ReviewStatusDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ReviewStatusDeleteManyArgs>;
    update: z.ZodType<Prisma.ReviewStatusUpdateArgs>;
    updateMany: z.ZodType<Prisma.ReviewStatusUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ReviewStatusUpsertArgs>;
    aggregate: z.ZodType<Prisma.ReviewStatusAggregateArgs>;
    groupBy: z.ZodType<Prisma.ReviewStatusGroupByArgs>;
    count: z.ZodType<Prisma.ReviewStatusCountArgs>;
};

export const ReviewStatusInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        where: ReviewStatusWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        where: ReviewStatusWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusOrderByWithRelationInputObjectSchema,
                ReviewStatusOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(ReviewStatusScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        where: ReviewStatusWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusOrderByWithRelationInputObjectSchema,
                ReviewStatusOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(ReviewStatusScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        data: z.union([ReviewStatusCreateInputObjectSchema, ReviewStatusUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([ReviewStatusCreateManyInputObjectSchema, z.array(ReviewStatusCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        where: ReviewStatusWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: ReviewStatusWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        data: z.union([ReviewStatusUpdateInputObjectSchema, ReviewStatusUncheckedUpdateInputObjectSchema]),
        where: ReviewStatusWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            ReviewStatusUpdateManyMutationInputObjectSchema,
            ReviewStatusUncheckedUpdateManyInputObjectSchema,
        ]),
        where: ReviewStatusWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema.optional()),
        where: ReviewStatusWhereUniqueInputObjectSchema,
        create: z.union([ReviewStatusCreateInputObjectSchema, ReviewStatusUncheckedCreateInputObjectSchema]),
        update: z.union([ReviewStatusUpdateInputObjectSchema, ReviewStatusUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: ReviewStatusWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusOrderByWithRelationInputObjectSchema,
                ReviewStatusOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), ReviewStatusCountAggregateInputObjectSchema]).optional(),
        _min: ReviewStatusMinAggregateInputObjectSchema.optional(),
        _max: ReviewStatusMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: ReviewStatusWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusOrderByWithAggregationInputObjectSchema,
                ReviewStatusOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: ReviewStatusScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(ReviewStatusScalarFieldEnumSchema),
        _count: z.union([z.literal(true), ReviewStatusCountAggregateInputObjectSchema]).optional(),
        _min: ReviewStatusMinAggregateInputObjectSchema.optional(),
        _max: ReviewStatusMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: ReviewStatusWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusOrderByWithRelationInputObjectSchema,
                ReviewStatusOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(ReviewStatusScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), ReviewStatusCountAggregateInputObjectSchema]).optional(),
    }),
} as ReviewStatusInputSchemaType;
