/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { ReviewStatusEnumSelectObjectSchema } from '../objects/ReviewStatusEnumSelect.schema';
import { ReviewStatusEnumIncludeObjectSchema } from '../objects/ReviewStatusEnumInclude.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from '../objects/ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumWhereInputObjectSchema } from '../objects/ReviewStatusEnumWhereInput.schema';
import { ReviewStatusEnumOrderByWithRelationInputObjectSchema } from '../objects/ReviewStatusEnumOrderByWithRelationInput.schema';
import { ReviewStatusEnumScalarFieldEnumSchema } from '../enums/ReviewStatusEnumScalarFieldEnum.schema';
import { ReviewStatusEnumCreateInputObjectSchema } from '../objects/ReviewStatusEnumCreateInput.schema';
import { ReviewStatusEnumUncheckedCreateInputObjectSchema } from '../objects/ReviewStatusEnumUncheckedCreateInput.schema';
import { ReviewStatusEnumCreateManyInputObjectSchema } from '../objects/ReviewStatusEnumCreateManyInput.schema';
import { ReviewStatusEnumUpdateInputObjectSchema } from '../objects/ReviewStatusEnumUpdateInput.schema';
import { ReviewStatusEnumUncheckedUpdateInputObjectSchema } from '../objects/ReviewStatusEnumUncheckedUpdateInput.schema';
import { ReviewStatusEnumUpdateManyMutationInputObjectSchema } from '../objects/ReviewStatusEnumUpdateManyMutationInput.schema';
import { ReviewStatusEnumUncheckedUpdateManyInputObjectSchema } from '../objects/ReviewStatusEnumUncheckedUpdateManyInput.schema';
import { ReviewStatusEnumCountAggregateInputObjectSchema } from '../objects/ReviewStatusEnumCountAggregateInput.schema';
import { ReviewStatusEnumMinAggregateInputObjectSchema } from '../objects/ReviewStatusEnumMinAggregateInput.schema';
import { ReviewStatusEnumMaxAggregateInputObjectSchema } from '../objects/ReviewStatusEnumMaxAggregateInput.schema';
import { ReviewStatusEnumOrderByWithAggregationInputObjectSchema } from '../objects/ReviewStatusEnumOrderByWithAggregationInput.schema';
import { ReviewStatusEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/ReviewStatusEnumScalarWhereWithAggregatesInput.schema';

type ReviewStatusEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.ReviewStatusEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ReviewStatusEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.ReviewStatusEnumFindManyArgs>;
    create: z.ZodType<Prisma.ReviewStatusEnumCreateArgs>;
    createMany: z.ZodType<Prisma.ReviewStatusEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.ReviewStatusEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ReviewStatusEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.ReviewStatusEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.ReviewStatusEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ReviewStatusEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.ReviewStatusEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.ReviewStatusEnumGroupByArgs>;
    count: z.ZodType<Prisma.ReviewStatusEnumCountArgs>;
};

export const ReviewStatusEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        where: ReviewStatusEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        where: ReviewStatusEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusEnumOrderByWithRelationInputObjectSchema,
                ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(ReviewStatusEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        where: ReviewStatusEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusEnumOrderByWithRelationInputObjectSchema,
                ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(ReviewStatusEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        data: z.union([ReviewStatusEnumCreateInputObjectSchema, ReviewStatusEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            ReviewStatusEnumCreateManyInputObjectSchema,
            z.array(ReviewStatusEnumCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        where: ReviewStatusEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: ReviewStatusEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        data: z.union([ReviewStatusEnumUpdateInputObjectSchema, ReviewStatusEnumUncheckedUpdateInputObjectSchema]),
        where: ReviewStatusEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            ReviewStatusEnumUpdateManyMutationInputObjectSchema,
            ReviewStatusEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: ReviewStatusEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema.optional()),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema.optional()),
        where: ReviewStatusEnumWhereUniqueInputObjectSchema,
        create: z.union([ReviewStatusEnumCreateInputObjectSchema, ReviewStatusEnumUncheckedCreateInputObjectSchema]),
        update: z.union([ReviewStatusEnumUpdateInputObjectSchema, ReviewStatusEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: ReviewStatusEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusEnumOrderByWithRelationInputObjectSchema,
                ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), ReviewStatusEnumCountAggregateInputObjectSchema]).optional(),
        _min: ReviewStatusEnumMinAggregateInputObjectSchema.optional(),
        _max: ReviewStatusEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: ReviewStatusEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusEnumOrderByWithAggregationInputObjectSchema,
                ReviewStatusEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: ReviewStatusEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(ReviewStatusEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), ReviewStatusEnumCountAggregateInputObjectSchema]).optional(),
        _min: ReviewStatusEnumMinAggregateInputObjectSchema.optional(),
        _max: ReviewStatusEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: ReviewStatusEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                ReviewStatusEnumOrderByWithRelationInputObjectSchema,
                ReviewStatusEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: ReviewStatusEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(ReviewStatusEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), ReviewStatusEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as ReviewStatusEnumInputSchemaType;
