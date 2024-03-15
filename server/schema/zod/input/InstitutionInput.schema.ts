/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { InstitutionSelectObjectSchema } from '../objects/InstitutionSelect.schema';
import { InstitutionIncludeObjectSchema } from '../objects/InstitutionInclude.schema';
import { InstitutionWhereUniqueInputObjectSchema } from '../objects/InstitutionWhereUniqueInput.schema';
import { InstitutionWhereInputObjectSchema } from '../objects/InstitutionWhereInput.schema';
import { InstitutionOrderByWithRelationInputObjectSchema } from '../objects/InstitutionOrderByWithRelationInput.schema';
import { InstitutionScalarFieldEnumSchema } from '../enums/InstitutionScalarFieldEnum.schema';
import { InstitutionCreateInputObjectSchema } from '../objects/InstitutionCreateInput.schema';
import { InstitutionUncheckedCreateInputObjectSchema } from '../objects/InstitutionUncheckedCreateInput.schema';
import { InstitutionCreateManyInputObjectSchema } from '../objects/InstitutionCreateManyInput.schema';
import { InstitutionUpdateInputObjectSchema } from '../objects/InstitutionUpdateInput.schema';
import { InstitutionUncheckedUpdateInputObjectSchema } from '../objects/InstitutionUncheckedUpdateInput.schema';
import { InstitutionUpdateManyMutationInputObjectSchema } from '../objects/InstitutionUpdateManyMutationInput.schema';
import { InstitutionUncheckedUpdateManyInputObjectSchema } from '../objects/InstitutionUncheckedUpdateManyInput.schema';
import { InstitutionCountAggregateInputObjectSchema } from '../objects/InstitutionCountAggregateInput.schema';
import { InstitutionMinAggregateInputObjectSchema } from '../objects/InstitutionMinAggregateInput.schema';
import { InstitutionMaxAggregateInputObjectSchema } from '../objects/InstitutionMaxAggregateInput.schema';
import { InstitutionAvgAggregateInputObjectSchema } from '../objects/InstitutionAvgAggregateInput.schema';
import { InstitutionSumAggregateInputObjectSchema } from '../objects/InstitutionSumAggregateInput.schema';
import { InstitutionOrderByWithAggregationInputObjectSchema } from '../objects/InstitutionOrderByWithAggregationInput.schema';
import { InstitutionScalarWhereWithAggregatesInputObjectSchema } from '../objects/InstitutionScalarWhereWithAggregatesInput.schema';

type InstitutionInputSchemaType = {
    findUnique: z.ZodType<Prisma.InstitutionFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.InstitutionFindFirstArgs>;
    findMany: z.ZodType<Prisma.InstitutionFindManyArgs>;
    create: z.ZodType<Prisma.InstitutionCreateArgs>;
    createMany: z.ZodType<Prisma.InstitutionCreateManyArgs>;
    delete: z.ZodType<Prisma.InstitutionDeleteArgs>;
    deleteMany: z.ZodType<Prisma.InstitutionDeleteManyArgs>;
    update: z.ZodType<Prisma.InstitutionUpdateArgs>;
    updateMany: z.ZodType<Prisma.InstitutionUpdateManyArgs>;
    upsert: z.ZodType<Prisma.InstitutionUpsertArgs>;
    aggregate: z.ZodType<Prisma.InstitutionAggregateArgs>;
    groupBy: z.ZodType<Prisma.InstitutionGroupByArgs>;
    count: z.ZodType<Prisma.InstitutionCountArgs>;
};

export const InstitutionInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        where: InstitutionWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        where: InstitutionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionOrderByWithRelationInputObjectSchema,
                InstitutionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InstitutionScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        where: InstitutionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionOrderByWithRelationInputObjectSchema,
                InstitutionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InstitutionScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        data: z.union([InstitutionCreateInputObjectSchema, InstitutionUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([InstitutionCreateManyInputObjectSchema, z.array(InstitutionCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        where: InstitutionWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: InstitutionWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        data: z.union([InstitutionUpdateInputObjectSchema, InstitutionUncheckedUpdateInputObjectSchema]),
        where: InstitutionWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            InstitutionUpdateManyMutationInputObjectSchema,
            InstitutionUncheckedUpdateManyInputObjectSchema,
        ]),
        where: InstitutionWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => InstitutionSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionIncludeObjectSchema.optional()),
        where: InstitutionWhereUniqueInputObjectSchema,
        create: z.union([InstitutionCreateInputObjectSchema, InstitutionUncheckedCreateInputObjectSchema]),
        update: z.union([InstitutionUpdateInputObjectSchema, InstitutionUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: InstitutionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionOrderByWithRelationInputObjectSchema,
                InstitutionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), InstitutionCountAggregateInputObjectSchema]).optional(),
        _min: InstitutionMinAggregateInputObjectSchema.optional(),
        _max: InstitutionMaxAggregateInputObjectSchema.optional(),
        _avg: InstitutionAvgAggregateInputObjectSchema.optional(),
        _sum: InstitutionSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: InstitutionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionOrderByWithAggregationInputObjectSchema,
                InstitutionOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: InstitutionScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(InstitutionScalarFieldEnumSchema),
        _count: z.union([z.literal(true), InstitutionCountAggregateInputObjectSchema]).optional(),
        _min: InstitutionMinAggregateInputObjectSchema.optional(),
        _max: InstitutionMaxAggregateInputObjectSchema.optional(),
        _avg: InstitutionAvgAggregateInputObjectSchema.optional(),
        _sum: InstitutionSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: InstitutionWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionOrderByWithRelationInputObjectSchema,
                InstitutionOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InstitutionScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), InstitutionCountAggregateInputObjectSchema]).optional(),
    }),
} as InstitutionInputSchemaType;
