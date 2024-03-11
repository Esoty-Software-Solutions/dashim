/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { GenderEnumSelectObjectSchema } from '../objects/GenderEnumSelect.schema';
import { GenderEnumIncludeObjectSchema } from '../objects/GenderEnumInclude.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from '../objects/GenderEnumWhereUniqueInput.schema';
import { GenderEnumWhereInputObjectSchema } from '../objects/GenderEnumWhereInput.schema';
import { GenderEnumOrderByWithRelationInputObjectSchema } from '../objects/GenderEnumOrderByWithRelationInput.schema';
import { GenderEnumScalarFieldEnumSchema } from '../enums/GenderEnumScalarFieldEnum.schema';
import { GenderEnumCreateInputObjectSchema } from '../objects/GenderEnumCreateInput.schema';
import { GenderEnumUncheckedCreateInputObjectSchema } from '../objects/GenderEnumUncheckedCreateInput.schema';
import { GenderEnumCreateManyInputObjectSchema } from '../objects/GenderEnumCreateManyInput.schema';
import { GenderEnumUpdateInputObjectSchema } from '../objects/GenderEnumUpdateInput.schema';
import { GenderEnumUncheckedUpdateInputObjectSchema } from '../objects/GenderEnumUncheckedUpdateInput.schema';
import { GenderEnumUpdateManyMutationInputObjectSchema } from '../objects/GenderEnumUpdateManyMutationInput.schema';
import { GenderEnumUncheckedUpdateManyInputObjectSchema } from '../objects/GenderEnumUncheckedUpdateManyInput.schema';
import { GenderEnumCountAggregateInputObjectSchema } from '../objects/GenderEnumCountAggregateInput.schema';
import { GenderEnumMinAggregateInputObjectSchema } from '../objects/GenderEnumMinAggregateInput.schema';
import { GenderEnumMaxAggregateInputObjectSchema } from '../objects/GenderEnumMaxAggregateInput.schema';
import { GenderEnumOrderByWithAggregationInputObjectSchema } from '../objects/GenderEnumOrderByWithAggregationInput.schema';
import { GenderEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/GenderEnumScalarWhereWithAggregatesInput.schema';

type GenderEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.GenderEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.GenderEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.GenderEnumFindManyArgs>;
    create: z.ZodType<Prisma.GenderEnumCreateArgs>;
    createMany: z.ZodType<Prisma.GenderEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.GenderEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.GenderEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.GenderEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.GenderEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.GenderEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.GenderEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.GenderEnumGroupByArgs>;
    count: z.ZodType<Prisma.GenderEnumCountArgs>;
};

export const GenderEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        where: GenderEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        where: GenderEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GenderEnumOrderByWithRelationInputObjectSchema,
                GenderEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(GenderEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        where: GenderEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GenderEnumOrderByWithRelationInputObjectSchema,
                GenderEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(GenderEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        data: z.union([GenderEnumCreateInputObjectSchema, GenderEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([GenderEnumCreateManyInputObjectSchema, z.array(GenderEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        where: GenderEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: GenderEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        data: z.union([GenderEnumUpdateInputObjectSchema, GenderEnumUncheckedUpdateInputObjectSchema]),
        where: GenderEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([GenderEnumUpdateManyMutationInputObjectSchema, GenderEnumUncheckedUpdateManyInputObjectSchema]),
        where: GenderEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => GenderEnumSelectObjectSchema.optional()),
        include: z.lazy(() => GenderEnumIncludeObjectSchema.optional()),
        where: GenderEnumWhereUniqueInputObjectSchema,
        create: z.union([GenderEnumCreateInputObjectSchema, GenderEnumUncheckedCreateInputObjectSchema]),
        update: z.union([GenderEnumUpdateInputObjectSchema, GenderEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: GenderEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GenderEnumOrderByWithRelationInputObjectSchema,
                GenderEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), GenderEnumCountAggregateInputObjectSchema]).optional(),
        _min: GenderEnumMinAggregateInputObjectSchema.optional(),
        _max: GenderEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: GenderEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GenderEnumOrderByWithAggregationInputObjectSchema,
                GenderEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: GenderEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(GenderEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), GenderEnumCountAggregateInputObjectSchema]).optional(),
        _min: GenderEnumMinAggregateInputObjectSchema.optional(),
        _max: GenderEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: GenderEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                GenderEnumOrderByWithRelationInputObjectSchema,
                GenderEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: GenderEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(GenderEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), GenderEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as GenderEnumInputSchemaType;
