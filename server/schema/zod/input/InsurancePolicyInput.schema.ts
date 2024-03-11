/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { InsurancePolicySelectObjectSchema } from '../objects/InsurancePolicySelect.schema';
import { InsurancePolicyIncludeObjectSchema } from '../objects/InsurancePolicyInclude.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from '../objects/InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from '../objects/InsurancePolicyWhereInput.schema';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from '../objects/InsurancePolicyOrderByWithRelationInput.schema';
import { InsurancePolicyScalarFieldEnumSchema } from '../enums/InsurancePolicyScalarFieldEnum.schema';
import { InsurancePolicyCreateInputObjectSchema } from '../objects/InsurancePolicyCreateInput.schema';
import { InsurancePolicyUncheckedCreateInputObjectSchema } from '../objects/InsurancePolicyUncheckedCreateInput.schema';
import { InsurancePolicyCreateManyInputObjectSchema } from '../objects/InsurancePolicyCreateManyInput.schema';
import { InsurancePolicyUpdateInputObjectSchema } from '../objects/InsurancePolicyUpdateInput.schema';
import { InsurancePolicyUncheckedUpdateInputObjectSchema } from '../objects/InsurancePolicyUncheckedUpdateInput.schema';
import { InsurancePolicyUpdateManyMutationInputObjectSchema } from '../objects/InsurancePolicyUpdateManyMutationInput.schema';
import { InsurancePolicyUncheckedUpdateManyInputObjectSchema } from '../objects/InsurancePolicyUncheckedUpdateManyInput.schema';
import { InsurancePolicyCountAggregateInputObjectSchema } from '../objects/InsurancePolicyCountAggregateInput.schema';
import { InsurancePolicyMinAggregateInputObjectSchema } from '../objects/InsurancePolicyMinAggregateInput.schema';
import { InsurancePolicyMaxAggregateInputObjectSchema } from '../objects/InsurancePolicyMaxAggregateInput.schema';
import { InsurancePolicyAvgAggregateInputObjectSchema } from '../objects/InsurancePolicyAvgAggregateInput.schema';
import { InsurancePolicySumAggregateInputObjectSchema } from '../objects/InsurancePolicySumAggregateInput.schema';
import { InsurancePolicyOrderByWithAggregationInputObjectSchema } from '../objects/InsurancePolicyOrderByWithAggregationInput.schema';
import { InsurancePolicyScalarWhereWithAggregatesInputObjectSchema } from '../objects/InsurancePolicyScalarWhereWithAggregatesInput.schema';

type InsurancePolicyInputSchemaType = {
    findUnique: z.ZodType<Prisma.InsurancePolicyFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.InsurancePolicyFindFirstArgs>;
    findMany: z.ZodType<Prisma.InsurancePolicyFindManyArgs>;
    create: z.ZodType<Prisma.InsurancePolicyCreateArgs>;
    createMany: z.ZodType<Prisma.InsurancePolicyCreateManyArgs>;
    delete: z.ZodType<Prisma.InsurancePolicyDeleteArgs>;
    deleteMany: z.ZodType<Prisma.InsurancePolicyDeleteManyArgs>;
    update: z.ZodType<Prisma.InsurancePolicyUpdateArgs>;
    updateMany: z.ZodType<Prisma.InsurancePolicyUpdateManyArgs>;
    upsert: z.ZodType<Prisma.InsurancePolicyUpsertArgs>;
    aggregate: z.ZodType<Prisma.InsurancePolicyAggregateArgs>;
    groupBy: z.ZodType<Prisma.InsurancePolicyGroupByArgs>;
    count: z.ZodType<Prisma.InsurancePolicyCountArgs>;
};

export const InsurancePolicyInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        where: InsurancePolicyWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        where: InsurancePolicyWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyOrderByWithRelationInputObjectSchema,
                InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InsurancePolicyScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        where: InsurancePolicyWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyOrderByWithRelationInputObjectSchema,
                InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InsurancePolicyScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        data: z.union([InsurancePolicyCreateInputObjectSchema, InsurancePolicyUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            InsurancePolicyCreateManyInputObjectSchema,
            z.array(InsurancePolicyCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        where: InsurancePolicyWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: InsurancePolicyWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        data: z.union([InsurancePolicyUpdateInputObjectSchema, InsurancePolicyUncheckedUpdateInputObjectSchema]),
        where: InsurancePolicyWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            InsurancePolicyUpdateManyMutationInputObjectSchema,
            InsurancePolicyUncheckedUpdateManyInputObjectSchema,
        ]),
        where: InsurancePolicyWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema.optional()),
        where: InsurancePolicyWhereUniqueInputObjectSchema,
        create: z.union([InsurancePolicyCreateInputObjectSchema, InsurancePolicyUncheckedCreateInputObjectSchema]),
        update: z.union([InsurancePolicyUpdateInputObjectSchema, InsurancePolicyUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: InsurancePolicyWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyOrderByWithRelationInputObjectSchema,
                InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), InsurancePolicyCountAggregateInputObjectSchema]).optional(),
        _min: InsurancePolicyMinAggregateInputObjectSchema.optional(),
        _max: InsurancePolicyMaxAggregateInputObjectSchema.optional(),
        _avg: InsurancePolicyAvgAggregateInputObjectSchema.optional(),
        _sum: InsurancePolicySumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: InsurancePolicyWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyOrderByWithAggregationInputObjectSchema,
                InsurancePolicyOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: InsurancePolicyScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(InsurancePolicyScalarFieldEnumSchema),
        _count: z.union([z.literal(true), InsurancePolicyCountAggregateInputObjectSchema]).optional(),
        _min: InsurancePolicyMinAggregateInputObjectSchema.optional(),
        _max: InsurancePolicyMaxAggregateInputObjectSchema.optional(),
        _avg: InsurancePolicyAvgAggregateInputObjectSchema.optional(),
        _sum: InsurancePolicySumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: InsurancePolicyWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyOrderByWithRelationInputObjectSchema,
                InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InsurancePolicyScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), InsurancePolicyCountAggregateInputObjectSchema]).optional(),
    }),
} as InsurancePolicyInputSchemaType;
