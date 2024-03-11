/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BenefitPackageSelectObjectSchema } from '../objects/BenefitPackageSelect.schema';
import { BenefitPackageIncludeObjectSchema } from '../objects/BenefitPackageInclude.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from '../objects/BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageWhereInputObjectSchema } from '../objects/BenefitPackageWhereInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from '../objects/BenefitPackageOrderByWithRelationInput.schema';
import { BenefitPackageScalarFieldEnumSchema } from '../enums/BenefitPackageScalarFieldEnum.schema';
import { BenefitPackageCreateInputObjectSchema } from '../objects/BenefitPackageCreateInput.schema';
import { BenefitPackageUncheckedCreateInputObjectSchema } from '../objects/BenefitPackageUncheckedCreateInput.schema';
import { BenefitPackageCreateManyInputObjectSchema } from '../objects/BenefitPackageCreateManyInput.schema';
import { BenefitPackageUpdateInputObjectSchema } from '../objects/BenefitPackageUpdateInput.schema';
import { BenefitPackageUncheckedUpdateInputObjectSchema } from '../objects/BenefitPackageUncheckedUpdateInput.schema';
import { BenefitPackageUpdateManyMutationInputObjectSchema } from '../objects/BenefitPackageUpdateManyMutationInput.schema';
import { BenefitPackageUncheckedUpdateManyInputObjectSchema } from '../objects/BenefitPackageUncheckedUpdateManyInput.schema';
import { BenefitPackageCountAggregateInputObjectSchema } from '../objects/BenefitPackageCountAggregateInput.schema';
import { BenefitPackageMinAggregateInputObjectSchema } from '../objects/BenefitPackageMinAggregateInput.schema';
import { BenefitPackageMaxAggregateInputObjectSchema } from '../objects/BenefitPackageMaxAggregateInput.schema';
import { BenefitPackageAvgAggregateInputObjectSchema } from '../objects/BenefitPackageAvgAggregateInput.schema';
import { BenefitPackageSumAggregateInputObjectSchema } from '../objects/BenefitPackageSumAggregateInput.schema';
import { BenefitPackageOrderByWithAggregationInputObjectSchema } from '../objects/BenefitPackageOrderByWithAggregationInput.schema';
import { BenefitPackageScalarWhereWithAggregatesInputObjectSchema } from '../objects/BenefitPackageScalarWhereWithAggregatesInput.schema';

type BenefitPackageInputSchemaType = {
    findUnique: z.ZodType<Prisma.BenefitPackageFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BenefitPackageFindFirstArgs>;
    findMany: z.ZodType<Prisma.BenefitPackageFindManyArgs>;
    create: z.ZodType<Prisma.BenefitPackageCreateArgs>;
    createMany: z.ZodType<Prisma.BenefitPackageCreateManyArgs>;
    delete: z.ZodType<Prisma.BenefitPackageDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BenefitPackageDeleteManyArgs>;
    update: z.ZodType<Prisma.BenefitPackageUpdateArgs>;
    updateMany: z.ZodType<Prisma.BenefitPackageUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BenefitPackageUpsertArgs>;
    aggregate: z.ZodType<Prisma.BenefitPackageAggregateArgs>;
    groupBy: z.ZodType<Prisma.BenefitPackageGroupByArgs>;
    count: z.ZodType<Prisma.BenefitPackageCountArgs>;
};

export const BenefitPackageInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        where: BenefitPackageWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        where: BenefitPackageWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageOrderByWithRelationInputObjectSchema,
                BenefitPackageOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BenefitPackageScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        where: BenefitPackageWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageOrderByWithRelationInputObjectSchema,
                BenefitPackageOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BenefitPackageScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        data: z.union([BenefitPackageCreateInputObjectSchema, BenefitPackageUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([BenefitPackageCreateManyInputObjectSchema, z.array(BenefitPackageCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        where: BenefitPackageWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BenefitPackageWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        data: z.union([BenefitPackageUpdateInputObjectSchema, BenefitPackageUncheckedUpdateInputObjectSchema]),
        where: BenefitPackageWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BenefitPackageUpdateManyMutationInputObjectSchema,
            BenefitPackageUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BenefitPackageWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema.optional()),
        where: BenefitPackageWhereUniqueInputObjectSchema,
        create: z.union([BenefitPackageCreateInputObjectSchema, BenefitPackageUncheckedCreateInputObjectSchema]),
        update: z.union([BenefitPackageUpdateInputObjectSchema, BenefitPackageUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: BenefitPackageWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageOrderByWithRelationInputObjectSchema,
                BenefitPackageOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), BenefitPackageCountAggregateInputObjectSchema]).optional(),
        _min: BenefitPackageMinAggregateInputObjectSchema.optional(),
        _max: BenefitPackageMaxAggregateInputObjectSchema.optional(),
        _avg: BenefitPackageAvgAggregateInputObjectSchema.optional(),
        _sum: BenefitPackageSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BenefitPackageWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageOrderByWithAggregationInputObjectSchema,
                BenefitPackageOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BenefitPackageScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BenefitPackageScalarFieldEnumSchema),
        _count: z.union([z.literal(true), BenefitPackageCountAggregateInputObjectSchema]).optional(),
        _min: BenefitPackageMinAggregateInputObjectSchema.optional(),
        _max: BenefitPackageMaxAggregateInputObjectSchema.optional(),
        _avg: BenefitPackageAvgAggregateInputObjectSchema.optional(),
        _sum: BenefitPackageSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BenefitPackageWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageOrderByWithRelationInputObjectSchema,
                BenefitPackageOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BenefitPackageScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), BenefitPackageCountAggregateInputObjectSchema]).optional(),
    }),
} as BenefitPackageInputSchemaType;
