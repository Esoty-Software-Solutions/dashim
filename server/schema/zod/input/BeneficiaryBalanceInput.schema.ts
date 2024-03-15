/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BeneficiaryBalanceSelectObjectSchema } from '../objects/BeneficiaryBalanceSelect.schema';
import { BeneficiaryBalanceIncludeObjectSchema } from '../objects/BeneficiaryBalanceInclude.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from '../objects/BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceWhereInputObjectSchema } from '../objects/BeneficiaryBalanceWhereInput.schema';
import { BeneficiaryBalanceOrderByWithRelationInputObjectSchema } from '../objects/BeneficiaryBalanceOrderByWithRelationInput.schema';
import { BeneficiaryBalanceScalarFieldEnumSchema } from '../enums/BeneficiaryBalanceScalarFieldEnum.schema';
import { BeneficiaryBalanceCreateInputObjectSchema } from '../objects/BeneficiaryBalanceCreateInput.schema';
import { BeneficiaryBalanceUncheckedCreateInputObjectSchema } from '../objects/BeneficiaryBalanceUncheckedCreateInput.schema';
import { BeneficiaryBalanceCreateManyInputObjectSchema } from '../objects/BeneficiaryBalanceCreateManyInput.schema';
import { BeneficiaryBalanceUpdateInputObjectSchema } from '../objects/BeneficiaryBalanceUpdateInput.schema';
import { BeneficiaryBalanceUncheckedUpdateInputObjectSchema } from '../objects/BeneficiaryBalanceUncheckedUpdateInput.schema';
import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from '../objects/BeneficiaryBalanceUpdateManyMutationInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyInputObjectSchema } from '../objects/BeneficiaryBalanceUncheckedUpdateManyInput.schema';
import { BeneficiaryBalanceCountAggregateInputObjectSchema } from '../objects/BeneficiaryBalanceCountAggregateInput.schema';
import { BeneficiaryBalanceMinAggregateInputObjectSchema } from '../objects/BeneficiaryBalanceMinAggregateInput.schema';
import { BeneficiaryBalanceMaxAggregateInputObjectSchema } from '../objects/BeneficiaryBalanceMaxAggregateInput.schema';
import { BeneficiaryBalanceAvgAggregateInputObjectSchema } from '../objects/BeneficiaryBalanceAvgAggregateInput.schema';
import { BeneficiaryBalanceSumAggregateInputObjectSchema } from '../objects/BeneficiaryBalanceSumAggregateInput.schema';
import { BeneficiaryBalanceOrderByWithAggregationInputObjectSchema } from '../objects/BeneficiaryBalanceOrderByWithAggregationInput.schema';
import { BeneficiaryBalanceScalarWhereWithAggregatesInputObjectSchema } from '../objects/BeneficiaryBalanceScalarWhereWithAggregatesInput.schema';

type BeneficiaryBalanceInputSchemaType = {
    findUnique: z.ZodType<Prisma.BeneficiaryBalanceFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BeneficiaryBalanceFindFirstArgs>;
    findMany: z.ZodType<Prisma.BeneficiaryBalanceFindManyArgs>;
    create: z.ZodType<Prisma.BeneficiaryBalanceCreateArgs>;
    createMany: z.ZodType<Prisma.BeneficiaryBalanceCreateManyArgs>;
    delete: z.ZodType<Prisma.BeneficiaryBalanceDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BeneficiaryBalanceDeleteManyArgs>;
    update: z.ZodType<Prisma.BeneficiaryBalanceUpdateArgs>;
    updateMany: z.ZodType<Prisma.BeneficiaryBalanceUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BeneficiaryBalanceUpsertArgs>;
    aggregate: z.ZodType<Prisma.BeneficiaryBalanceAggregateArgs>;
    groupBy: z.ZodType<Prisma.BeneficiaryBalanceGroupByArgs>;
    count: z.ZodType<Prisma.BeneficiaryBalanceCountArgs>;
};

export const BeneficiaryBalanceInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryBalanceScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryBalanceScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryBalanceCreateInputObjectSchema, BeneficiaryBalanceUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            BeneficiaryBalanceCreateManyInputObjectSchema,
            z.array(BeneficiaryBalanceCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BeneficiaryBalanceWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryBalanceUpdateInputObjectSchema, BeneficiaryBalanceUncheckedUpdateInputObjectSchema]),
        where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BeneficiaryBalanceUpdateManyMutationInputObjectSchema,
            BeneficiaryBalanceUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema.optional()),
        where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
        create: z.union([
            BeneficiaryBalanceCreateInputObjectSchema,
            BeneficiaryBalanceUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            BeneficiaryBalanceUpdateInputObjectSchema,
            BeneficiaryBalanceUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), BeneficiaryBalanceCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryBalanceMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryBalanceMaxAggregateInputObjectSchema.optional(),
        _avg: BeneficiaryBalanceAvgAggregateInputObjectSchema.optional(),
        _sum: BeneficiaryBalanceSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryBalanceOrderByWithAggregationInputObjectSchema,
                BeneficiaryBalanceOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BeneficiaryBalanceScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BeneficiaryBalanceScalarFieldEnumSchema),
        _count: z.union([z.literal(true), BeneficiaryBalanceCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryBalanceMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryBalanceMaxAggregateInputObjectSchema.optional(),
        _avg: BeneficiaryBalanceAvgAggregateInputObjectSchema.optional(),
        _sum: BeneficiaryBalanceSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
                BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryBalanceScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), BeneficiaryBalanceCountAggregateInputObjectSchema]).optional(),
    }),
} as BeneficiaryBalanceInputSchemaType;
