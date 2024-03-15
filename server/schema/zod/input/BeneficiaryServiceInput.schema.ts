/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BeneficiaryServiceSelectObjectSchema } from '../objects/BeneficiaryServiceSelect.schema';
import { BeneficiaryServiceIncludeObjectSchema } from '../objects/BeneficiaryServiceInclude.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from '../objects/BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceWhereInputObjectSchema } from '../objects/BeneficiaryServiceWhereInput.schema';
import { BeneficiaryServiceOrderByWithRelationInputObjectSchema } from '../objects/BeneficiaryServiceOrderByWithRelationInput.schema';
import { BeneficiaryServiceScalarFieldEnumSchema } from '../enums/BeneficiaryServiceScalarFieldEnum.schema';
import { BeneficiaryServiceCreateInputObjectSchema } from '../objects/BeneficiaryServiceCreateInput.schema';
import { BeneficiaryServiceUncheckedCreateInputObjectSchema } from '../objects/BeneficiaryServiceUncheckedCreateInput.schema';
import { BeneficiaryServiceCreateManyInputObjectSchema } from '../objects/BeneficiaryServiceCreateManyInput.schema';
import { BeneficiaryServiceUpdateInputObjectSchema } from '../objects/BeneficiaryServiceUpdateInput.schema';
import { BeneficiaryServiceUncheckedUpdateInputObjectSchema } from '../objects/BeneficiaryServiceUncheckedUpdateInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from '../objects/BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyInputObjectSchema } from '../objects/BeneficiaryServiceUncheckedUpdateManyInput.schema';
import { BeneficiaryServiceCountAggregateInputObjectSchema } from '../objects/BeneficiaryServiceCountAggregateInput.schema';
import { BeneficiaryServiceMinAggregateInputObjectSchema } from '../objects/BeneficiaryServiceMinAggregateInput.schema';
import { BeneficiaryServiceMaxAggregateInputObjectSchema } from '../objects/BeneficiaryServiceMaxAggregateInput.schema';
import { BeneficiaryServiceAvgAggregateInputObjectSchema } from '../objects/BeneficiaryServiceAvgAggregateInput.schema';
import { BeneficiaryServiceSumAggregateInputObjectSchema } from '../objects/BeneficiaryServiceSumAggregateInput.schema';
import { BeneficiaryServiceOrderByWithAggregationInputObjectSchema } from '../objects/BeneficiaryServiceOrderByWithAggregationInput.schema';
import { BeneficiaryServiceScalarWhereWithAggregatesInputObjectSchema } from '../objects/BeneficiaryServiceScalarWhereWithAggregatesInput.schema';

type BeneficiaryServiceInputSchemaType = {
    findUnique: z.ZodType<Prisma.BeneficiaryServiceFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BeneficiaryServiceFindFirstArgs>;
    findMany: z.ZodType<Prisma.BeneficiaryServiceFindManyArgs>;
    create: z.ZodType<Prisma.BeneficiaryServiceCreateArgs>;
    createMany: z.ZodType<Prisma.BeneficiaryServiceCreateManyArgs>;
    delete: z.ZodType<Prisma.BeneficiaryServiceDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BeneficiaryServiceDeleteManyArgs>;
    update: z.ZodType<Prisma.BeneficiaryServiceUpdateArgs>;
    updateMany: z.ZodType<Prisma.BeneficiaryServiceUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BeneficiaryServiceUpsertArgs>;
    aggregate: z.ZodType<Prisma.BeneficiaryServiceAggregateArgs>;
    groupBy: z.ZodType<Prisma.BeneficiaryServiceGroupByArgs>;
    count: z.ZodType<Prisma.BeneficiaryServiceCountArgs>;
};

export const BeneficiaryServiceInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        where: BeneficiaryServiceWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        where: BeneficiaryServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryServiceOrderByWithRelationInputObjectSchema,
                BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryServiceScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        where: BeneficiaryServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryServiceOrderByWithRelationInputObjectSchema,
                BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryServiceScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryServiceCreateInputObjectSchema, BeneficiaryServiceUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            BeneficiaryServiceCreateManyInputObjectSchema,
            z.array(BeneficiaryServiceCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        where: BeneficiaryServiceWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BeneficiaryServiceWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryServiceUpdateInputObjectSchema, BeneficiaryServiceUncheckedUpdateInputObjectSchema]),
        where: BeneficiaryServiceWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BeneficiaryServiceUpdateManyMutationInputObjectSchema,
            BeneficiaryServiceUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BeneficiaryServiceWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema.optional()),
        where: BeneficiaryServiceWhereUniqueInputObjectSchema,
        create: z.union([
            BeneficiaryServiceCreateInputObjectSchema,
            BeneficiaryServiceUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            BeneficiaryServiceUpdateInputObjectSchema,
            BeneficiaryServiceUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: BeneficiaryServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryServiceOrderByWithRelationInputObjectSchema,
                BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), BeneficiaryServiceCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryServiceMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryServiceMaxAggregateInputObjectSchema.optional(),
        _avg: BeneficiaryServiceAvgAggregateInputObjectSchema.optional(),
        _sum: BeneficiaryServiceSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BeneficiaryServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryServiceOrderByWithAggregationInputObjectSchema,
                BeneficiaryServiceOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BeneficiaryServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BeneficiaryServiceScalarFieldEnumSchema),
        _count: z.union([z.literal(true), BeneficiaryServiceCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryServiceMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryServiceMaxAggregateInputObjectSchema.optional(),
        _avg: BeneficiaryServiceAvgAggregateInputObjectSchema.optional(),
        _sum: BeneficiaryServiceSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BeneficiaryServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryServiceOrderByWithRelationInputObjectSchema,
                BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryServiceScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), BeneficiaryServiceCountAggregateInputObjectSchema]).optional(),
    }),
} as BeneficiaryServiceInputSchemaType;
