/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { CurrencyEnumSelectObjectSchema } from '../objects/CurrencyEnumSelect.schema';
import { CurrencyEnumWhereUniqueInputObjectSchema } from '../objects/CurrencyEnumWhereUniqueInput.schema';
import { CurrencyEnumWhereInputObjectSchema } from '../objects/CurrencyEnumWhereInput.schema';
import { CurrencyEnumOrderByWithRelationInputObjectSchema } from '../objects/CurrencyEnumOrderByWithRelationInput.schema';
import { CurrencyEnumScalarFieldEnumSchema } from '../enums/CurrencyEnumScalarFieldEnum.schema';
import { CurrencyEnumCreateInputObjectSchema } from '../objects/CurrencyEnumCreateInput.schema';
import { CurrencyEnumUncheckedCreateInputObjectSchema } from '../objects/CurrencyEnumUncheckedCreateInput.schema';
import { CurrencyEnumCreateManyInputObjectSchema } from '../objects/CurrencyEnumCreateManyInput.schema';
import { CurrencyEnumUpdateInputObjectSchema } from '../objects/CurrencyEnumUpdateInput.schema';
import { CurrencyEnumUncheckedUpdateInputObjectSchema } from '../objects/CurrencyEnumUncheckedUpdateInput.schema';
import { CurrencyEnumUpdateManyMutationInputObjectSchema } from '../objects/CurrencyEnumUpdateManyMutationInput.schema';
import { CurrencyEnumUncheckedUpdateManyInputObjectSchema } from '../objects/CurrencyEnumUncheckedUpdateManyInput.schema';
import { CurrencyEnumCountAggregateInputObjectSchema } from '../objects/CurrencyEnumCountAggregateInput.schema';
import { CurrencyEnumMinAggregateInputObjectSchema } from '../objects/CurrencyEnumMinAggregateInput.schema';
import { CurrencyEnumMaxAggregateInputObjectSchema } from '../objects/CurrencyEnumMaxAggregateInput.schema';
import { CurrencyEnumAvgAggregateInputObjectSchema } from '../objects/CurrencyEnumAvgAggregateInput.schema';
import { CurrencyEnumSumAggregateInputObjectSchema } from '../objects/CurrencyEnumSumAggregateInput.schema';
import { CurrencyEnumOrderByWithAggregationInputObjectSchema } from '../objects/CurrencyEnumOrderByWithAggregationInput.schema';
import { CurrencyEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/CurrencyEnumScalarWhereWithAggregatesInput.schema';

type CurrencyEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.CurrencyEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.CurrencyEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.CurrencyEnumFindManyArgs>;
    create: z.ZodType<Prisma.CurrencyEnumCreateArgs>;
    createMany: z.ZodType<Prisma.CurrencyEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.CurrencyEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.CurrencyEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.CurrencyEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.CurrencyEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.CurrencyEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.CurrencyEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.CurrencyEnumGroupByArgs>;
    count: z.ZodType<Prisma.CurrencyEnumCountArgs>;
};

export const CurrencyEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        where: CurrencyEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        where: CurrencyEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CurrencyEnumOrderByWithRelationInputObjectSchema,
                CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CurrencyEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        where: CurrencyEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CurrencyEnumOrderByWithRelationInputObjectSchema,
                CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CurrencyEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        data: z.union([CurrencyEnumCreateInputObjectSchema, CurrencyEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([CurrencyEnumCreateManyInputObjectSchema, z.array(CurrencyEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        where: CurrencyEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: CurrencyEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        data: z.union([CurrencyEnumUpdateInputObjectSchema, CurrencyEnumUncheckedUpdateInputObjectSchema]),
        where: CurrencyEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            CurrencyEnumUpdateManyMutationInputObjectSchema,
            CurrencyEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: CurrencyEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => CurrencyEnumSelectObjectSchema.optional()),
        where: CurrencyEnumWhereUniqueInputObjectSchema,
        create: z.union([CurrencyEnumCreateInputObjectSchema, CurrencyEnumUncheckedCreateInputObjectSchema]),
        update: z.union([CurrencyEnumUpdateInputObjectSchema, CurrencyEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: CurrencyEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CurrencyEnumOrderByWithRelationInputObjectSchema,
                CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), CurrencyEnumCountAggregateInputObjectSchema]).optional(),
        _min: CurrencyEnumMinAggregateInputObjectSchema.optional(),
        _max: CurrencyEnumMaxAggregateInputObjectSchema.optional(),
        _avg: CurrencyEnumAvgAggregateInputObjectSchema.optional(),
        _sum: CurrencyEnumSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: CurrencyEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CurrencyEnumOrderByWithAggregationInputObjectSchema,
                CurrencyEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: CurrencyEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(CurrencyEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), CurrencyEnumCountAggregateInputObjectSchema]).optional(),
        _min: CurrencyEnumMinAggregateInputObjectSchema.optional(),
        _max: CurrencyEnumMaxAggregateInputObjectSchema.optional(),
        _avg: CurrencyEnumAvgAggregateInputObjectSchema.optional(),
        _sum: CurrencyEnumSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: CurrencyEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CurrencyEnumOrderByWithRelationInputObjectSchema,
                CurrencyEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CurrencyEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CurrencyEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), CurrencyEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as CurrencyEnumInputSchemaType;
