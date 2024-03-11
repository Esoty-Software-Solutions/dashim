/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { TenantSelectObjectSchema } from '../objects/TenantSelect.schema';
import { TenantIncludeObjectSchema } from '../objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema } from '../objects/TenantWhereUniqueInput.schema';
import { TenantWhereInputObjectSchema } from '../objects/TenantWhereInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from '../objects/TenantOrderByWithRelationInput.schema';
import { TenantScalarFieldEnumSchema } from '../enums/TenantScalarFieldEnum.schema';
import { TenantCreateInputObjectSchema } from '../objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema } from '../objects/TenantUncheckedCreateInput.schema';
import { TenantCreateManyInputObjectSchema } from '../objects/TenantCreateManyInput.schema';
import { TenantUpdateInputObjectSchema } from '../objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema } from '../objects/TenantUncheckedUpdateInput.schema';
import { TenantUpdateManyMutationInputObjectSchema } from '../objects/TenantUpdateManyMutationInput.schema';
import { TenantUncheckedUpdateManyInputObjectSchema } from '../objects/TenantUncheckedUpdateManyInput.schema';
import { TenantCountAggregateInputObjectSchema } from '../objects/TenantCountAggregateInput.schema';
import { TenantMinAggregateInputObjectSchema } from '../objects/TenantMinAggregateInput.schema';
import { TenantMaxAggregateInputObjectSchema } from '../objects/TenantMaxAggregateInput.schema';
import { TenantOrderByWithAggregationInputObjectSchema } from '../objects/TenantOrderByWithAggregationInput.schema';
import { TenantScalarWhereWithAggregatesInputObjectSchema } from '../objects/TenantScalarWhereWithAggregatesInput.schema';

type TenantInputSchemaType = {
    findUnique: z.ZodType<Prisma.TenantFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.TenantFindFirstArgs>;
    findMany: z.ZodType<Prisma.TenantFindManyArgs>;
    create: z.ZodType<Prisma.TenantCreateArgs>;
    createMany: z.ZodType<Prisma.TenantCreateManyArgs>;
    delete: z.ZodType<Prisma.TenantDeleteArgs>;
    deleteMany: z.ZodType<Prisma.TenantDeleteManyArgs>;
    update: z.ZodType<Prisma.TenantUpdateArgs>;
    updateMany: z.ZodType<Prisma.TenantUpdateManyArgs>;
    upsert: z.ZodType<Prisma.TenantUpsertArgs>;
    aggregate: z.ZodType<Prisma.TenantAggregateArgs>;
    groupBy: z.ZodType<Prisma.TenantGroupByArgs>;
    count: z.ZodType<Prisma.TenantCountArgs>;
};

export const TenantInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        where: TenantWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        where: TenantWhereInputObjectSchema.optional(),
        orderBy: z
            .union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: TenantWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        where: TenantWhereInputObjectSchema.optional(),
        orderBy: z
            .union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: TenantWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        data: z.union([TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([TenantCreateManyInputObjectSchema, z.array(TenantCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        where: TenantWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: TenantWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        data: z.union([TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema]),
        where: TenantWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([TenantUpdateManyMutationInputObjectSchema, TenantUncheckedUpdateManyInputObjectSchema]),
        where: TenantWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => TenantSelectObjectSchema.optional()),
        include: z.lazy(() => TenantIncludeObjectSchema.optional()),
        where: TenantWhereUniqueInputObjectSchema,
        create: z.union([TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema]),
        update: z.union([TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: TenantWhereInputObjectSchema.optional(),
        orderBy: z
            .union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: TenantWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), TenantCountAggregateInputObjectSchema]).optional(),
        _min: TenantMinAggregateInputObjectSchema.optional(),
        _max: TenantMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: TenantWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantOrderByWithAggregationInputObjectSchema,
                TenantOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: TenantScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(TenantScalarFieldEnumSchema),
        _count: z.union([z.literal(true), TenantCountAggregateInputObjectSchema]).optional(),
        _min: TenantMinAggregateInputObjectSchema.optional(),
        _max: TenantMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: TenantWhereInputObjectSchema.optional(),
        orderBy: z
            .union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: TenantWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), TenantCountAggregateInputObjectSchema]).optional(),
    }),
} as TenantInputSchemaType;
